export class ConnectionInfo {
    public Name: string;
    public Address: string ="";

    constructor(name: string) {
        this.Name = name;
    }

    setAddress(address: string) {
        this.Address = address;
    }
}