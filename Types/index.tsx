type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
};

export type UsersState = {
  data: User[];
  loading: boolean;
  error?: string;
};

export type ReduxState = {
  users: UsersState;
};
