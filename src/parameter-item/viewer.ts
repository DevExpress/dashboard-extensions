import * as $ from 'jquery';
import dxButton from 'devextreme/ui/button'

var buttonsStyle = {
    containerHeight: 60,
    height: 40,
    width: 82,
    marginRight: 15,
    marginTop: 10
};

import { CustomItemViewer } from 'devexpress-dashboard/common'
import { dxElement } from 'devextreme/core/element';


export class ParameterItemViewer extends CustomItemViewer {
    gridContainer: HTMLElement;
    buttonContainer: HTMLElement;
    parametersExtension: any;
    parametersContent: any;
    dialogButtonSubscribe: any;
    buttons = [];

    constructor(model, container, options, parametersExtension) {
       super(model, container, options);
        
        this.parametersExtension = parametersExtension;
        this._subscribeProperties();
        this.parametersExtension.showDialogButton(false);
        this.parametersExtension.subscribeToContentChanges(() => {
            this._generateParametersContent();
        });
        this.dialogButtonSubscribe = this.parametersExtension.showDialogButton.subscribe(() => {
            this.parametersExtension.showDialogButton(false);
        });
    }

    setSize(width, height) {
        super.setSize(width, height);
        this._setGridHeight();
    };
    dispose() {
        super.dispose();
        this.parametersContent && this.parametersContent.dispose && this.parametersContent.dispose();
        this.dialogButtonSubscribe.dispose();
        this.parametersExtension.showDialogButton(true);
        this.buttons.forEach(button => button.dispose());
    }
    renderContent(dxElement: JQuery<HTMLElement> | HTMLElement, changeExisting, afterRenderCallback) {
        let element: HTMLElement = (<JQuery>dxElement).jquery ? (<JQuery>dxElement).get(0): <HTMLElement>dxElement;
        if (!changeExisting) {
            element.innerHTML = '';
            this.buttons.forEach(button => button.dispose());
            element.style.overflow = 'auto';
            
            this.gridContainer = document.createElement('div');

            element.appendChild(this.gridContainer);
            this._generateParametersContent();

            this.buttonContainer = document.createElement('div');

            this.buttonContainer.style.height = buttonsStyle.containerHeight + 'px',
            this.buttonContainer.style.width = buttonsStyle.width * 2 + buttonsStyle.marginRight * 2 + 'px',
            this.buttonContainer.style.cssFloat = 'right'
                
            element.appendChild(this.buttonContainer);

            this.buttons.push(this._createButton(this.buttonContainer, "Reset", () => {
                this.parametersContent.resetParameterValues();
            }));
            this.buttons.push(this._createButton(this.buttonContainer, "Submit", () => {
                this._submitValues();
            }));
            if (this.getPropertyValue('automaticUpdates') != 'Off')
                this.buttonContainer.style.display = 'none';
        }
    };
    _generateParametersContent() {       
        this.parametersContent = this.parametersExtension.renderContent(this.gridContainer);
        this.parametersContent.valueChanged.add(() => this._updateParameterValues());
        this._setGridHeight();
        this._update({
            showHeaders: this.getPropertyValue('showHeaders'),
            showParameterName: this.getPropertyValue('showParameterName')
        });
    }
    _submitValues() {
        
        this.parametersContent.submitParameterValues();
        this._update({
            showHeaders: this.getPropertyValue('showHeaders'),
            showParameterName: this.getPropertyValue('showParameterName')
        });
    }
    _updateParameterValues() {
        this.getPropertyValue('automaticUpdates') != 'Off' ? this._submitValues() : null;
    }
    _setGridHeight() {
        var gridHeight = this.contentHeight();
        if (this.getPropertyValue('automaticUpdates') === 'Off')
            gridHeight -= buttonsStyle.containerHeight;
        this.parametersContent.grid.option('height', gridHeight);
    }
    _createButton(container: HTMLElement, buttonText: string, onClick: () => void) {
      

        let button =   document.createElement("div");
        button.style.marginRight =  buttonsStyle.marginRight + 'px';
        button.style.marginTop = buttonsStyle.marginTop + 'px';
        container.appendChild(button);
        return new (dxButton || (<any>window).DevExpress.ui.dxButton)(button, {
            text: buttonText,
            height: buttonsStyle.height + 'px',
            width: buttonsStyle.width + 'px',
            onClick: onClick
        });
    }
    _subscribeProperties() {
        
        this.subscribe('showHeaders', (showHeaders) => { this._update({ showHeaders: showHeaders }); });
        this.subscribe('showParameterName', (showParameterName) => { this._update({ showParameterName: showParameterName }); });
        this.subscribe('automaticUpdates', (automaticUpdates) => { this._update({ automaticUpdates: automaticUpdates }) });
    };
    _update(options) {
        
        if (!!options.showHeaders) {
            this.parametersContent.grid.option('showColumnHeaders', options.showHeaders === 'On');
        }
        if(!!options.showParameterName) {
            this.parametersContent.valueChanged.empty();
            this.parametersContent.grid.columnOption(0, 'visible', options.showParameterName === 'On');
            this.parametersContent.valueChanged.add(() => { return this._updateParameterValues(); });
        }
        if(!!options.automaticUpdates) {
            if (options.automaticUpdates == 'Off') {
                this.buttonContainer.style.display = 'block';
            } else {
                this.buttonContainer.style.display = 'none';
            }
        }
        this._setGridHeight();
    };
}
