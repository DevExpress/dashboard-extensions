(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/common"), require("jquery"), require("devextreme/viz/polar_chart")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/model", "devexpress-dashboard/common", "jquery", "devextreme/viz/polar_chart" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/common"), require("jquery"), require("devextreme/viz/polar_chart")) : factory(root["DevExpress"]["Dashboard"]["Model"], root["DevExpress"]["Dashboard"], root["$"], root["DevExpress"]["viz"]["dxPolarChart"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__30__) {
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
        return __webpack_require__(__webpack_require__.s = 27);
    }({
        0: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
        },
        1: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
        },
        27: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.PolarChartItemExtension = void 0;
            var icon_1 = __webpack_require__(28);
            var polar_chart_viewer_1 = __webpack_require__(29);
            var meta_1 = __webpack_require__(8);
            var PolarChartItemExtension = function() {
                function PolarChartItemExtension(dashboardControl) {
                    this.name = meta_1.POLAR_CHART_EXTENSION_NAME;
                    this.metaData = meta_1.polarMeta;
                    dashboardControl.registerIcon(icon_1.POLAR_CHART_ICON);
                }
                PolarChartItemExtension.prototype.createViewerItem = function(model, element, content) {
                    return new polar_chart_viewer_1.PolarChartItem(model, element, content);
                };
                return PolarChartItemExtension;
            }();
            exports.PolarChartItemExtension = PolarChartItemExtension;
        },
        28: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.POLAR_CHART_ICON = void 0;
            var meta_1 = __webpack_require__(8);
            exports.POLAR_CHART_ICON = '<?xml version="1.0" encoding="utf-8"?>\x3c!-- Generator: Adobe Illustrator 24.1.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<svg version="1.1" id="' + meta_1.polarMeta.icon + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><style type="text/css">.Black{fill:#414242;} .Blue{fill:#5B99D2;}</style><path class="Black" d="M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z M12,21c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S17,21,12,21z"/><path class="Blue" d="M17,10c-0.6,0-1.1,0.2-1.5,0.4L13.8,9C13.9,8.7,14,8.4,14,8c0-1.7-1.3-3-3-3S8,6.3,8,8c0,1,0.5,2,1.3,2.5L8.7,13C7.2,13.2,6,14.4,6,16c0,1.7,1.3,3,3,3s3-1.3,3-3c0,0,0,0,0-0.1l2.7-1c0.6,0.7,1.4,1.1,2.3,1.1c1.7,0,3-1.3,3-3S18.7,10,17,10z M9,17c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S9.6,17,9,17z M10,8c0-0.6,0.4-1,1-1s1,0.4,1,1s-0.4,1-1,1S10,8.6,10,8zM14,13.1l-2.7,1c-0.2-0.2-0.4-0.4-0.6-0.6l0.6-2.5c0.4,0,0.9-0.2,1.2-0.4l1.7,1.4C14.1,12.3,14,12.6,14,13.1C14,13,14,13,14,13.1zM17,14c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S17.6,14,17,14z"/></svg>';
        },
        29: function(module, exports, __webpack_require__) {
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
            exports.PolarChartItem = void 0;
            var common_1 = __webpack_require__(1);
            var $ = __webpack_require__(3);
            var polar_chart_1 = __webpack_require__(30);
            var PolarChartItem = function(_super) {
                __extends(PolarChartItem, _super);
                function PolarChartItem(model, container, options) {
                    var _this = _super.call(this, model, container, options) || this;
                    _this.dxPolarWidget = null;
                    _this.dxPolarWidgetSettings = null;
                    return _this;
                }
                PolarChartItem.prototype._getDataSource = function() {
                    var data = [];
                    if (this.getBindingValue("measureValue").length > 0) {
                        this.iterateData(function(dataRow) {
                            var dataItem = {
                                arg: dataRow.getValue("dimensionValue")[0] || "",
                                color: dataRow.getColor()[0],
                                clientDataRow: dataRow
                            };
                            var measureValues = dataRow.getValue("measureValue");
                            for (var i = 0; i < measureValues.length; i++) {
                                dataItem["measureValue" + i] = measureValues[i];
                            }
                            data.push(dataItem);
                        });
                    }
                    return data;
                };
                PolarChartItem.prototype._getDxPolarWidgetSettings = function() {
                    var _this = this;
                    var series = [];
                    var dataSource = this._getDataSource();
                    var measureValueBindings = this.getBindingValue("measureValue");
                    for (var i = 0; i < measureValueBindings.length; i++) {
                        series.push({
                            valueField: "measureValue" + i,
                            name: measureValueBindings[i].displayName()
                        });
                    }
                    return {
                        dataSource: dataSource,
                        series: series,
                        useSpiderWeb: true,
                        resolveLabelOverlapping: "hide",
                        pointSelectionMode: "multiple",
                        commonSeriesSettings: {
                            type: "line",
                            label: {
                                visible: this.getPropertyValue("labelVisibleProperty")
                            }
                        },
                        export: {
                            enabled: false
                        },
                        tooltip: {
                            enabled: false
                        },
                        onPointClick: function(e) {
                            var point = e.target;
                            _this.setMasterFilter(point.data.clientDataRow);
                        }
                    };
                };
                PolarChartItem.prototype.renderContent = function(element, changeExisting) {
                    var htmlElement = element instanceof $ ? element.get(0) : element;
                    if (!changeExisting) {
                        while (htmlElement.firstChild) htmlElement.removeChild(htmlElement.firstChild);
                        this.dxPolarWidget = new (polar_chart_1["default"] || window.DevExpress.viz.dxPolarChart)(htmlElement, this._getDxPolarWidgetSettings());
                    } else {
                        this.dxPolarWidget.option(this._getDxPolarWidgetSettings());
                    }
                    this.updateSelection();
                };
                PolarChartItem.prototype.setSelection = function(values) {
                    _super.prototype.setSelection.call(this, values);
                    this.updateSelection();
                };
                PolarChartItem.prototype.updateSelection = function() {
                    var series = this.dxPolarWidget.getAllSeries();
                    for (var i = 0; i < series.length; i++) {
                        var points = series[i].getAllPoints();
                        for (var j = 0; j < points.length; j++) {
                            if (this.isSelected(points[j].data.clientDataRow)) points[j].select(); else points[j].clearSelection();
                        }
                    }
                };
                PolarChartItem.prototype.clearSelection = function() {
                    _super.prototype.clearSelection.call(this);
                    this.dxPolarWidget.clearSelection();
                };
                PolarChartItem.prototype.setSize = function(width, height) {
                    _super.prototype.setSize.call(this, width, height);
                    this.dxPolarWidget.render();
                };
                return PolarChartItem;
            }(common_1.CustomItemViewer);
            exports.PolarChartItem = PolarChartItem;
        },
        3: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
        },
        30: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__30__;
        },
        8: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            exports.polarMeta = exports.POLAR_CHART_EXTENSION_NAME = void 0;
            var model_1 = __webpack_require__(0);
            exports.POLAR_CHART_EXTENSION_NAME = "PolarChart";
            exports.polarMeta = {
                bindings: [ {
                    propertyName: "measureValue",
                    dataItemType: "Measure",
                    displayName: "Value",
                    array: true,
                    emptyPlaceholder: "Set Value",
                    selectedPlaceholder: "Configure Value"
                }, {
                    propertyName: "dimensionValue",
                    dataItemType: "Dimension",
                    displayName: "Argument",
                    array: false,
                    enableColoring: true,
                    enableInteractivity: true,
                    emptyPlaceholder: "Set Argument",
                    selectedPlaceholder: "Configure Argument"
                } ],
                interactivity: {
                    filter: true
                },
                customProperties: [ {
                    ownerType: model_1.CustomItem,
                    propertyName: "labelVisibleProperty",
                    valueType: "boolean",
                    defaultValue: true
                } ],
                optionsPanelSections: [ {
                    title: "Labels",
                    items: [ {
                        dataField: "labelVisibleProperty",
                        label: {
                            text: "Display labels"
                        }
                    } ]
                } ],
                icon: exports.POLAR_CHART_EXTENSION_NAME,
                title: "Polar Chart",
                index: 2
            };
        }
    });
});