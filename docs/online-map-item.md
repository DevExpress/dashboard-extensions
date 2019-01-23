The **Online Map** extension is a [custom dashboard item](https://docs.devexpress.com/Dashboard/117546/) that allows you to place callouts on Google or Bing maps using geographical coordinates.

This custom item supports the [Master-Filtering](https://docs.devexpress.com/Dashboard/117060) feature.

You can use this extension as a base for your own dashboard item extension [development](https://docs.devexpress.com/Dashboard/117546).

- [Install a dashboard extension package](#install-a-dashboard-extension-package)
    - [Install scripts using npm](#install-scripts-using-npm)
    - [Download the latest version of scripts from GitHub](#download-the-latest-version-of-scripts-from-github)
- [Integrate dashboard extensions in the application](#integrate-dashboard-extensions-in-the-application)
    - [Modular approach](#modular-approach)
    - [Global namespaces approach](#global-namespaces-approach)
- [Development](#development)

## Install a dashboard extension package

You can install the required scripts **with npm** or download them **from the repository**:

### Install scripts using npm
Open a folder with the Web Dashboard application and run the following command:

```bash
npm install git+https://git@github.com/DevExpress/dashboard-extensions.git
```

### Download the latest version of scripts from GitHub
1. Download the latest version of scripts from [GitHub](https://github.com/DevExpress/dashboard-extensions/releases).
2. Copy the *dist* folder with scripts to your project with the Web Dashboard application.


## Integrate dashboard extensions in the application

You can now integrate the extensions to the Web Dashboard. Use one of the [approaches](https://docs.devexpress.com/Dashboard/119108): **modular approach** or **global namespaces approach**.


### Modular approach

Import the required modules and register extensions in code before the control is rendered: 

```javascript    
    import { OnlineMapItemExtension } from 'dashboard-extensions/dist/online-map-item';
    // ...
    export class DashboardComponent implements AfterViewInit {
        ngAfterViewInit(): void {
            // ...
            dashboardControl.registerExtension(new OnlineMapItemExtension(dashboardControl));
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
    <script src="node_modules/dashboard-extensions/dist/online-map-item.js"></script>
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

    dashboardControl.render();
```

Note that Map JavaScript API applications require an authentication key of a certain provider. Use the dxMap's [key](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxMap/Configuration/key/) attribute to provide authentication keys.

For details about authentication keys, refer to the required map provider documentation (e.g., [Google](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en) or [Bing](https://msdn.microsoft.com/en-us/library/ff428642.aspx)).

See [Client-Side Configuration (Global Namespaces)](https://docs.devexpress.com/Dashboard/119158/) for more information on how to configure a client part of the Web Dashboard application using the approach with global namespaces.

## Custom Settings
The **Online Map** dashboard item supports the following settings that you can configure in the Web Dashboard UI:

![online-map-item](~/images/online-map-item.png)

* **Provider** - Specifies whether to show Google or Bing maps.
* **Type** - Specifies the map type. You can choose between RoadMap, Satellite or Hybrid.
* **Display Mode** - Specifies whether to show markers or routes.


## Development 
<!--
You can use this extension code as a base for your own dashboard item extension [development](https://docs.devexpress.com/Dashboard/117546).

Before you start, we advise you to [fork](https://help.github.com/articles/fork-a-repo/) this repository and work with your own copy.

1. Clone this extension to get a local copy of the repository.
```Batchfile
git clone https://github.com/DevExpress/dashboard-extension-online-map-item.git
cd dashboard-extension-online-map-item
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
**online-map-extension.js** and **online-map-extension.min.js**.

-->