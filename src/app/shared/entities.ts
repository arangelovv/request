export type ReqType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'OPTIONS'
  | 'HEAD';

export interface Request {
  requestName: string;
  requestType: ReqType;
  requestUrl: string;
}

export interface Collection {
  collectionName: string;
  collectionDescription: string;
  collectionRequests?: Request[];
}

export const exampleEntities: Collection[] = [
  {
    collectionName: 'Styleguide',
    collectionDescription: 'Bullshit, Bullshit, Bullshit, Bullshit',
  },
  {
    collectionName: 'Product API',
    collectionDescription: 'Bullshit, Bullshit, Bullshit, Bullshit',
    collectionRequests: [
      {
        requestName: 'Get Users',
        requestType: 'GET',
        requestUrl: 'mock/api/users',
      },
    ],
  },
];
