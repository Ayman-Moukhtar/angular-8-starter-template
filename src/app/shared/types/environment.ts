declare global {
  interface Window { CLIENT_ID: string; }
}

type TEnvironment = {
  name: string,
  production: boolean,
  apiBaseUrl: string
};

export { 
  TEnvironment 
};