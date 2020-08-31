import { networkInterfaces } from 'os';
const dns = require('dns');
import { ConnectionInfo } from './Models/ConnectionInfo';
import { DeviceInfo } from './Models/DeviceInfo';

export class NetworkDevicesScannerAPI {
    public findConnections(): ConnectionInfo[] {
        const nets = networkInterfaces();
        const results: ConnectionInfo[] = []

        for (const name of Object.keys(nets)) {
            for (const net of nets[name]) {
                // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
                if (net.family === 'IPv4' && !net.internal) {
                    const newConnectionInfo = new ConnectionInfo(name);
                    if (!results.find(x => x.Name == name)) {
                        results.push(newConnectionInfo);
                    }
                    newConnectionInfo.setAddress(net.address);
                }
            }
        }

        return results;
    }

    public async findDevices(connectionSelected: ConnectionInfo): Promise<DeviceInfo[]> {
        const results: DeviceInfo[] = [];

        const globalAddress = this.getFormattedAddress(connectionSelected.Address);
        const addressToTests: string[] = this.generateAddressListToTest(globalAddress);

        await Promise.all(addressToTests.map(async (address) => {
            let addressHostname = await this.getHostname(address)
            if (addressHostname) {
                results.push(new DeviceInfo(address, addressHostname));
            }
        }));

        return results;
    }

    private generateAddressListToTest(globalAddress: string): string[] {
        const addressToTests: string[] = [];

        for (let i = 0; i < 255 + 1; i++) {
            let lastValue = i.toString();
            addressToTests.push(`${globalAddress}.${lastValue}`);
        }

        return addressToTests;
    }

    private getFormattedAddress(address: string): string {
        const cuttedAddress = address.split('.');
        cuttedAddress.splice(-1, 1);

        return cuttedAddress.join('.');
    }

    private async getHostname(ip: string): Promise<string> {
        try {
            const result = await dns.promises.reverse(ip);
            return result ? result[0]: '';
        } catch (error) {
            return '';
        }
    }
}