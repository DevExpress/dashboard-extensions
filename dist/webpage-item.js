(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/common"), require("jquery")); else if (typeof define === "function" && define.amd) define([ "devexpress-dashboard/model", "devexpress-dashboard/common", "jquery" ], factory); else {
        var a = typeof exports === "object" ? factory(require("devexpress-dashboard/model"), require("devexpress-dashboard/common"), require("jquery")) : factory(root["DevExpress"]["Dashboard"]["Model"], root["DevExpress"]["Dashboard"], root["$"]);
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__) {
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
        return __webpack_require__(__webpack_require__.s = 22);
    }({
        0: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__0__;
        },
        2: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__2__;
        },
        22: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(7);
            var icon_1 = __webpack_require__(23);
            var webpage_viewer_1 = __webpack_require__(24);
            var WebPageItemExtension = function() {
                function WebPageItemExtension(dashboardControl) {
                    this.name = meta_1.WEBPAGE_EXTENSION_NAME;
                    this.metaData = meta_1.webPageMeta;
                    this.createViewerItem = function(model, element, content) {
                        return new webpage_viewer_1.WebPageItem(model, element, content);
                    };
                    dashboardControl.registerIcon(icon_1.WEBPAGE_ICON);
                }
                return WebPageItemExtension;
            }();
            exports.WebPageItemExtension = WebPageItemExtension;
        },
        23: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var meta_1 = __webpack_require__(7);
            exports.WEBPAGE_ICON = '<?xml version="1.0" encoding="utf-8"?>\n\x3c!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg version="1.1" id="' + meta_1.webPageMeta.icon + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\tviewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">\n<path class="dx_darkgray" d="M20,23H4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h12.6c0.3,0,0.5,0.1,0.7,0.3l3.4,3.4\nC20.9,4.9,21,5.1,21,5.4V22C21,22.6,20.6,23,20,23z"/>\n<path class="dx_white" d="M19,21H5V3h11v2c0,0.6,0.4,1,1,1h2V21z"/>\n<path class="dx_blue" d="M13.7,17.5c-0.2-0.4-1.6-1.8-1.4-2.2s0.2-1.1-0.1-1.3c-0.3-0.1-0.7,0.1-0.7-0.2c-0.1-0.3-1.1-0.2-1.2-1.6\nc-0.1-1.5-0.6-2-1.2-2s-1.6,0.6-1.5,0c0-0.1,0-0.2,0-0.3C6.6,10.9,6,12.4,6,14c0,3.3,2.7,6,6,6c0.6,0,1.1-0.1,1.6-0.2\nC13.7,19.1,13.9,17.8,13.7,17.5z"/>\n<path class="dx_blue" d="M12,8c-1.1,0-2.2,0.3-3.1,0.9c0,0,0.1,0,0.1,0c1,0.2,3.1,0.7,3.1,0.3c0-0.4-0.1-0.9,0.1-0.8\nc0.2,0.2,0.8,0.7,0.6,1c-0.2,0.3-0.8,0.6-0.6,0.9c0.2,0.2,0.8,0.6,1,0.4s-0.1-0.9,0.2-0.8c0.3,0,1.8,0.8,1.3,1.1\nc-0.5,0.3-1.4,1.9-1.9,2c-0.5,0.1-0.9,0.2-0.8,0.6c0.2,0.5,0.5,0.2,0.7,0.3c0.1,0.1,0.1,0.4,0.3,0.6s0.4,0.1,0.7,0.1\nc0.3-0.1,2.5,0.9,2.3,1.4c-0.2,0.5-0.2,1.2-1,2.1c-0.5,0.5-0.7,1.1-0.9,1.5c2.3-0.8,4-3,4-5.6C18,10.7,15.3,8,12,8z"/>\n</svg>';
        },
        24: function(module, exports, __webpack_require__) {
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
            var $ = __webpack_require__(3);
            var WebPageItem = function(_super) {
                __extends(WebPageItem, _super);
                function WebPageItem(model, container, options) {
                    var _this = _super.call(this, model, container, options) || this;
                    _this._iframe = undefined;
                    return _this;
                }
                WebPageItem.prototype.renderContent = function(element, changeExisting, afterRenderCallback) {
                    var attribute;
                    var $element = $(element);
                    if (!changeExisting || !this._iframe) {
                        this._iframe = $("<iframe>", {
                            attr: {
                                width: "100%",
                                height: "100%"
                            },
                            style: "border: none;"
                        });
                        $element.append(this._iframe);
                    }
                    this.iterateData(function(row) {
                        if (!attribute) {
                            attribute = row.getDisplayText("Attribute")[0];
                        }
                    });
                    this._iframe.attr("src", this.getPropertyValue("Url").replace("{0}", attribute));
                };
                return WebPageItem;
            }(common_1.CustomItemViewer);
            exports.WebPageItem = WebPageItem;
        },
        3: function(module, exports) {
            module.exports = __WEBPACK_EXTERNAL_MODULE__3__;
        },
        7: function(module, exports, __webpack_require__) {
            "use strict";
            exports.__esModule = true;
            var model_1 = __webpack_require__(0);
            exports.WEBPAGE_EXTENSION_NAME = "WebPage";
            exports.webPageMeta = {
                bindings: [ {
                    propertyName: "Attribute",
                    dataItemType: "Dimension",
                    array: false,
                    displayName: "Attribute",
                    emptyPlaceholder: "Set Attribute",
                    selectedPlaceholder: "Configure Attribute"
                } ],
                customProperties: [ {
                    ownerType: model_1.CustomItem,
                    propertyName: "Url",
                    valueType: "string",
                    defaultValue: "https://en.wikipedia.org/wiki/{0}"
                } ],
                optionsPanelSections: [ {
                    title: "Custom Options",
                    items: [ {
                        dataField: "Url",
                        editorType: "dxTextBox"
                    } ]
                } ],
                icon: exports.WEBPAGE_EXTENSION_NAME,
                title: "Web Page",
                index: 2
            };
        }
    });
});