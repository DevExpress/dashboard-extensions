import { CustomItemViewer } from 'devexpress-dashboard/common'
import * as $ from 'jquery';
import { dxElement } from 'devextreme/core/element';
import dxPolarChart, { dxPolarChartOptions } from 'devextreme/viz/polar_chart';

export class PolarChartItem extends CustomItemViewer {
    dxPolarWidget: dxPolarChart;
    dxPolarWidgetSettings: dxPolarChartOptions;

    constructor(model, container, options) {
        super(model, container, options);

        this.dxPolarWidget = null;
        this.dxPolarWidgetSettings = null;
    }

    _getDataSource() {
        var data = [];
        
        if (this.getBindingValue('measureValue').length > 0) {
            this.iterateData(dataRow => {
                var dataItem = {
                    arg: dataRow.getValue('dimensionValue')[0] || "",
                    color: dataRow.getColor()[0],
                    clientDataRow: dataRow
                };
     
                var measureValues = dataRow.getValue('measureValue');

                for (var i = 0; i < measureValues.length; i++) {
                    dataItem["measureValue" + i] = measureValues[i];
                }
            
                data.push(dataItem);
            });
        }

        return data;
    }

    _getDxPolarWidgetSettings(): dxPolarChartOptions {
        var series = [];
        var dataSource = this._getDataSource();
        var measureValueBindings = this.getBindingValue('measureValue');

        for (var i = 0; i < measureValueBindings.length; i++) {
            series.push({ valueField: "measureValue" + i, name: measureValueBindings[i].displayName() });
        }

        return {
            dataSource: dataSource,
            series: series,
            useSpiderWeb: true,
            resolveLabelOverlapping: "hide",
            pointSelectionMode: "multiple",
            commonSeriesSettings: {
                type: "line",
                label: {
                    visible: <boolean>this.getPropertyValue("labelVisibleProperty")
                }
            },
            "export": {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            onPointClick: e => {
                var point = e.target;
                this.setMasterFilter(point.data.clientDataRow);
            }
        };
    }

    renderContent(element: dxElement, changeExisting) {
        let htmlElement: HTMLElement = element instanceof $ ? element.get(0): <HTMLElement>(<any>element);

        if (!changeExisting) {
            while(htmlElement.firstChild)
                htmlElement.removeChild(htmlElement.firstChild);
            this.dxPolarWidget = new (dxPolarChart || (<any>window).DevExpress.viz.dxPolarChart)(htmlElement, this._getDxPolarWidgetSettings());
        } else {
            this.dxPolarWidget.option(this._getDxPolarWidgetSettings());
        }

        this.updateSelection();
    }

    setSelection(values: Array<Array<any>>) {
        super.setSelection(values);
        this.updateSelection();
    }

    updateSelection() {
        var series = this.dxPolarWidget.getAllSeries();

        for (var i = 0; i < series.length; i++) {
            var points = series[i].getAllPoints()
            for (var j = 0; j < points.length; j++) {
                if (this.isSelected(points[j].data.clientDataRow))
                    points[j].select();
                else
                    points[j].clearSelection();
            }
        }
    }

    clearSelection() {
        super.clearSelection();
        this.dxPolarWidget.clearSelection();
    }

    setSize(width, height) {
        super.setSize(width, height);
        this.dxPolarWidget.render();
    }
}