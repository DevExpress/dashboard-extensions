 import { editorTemplates, parseBool } from 'devexpress-dashboard/model/index.metadata'
 
 export const FUNNEL_D3_EXTENSION_NAME = 'FunnelD3';
 export const funnelMeta = {
    bindings: [{
        propertyName: 'Values',
        dataItemType: 'Measure',
        array: true,
        enableColoring: true,
        displayName: 'DashboardWebCustomItemStringId.Values',
        emptyPlaceholder: 'DashboardWebCustomItemStringId.SetValue',
        selectedPlaceholder: 'DashboardWebCustomItemStringId.ConfigureValue'
    }, {
        propertyName: 'Arguments',
        dataItemType: 'Dimension',
        array: true,
        enableInteractivity: true,
        enableColoring: true,
        displayName: 'DashboardWebCustomItemStringId.Arguments',
        emptyPlaceholder: 'DashboardWebCustomItemStringId.SetArgument',
        selectedPlaceholder: 'DashboardWebCustomItemStringId.ConfigureArgument'
    }],
    properties: [{
        propertyName: 'FillType',
        editor: editorTemplates.buttonGroup,
        displayName: "DashboardWebCustomItemStringId.FillType",
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        values: {
            Solid: "DashboardWebCustomItemStringId.FillTypeSolid",
            Gradient: "DashboardWebCustomItemStringId.FillTypeGradient"
        },
        defaultVal: 'Solid'
    }, {
        propertyName: 'IsCurved',
        editor: editorTemplates.boolYesNo,
        displayName: 'DashboardWebCustomItemStringId.IsCurved',
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: false,
        from: parseBool
    }, {
        propertyName: 'IsDynamicHeight',
        editor: editorTemplates.boolYesNo,
        displayName: 'DashboardWebCustomItemStringId.IsDynamicHeight',
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: true,
        from: parseBool
    }, {
        propertyName: 'PinchCount',
        editor: editorTemplates.numeric,
        editorOptions: { min: 0 },
        displayName: 'DashboardWebCustomItemStringId.PinchCount',
        sectionName: 'DashboardWebCustomItemStringId.SectionName',
        defaultVal: 0
    }],
    interactivity: {
        filter: true,
        drillDown: true
    },
    icon: FUNNEL_D3_EXTENSION_NAME,
    title: 'DashboardWebCustomItemStringId.DefaultNameFunnelD3',
    index: 3
};
