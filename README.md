# WifiDevicesScannerAPI-JS

Finds devices connected to the same networks as you. Module made in Typescript

## Install

```
```

## How to use ? 

Create a instance of WifiDevicesScannerAPI

⚠️ Searching for a device may take a while

```javascript
const {WifiDevicesScannerAPI} =require('wifi-devices-scanner-api')

const instance = new WifiDevicesScannerAPI()
const connections = instance.findConnections(); // => [{Name, Address}]

const myWifiConnection = connections[0] // Select the type of connection on which you want to launch a scan, for wifi the name starts with w (wlan, wlp). Here is the first element of the table for me

console.log(await instance.findDevices(myWifiConnection))

//Output example:
// [
//   DeviceInfo { Address: '192.168.1.1', Name: 'box' },
//   DeviceInfo { Address: '192.168.1.23', Name: 'LAPTOP-4NVU9SON' },
//   DeviceInfo {
//     Address: '192.168.1.30',
//     Name: 'android-a4f889416fdaf0b2'
//   },
//   DeviceInfo { Address: '192.168.1.41', Name: 'DC-PC' },
//   DeviceInfo {
//     Address: '192.168.1.43',
//     Name: 'HUAWEI_P40_lite-f27a82d5f'
//   },
//   DeviceInfo { Address: '192.168.1.44', Name: 'RedmiNote8-xoemi' },
//   DeviceInfo { Address: '192.168.1.54', Name: 'RedmiNote8T-Redmi' },
//   DeviceInfo { Address: '192.168.1.90', Name: 'RedmiNote7-Redmi' },
//   DeviceInfo { Address: '192.168.1.99', Name: 'JulienArchLinux' }
// ]

```

The host name and address of devices connected to the same network as you are displayed