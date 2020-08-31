export class DeviceInfo {
    public Name: string;
    public Address: string;

    constructor(address: string, hostname:string) {
        this.Address = address;
        this.Name = hostname;
    }
}