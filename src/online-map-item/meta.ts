import { ICustomItemMetaData, CustomItem } from "devexpress-dashboard/model";
import { FormItemTemplates } from "devexpress-dashboard/designer";

export const ONLINE_MAP_EXTENSION_NAME = 'OnlineMap';

export const onlineMapMeta: ICustomItemMetaData = {
    bindings:[{
        propertyName: 'Latitude',
        dataItemType: 'Dimension',
        array: false,
        enableInteractivity: true,
        displayName: 'Latitude',
        emptyPlaceholder: 'Set Latitude',
        selectedPlaceholder: 'Configure Latitude',
        constraints: {
            allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
        }
    },  {
        propertyName: 'Longitude',
        dataItemType: 'Dimension',
        array: false,
        enableInteractivity: true,
        displayName: 'Longitude',
        emptyPlaceholder: 'Set Longitude',
        selectedPlaceholder: 'Configure Longitude',
        constraints: {
            allowedTypes: ['Integer', 'Float', 'Double', 'Decimal']
        }
    }],
    customProperties: [{
        ownerType: CustomItem,
        propertyName: 'Provider',
        valueType: 'string',
        defaultValue: 'Bing',
    },{
        ownerType: CustomItem,
        propertyName: 'Type',
        valueType: 'string',
        defaultValue: 'RoadMap',
    },{
        ownerType: CustomItem,
        propertyName: 'DisplayMode',
        valueType: 'string',
        defaultValue: 'Markers',
    }],
    optionsPanelSections: [{
        title: 'Custom Options',
        items: [{
            dataField: 'Provider',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: [{ text: 'Google' }, { text: 'Bing' }]
            },
        },{
            dataField: 'Type',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: [{ text: 'RoadMap' }, { text: 'Satellite' }, { text: 'Hybrid' }]
            },
        },{
            dataField: 'DisplayMode',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                keyExpr: 'value',
                items: [{
                    value: 'Markers',
                    text: 'Markers'
                }, {
                    value: 'Routes',
                    text: 'Routes'
                }, {
                    value: 'MarkersAndRoutes',
                    text: 'All'
                }],
            },
        }]
    }],
    interactivity: {
        filter: true,
        drillDown: false
    },
    icon: ONLINE_MAP_EXTENSION_NAME,
    title: 'Online Map',
    index: 1
};
