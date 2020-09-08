## DevExpress Dashboard Extensions

This repository contains [dashboard extensions](https://docs.devexpress.com/Dashboard/117232) that allow you to add the additional functionality to the Web Dashboard. 

The following extensions are available:

- [Funnel D3](docs/funnel-d3-item.md)

    A custom **FunnelD3** item renders a funnel chart using the [D3Funnel](https://github.com/jakezatecky/d3-funnel/blob/master/README.md) JS library.

- [Online Map](docs/online-map-item.md)

    A custom **Online Map** item allows you to place callouts on Google or Bing maps using geographical coordinates.

- [Web Page](docs/webpage-item.md)

    A custom **Web Page** item displays a single web page or a set of pages.

- [Parameter Item](docs/parameter-item.md)

    A custom **Parameter** item renders [dashboard parameter dialog](https://docs.devexpress.com/Dashboard/117571) content inside the dashboard layout and allows you to edit and submit parameter values.

- [Simple Table](docs/simple-table-item.md)

    A custom **Simple Table** item renders data from the measure / dimensions as an HTML table.

- [Dashboard Panel](docs/dashboard-panel.md)

    The **Dashboard Panel** is an extension that displays a list of available dashboards and lets you switch between the [designer and viewer](https://docs.devexpress.com/Dashboard/120098) modes.

- [Polar Chart Item](docs/polar-chart-item.md)

    A custom **Polar Chart** item renders a polar chart using the [dxPolarChart](https://js.devexpress.com/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/) DevExtreme widget.

You can use these extensions as a base for your own dashboard item extension [development](https://docs.devexpress.com/Dashboard/117546).

- [Install a dashboard extension package](#install-a-dashboard-extension-package)
    - [Install scripts using npm](#install-scripts-using-npm)
    - [Download the latest version of scripts from GitHub](#download-the-latest-version-of-scripts-from-github)
- [Integrate dashboard extensions in the application](#integrate-dashboard-extensions-in-the-application)
    - [Modular approach](#modular-approach)
    - [Global namespaces approach](#global-namespaces-approach)
- [Development](#development)
- [License](#license)
- [Support & Feedback](#support--feedback)

## Install a dashboard extension package

You can install the required scripts **with npm** or download them **from the repository**:

### Install scripts using npm
Open a folder with the Web Dashboard application and run the following command:

```bash
npm install git+https://git@github.com/DevExpress/dashboard-extensions.git
```

Make sure that the [devexpress-dashboard](https://www.npmjs.com/package/devexpress-dashboard) package is installed.

### Download the latest version of scripts from GitHub
1. Download the latest version of scripts from [GitHub](https://github.com/DevExpress/dashboard-extensions/releases).
2. Copy the *dist* folder with scripts to your project with the Web Dashboard application.


## Integrate dashboard extensions in the application

You can now integrate the extensions to the Web Dashboard. Use one of the [approaches](https://docs.devexpress.com/Dashboard/119108): **modular approach** or **global namespaces approach**.


### Modular approach

Import the required modules and register extensions in code before the control is rendered: 

```javascript
    import { FunnelD3ItemExtension } from 'dashboard-extensions/dist/funnel-d3-item';
    import { OnlineMapItemExtension } from 'dashboard-extensions/dist/online-map-item';
    import { ParameterItemExtension } from 'dashboard-extensions/dist/parameter-item';
    import { WebPageItemExtension } from 'dashboard-extensions/dist/webpage-item';
    import { SimpleTableItemExtension } from 'dashboard-extensions/dist/simple-table-item';
    import { PolarChartItemExtension } from 'dashboard-extensions/dist/polar-chart-item';
    // ...
    export class DashboardComponent implements AfterViewInit {
        ngAfterViewInit(): void {
            // ...
            dashboardControl.registerExtension(new OnlineMapItemExtension(dashboardControl));
            dashboardControl.registerExtension(new FunnelD3ItemExtension(dashboardControl));
            dashboardControl.registerExtension(new WebPageItemExtension(dashboardControl));
            dashboardControl.registerExtension(new ParameterItemExtension(dashboardControl));
            dashboardControl.registerExtension(new SimpleTableItemExtension(dashboardControl));
            dashboardControl.registerExtension(new PolarChartItemExtension(dashboardControl));
            dashboardControl.render(); 
        }
    }

```

> Note that the Dashboard Panel extension consists of HTML, JavaScript, and CSS files and requires additional steps to integrate into the Web Dashboard. See a [Dashboard Panel](docs/dashboard-panel.md) instruction to learn details.

See [Client-Side Configuration (Modular Approach)](https://docs.devexpress.com/Dashboard/400409/) for more information on how to configure a client part of the Web Dashboard application for a modular approach.

### Global namespaces approach

1. Attach the downloaded scripts to the project inside the `<body>` section before the end tag onto the page containing Web Dashboard.

```html
<body>
    <!-- ... -->
    <script src="node_modules/d3/dist/d3.min.js"></script>
    <script src="node_modules/d3-funnel/dist/d3-funnel.min.js"></script>
    <script src="node_modules/dashboard-extensions/dist/funnel-d3-item.js"></script>
    <script src="node_modules/dashboard-extensions/dist/online-map-item.js"></script>
    <script src="node_modules/dashboard-extensions/dist/parameter-item.js"></script>
    <script src="node_modules/dashboard-extensions/dist/webpage-item.js"></script>
    <script src="node_modules/dashboard-extensions/dist/simple-table-item.js"></script>
    <script src="node_modules/dashboard-extensions/dist/polar-chart-item.js"></script>
</body>
```

2. Register extensions in code before the control is rendered:

```javascript
    DevExpress.Dashboard.ResourceManager.embedBundledResources();
    var dashboardControl = new DevExpress.Dashboard.DashboardControl(document.getElementById("web-dashboard"), { 
        // ...
    });
    // ...
    dashboardControl.registerExtension(new OnlineMapItemExtension(dashboardControl));
    dashboardControl.registerExtension(new FunnelD3ItemExtension(dashboardControl));
    dashboardControl.registerExtension(new WebPageItemExtension(dashboardControl));
    dashboardControl.registerExtension(new ParameterItemExtension(dashboardControl));
    dashboardControl.registerExtension(new SimpleTableItemExtension(dashboardControl));
    dashboardControl.registerExtension(new PolarChartItemExtension(dashboardControl));

    dashboardControl.render();
```

> Note that the Dashboard Panel extension consists of HTML, JavaScript, and CSS files and requires additional steps to integrate into the Web Dashboard. See a [Dashboard Panel](docs/dashboard-panel.md) instruction to learn details.

See [Client-Side Configuration (Global Namespaces)](https://docs.devexpress.com/Dashboard/119158/) for more information on how to configure a client part of the Web Dashboard application using the approach with global namespaces.

## Development

You can use a code of these extensions as a base for your own dashboard item extension [development](https://docs.devexpress.com/Dashboard/117546).

1. [Fork](https://help.github.com/articles/fork-a-repo/) your own copy of **DevExpress/dashboard-extensions** to your account.

2. Clone this repository to get a local copy of the repository and navigate to the folder.
    ```bash
    git clone https://github.com/{your-GitHub-account-name}/dashboard-extensions.git
    cd dashboard-extensions
    ```

3. Install [webpack](https://www.npmjs.com/package/webpack) and [webpack-cli](https://www.npmjs.com/package/webpack-cli) globally if required.
    ```bash
    npm install webpack webpack-cli -g
    ```
4. Install [npm](https://www.npmjs.com/get-npm).

    ```bash
    npm install
    ```
5. Install [devextreme](https://www.npmjs.com/package/devextreme), [@devexpress/analytics-core](https://www.npmjs.com/package/@devexpress/analytics-core) and [devexpress-dashboard](https://www.npmjs.com/package/devexpress-dashboard) packages.

    ```bash
    npm install devextreme @devexpress/analytics-core devexpress-dashboard
    ```

6. Edit extension's code in the **src** folder and save your changes.

7. Run webpack to bundle script files. See [webpack.config.js](https://github.com/DevExpress/dashboard-extensions/blob/master/webpack.config.js) for build configuration.
    ```bash
    webpack
    ```
    As a result, you can find the extension's script files in the repository's **dist** folder.

## License

These extensions are distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this article](https://docs.devexpress.com/Dashboard/117232/) for general information about custom extensions.
* To learn how to create a custom item, see the [Creating a Custom Item](https://docs.devexpress.com/Dashboard/117546/) article.
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
