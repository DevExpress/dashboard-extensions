
import { IExtension, 
    SequenceAction, 
    WorkingModeSwitchingOptions, 
    DashboardContainer, 
    DashboardInfo, 
    MobileLayoutExtension, 
    ViewerApiExtension } from 'devexpress-dashboard/common'
import { DashboardToolbarGroup, DashboardToolbarItem, ToolboxExtension } from 'devexpress-dashboard/designer';
import * as $ from 'jquery';
import * as ko from 'knockout';

export class CustomDashboardPanelExtension implements IExtension {
    name = "custom-dashboard-panel";

    private _toolbarElement;
    private _customTemplate;
    private _iconBack = 'dx-dashboard-back';
    private _dashboardsButtonName = 'Dashboards';
    private _flexParent = 'dx-dashboard-flex-parent';
    private _dashboardsButton = 'dx-dashboards-button';
    private _dashboardTruncated = 'dx-dashboard-truncated';
    private _ellipsisText = 'dx-dashboard-ellipsis';
    private _itemTemplate = ko.observable<string>();
    private _isMobile = ko.observable<boolean>(false);
    private _disposables: ko.Subscription[] = [];

    panelWidth = 250;
    visible = ko.observable(false);
    allowSwitchToDesigner = ko.observable<boolean>(true);

    designerToViewerAction: SequenceAction;
    viewerToDesignerAction: SequenceAction;
    selectedItemKeys = ko.observableArray<string>();
    availableDashboards = ko.observableArray<DashboardInfo>();

    private _actualPanelWidth = ko.observable<number>();

    private _left = ko.computed(() => {
        return this.visible() ? 0 : -this._actualPanelWidth();
    });

    constructor(private _dashboardControl: any, private options: DashboardPanelExtensionOptions = {}) {
        this._toolbarElement = new DashboardToolbarGroup("viewer-button", "", 100);
        var toViewerItem = new DashboardToolbarItem("toviewer", () => this.switchToViewer());
        toViewerItem.template = "dashboard-custom-panel-extension-viewer-button";
        toViewerItem.disabled = ko.pureComputed(() => !!this._dashboardControl.dashboard());


        this._toolbarElement.items.push(toViewerItem);

        this.designerToViewerAction = {
            orderNo: 60,
            action: this.showPanelAsync
        }
        this.viewerToDesignerAction = {
            orderNo: 20,
            action: this.hidePanelAsync
        }
    }

    start() {
        var mobileExtension = <MobileLayoutExtension>this._dashboardControl.findExtension("mobile-layout");
        this._isMobile(mobileExtension && mobileExtension.mobileLayoutEnabled());

        mobileExtension.mobileLayoutEnabled.subscribe(() => {
            this.stop();
            this.start();
        })

        if(this._isMobile())
            this.allowSwitchToDesigner(false);
        else if(this.allowSwitchToDesigner() === undefined) {
            this.allowSwitchToDesigner(this._dashboardControl.allowSwitchToDesigner);
        }
        this.visible(this._isMobile() ? false : !this._dashboardControl.isDesignMode());
        this._itemTemplate(this._getTemplateName());
        if(this._isMobile()) {
            this._actualPanelWidth($(window).width());
        } else {
            this._actualPanelWidth(this.panelWidth);
        }

        this._customTemplate = this._getCustomTemplate();
        this._dashboardControl.customTemplates.push(this._customTemplate);

        var extension = <ToolboxExtension>this._dashboardControl.findExtension("toolbox");
        if(extension) {
            extension.toolbarGroups.push(this._toolbarElement);
        }

        this._disposables.push(this._dashboardControl.dashboardContainer.subscribe(dashboardContainer => {
            if(dashboardContainer) {
                this._validateSelection(dashboardContainer, this.availableDashboards())
            }
        }));

        if(this._isMobile()) {
            var viewerApiExtension = <ViewerApiExtension>this._dashboardControl.findExtension("viewer-api");
            if(viewerApiExtension) {
                viewerApiExtension.on('dashboardTitleToolbarUpdated', this._titleToolbarUpdatedHandler)
            }
        }

        if(!this._dashboardControl.isDesignMode()) {
            this._dashboardControl.surfaceLeft(this._isMobile() ? 0 : this.panelWidth);
        }

        this.updateDashboardsList();
    }

    stop() {
        this._dashboardControl.surfaceLeft(0);
        this._disposables.forEach(d => d.dispose());
        this._disposables = [];
        var viewerApiExtension = <ViewerApiExtension>this._dashboardControl.findExtension("viewer-api");
        if(viewerApiExtension) {
            viewerApiExtension.off('dashboardTitleToolbarUpdated', this._titleToolbarUpdatedHandler)
        }
        var toolboxExtension = <ToolboxExtension>this._dashboardControl.findExtension("toolbox");
        if(toolboxExtension) {
            toolboxExtension.toolbarGroups.remove(this._toolbarElement);
        }
        this._dashboardControl.customTemplates.remove(this._customTemplate);
    }

