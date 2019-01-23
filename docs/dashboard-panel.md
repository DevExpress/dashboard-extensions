The **Dashboard Panel** is a [Web Dashboard extension](https://documentation.devexpress.com/#Dashboard/CustomDocument117232) that displays a list of available dashboards and lets you switch between the designer and viewer modes. 

![web-panel](https://user-images.githubusercontent.com/17986517/27797519-a6e7835c-6016-11e7-8abe-2331c9af6ccf.png)

You can see the dashboard panel in action by visiting the [DevExpress Web Dashboard Demo](https://demos.devexpress.com/Dashboard/).

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

<!--  
For SSH:
```bash
npm install git+ssh://git@github.com/DevExpress/dashboard-extensions.git
```
-->

### Download the latest version of scripts from GitHub
1. Download the latest version of scripts from [GitHub](https://github.com/DevExpress/dashboard-extensions/releases).
2. Copy the *dist* folder with scripts to your project with the Web Dashboard application.



## Integrate dashboard extensions in the application

You can now integrate the Dashboard Panel extension to the Web Dashboard. Use one of the [approaches](https://docs.devexpress.com/Dashboard/119108): **modular approach** or **global namespaces approach**. 


### Modular approach

1. Add the **dashboard-panel.html** file's content to the page containing the Web Dashboard inside the `<body>` section before the end tag.

2. Add the **dashboard-panel.css** stylesheet:

    ```css
    /* ... */
    @import url("../node_modules/dashboard-extensions/dist/dashboard-panel.css");
    ```

3. Import the required modules and register extensions in code before the control is rendered: 

    ```javascript
        import { CustomDashboardPanelExtension } from 'dashboard-extensions/dist/dashboard-panel';
        // ...
        export class DashboardComponent implements AfterViewInit {
            ngAfterViewInit(): void {
                // ...
                dashboardControl.registerExtension(new CustomDashboardPanelExtension(dashboardControl));
                dashboardControl.render(); 
            }
        }

    ```

See [Client-Side Configuration (Modular Approach)](https://docs.devexpress.com/Dashboard/400409/) for more information on how to configure a client part of the Web Dashboard application for a modular approach.

### Global namespaces approach

1. Attach the downloaded scripts to the project inside the `<body>` section before the end tag onto the page containing Web Dashboard.

```html
<body>
    <!-- ... -->
    <script src="node_modules/dashboard-extensions/dist/dashboard-panel.js"></script>
</body>
```

2. Add the **dashboard-panel.html** file's content to the page containing the Web Dashboard inside the `<body>` section before the end tag.

3. Attach the **dashboard-panel.css** stylesheet file:

    ```html
    <head>
        <!-- ... -->
        <link href="node_modules/dashboard-extensions/dist/dashboard-panel.css" rel="stylesheet" />
    </head>
    ```

4. Register extensions in code before the control is rendered:

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

    dashboardControl.render();
```

See [Client-Side Configuration (Global Namespaces)](https://docs.devexpress.com/Dashboard/119158/) for more information on how to configure a client part of the Web Dashboard application using the approach with global namespaces.

## API
The DashboardPanelExtension class contains the following public properties:

| Property | Description |
|--|--|
| **DashboardPanelExtension.allowSwitchToDesigner** | Gets or sets whether you can switch into the designer mode. This property control the visibility of the *Edit in Designer* button.  |
| **DashboardPanelExtension.name** | Gets a unique name of a Web Dashboard extension. The default value is 'dashboard-panel'. |
| **DashboardPanelExtension.panelWidth** | Gets or sets the width of the Dashboard Panel extension. The default value is 250 px. |
| **DashboardPanelExtension.visible** | Gets or sets whether the Dashboard Panel is visible. |


## Development 

<!--
You can use this extension code as a base for your own dashboard item extension [development](https://docs.devexpress.com/Dashboard/117546).

Before you start, we advise you to [fork](https://help.github.com/articles/fork-a-repo/) this repository and work with your own copy.

1. Clone this extension to get a local copy of the repository.
```Batchfile
git clone https://github.com/DevExpress/dashboard-extension-dashboard-panel.git
cd dashboard-extension-dashboard-panel
```

2. In this extension we use the [Node.js](https://nodejs.org/en/about/) toolset. Use the command below to install all modules listed as dependencies in the extension's **package.json** file.
```Batchfile
npm install
```

3. Then install [Gulp](http://gulpjs.com) to build the solution. You can install it globally...
```Batchfile
npm install -g gulp
gulp build
```

... or use a local Gulp version.
```Batchfile
.\node_modules\.bin\gulp build
```

You can find the resulting files at ```...\dashboard-extensions\dist```:
**dashboard-panel.js** and **dashboard-panel.min.js**.
-->

## License

This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Refer to [this section](https://documentation.devexpress.com/#Dashboard/CustomDocument117232) for general information about client-side extensions.
* To learn how to work with extensions, see the following [KB article](https://www.devexpress.com/Support/Center/Question/Details/T466716).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
