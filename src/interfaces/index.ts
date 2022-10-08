export interface ILocation {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: string;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}