    updateDashboardsList() {
        var dashboardContainer = this._dashboardControl.dashboardContainer();
        let options = this.options;
        this._dashboardControl.requestDashboardList().done((availableDashboards: Array<DashboardInfo>) => {
            this.availableDashboards(availableDashboards.map(dashboard => new PanelExtensionDashboardInfo(
                dashboard.id,
                dashboard.name,
                options.dashboardThumbnail ? options.dashboardThumbnail.replace('{0}', dashboard.id) : undefined)));
            this._validateSelection(this._dashboardControl.dashboardContainer(), this.availableDashboards())
        });
    }
    private _validateSelection(dashboardContainer: DashboardContainer, avaliableDashboards: DashboardInfo[]) {
        if(dashboardContainer) {
            var dashboardInfo = avaliableDashboards.filter(info => info.id === dashboardContainer.id)[0];
            if(dashboardInfo) {
                this.selectedItemKeys([dashboardInfo.id]);
            }
        }
    }
    private _getTemplateName() {
        if(this._isMobile()) {
            return this.options.dashboardThumbnail ? 'dashboard-preview' : 'dashboard-card-view';
        }
        return 'dashboard-list-item';
    }
    private _hidePanel() {
        if(this._isMobile()) {
            this.hidePanelAsync({ surfaceLeft: 0 });
        }
    }
    private _titleToolbarUpdatedHandler = (args) => {
        args.options.navigationItems.push({
            type: 'button',
            template: () => {
                return $('<div/>')
                    .addClass([this._flexParent, this._ellipsisText].join(' '))
                    .append($('<svg><use xlink:href="#' + this._iconBack + '" /></svg>'))
                    .append($('<div/>').text(this._dashboardsButtonName).addClass([this._dashboardsButton, this._dashboardTruncated].join(' ')));
            },
            click: () => {
                this.showPanelAsync({ surfaceLeft: this._actualPanelWidth() });
            }
        });
    }
    showPanelAsync = (options: WorkingModeSwitchingOptions) => {
        var def = $.Deferred();
        this.visible(true);
        this.updateDashboardsList();
        setTimeout(() => {
            options.surfaceLeft = this.panelWidth;
            def.resolve(options);
        }, 500);
        return def.promise();
    }
    hidePanelAsync = (options: WorkingModeSwitchingOptions) => {
        var def = $.Deferred();
        this.visible(false);
        setTimeout(() => {
            options.surfaceLeft = 0;
            def.resolve(options);
        }, 500);
        return def.promise();
    }
    switchToViewer = (): void => {
        this._dashboardControl.switchToViewer();
    }
    switchToDesigner = (): void => {
        this._dashboardControl.switchToDesigner();
    }
    private _getCustomTemplate() {
        var enableAnimation = ko.observable(!this.visible());
        let listOptions = {
            noDataText: '',
            keyExpr: 'id',
            selectionMode: 'single',
            itemTemplate: this._itemTemplate,
            activeStateEnabled: false,
            selectedItemKeys: this.selectedItemKeys,
            onItemClick: () => { this._hidePanel(); },
            searchEnabled: this._isMobile,
            searchExpr: 'id',
            hoverStateEnabled: !this._isMobile,
            focusStateEnabled: !this._isMobile,
            searchEditorOptions: {
                placeholder: 'Search'
            },
            onOptionChanged: (e) => {
                if(e.name === 'selectedItemKeys' && this.selectedItemKeys().length > 0) {
                    let selectedItem = this.availableDashboards().filter(item => item.id === this.selectedItemKeys()[0])[0];
                    e.component.scrollToItem(this.availableDashboards().indexOf(selectedItem));
                }
            },
            onSelectionChanged: (e) => {
                if(e.addedItems.length) {
                    var newDashboardId = e.addedItems[0].id;
                    if(!this._dashboardControl.dashboardContainer() || this._dashboardControl.dashboardContainer().id !== newDashboardId) {
                        this._dashboardControl.loadDashboard(newDashboardId);
                    }
                }
            },
        };
        $.extend(listOptions, this._isMobile() ? { dataSource: this.availableDashboards } : { items: this.availableDashboards });

        return {
            name: "dashboard-custom-panel-extension",
            data: {
                panelWidth: this._actualPanelWidth,
                allowSwitchToDesigner: this.allowSwitchToDesigner,
                visible: this.visible,
                isMobile: this._isMobile,
                hidePanel: () => { this._hidePanel(); },
                switchToDesigner: this.switchToDesigner,
                switchToViewer: this.switchToViewer,
                listOptions: listOptions,
                enableAnimation: enableAnimation
            }
        };
    }
}

export interface DashboardPanelExtensionOptions {
    dashboardThumbnail?: string;
}

class PanelExtensionDashboardInfo implements DashboardInfo {
    hidden = ko.observable<boolean>(false);

    constructor(public id: string,
        public name: string,
        public imageUrl?: string) {
    }

    hide() {
        this.hidden(true);
    }
}