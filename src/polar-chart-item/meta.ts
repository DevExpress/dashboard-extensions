import { ICustomItemMetaData, CustomItem } from 'devexpress-dashboard/model';
 
export const POLAR_CHART_EXTENSION_NAME = 'PolarChart';
export const polarMeta: ICustomItemMetaData = {
    bindings: [{
        propertyName: 'measureValue',
        dataItemType: 'Measure',
        displayName: 'Value',
        array: true,
        emptyPlaceholder: 'Set Value',
        selectedPlaceholder: 'Configure Value'
    }, {
        propertyName: 'dimensionValue',
        dataItemType: 'Dimension',
        displayName: 'Argument',
        array: false,
        enableColoring: true,
        enableInteractivity: true,
        emptyPlaceholder: 'Set Argument',
        selectedPlaceholder: 'Configure Argument'
    }],
    interactivity: {
        filter: true
    },
    customProperties: [{
        ownerType: CustomItem,
        propertyName: 'labelVisibleProperty',
        valueType: 'boolean',
        defaultValue: true
    }],
    optionsPanelSections: [{
        title: 'Labels',
        items: [{
            dataField: 'labelVisibleProperty',
            label: {
                text: 'Display labels'
            }
        }]
    }],
    icon: POLAR_CHART_EXTENSION_NAME,
    title: 'Polar Chart',
    index: 2
};