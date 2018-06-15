# STJÓRNA

STJÓRNA was created to have an easy product management with the possibility to access the categories and products over an simple just readable REST API.

![stjorna logo](https://stjorna.secanis.ch/docs/images/stjorna_klein_compressor.png "STJÓRNA Logo")

## Features

STJÓRNA is islandic and means something like manage or store stuff.
The two main goal of STJÓRNA are to be very simple in the setup and configuration effort. The second goal was to publish and share the stored data over an REST API with other applications, maybe your website.

## Get Started

You have two possibilities how you can start/deploy STJÓRNA:

### Docker

You can directly pull the official Docker image from Docker Hub.

``` bash
docker pull secanis/stjorna
docker run -p 80:3000 secanis/stjorna
```

### NodeJS

Download the compressed package and unpack it in a NodeJS environment. Default Port is 3000.

``` bash
node server.js
```

## Configuration

### ENV Variables

| Variable                       | Default       | Description                                               |
| ------------------------------ | ------------- | --------------------------------------------------------- |
| STJORNA_SERVER_PORT            | 3000          | Port for the Node server                                  |
| STJORNA_SERVER_MAX_UPLOAD      | 5mb           | Max image upload size, defined for Express                |
| STJORNA_LOGLEVEL               | error         | Loglevel                                                  |
| STJORNA_CRON_CLEANUP_INTERVAL  | */30 * * * *  | Cronjob interval to cleanup the storage                   |
| STJORNA_SERVER_STORAGE         | process.cwd() | Default path is in the path of the server.js data folder  |

### Remote REST API

For your third party application, in which one you want to use the public REST API, you can use the following documentation. You can load the active categories and products over this REST API including your API Key/Token.

[Remote REST API Documentation](https://stjorna.secanis.ch/apidoc/index.html)

## Screenshots

![stjorna login page](https://stjorna.secanis.ch/docs/images/stjorna_login.png "STJÓRNA Login Page")

![stjorna dashboard page](https://stjorna.secanis.ch/docs/images/stjorna_dashboard.png "STJÓRNA Dashboard Page")

![stjorna settings page](https://stjorna.secanis.ch/docs/images/stjorna_settings.png "STJÓRNA Settings Page")