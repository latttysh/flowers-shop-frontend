export type Flowers = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  type: string;
  filter: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}


export interface FlowersSliceState {
  items: Flowers[];
  status: Status;
  oneItem: Flowers;
}