type CompanyData = {
  name: string;
  bs: string;
  catchPhrase: string;
};

type GeoData = {
  lat: string;
  lng: string;
};
type AddressData = {
  city: string;
  geo: GeoData;
  street: string;
  suite: string;
  zipcode: string;
};

export default interface UserData {
  email?: string;
  name?: string;
  company?: CompanyData;
  id?: number;
  phone?: string;
  username?: string;
  website?: string;
  address?: AddressData;
}
