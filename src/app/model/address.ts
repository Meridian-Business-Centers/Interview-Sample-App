export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo : Geo;
}

export class Geo {
    lat: number;
    lng: number;
}