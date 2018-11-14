(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/common", "devexpress-dashboard/model/index.metadata" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/common"), require("devexpress-dashboard/model/index.metadata")) : factory(root["DevExpress"]["Dashboard"], root["DevExpress"]["Dashboard"]["Metadata"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
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
        return __webpack_require__(__webpack_require__.s = 20);
    }({
        0: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
        },
        1: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
        },
        20: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(5);
            var viewer_1 = __webpack_require__(21);
            var icon_1 = __webpack_require__(22);
            var ParameterItemExtension = function() {
                function ParameterItemExtension(dashboardControl) {
                    var _this = this;
                    this.dashboardControl = dashboardControl;
                    this.name = meta_1.PARAMETER_ITEM_EXTENSION_NAME;
                    this.metaData = meta_1.parameterItemMeta;
                    this.createViewerItem = function(model, $element, content) {
                        var parametersExtension = _this.dashboardControl.findExtension("dashboard-parameter-dialog");
                        if (!parametersExtension) {
                            throw Error('The "dashboard-parameter-dialog" extension does not exist. To register this extension, use the DashboardControl.registerExtension method.');
                        }
                        return new viewer_1.ParameterItemViewer(model, $element, content, parametersExtension);
                    };
                    dashboardControl.registerIcon(icon_1.PARAMETER_ITEM_ICON);
                }
                ParameterItemExtension.prototype.start = function() {};
                return ParameterItemExtension;
            }();
            exports.ParameterItemExtension = ParameterItemExtension;
        },
        21: function(module, exports, __webpack_require__) {
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
            var buttonsStyle = {
                containerHeight: 60,
                height: 40,
                width: 82,
                marginRight: 15,
                marginTop: 10
            };
            var common_1 = __webpack_require__(0);
            var ParameterItemViewer = function(_super) {
                __extends(ParameterItemViewer, _super);
                function ParameterItemViewer(model, $container, options, parametersExtension) {
                    var _this = _super.call(this, model, $container, options) || this;
                    _this.parametersExtension = parametersExtension;
                    _this._subscribeProperties();
                    _this.parametersExtension.showDialogButton(false);
                    _this.parametersExtension.subscribeToContentChanges(function() {
                        _this._generateParametersContent();
                    });
                    _this.dialogButtonSubscribe = _this.parametersExtension.showDialogButton.subscribe(function() {
                        _this.parametersExtension.showDialogButton(false);
                    });
                    return _this;
                }
                ParameterItemViewer.prototype.setSize = function(width, height) {
                    _super.prototype.setSize.call(this, width, height);
                    this._setGridHeight();
                };
                ParameterItemViewer.prototype.renderContent = function($element, changeExisting, afterRenderCallback) {
                    var _this = this;
                    if (!changeExisting) {
                        $element.empty();
                        $element.css("overflow", "auto");
                        this.$gridContainer = $("<div />");
                        $element.append(this.$gridContainer);
                        this._generateParametersContent();
                        this.$buttonContainer = $("<div />", {
                            css: {
                                height: buttonsStyle.containerHeight + "px",
                                width: buttonsStyle.width * 2 + buttonsStyle.marginRight * 2 + "px",
                                float: "right"
                            }
                        });
                        $element.append(this.$buttonContainer);
                        var $resetButton = this._createButton("Reset", function() {
                            _this.parametersContent.resetParameterValues();
                        });
                        $resetButton.appendTo(this.$buttonContainer);
                        var $submitButton = this._createButton("Submit", function() {
                            _this._submitValues();
                        });
                        $submitButton.appendTo(this.$buttonContainer);
                        if (this.getPropertyValue("automaticUpdates") != "Off") this.$buttonContainer.hide();
                    }
                };
                ParameterItemViewer.prototype._generateParametersContent = function() {
                    var _this = this;
                    this.parametersContent = this.parametersExtension.renderContent(this.$gridContainer);
                    this.parametersContent.grid.option("onDisposing", function() {
                        _this.dialogButtonSubscribe.dispose();
                        _this.parametersExtension.showDialogButton(true);
                    });
                    this.parametersContent.valueChanged.add(function() {
                        return _this._updateParameterValues();
                    });
                    this._setGridHeight();
                    this._update({
                        showHeaders: this.getPropertyValue("showHeaders"),
                        showParameterName: this.getPropertyValue("showParameterName")
                    });
                };
                ParameterItemViewer.prototype._submitValues = function() {
                    this.parametersContent.submitParameterValues();
                    this._update({
                        showHeaders: this.getPropertyValue("showHeaders"),
                        showParameterName: this.getPropertyValue("showParameterName")
                    });
                };
                ParameterItemViewer.prototype._updateParameterValues = function() {
                    this.getPropertyValue("automaticUpdates") != "Off" ? this._submitValues() : null;
                };
                ParameterItemViewer.prototype._setGridHeight = function() {
                    var gridHeight = this.contentHeight();
                    if (this.getPropertyValue("automaticUpdates") === "Off") gridHeight -= buttonsStyle.containerHeight;
                    this.parametersContent.grid.option("height", gridHeight);
                };
                ParameterItemViewer.prototype._createButton = function(buttonText, onClick) {
                    var $button = $("<div />", {
                        css: {
                            "margin-right": buttonsStyle.marginRight + "px",
                            "margin-top": buttonsStyle.marginTop + "px"
                        }
                    }).dxButton({
                        text: buttonText,
                        height: buttonsStyle.height + "px",
                        width: buttonsStyle.width + "px",
                        onClick: onClick
                    });
                    return $button;
                };
                ParameterItemViewer.prototype._subscribeProperties = function() {
                    var _this = this;
                    this.subscribe("showHeaders", function(showHeaders) {
                        _this._update({
                            showHeaders: showHeaders
                        });
                    });
                    this.subscribe("showParameterName", function(showParameterName) {
                        _this._update({
                            showParameterName: showParameterName
                        });
                    });
                    this.subscribe("automaticUpdates", function(automaticUpdates) {
                        _this._update({
                            automaticUpdates: automaticUpdates
                        });
                    });
                };
                ParameterItemViewer.prototype._update = function(options) {
                    var _this = this;
                    if (!!options.showHeaders) {
                        this.parametersContent.grid.option("showColumnHeaders", options.showHeaders === "On");
                    }
                    if (!!options.showParameterName) {
                        this.parametersContent.valueChanged.empty();
                        this.parametersContent.grid.columnOption(0, "visible", options.showParameterName === "On");
                        this.parametersContent.valueChanged.add(function() {
                            return _this._updateParameterValues();
                        });
                    }
                    if (!!options.automaticUpdates) {
                        if (options.automaticUpdates == "Off") {
                            this.$buttonContainer.show();
                        } else {
                            this.$buttonContainer.hide();
                        }
                    }
                    this._setGridHeight();
                };
                return ParameterItemViewer;
            }(common_1.CustomItemViewer);
            exports.ParameterItemViewer = ParameterItemViewer;
        },
        22: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(5);
            exports.PARAMETER_ITEM_ICON = '<svg id="' + meta_1.parameterItemMeta.icon + '" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="11" fill="#39A866" /></svg>';
        },
        5: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var index_metadata_1 = __webpack_require__(1);
            exports.PARAMETER_ITEM_EXTENSION_NAME = "ParameterItem";
            exports.parameterItemMeta = {
                properties: [ {
                    propertyName: "showHeaders",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    displayName: "Show Headers",
                    values: {
                        Off: "Off",
                        On: "On"
                    },
                    defaultVal: "On"
                }, {
                    propertyName: "showParameterName",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    displayName: "Show Parameter Name",
                    values: {
                        Off: "Off",
                        On: "On"
                    },
                    defaultVal: "On"
                }, {
                    propertyName: "automaticUpdates",
                    editor: index_metadata_1.editorTemplates.buttonGroup,
                    displayName: "Automatic Updates",
                    values: {
                        Off: "Off",
                        On: "On"
                    },
                    defaultVal: "Off"
                } ],
                icon: exports.PARAMETER_ITEM_EXTENSION_NAME,
                title: "Parameters"
            };
        }
    });
});