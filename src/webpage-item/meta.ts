import { ICustomItemMetaData, CustomItem } from 'devexpress-dashboard/model';

export const WEBPAGE_EXTENSION_NAME = 'WebPage';

export const webPageMeta: ICustomItemMetaData = {
    bindings: [{
        propertyName: 'Attribute',
        dataItemType: 'Dimension',
        array: false,
        displayName: "Attribute",
        emptyPlaceholder: 'Set Attribute',
        selectedPlaceholder: "Configure Attribute"
    }],
    customProperties: [{
        ownerType: CustomItem,
        propertyName: 'Url',
        valueType: 'string',
        defaultValue: 'https://en.wikipedia.org/wiki/{0}',
    }],
    optionsPanelSections: [{
        title: 'Custom Options',
        items: [{
            dataField: 'Url',
            editorType: 'dxTextBox',
        }]
    }],
    icon: WEBPAGE_EXTENSION_NAME,
    title: "Web Page",
    index: 2
};