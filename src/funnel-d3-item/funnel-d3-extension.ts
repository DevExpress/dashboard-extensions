import { FUNNEL_D3_ICON } from "./icon";
import { FunnelD3Item } from "./funnel-d3-viewer";
import { FUNNEL_D3_EXTENSION_NAME, funnelMeta } from './meta';

export class FunnelD3ItemExtension {
    name = FUNNEL_D3_EXTENSION_NAME;
    metaData = funnelMeta;
    
    constructor(dashboardControl) {
        dashboardControl.registerIcon(FUNNEL_D3_ICON);
    }

    createViewerItem(model, element, content) {
        return new FunnelD3Item(model, element, content);
    }
}