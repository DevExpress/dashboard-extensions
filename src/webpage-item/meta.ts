import { editorTemplates, parseBool } from 'devexpress-dashboard/model/index.metadata'

export const WEBPAGE_EXTENSION_NAME = 'WebPage';

export const webPageMeta: any = {
    bindings: [{
        propertyName: 'Attribute',
        dataItemType: 'Dimension',
        array: false,
        displayName: "Attribute",
        emptyPlaceholder: 'Set Attribute',
        selectedPlaceholder: "Configure Attribute"
    }],
    properties:[{
        propertyName: 'Url',
        editor: editorTemplates.text,
        displayName: "Url",
        sectionName: "Custom Options",
        defaultVal: 'https://en.wikipedia.org/wiki/{0}'
    }],
    icon: WEBPAGE_EXTENSION_NAME,
    title: "Web Page",
    index: 2
};