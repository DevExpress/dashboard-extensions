import { POLAR_CHART_ICON } from "./icon";
import { PolarChartItem } from "./polar-chart-viewer";
import { POLAR_CHART_EXTENSION_NAME, polarMeta } from './meta';

export class PolarChartItemExtension {
    name = POLAR_CHART_EXTENSION_NAME;
    metaData = polarMeta;
    
    constructor(dashboardControl) {
        dashboardControl.registerIcon(POLAR_CHART_ICON);
    }

    createViewerItem(model, element, content) {
        return new PolarChartItem(model, element, content);
    }
}