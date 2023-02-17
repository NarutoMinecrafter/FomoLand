export interface Env {
  PORT: string;
  TRAITSNIPER_API_URL: string;
  TRAITSNIPER_API_KEY: string;
  MORALIS_API_KEY: string;
}

export declare global {
  namespace NodeJS {
    type ProcessEnv = Env;
  }
}
