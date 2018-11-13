import { editorTemplates } from 'devexpress-dashboard/model/index.metadata'

export var PARAMETER_ITEM_EXTENSION_NAME = 'ParameterItem';

export var parameterItemMeta = {
    properties: [{
        propertyName: 'showHeaders',
        editor: editorTemplates.buttonGroup,
        displayName: "Show Headers",
        values: {
            Off: "Off",
            On: "On"
        },
        defaultVal: 'On'
    }, {
        propertyName: 'showParameterName',
        editor: editorTemplates.buttonGroup,
        displayName: "Show Parameter Name",
        values: {
            Off: "Off",
            On: "On"
        },
        defaultVal: 'On'
    }, {
        propertyName: 'automaticUpdates',
        editor: editorTemplates.buttonGroup,
        displayName: "Automatic Updates",
        values: {
            Off: "Off",
            On: "On"
        },
        defaultVal: 'Off'
    }],

    icon: PARAMETER_ITEM_EXTENSION_NAME,

    title: "Parameters"
};
