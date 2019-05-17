import { ONLINE_MAP_EXTENSION_NAME, onlineMapMeta } from "./meta";
import { OnlineMapItem } from "./online-map-viewer";
import { ONLINE_MAP_ICON } from "./icon";
import { ICustomItemExtension } from "devexpress-dashboard/common";
import './localization'
import { dxElement } from "devextreme/core/element";



export class OnlineMapItemExtension implements ICustomItemExtension {
    name = ONLINE_MAP_EXTENSION_NAME;
    metaData = onlineMapMeta;

    constructor(dashboardControl: any) {
        dashboardControl.registerIcon(ONLINE_MAP_ICON);
    }

    createViewerItem(model: any, element: dxElement, content: any) {
        return new OnlineMapItem(model, element, content);
    };
}
