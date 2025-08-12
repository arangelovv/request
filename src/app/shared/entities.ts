export interface EnviromentVariable {
  key: string | undefined;
  value: string | undefined;
  description: string | undefined;
}

type AuthType = 'none' | 'basic' | 'bearer';

export interface AuthCredentials {
  username?: string;
  password?: string;
  token?: string;
}

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
  collectionEnvVariables?: EnviromentVariable[];
  authType: AuthType;
  authCredentials?: AuthCredentials;
}

export const exampleEntities: Collection[] = [
  {
    collectionName: 'Styleguide',
    collectionDescription: 'Bullshit, Bullshit, Bullshit, Bullshit',
    authType: 'none',
  },
  {
    collectionName: 'Product API',
    collectionDescription: 'Bullshit, Bullshit, Bullshit, Bullshit',
    authType: 'none',
    collectionRequests: [
      {
        requestName: 'Get all Users',
        requestType: 'GET',
        requestUrl: 'mock/api/users',
      },
      {
        requestName: 'Get all Users',
        requestType: 'PUT',
        requestUrl: 'mock/api/users',
      },
      {
        requestName: 'Get all Users',
        requestType: 'POST',
        requestUrl: 'mock/api/users',
      },
      {
        requestName: 'Get all Users',
        requestType: 'DELETE',
        requestUrl: 'mock/api/users ',
      },
      {
        requestName: 'Get all Users',
        requestType: 'PATCH',
        requestUrl: 'mock/api/users',
      },
    ],
  },
];
