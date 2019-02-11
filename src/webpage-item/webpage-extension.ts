﻿

import { ICustomItemExtension } from 'devexpress-dashboard/common'
import { WEBPAGE_EXTENSION_NAME, webPageMeta } from './meta'
import { WEBPAGE_ICON } from './icon'
import { WebPageItem } from './webpage-viewer'

export class WebPageItemExtension implements ICustomItemExtension {
    name = WEBPAGE_EXTENSION_NAME;
    metaData = webPageMeta;

    constructor(dashboardControl: any) {
        dashboardControl.registerIcon(WEBPAGE_ICON);
    }

    public createViewerItem = (model: any, $element: JQuery, content: any) => {
        return new WebPageItem(model, $element, content);
    };
}
