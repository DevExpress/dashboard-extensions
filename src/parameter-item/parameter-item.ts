
import { parameterItemMeta, PARAMETER_ITEM_EXTENSION_NAME } from "./meta";
import { parameterItemViewer } from "./viewer";
import { PARAMETER_ITEM_ICON } from "./icon";

export class parameterItemExtension {
    name = PARAMETER_ITEM_EXTENSION_NAME;
    metaData = parameterItemMeta;


    constructor(private dashboardControl) {
        dashboardControl.registerIcon(PARAMETER_ITEM_ICON);

    }
    start() {
        
    }
    
    
    createViewerItem(model, $element, content) {
        var parametersExtension = this.dashboardControl.findExtension("dashboard-parameter-dialog");
        if (!parametersExtension){
            throw Error('The "dashboard-parameter-dialog" extension does not exist. To register this extension, use the DashboardControl.registerExtension method.');
        }
        return new parameterItemViewer(model, $element, content, parametersExtension);
    }
}
