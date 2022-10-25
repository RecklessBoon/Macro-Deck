﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Windows.Forms;
using SuchByte.MacroDeck.GUI.CustomControls;
using SuchByte.MacroDeck.GUI.Dialogs;
using SuchByte.MacroDeck.GUI.MainWindowViews;
using SuchByte.MacroDeck.Icons;
using SuchByte.MacroDeck.Language;
using SuchByte.MacroDeck.Model;
using SuchByte.MacroDeck.Notifications;
using SuchByte.MacroDeck.Plugins;
using SuchByte.MacroDeck.Properties;

namespace SuchByte.MacroDeck.ExtensionStore
{
    public class ExtensionStoreHelper
    {
        public static event EventHandler OnUpdateCheckFinished;

        private static ExtensionStoreDownloader extensionStoreDownloader;

        public static event EventHandler OnInstallationFinished;

        private static string _updateNotification;

        private static bool _updateCheckRunning;

        public static void InstallPluginById(string packageId)
        {
            InstallPackages(new List<ExtensionStoreDownloaderPackageInfoModel> { new() { PackageId = packageId, ExtensionType = ExtensionType.Plugin } });
        }

        public static void InstallIconPackById(string packageId)
        {
            InstallPackages(new List<ExtensionStoreDownloaderPackageInfoModel> { new() { PackageId = packageId, ExtensionType = ExtensionType.IconPack } });
        }

        internal static void InstallById(string packageId)
        {
            InstallPackages(new List<ExtensionStoreDownloaderPackageInfoModel> { new() { PackageId = packageId } });
        }

        public static void InstallPackages(List<ExtensionStoreDownloaderPackageInfoModel> packages)
        {
            if (MacroDeck.MainWindow == null) return;
            MacroDeck.MainWindow.Invoke(() =>
            {
                extensionStoreDownloader = new ExtensionStoreDownloader(packages)
                {
                    Owner = MacroDeck.MainWindow,
                };
                extensionStoreDownloader.ShowDialog();
                OnInstallationFinished?.Invoke(null, EventArgs.Empty);
            });
        }

        public static string GetPackageId(MacroDeckPlugin macroDeckPlugin)
        {
            return new DirectoryInfo(PluginManager.PluginDirectories[macroDeckPlugin]).Name;
        }

        public static void SearchUpdatesAsync()
        {
            if (_updateCheckRunning) return;
            _updateCheckRunning = true;
            PluginManager.PluginsUpdateAvailable.Clear();
            IconManager.IconPacksUpdateAvailable.Clear();
            Task.Run(() =>
            {
                foreach (var plugin in PluginManager.Plugins.Values)
                {
                    PluginManager.SearchUpdate(plugin);
                }
                foreach (var plugin in PluginManager.PluginsNotLoaded.Values)
                {
                    PluginManager.SearchUpdate(plugin);
                }
                foreach (var iconPack in IconManager.IconPacks.FindAll(iP => iP.ExtensionStoreManaged && !iP.Hidden))
                {
                    IconManager.SearchUpdate(iconPack);
                }

                if (NotificationManager.GetNotification(_updateNotification) == null && (PluginManager.PluginsUpdateAvailable.Count + IconManager.IconPacksUpdateAvailable.Count) > 0)
                {
                    var btnOpenExtensionManager = new ButtonPrimary
                    {
                        AutoSize = true,
                        Text = LanguageManager.Strings.OpenExtensionManager
                    };
                    btnOpenExtensionManager.Click += (sender, e) =>
                    {
                        MacroDeck.MainWindow?.SetView(new ExtensionsView());
                    };
                    var btnUpdateAll = new ButtonPrimary
                    {
                        AutoSize = true,
                        Text = LanguageManager.Strings.UpdateAll,
                    };
                    btnUpdateAll.Click += (sender, e) =>
                    {
                        NotificationManager.RemoveNotification(_updateNotification);
                        UpdateAllPackages();
                    };
                    _updateNotification = NotificationManager.SystemNotification("Extension Store", LanguageManager.Strings.UpdatesAvailable, true, icon: Resources.Macro_Deck_2021_update, controls: new List<Control> { btnOpenExtensionManager, btnUpdateAll });
                }

                _updateCheckRunning = false;

                OnUpdateCheckFinished?.Invoke(null, EventArgs.Empty);
            });
        }

        public static void UpdateAllPackages()
        {
            var packages = new List<ExtensionStoreDownloaderPackageInfoModel>();
            foreach (var updatePlugin in PluginManager.PluginsUpdateAvailable)
            {
                if (PluginManager.UpdatedPlugins.Contains(updatePlugin)) continue;
                packages.Add(new ExtensionStoreDownloaderPackageInfoModel
                {
                    ExtensionType = ExtensionType.Plugin,
                    PackageId = GetPackageId(updatePlugin)
                });
            }
            foreach (var updateIconPack in IconManager.IconPacksUpdateAvailable)
            {
                packages.Add(new ExtensionStoreDownloaderPackageInfoModel
                {
                    ExtensionType = ExtensionType.IconPack,
                    PackageId = updateIconPack.PackageId,
                });
            }
            InstallPackages(packages);
        }

        public static string InstalledIconPacksAsString
        {
            get
            {
                var installedPlugins = "";
                foreach (var iconPack in IconManager.IconPacks.FindAll(x => x.ExtensionStoreManaged))
                {
                    installedPlugins += $"{iconPack.PackageId.ToLower()}%20";
                }

                return installedPlugins;
            }
        }

        public static string InstalledPluginsAsString
        {
            get
            {
                var installedPlugins = "";
                foreach (var path in PluginManager.PluginDirectories.Values)
                {
                    installedPlugins += $"{new DirectoryInfo(path).Name.ToLower()}%20";
                }

                return installedPlugins;
            }
        }
    }

    public enum ExtensionType
    {
        Plugin,
        IconPack,
    }
}
