import { ICustomItemMetaData, CustomItem } from 'devexpress-dashboard/model';
import { FormItemTemplates } from 'devexpress-dashboard/designer';

const onOffButtons = [{ text: 'On' }, { text: 'Off' }];

export const PARAMETER_ITEM_EXTENSION_NAME = 'ParameterItem';

export const parameterItemMeta: ICustomItemMetaData = {
    customProperties: [{
        ownerType: CustomItem,
        propertyName: 'showHeaders',
        valueType: 'string',
        defaultValue: 'On',
    },{
        ownerType: CustomItem,
        propertyName: 'showParameterName',
        valueType: 'string',
        defaultValue: 'On',
    },{
        ownerType: CustomItem,
        propertyName: 'automaticUpdates',
        valueType: 'string',
        defaultValue: 'Off',
    }],
    optionsPanelSections: [{
        title: 'Parameters settings',
        items: [{
            dataField: 'showHeaders',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: onOffButtons,
            },
        }, {
            dataField: 'showParameterName',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: onOffButtons,
            },
        }, {
            dataField: 'automaticUpdates',
            template: FormItemTemplates.buttonGroup,
            editorOptions: {
                items: onOffButtons,
            },
        }],
    }],
    icon: PARAMETER_ITEM_EXTENSION_NAME,
    title: "Parameters"
};
