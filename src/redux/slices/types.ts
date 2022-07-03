export type Flowers = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
  type: string;
  filter: string;
};

export type LoginForm = {
  login: string;
  password: string;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}


export interface FlowersSliceState {
  items: Flowers[];
  status: Status;
  oneItem: Flowers;
  cart: Flowers[]
  auth: boolean;
  jwt: string;
}