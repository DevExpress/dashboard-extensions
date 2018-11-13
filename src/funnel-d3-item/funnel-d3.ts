import { FUNNEL_D3_ICON } from "./icon";
import { funnelD3Item } from "./funnel-d3-viewer";
import './localization';
import { FUNNEL_D3_EXTENSION_NAME, funnelMeta } from './meta';

class funnelD3ItemExtension {
    name = FUNNEL_D3_EXTENSION_NAME;
    metaData = funnelMeta;
    
    constructor(dashboardControl) {
        dashboardControl.registerIcon(FUNNEL_D3_ICON);
    }

    createViewerItem(model, $element, content) {
        return new funnelD3Item(model, $element, content);
    }
}
export = funnelD3ItemExtension;