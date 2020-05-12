(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("jquery"), require("d3-funnel")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/model", "devexpress-dashboard/designer", "devexpress-dashboard/common", "jquery", "d3-funnel" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("jquery"), require("d3-funnel")) : factory(root["DevExpress"]["Dashboard"]["Model"], root["DevExpress"]["Dashboard"]["Designer"], root["DevExpress"]["Dashboard"], root["$"], root["D3Funnel"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__17__) {
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
        return __webpack_require__(__webpack_require__.s = 14);
    }([ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
    }, , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var model_1 = __webpack_require__(0);
        var designer_1 = __webpack_require__(1);
        exports.FUNNEL_D3_EXTENSION_NAME = "FunnelD3";
        exports.funnelMeta = {
            bindings: [ {
                propertyName: "Values",
                dataItemType: "Measure",
                array: true,
                enableColoring: true,
                displayName: "Values",
                emptyPlaceholder: "Set Value",
                selectedPlaceholder: "Configure Value"
            }, {
                propertyName: "Arguments",
                dataItemType: "Dimension",
                array: true,
                enableInteractivity: true,
                enableColoring: true,
                displayName: "Arguments",
                emptyPlaceholder: "Set Argument",
                selectedPlaceholder: "Configure Argument"
            } ],
            customProperties: [ {
                ownerType: model_1.CustomItem,
                propertyName: "FillType",
                valueType: "string",
                defaultValue: "Solid"
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "IsCurved",
                valueType: "boolean",
                defaultValue: false
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "IsDynamicHeight",
                valueType: "boolean",
                defaultValue: true
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "PinchCount",
                valueType: "number",
                defaultValue: 0
            } ],
            optionsPanelSections: [ {
                title: "Settings",
                items: [ {
                    dataField: "FillType",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: [ {
                            text: "Solid"
                        }, {
                            text: "Gradient"
                        } ]
                    }
                }, {
                    dataField: "IsCurved",
                    label: {
                        text: "Curved"
                    },
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        keyExpr: "value",
                        items: [ {
                            value: false,
                            text: "No"
                        }, {
                            value: true,
                            text: "Yes"
                        } ]
                    }
                }, {
                    dataField: "IsDynamicHeight",
                    label: {
                        text: "Dynamic Height"
                    },
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        keyExpr: "value",
                        items: [ {
                            value: false,
                            text: "No"
                        }, {
                            value: true,
                            text: "Yes"
                        } ]
                    }
                }, {
                    dataField: "PinchCount",
                    editorType: "dxNumberBox",
                    editorOptions: {
                        min: 0
                    }
                } ]
            } ],
            interactivity: {
                filter: true,
                drillDown: true
            },
            icon: exports.FUNNEL_D3_EXTENSION_NAME,
            title: "Funnel D3",
            index: 3
        };
    }, , , , , , , , , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var icon_1 = __webpack_require__(15);
        var funnel_d3_viewer_1 = __webpack_require__(16);
        var meta_1 = __webpack_require__(5);
        var FunnelD3ItemExtension = function() {
            function FunnelD3ItemExtension(dashboardControl) {
                this.name = meta_1.FUNNEL_D3_EXTENSION_NAME;
                this.metaData = meta_1.funnelMeta;
                dashboardControl.registerIcon(icon_1.FUNNEL_D3_ICON);
            }
            FunnelD3ItemExtension.prototype.createViewerItem = function(model, element, content) {
                return new funnel_d3_viewer_1.FunnelD3Item(model, element, content);
            };
            return FunnelD3ItemExtension;
        }();
        exports.FunnelD3ItemExtension = FunnelD3ItemExtension;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(5);
        exports.FUNNEL_D3_ICON = '<?xml version="1.0" encoding="utf-8"?>\x3c!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="' + meta_1.funnelMeta.icon + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><polygon class="dx_green" points="2,1 22,1 16,8 8,8 "/><polygon class="dx_blue" points="8,9 16,9 14,15 10,15 "/><polygon class="dx_red" points="10,16 14,16 13,23 11,23 "/></svg>';
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
        var D3Funnel = __webpack_require__(17);
        var $ = __webpack_require__(3);
        var FunnelD3Item = function(_super) {
            __extends(FunnelD3Item, _super);
            function FunnelD3Item(model, container, options) {
                var _this = _super.call(this, model, container, options) || this;
                _this.funnelSettings = undefined;
                _this.funnelViewer = null;
                _this.selectionValues = [];
                _this.exportingImage = new Image();
                _this._subscribeProperties();
                return _this;
            }
            FunnelD3Item.prototype.renderContent = function(element, changeExisting) {
                var htmlElement = element instanceof $ ? element.get(0) : element;
                var data = this._getDataSource();
                if (!this._ensureFunnelLibrary(htmlElement)) return;
                if (!!data) {
                    if (!changeExisting || !this.funnelViewer) {
                        this.funnelContainer && this.funnelContainer.parentNode.removeChild(this.funnelContainer);
                        htmlElement.innerHTML = "";
                        this.funnelContainer = document.createElement("div");
                        this.funnelContainer.style.margin = "20px";
                        this.funnelContainer.style.height = "calc(100% - 40px)";
                        htmlElement.appendChild(this.funnelContainer);
                        this.funnelViewer = new D3Funnel(this.funnelContainer);
                    }
                    this._update(data, this._getFunnelSizeOptions());
                } else {
                    htmlElement.innerHTML = "";
                    this.funnelViewer = null;
                }
            };
            FunnelD3Item.prototype.setSize = function(width, height) {
                _super.prototype.setSize.call(this, width, height);
                this._update(null, this._getFunnelSizeOptions());
            };
            FunnelD3Item.prototype.setSelection = function(values) {
                _super.prototype.setSelection.call(this, values);
                this._update(this._getDataSource());
            };
            FunnelD3Item.prototype.clearSelection = function() {
                _super.prototype.clearSelection.call(this);
                this._update(this._getDataSource());
            };
            FunnelD3Item.prototype.allowExportSingleItem = function() {
                return !this._isIEBrowser();
            };
            FunnelD3Item.prototype.getExportInfo = function() {
                if (this._isIEBrowser()) return;
                return {
                    image: this._getImageBase64()
                };
            };
            FunnelD3Item.prototype._getFunnelSizeOptions = function() {
                return {
                    chart: {
                        width: this.funnelContainer.clientWidth,
                        height: this.funnelContainer.clientHeight
                    }
                };
            };
            FunnelD3Item.prototype._getDataSource = function() {
                var _this = this;
                var bindingValues = this.getBindingValue("Values");
                if (bindingValues.length == 0) return undefined;
                var data = [];
                this.iterateData(function(dataRow) {
                    var values = dataRow.getValue("Values");
                    var valueStr = dataRow.getDisplayText("Values");
                    var color = dataRow.getColor("Values");
                    if (_this._hasArguments()) {
                        var labelText = dataRow.getDisplayText("Arguments").join(" - ") + ": " + valueStr;
                        data.push([ {
                            data: dataRow,
                            text: labelText,
                            color: color[0]
                        } ].concat(values));
                    } else {
                        data = values.map(function(value, index) {
                            return [ {
                                text: bindingValues[index].displayName() + ": " + valueStr[index],
                                color: color[index]
                            }, value ];
                        });
                    }
                });
                return data.length > 0 ? data : undefined;
            };
            FunnelD3Item.prototype._ensureFunnelLibrary = function(htmlElement) {
                if (!D3Funnel) {
                    htmlElement.innerHTML = "";
                    var textDiv = document.createElement("div");
                    textDiv.style.position = "absolute";
                    textDiv.style.top = "50%";
                    textDiv.style.transform = "translateY(-50%)";
                    textDiv.style.width = "95%";
                    textDiv.style.color = "#CF0F2E";
                    textDiv.style.textAlign = "center";
                    textDiv.innerText = "'D3Funnel' cannot be displayed. You should include 'd3.v3.min.js' and 'd3-funnel.js' libraries.";
                    htmlElement.appendChild(textDiv);
                    return false;
                }
                return true;
            };
            FunnelD3Item.prototype._ensureFunnelSettings = function() {
                var _this = this;
                var getSelectionColor = function(hexColor) {
                    return _this.funnelViewer.colorizer.shade(hexColor, -.5);
                };
                if (!this.funnelSettings) {
                    this.funnelSettings = {
                        data: undefined,
                        options: {
                            chart: {
                                bottomPinch: this.getPropertyValue("PinchCount"),
                                curve: {
                                    enabled: this.getPropertyValue("IsCurved")
                                }
                            },
                            block: {
                                dynamicHeight: this.getPropertyValue("IsDynamicHeight"),
                                fill: {
                                    scale: function(index) {
                                        var obj = _this.funnelSettings.data[index][0];
                                        return obj.data && _this.isSelected(obj.data) ? getSelectionColor(obj.color) : obj.color;
                                    },
                                    type: this.getPropertyValue("FillType").toLowerCase()
                                }
                            },
                            label: {
                                format: function(label, value) {
                                    return label.text;
                                }
                            },
                            events: {
                                click: {
                                    block: function(e) {
                                        return _this._onClick(e);
                                    }
                                }
                            }
                        }
                    };
                }
                this.funnelSettings.options.block.highlight = this.canDrillDown() || this.canMasterFilter();
                return this.funnelSettings;
            };
            FunnelD3Item.prototype._onClick = function(e) {
                if (!this._hasArguments() || !e.label) return;
                var row = e.label.raw.data;
                if (this.canDrillDown(row)) this.drillDown(row); else if (this.canMasterFilter(row)) {
                    this.setMasterFilter(row);
                    this._update();
                }
            };
            FunnelD3Item.prototype._subscribeProperties = function() {
                var _this = this;
                this.subscribe("IsCurved", function(isCurved) {
                    return _this._update(null, {
                        chart: {
                            curve: {
                                enabled: isCurved
                            }
                        }
                    });
                });
                this.subscribe("IsDynamicHeight", function(isDynamicHeight) {
                    return _this._update(null, {
                        block: {
                            dynamicHeight: isDynamicHeight
                        }
                    });
                });
                this.subscribe("PinchCount", function(count) {
                    return _this._update(null, {
                        chart: {
                            bottomPinch: count
                        }
                    });
                });
                this.subscribe("FillType", function(type) {
                    return _this._update(null, {
                        block: {
                            fill: {
                                type: type.toLowerCase()
                            }
                        }
                    });
                });
            };
            FunnelD3Item.prototype._update = function(data, options) {
                this._ensureFunnelSettings();
                if (!!data) {
                    this.funnelSettings.data = data;
                }
                if (!!options) {
                    $.extend(true, this.funnelSettings.options, options);
                }
                if (!!this.funnelViewer) {
                    this.funnelViewer.draw(this.funnelSettings.data, this.funnelSettings.options);
                    this._updateExportingImage();
                }
            };
            FunnelD3Item.prototype._updateExportingImage = function() {
                var svg = this.funnelContainer.firstElementChild, str = new XMLSerializer().serializeToString(svg), encodedData = "data:image/svg+xml;base64," + window.btoa(window["unescape"](encodeURIComponent(str)));
                this.exportingImage.src = encodedData;
            };
            FunnelD3Item.prototype._hasArguments = function() {
                return this.getBindingValue("Arguments").length > 0;
            };
            FunnelD3Item.prototype._getImageBase64 = function() {
                var canvas = document.createElement("canvas");
                canvas.width = this.funnelContainer.clientWidth;
                canvas.height = this.funnelContainer.clientHeight;
                canvas.getContext("2d").drawImage(this.exportingImage, 0, 0);
                return canvas.toDataURL().replace("data:image/png;base64,", "");
            };
            FunnelD3Item.prototype._isIEBrowser = function() {
                return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0;
            };
            return FunnelD3Item;
        }(common_1.CustomItemViewer);
        exports.FunnelD3Item = FunnelD3Item;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__17__;
    } ]);
});