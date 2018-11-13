var buttonsStyle = {
    containerHeight: 60,
    height: 40,
    width: 82,
    marginRight: 15,
    marginTop: 10
};

import { CustomItemViewer } from 'devexpress-dashboard/common'


export class ParameterItemViewer extends CustomItemViewer {
    $gridContainer: JQuery;
    $buttonContainer: JQuery;
    parametersExtension: any;
    parametersContent: any;
    dialogButtonSubscribe: any;

    constructor(model, $container, options, parametersExtension) {
       super(model, $container, options);
        
        this.parametersExtension = parametersExtension;
        this._subscribeProperties();
        this.parametersExtension.showDialogButton(false);
        this.parametersExtension.subscribeToContentChanges(function () {
            this._generateParametersContent();
        });
        this.dialogButtonSubscribe = this.parametersExtension.showDialogButton.subscribe(function() {
            this.parametersExtension.showDialogButton(false);
        });
    }

    setSize(width, height) {
        super.setSize(width, height);
        this._setGridHeight();
    };

    renderContent($element, changeExisting, afterRenderCallback) {
        if (!changeExisting) {
            $element.empty();
            $element.css('overflow', 'auto');
            

            this.$gridContainer = $("<div />");
            $element.append(this.$gridContainer);
            this._generateParametersContent();

            this.$buttonContainer = $("<div />", {
                css: {
                    'height': buttonsStyle.containerHeight + 'px',
                    'width':  buttonsStyle.width * 2 + buttonsStyle.marginRight * 2 + 'px',
                    'float': 'right'
                }
            });
            
            $element.append(this.$buttonContainer);

            var $resetButton = this._createButton("Reset", function () {
                this.parametersContent.resetParameterValues();
            });
            $resetButton.appendTo(this.$buttonContainer);
            var $submitButton = this._createButton("Submit", function () {
                this._submitValues();
            });
            $submitButton.appendTo(this.$buttonContainer);
            if (this.getPropertyValue('automaticUpdates') != 'Off')
                this.$buttonContainer.hide();
        }
    };
    _generateParametersContent() {
        
        this.parametersContent = this.parametersExtension.renderContent(this.$gridContainer);
        this.parametersContent.grid.option('onDisposing', function () {
            this.dialogButtonSubscribe.dispose();
            this.parametersExtension.showDialogButton(true);
        });
        this.parametersContent.valueChanged.add(function() { return this._updateParameterValues(); });
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
    _createButton(buttonText, onClick) {
        let $button = $("<div />", {
            css: {
                'margin-right': buttonsStyle.marginRight + 'px',
                'margin-top': buttonsStyle.marginTop + 'px'
            }
        }).dxButton({
            text: buttonText,
            height: buttonsStyle.height + 'px',
            width: buttonsStyle.width + 'px',
            onClick: onClick
        });
        return $button;
    }
    _subscribeProperties() {
        
        this.subscribe('showHeaders', function (showHeaders) { this._update({ showHeaders: showHeaders }); });
        this.subscribe('showParameterName', function (showParameterName) { this._update({ showParameterName: showParameterName }); });
        this.subscribe('automaticUpdates', function (automaticUpdates) { this._update({ automaticUpdates: automaticUpdates }) });
    };
    _update(options) {
        
        if (!!options.showHeaders) {
            this.parametersContent.grid.option('showColumnHeaders', options.showHeaders === 'On');
        }
        if(!!options.showParameterName) {
            this.parametersContent.valueChanged.empty();
            this.parametersContent.grid.columnOption(0, 'visible', options.showParameterName === 'On');
            this.parametersContent.valueChanged.add(function () { return this._updateParameterValues(); });
        }
        if(!!options.automaticUpdates) {
            if (options.automaticUpdates == 'Off') {
                this.$buttonContainer.show();
            } else {
                this.$buttonContainer.hide();
            }
        }
        this._setGridHeight();
    };
}
