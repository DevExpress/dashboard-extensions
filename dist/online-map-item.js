(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("devextreme/ui/map")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/model", "devexpress-dashboard/designer", "devexpress-dashboard/common", "devextreme/ui/map" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("devextreme/ui/map")) : factory(root["DevExpress"]["Dashboard"]["Model"], root["DevExpress"]["Dashboard"]["Designer"], root["DevExpress"]["Dashboard"], root["DevExpress"]["ui"]["dxMap"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__10__) {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.r = function(exports) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 8);
    }([ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var model_1 = __webpack_require__(0);
        var designer_1 = __webpack_require__(1);
        exports.ONLINE_MAP_EXTENSION_NAME = "OnlineMap";
        exports.onlineMapMeta = {
            bindings: [ {
                propertyName: "Latitude",
                dataItemType: "Dimension",
                array: false,
                enableInteractivity: true,
                displayName: "Latitude",
                emptyPlaceholder: "Set Latitude",
                selectedPlaceholder: "Configure Latitude",
                constraints: {
                    allowedTypes: [ "Integer", "Float", "Double", "Decimal" ]
                }
            }, {
                propertyName: "Longitude",
                dataItemType: "Dimension",
                array: false,
                enableInteractivity: true,
                displayName: "Longitude",
                emptyPlaceholder: "Set Longitude",
                selectedPlaceholder: "Configure Longitude",
                constraints: {
                    allowedTypes: [ "Integer", "Float", "Double", "Decimal" ]
                }
            } ],
            customProperties: [ {
                ownerType: model_1.CustomItem,
                propertyName: "Provider",
                valueType: "string",
                defaultValue: "Bing"
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "Type",
                valueType: "string",
                defaultValue: "RoadMap"
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "DisplayMode",
                valueType: "string",
                defaultValue: "Markers"
            } ],
            optionsPanelSections: [ {
                title: "Custom Options",
                items: [ {
                    dataField: "Provider",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: [ {
                            text: "Google"
                        }, {
                            text: "Bing"
                        } ]
                    }
                }, {
                    dataField: "Type",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: [ {
                            text: "RoadMap"
                        }, {
                            text: "Satellite"
                        }, {
                            text: "Hybrid"
                        } ]
                    }
                }, {
                    dataField: "DisplayMode",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        keyExpr: "value",
                        items: [ {
                            value: "Markers",
                            text: "Markers"
                        }, {
                            value: "Routes",
                            text: "Routes"
                        }, {
                            value: "MarkersAndRoutes",
                            text: "All"
                        } ]
                    }
                } ]
            } ],
            interactivity: {
                filter: true,
                drillDown: false
            },
            icon: exports.ONLINE_MAP_EXTENSION_NAME,
            title: "Online Map",
            index: 1
        };
    }, , , , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(4);
        var online_map_viewer_1 = __webpack_require__(9);
        var icon_1 = __webpack_require__(11);
        var OnlineMapItemExtension = function() {
            function OnlineMapItemExtension(dashboardControl) {
                this.name = meta_1.ONLINE_MAP_EXTENSION_NAME;
                this.metaData = meta_1.onlineMapMeta;
                dashboardControl.registerIcon(icon_1.ONLINE_MAP_ICON);
            }
            OnlineMapItemExtension.prototype.createViewerItem = function(model, element, content) {
                return new online_map_viewer_1.OnlineMapItem(model, element, content);
            };
            return OnlineMapItemExtension;
        }();
        exports.OnlineMapItemExtension = OnlineMapItemExtension;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __extends = this && this.__extends || function() {
            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            return function(d, b) {
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
        }();
        exports.__esModule = true;
        var common_1 = __webpack_require__(2);
        var map_1 = __webpack_require__(10);
        var OnlineMapItem = function(_super) {
            __extends(OnlineMapItem, _super);
            function OnlineMapItem(model, container, options) {
                var _this = _super.call(this, model, container, options) || this;
                _this.mapViewer = null;
                return _this;
            }
            OnlineMapItem.prototype.setSize = function(width, height) {
                _super.prototype.setSize.call(this, width, height);
                var contentWidth = this.contentWidth(), contentHeight = this.contentHeight();
                this.mapViewer.option("width", contentWidth);
                this.mapViewer.option("height", contentHeight);
            };
            OnlineMapItem.prototype.setSelection = function(values) {
                _super.prototype.setSelection.call(this, values);
                this._updateSelection();
            };
            OnlineMapItem.prototype.clearSelection = function() {
                _super.prototype.clearSelection.call(this);
                this._updateSelection();
            };
            OnlineMapItem.prototype.renderContent = function(element, changeExisting, afterRenderCallback) {
                var _this = this;
                var markers = [], routes = [], mode = this.getPropertyValue("DisplayMode"), showMarkers = mode === "Markers" || mode === "MarkersAndRoutes" || this.canMasterFilter(), showRoutes = mode === "Routes" || mode === "MarkersAndRoutes";
                if (this.getBindingValue("Latitude").length > 0 && this.getBindingValue("Longitude").length > 0) {
                    this.iterateData(function(row) {
                        var latitude = row.getValue("Latitude")[0];
                        var longitude = row.getValue("Longitude")[0];
                        if (latitude && longitude) {
                            if (showMarkers) {
                                markers.push({
                                    location: {
                                        lat: latitude,
                                        lng: longitude
                                    },
                                    iconSrc: _this.isSelected(row) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null,
                                    onClick: function(args) {
                                        _this._onClick(row);
                                    },
                                    tag: row
                                });
                            }
                            if (showRoutes) {
                                routes.push([ latitude, longitude ]);
                            }
                        }
                    });
                }
                var autoAdjust = markers.length > 1 || routes.length > 1, options = {
                    provider: this.getPropertyValue("Provider").toLowerCase(),
                    type: this.getPropertyValue("Type").toLowerCase(),
                    controls: true,
                    zoom: autoAdjust ? 1e3 : 1,
                    autoAdjust: autoAdjust,
                    width: this.contentWidth(),
                    height: this.contentHeight(),
                    markers: markers,
                    routes: routes.length > 0 ? [ {
                        weight: 6,
                        color: "blue",
                        opacity: .5,
                        mode: "",
                        locations: routes
                    } ] : []
                };
                if (changeExisting && this.mapViewer) {
                    this.mapViewer.option(options);
                } else {
                    this.mapViewer = new (map_1["default"] || window.DevExpress.ui.dxMap)(element, options);
                }
            };
            OnlineMapItem.prototype._onClick = function(row) {
                this.setMasterFilter(row);
                this._updateSelection();
            };
            OnlineMapItem.prototype._updateSelection = function() {
                var _this = this;
                var markers = this.mapViewer.option("markers");
                markers.forEach(function(marker) {
                    marker.iconSrc = _this.isSelected(marker.tag) ? "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png" : null;
                });
                this.mapViewer.option("autoAdjust", false);
                this.mapViewer.option("markers", markers);
            };
            return OnlineMapItem;
        }(common_1.CustomItemViewer);
        exports.OnlineMapItem = OnlineMapItem;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__10__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(4);
        exports.ONLINE_MAP_ICON = '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="' + meta_1.onlineMapMeta.icon + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n<path class="dx_darkgray" d="M12,1C8.1,1,5,4.1,5,8c0,3.9,3,10,7,15c4-5,7-11.1,7-15C19,4.1,15.9,1,12,1z M12,12c-2.2,0-4-1.8-4-4\n\tc0-2.2,1.8-4,4-4s4,1.8,4,4C16,10.2,14.2,12,12,12z"/>\n<circle class="dx_red" cx="12" cy="8" r="2"/>\n</svg>';
    } ]);
});