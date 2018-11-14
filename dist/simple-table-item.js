(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else {
        var a = factory();
        for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
    }
})(window, function() {
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
        return __webpack_require__(__webpack_require__.s = 28);
    }({
        28: function(module, exports) {
            var customItemSimpleTableMeta = {
                bindings: [ {
                    propertyName: "customDimensions",
                    dataItemType: "Dimension",
                    array: true,
                    displayName: "Custom Dimensions"
                }, {
                    propertyName: "customMeasure",
                    dataItemType: "Measure",
                    displayName: "Custom Measure"
                } ],
                properties: [ {
                    propertyName: "showHeaders",
                    editor: DevExpress.Dashboard.Metadata.editorTemplates.buttonGroup,
                    displayName: "Show Headers",
                    sectionName: "Custom Options",
                    values: {
                        Auto: "Auto",
                        Off: "Off",
                        On: "On"
                    },
                    defaultVal: "Auto"
                } ],
                icon: "CustomItemSimpleTable",
                title: "Simple Table"
            };
            var customItemSimpleTable = function(_super) {
                __extends(customItemSimpleTable, _super);
                function customItemSimpleTable(model, $container, options) {
                    _super.call(this, model, $container, options);
                    var _this = this;
                    this.$table = undefined;
                    this.subscribe("showHeaders", function(mode) {
                        _this._update(mode);
                    });
                }
                customItemSimpleTable.prototype.renderContent = function($element, changeExisting, afterRenderCallback) {
                    if (!changeExisting) {
                        $element.empty();
                        $element.css("overflow", "auto");
                        this.$table = $("<table/>", {
                            cellpadding: 0,
                            cellspacing: 0,
                            border: 1
                        });
                        $element.append(this.$table);
                    }
                    this._update(this.getPropertyValue("showHeaders"));
                };
                customItemSimpleTable.prototype._update = function(mode) {
                    var _this = this;
                    this.$table.empty();
                    if (mode != "Off") {
                        var bindingValues = this.getBindingValue("customDimensions").concat(this.getBindingValue("customMeasure"));
                        this._addTableRow(bindingValues.map(function(item) {
                            return item.displayName();
                        }), true);
                    }
                    this.iterateData(function(rowDataObject) {
                        var valueTexts = rowDataObject.getDisplayText("customDimensions").concat(rowDataObject.getDisplayText("customMeasure"));
                        _this._addTableRow(valueTexts, false);
                    });
                };
                customItemSimpleTable.prototype._addTableRow = function(texts, isHeader) {
                    var tag = isHeader ? "th" : "td";
                    var cells = texts.map(function(text) {
                        return "<" + tag + ' style="padding: 3px;">' + text + "</" + tag + ">";
                    });
                    this.$table.append($("<tr/>").html(cells.join("")));
                };
                return customItemSimpleTable;
            }(DevExpress.Dashboard.customViewerItem);
            var CUSTOM_ITEM_SIMPLE_TABLE_ICON = '<svg id="' + customItemSimpleTableMeta.icon + '" viewBox="0 0 24 24"><path fill="#39A866" d="M12 2 L2 22 L22 22 Z" /></svg>';
            function CustomItemSimpleTableExtension(_designer) {
                this.name = "CustomItemSimpleTable";
                this.metaData = customItemSimpleTableMeta;
                this.createViewerItem = function(model, $element, content) {
                    return new customItemSimpleTable(model, $element, content);
                };
                if (!!_designer) {
                    _designer.registerIcon(CUSTOM_ITEM_SIMPLE_TABLE_ICON);
                }
            }
            module.exports = {
                CustomItemSimpleTableExtension: CustomItemSimpleTableExtension
            };
        }
    });
});