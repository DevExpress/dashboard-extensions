(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("devextreme/ui/button")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/model", "devexpress-dashboard/designer", "devexpress-dashboard/common", "devextreme/ui/button" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/designer"), require("devexpress-dashboard/common"), require("devextreme/ui/button")) : factory(root["DevExpress"]["Dashboard"]["Model"], root["DevExpress"]["Dashboard"]["Designer"], root["DevExpress"]["Dashboard"], root["DevExpress"]["ui"]["dxButton"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__20__) {
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
        return __webpack_require__(__webpack_require__.s = 18);
    }([ function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__1__;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__2__;
    }, , , , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var model_1 = __webpack_require__(0);
        var designer_1 = __webpack_require__(1);
        var onOffButtons = [ {
            text: "On"
        }, {
            text: "Off"
        } ];
        exports.PARAMETER_ITEM_EXTENSION_NAME = "ParameterItem";
        exports.parameterItemMeta = {
            customProperties: [ {
                ownerType: model_1.CustomItem,
                propertyName: "showHeaders",
                valueType: "string",
                defaultValue: "On"
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "showParameterName",
                valueType: "string",
                defaultValue: "On"
            }, {
                ownerType: model_1.CustomItem,
                propertyName: "automaticUpdates",
                valueType: "string",
                defaultValue: "Off"
            } ],
            optionsPanelSections: [ {
                title: "Parameters settings",
                items: [ {
                    dataField: "showHeaders",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: onOffButtons
                    }
                }, {
                    dataField: "showParameterName",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: onOffButtons
                    }
                }, {
                    dataField: "automaticUpdates",
                    template: designer_1.FormItemTemplates.buttonGroup,
                    editorOptions: {
                        items: onOffButtons
                    }
                } ]
            } ],
            icon: exports.PARAMETER_ITEM_EXTENSION_NAME,
            title: "Parameters"
        };
    }, , , , , , , , , , , , function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(6);
        var viewer_1 = __webpack_require__(19);
        var icon_1 = __webpack_require__(21);
        var ParameterItemExtension = function() {
            function ParameterItemExtension(dashboardControl) {
                var _this = this;
                this.dashboardControl = dashboardControl;
                this.name = meta_1.PARAMETER_ITEM_EXTENSION_NAME;
                this.metaData = meta_1.parameterItemMeta;
                this.createViewerItem = function(model, element, content) {
                    var parametersExtension = _this.dashboardControl.findExtension("dashboard-parameter-dialog");
                    if (!parametersExtension) {
                        throw Error('The "dashboard-parameter-dialog" extension does not exist. To register this extension, use the DashboardControl.registerExtension method.');
                    }
                    return new viewer_1.ParameterItemViewer(model, element, content, parametersExtension);
                };
                dashboardControl.registerIcon(icon_1.PARAMETER_ITEM_ICON);
            }
            ParameterItemExtension.prototype.start = function() {};
            return ParameterItemExtension;
        }();
        exports.ParameterItemExtension = ParameterItemExtension;
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
        var button_1 = __webpack_require__(20);
        var buttonsStyle = {
            containerHeight: 60,
            height: 40,
            width: 82,
            marginRight: 15,
            marginTop: 10
        };
        var common_1 = __webpack_require__(2);
        var ParameterItemViewer = function(_super) {
            __extends(ParameterItemViewer, _super);
            function ParameterItemViewer(model, container, options, parametersExtension) {
                var _this = _super.call(this, model, container, options) || this;
                _this.buttons = [];
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
            ParameterItemViewer.prototype.dispose = function() {
                _super.prototype.dispose.call(this);
                this.parametersContent && this.parametersContent.dispose && this.parametersContent.dispose();
                this.dialogButtonSubscribe.dispose();
                this.parametersExtension.showDialogButton(true);
                this.buttons.forEach(function(button) {
                    return button.dispose();
                });
            };
            ParameterItemViewer.prototype.renderContent = function(dxElement, changeExisting, afterRenderCallback) {
                var _this = this;
                var element = dxElement.jquery ? dxElement.get(0) : dxElement;
                if (!changeExisting) {
                    element.innerHTML = "";
                    this.buttons.forEach(function(button) {
                        return button.dispose();
                    });
                    element.style.overflow = "auto";
                    this.gridContainer = document.createElement("div");
                    element.appendChild(this.gridContainer);
                    this._generateParametersContent();
                    this.buttonContainer = document.createElement("div");
                    this.buttonContainer.style.height = buttonsStyle.containerHeight + "px", this.buttonContainer.style.width = buttonsStyle.width * 2 + buttonsStyle.marginRight * 2 + "px", 
                    this.buttonContainer.style.cssFloat = "right";
                    element.appendChild(this.buttonContainer);
                    this.buttons.push(this._createButton(this.buttonContainer, "Reset", function() {
                        _this.parametersContent.resetParameterValues();
                    }));
                    this.buttons.push(this._createButton(this.buttonContainer, "Submit", function() {
                        _this._submitValues();
                    }));
                    if (this.getPropertyValue("automaticUpdates") != "Off") this.buttonContainer.style.display = "none";
                }
            };
            ParameterItemViewer.prototype._generateParametersContent = function() {
                var _this = this;
                this.parametersContent = this.parametersExtension.renderContent(this.gridContainer);
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
            ParameterItemViewer.prototype._createButton = function(container, buttonText, onClick) {
                var button = document.createElement("div");
                button.style.marginRight = buttonsStyle.marginRight + "px";
                button.style.marginTop = buttonsStyle.marginTop + "px";
                container.appendChild(button);
                return new (button_1["default"] || window.DevExpress.ui.dxButton)(button, {
                    text: buttonText,
                    height: buttonsStyle.height + "px",
                    width: buttonsStyle.width + "px",
                    onClick: onClick
                });
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
                        this.buttonContainer.style.display = "block";
                    } else {
                        this.buttonContainer.style.display = "none";
                    }
                }
                this._setGridHeight();
            };
            return ParameterItemViewer;
        }(common_1.CustomItemViewer);
        exports.ParameterItemViewer = ParameterItemViewer;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE__20__;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = true;
        var meta_1 = __webpack_require__(6);
        exports.PARAMETER_ITEM_ICON = '<svg id="' + meta_1.parameterItemMeta.icon + '" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="11" fill="#39A866" /></svg>';
    } ]);
});