# WifiDevicesScannerAPI-JS

Finds devices connected to the same networks as you. Module made in Typescript

## Install

```
```

## How to use ? 

Create a instance of WifiDevicesScannerAPI

```javascript
const {WifiDevicesScannerAPI} =require('wifi-devices-scanner-api')

const instance = new WifiDevicesScannerAPI()
const connections = instance.findConnections(); // => [{Name, Address}]

const myWifiConnection = connections[0] // Select the type of connection on which you want to launch a scan, for wifi the name starts with w (wlan, wlp). Here is the first element of the table for me

console.log(await instance.findDevices())

```

The host name and address of devices connected to the same network as you are displayed