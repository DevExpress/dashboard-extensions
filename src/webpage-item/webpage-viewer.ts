import { CustomItemViewer } from 'devexpress-dashboard/common'
import * as $ from 'jquery';
import { dxElement } from 'devextreme/core/element';

export class WebPageItem extends CustomItemViewer {
    private _iframe: any;

    constructor(model: any, container, options) {
        super(model, container, options);
        this._iframe = undefined;
    }

    renderContent(element: dxElement, changeExisting: boolean, afterRenderCallback?) {
        var attribute;
        var $element = $(element);
        if(!changeExisting || !this._iframe) {
            this._iframe = $('<iframe>', { 
                attr: {
                    width: '100%',
                    height: '100%'
                },
                style: 'border: none;'
            });
            $element.append(this._iframe);
        }
        this.iterateData(row => {
            if(!attribute) {
                attribute = row.getDisplayText('Attribute')[0];
            }
        });
        this._iframe.attr('src', this.getPropertyValue('Url').replace('{0}', attribute));
    }
}