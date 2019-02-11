var editorTemplates = require('devexpress-dashboard/model/index.metadata').editorTemplates;
var CustomItemViewer= require('devexpress-dashboard/common').CustomItemViewer
var $ = require('jquery');
// Metadata definition.
var customItemSimpleTableMeta = {
    // A collection of custom data bindings that are available in the Web Dashboard UI.
    bindings: [{
        // A unique name of the data binding.
        propertyName: 'customDimensions',

        // A type of the data item(-s).
        dataItemType: 'Dimension',

        // Specifies whether this binding is a collection or a single value.
        array: true,

        // A caption of the data binding.
        displayName: "Custom Dimensions"
    }, {
        propertyName: 'customMeasure',
        dataItemType: 'Measure',
        displayName: "Custom Measure"
    }],

    // A collection of custom properties that are available in the Web Dashboard UI.
    properties: [{
        // A unique name of the data binding.
        propertyName: 'showHeaders',

        // A type of editor used in the custom property.
        editor: editorTemplates.buttonGroup,

        // A caption of the custom property.
        displayName: "Show Headers",

		// A name of the custom section in the Options menu.
        sectionName: "Custom Options",

        // Custom property values.
        values: {
            Auto: "Auto",
            Off: "Off",
            On: "On"
        },

        // A default value of the custom property.
        defaultVal: 'Auto'
    }],

    // The icon's ID used in the SVG definition.
    icon: 'CustomItemSimpleTable',

    // A custom item title.
    title: "Simple Table"
};
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
// The viewer definition.
var customItemSimpleTable = (function(_super) {
    __extends(customItemSimpleTable, _super);
    function customItemSimpleTable(model, $container, options) {
        _super.call(this, model, $container, options);
        var _this = this;
        this.$table = undefined;

        // Allows you to react on and subscribe to custom property changes.
        this.subscribe('showHeaders', function(mode) { _this._update(mode); });
    }
    customItemSimpleTable.prototype.renderContent = function($element, changeExisting, afterRenderCallback) {
        // The changeExisting flag indicates whether to update a custom item content or 
        // render it from scratch when any changes exist (true to update content; otherwise, false).
        if (!changeExisting) {
            $element.empty();
            $element.css('overflow', 'auto');
            this.$table = $('<table/>', { cellpadding: 0, cellspacing: 0, border: 1 });
            $element.append(this.$table);
        }
        this._update(this.getPropertyValue('showHeaders'));
    };

    // Renders a custom item content.
    customItemSimpleTable.prototype._update = function(mode) {
        var _this = this;
        this.$table.empty();
        if(mode != 'Off') {
            var bindingValues = this.getBindingValue('customDimensions').concat(this.getBindingValue('customMeasure'));
            this._addTableRow(bindingValues.map(function(item) { return item.displayName(); }), true);
        }

        // Iterates data rows for a custom item. Use the getValue and getDisplayText properties to get a value or a display name of the data row, respectively.
        this.iterateData(function(rowDataObject) {
            var valueTexts = rowDataObject.getDisplayText('customDimensions').concat(rowDataObject.getDisplayText('customMeasure'));
            _this._addTableRow(valueTexts, false);
        });
    };
    customItemSimpleTable.prototype._addTableRow = function(texts, isHeader) {
        var tag = isHeader ? 'th' : 'td';
        var cells = texts.map(function(text) {
            return '<' + tag + ' style="padding: 3px;">' + text + '</' + tag + '>';
        });
        this.$table.append($('<tr/>').html(cells.join('')));
    };
    return customItemSimpleTable;
}(CustomItemViewer));

// An icon SVG definition.
var CUSTOM_ITEM_SIMPLE_TABLE_ICON = '<svg id="' + customItemSimpleTableMeta.icon + '" viewBox="0 0 24 24"><path fill="#39A866" d="M12 2 L2 22 L22 22 Z" /></svg>';

// An extension implementation.
function SimpleTableItemExtension(_designer) {
    this.name = 'CustomItemSimpleTable';
    this.metaData = customItemSimpleTableMeta;
    this.createViewerItem = function(model, $element, content) {
        return new customItemSimpleTable(model, $element, content);
    };
    if(!!_designer) {
        _designer.registerIcon(CUSTOM_ITEM_SIMPLE_TABLE_ICON);
    }
}

module.exports = { SimpleTableItemExtension };