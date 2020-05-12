import { ICustomItemMetaData, CustomItem } from 'devexpress-dashboard/model';
import { FormItemTemplates } from 'devexpress-dashboard/designer';
 
export const FUNNEL_D3_EXTENSION_NAME = 'FunnelD3';
export const funnelMeta: ICustomItemMetaData = {
    bindings: [{
        propertyName: 'Values',
        dataItemType: 'Measure',
        array: true,
        enableColoring: true,
        displayName: 'Values',
        emptyPlaceholder: 'Set Value',
        selectedPlaceholder: 'Configure Value'
    }, {
        propertyName: 'Arguments',
        dataItemType: 'Dimension',
        array: true,
        enableInteractivity: true,
        enableColoring: true,
        displayName: 'Arguments',
        emptyPlaceholder: 'Set Argument',
        selectedPlaceholder: 'Configure Argument'
    }],
    customProperties: [{
        ownerType: CustomItem,
        propertyName: 'FillType',
        valueType: 'string',
        defaultValue: 'Solid',
    },{
        ownerType: CustomItem,
        propertyName: 'IsCurved',
        valueType: 'boolean',
        defaultValue: false,
    },{
        ownerType: CustomItem,
        propertyName: 'IsDynamicHeight',
        valueType: 'boolean',
        defaultValue: true,
    }, {
        ownerType: CustomItem,
        propertyName: 'PinchCount',
        valueType: 'number',
        defaultValue: 0,
    }],
    optionsPanelSections: [{
        title: 'Settings',
        items: [{
            dataField: 'FillType',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: [{ text: 'Solid' }, { text: 'Gradient' }]
            },
        },{
            dataField: 'IsCurved',
            label: {
                text: 'Curved'
            },
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                keyExpr: 'value',
                items: [{
                    value: false,
                    text: 'No',
                }, {
                    value: true,
                    text: 'Yes',
                }]
            },
        },{
            dataField: 'IsDynamicHeight',
            label: {
                text: 'Dynamic Height'
            },
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                keyExpr: 'value',
                items: [{
                    value: false,
                    text: 'No',
                }, {
                    value: true,
                    text: 'Yes',
                }]
            },
        }, {
            dataField: 'PinchCount',
            editorType: 'dxNumberBox',
            editorOptions: {
                min: 0,
            },
        }],
    }],
    interactivity: {
        filter: true,
        drillDown: true
    },
    icon: FUNNEL_D3_EXTENSION_NAME,
    title: 'Funnel D3',
    index: 3
};
