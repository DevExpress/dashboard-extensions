// Third party libraries: 
// "d3js" component from https://d3js.org/ [Copyright(c) 2017 Mike Bostock]
// "d3-funnel" component from https://jakezatecky.github.io/d3-funnel/ [Copyright(c) 2017 Jake Zatecky]


import { CustomItemViewer } from 'devexpress-dashboard/common'
import * as D3Funnel from 'd3-funnel';
import * as $ from 'jquery';

export class FunnelD3Item extends CustomItemViewer {
    funnelSettings;
    funnelViewer;
    selectionValues: Array<any>
    exportingImage: HTMLImageElement;
    $funnelContainer: JQuery;

    constructor(model, $container, options) {
        super(model, $container, options);

        this.funnelSettings = undefined;
        this.funnelViewer = null;
        this.selectionValues = [];
        this.exportingImage = new Image();
        this._subscribeProperties();
    }

    renderContent($element, changeExisting) {
        var data = this._getDataSource();
        if(!this._ensureFunnelLibrary($element))
            return;
        if(!!data) {
            if(!changeExisting || !this.funnelViewer) {
                this.$funnelContainer && this.$funnelContainer.remove();
                $element.empty();

                this.$funnelContainer = $('<div/>', { 
                    style: 'margin:20px;height:calc(100% - 40px);'
                });

                $element.append(this.$funnelContainer);
                this.funnelViewer = new D3Funnel(this.$funnelContainer[0]);
            }
            this._update(data, this._getFunnelSizeOptions());
        } else {
            $element.empty();
            this.funnelViewer = null;
        }
    };
    setSize (width, height) {
        super.setSize(width, height);
        this._update(null, this._getFunnelSizeOptions());
    };
    setSelection(values: Array<Array<any>>) {
        super.setSelection(values);
        this._update(this._getDataSource());
    };
    clearSelection() {
        super.clearSelection();
        this._update(this._getDataSource());
    };
    allowExportSingleItem() {
        return !this._isIEBrowser();
    };
    getExportInfo () {
        if (this._isIEBrowser())
            return;
        return {
            image: this._getImageBase64()
        };
    };
    _getFunnelSizeOptions () {

        return { chart: { width: this.$funnelContainer.innerWidth(),  height:this.$funnelContainer.innerHeight() } };
    };
    _getDataSource() {
        var bindingValues = this.getBindingValue('Values');
        if(bindingValues.length == 0)
            return undefined;
        var data = [];
        this.iterateData((dataRow) => {
            var values = dataRow.getValue('Values');
            var valueStr = dataRow.getDisplayText('Values');
            var color = dataRow.getColor('Values');
            if(this._hasArguments()) {
                var labelText = dataRow.getDisplayText('Arguments').join(' - ') + ': ' + valueStr; 
                data.push([{ data: dataRow, text: labelText, color: color[0] }].concat(values));//0 - 'layer' index for color value
            } else {
                data = values.map((value, index) => { return [{ text: bindingValues[index].displayName() + ': ' + valueStr[index], color: color[index] }, value]; });
            }
        });
        return data.length > 0 ? data : undefined;
    };
    _ensureFunnelLibrary($element) {
        if(!D3Funnel) {
            
            $element.empty();

            $element.append($('<div/>', {
                css: {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '95%',
                    color: '#CF0F2E',
                    'text-align': 'center'
                }
            }).html("'D3Funnel' cannot be displayed. You should include 'd3.v3.min.js' and 'd3-funnel.js' libraries."));
            return false;
        }
        return true;
    };
    _ensureFunnelSettings() {
        
        var getSelectionColor = (hexColor) => { return this.funnelViewer.colorizer.shade(hexColor, -0.5); };
        if(!this.funnelSettings) {
            this.funnelSettings = {
                data: undefined,
                options: {
                    chart: {
                        bottomPinch: this.getPropertyValue('PinchCount'),
                        curve: { enabled: this.getPropertyValue('IsCurved') }
                    },
                    block: {
                        dynamicHeight: this.getPropertyValue('IsDynamicHeight'),
                        fill: {
                            scale: (index) => {
                                var obj = this.funnelSettings.data[index][0];
                                return obj.data && this.isSelected(obj.data) ? getSelectionColor(obj.color) : obj.color;
                            },
                            type: this.getPropertyValue('FillType').toLowerCase()
                        }
                    },
                    label: {
                        format: (label, value) => {
                            return label.text;
                        }
                    },
                    events: {
                        click: { block: (e) => this._onClick(e) }
                    }
                }
            };
        }
        this.funnelSettings.options.block.highlight = this.canDrillDown() || this.canMasterFilter();
        return this.funnelSettings;
    };
    _onClick(e) {
        if(!this._hasArguments() || !e.label)
            return;
        var row = e.label.raw.data;
        if (this.canDrillDown(row))
            this.drillDown(row);
        else if (this.canMasterFilter(row)) {
            this.setMasterFilter(row);
            this._update();
        }
    };
    _subscribeProperties() {
        this.subscribe('IsCurved', (isCurved) => this._update(null, { chart: { curve: { enabled: isCurved } } }) );
        this.subscribe('IsDynamicHeight', (isDynamicHeight) => this._update(null, { block: { dynamicHeight: isDynamicHeight } }));
        this.subscribe('PinchCount', (count) => this._update(null, { chart: { bottomPinch: count } }));
        this.subscribe('FillType', (type)=> this._update(null, { block: { fill: { type: type.toLowerCase() } } }));
    };
    _update(data?, options?) {
        this._ensureFunnelSettings();
        if(!!data) {
            this.funnelSettings.data = data;
        }
        if(!!options) {
            $.extend(true, this.funnelSettings.options, options);
        }
        if(!!this.funnelViewer) {
            this.funnelViewer.draw(this.funnelSettings.data, this.funnelSettings.options);
            this._updateExportingImage();
        }
    };
    _updateExportingImage () {
        var svg = this.$funnelContainer.children()[0],
            str = new XMLSerializer().serializeToString(svg),
            encodedData = 'data:image/svg+xml;base64,' + window.btoa(window["unescape"](encodeURIComponent(str)));
        this.exportingImage.src = encodedData;
    };
    _hasArguments() {
        return this.getBindingValue('Arguments').length > 0;
    };
    _getImageBase64 () {
        var canvas = $('<canvas>')[0];
        canvas['width'] = this.$funnelContainer.innerWidth();
        canvas['height'] = this.$funnelContainer.innerHeight();
        canvas['getContext']('2d').drawImage(this.exportingImage, 0, 0);
        return canvas['toDataURL']().replace('data:image/png;base64,', '');
    }
    _isIEBrowser () {
        return navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
    }
}