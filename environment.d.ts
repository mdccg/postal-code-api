declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URI: string;
      APP_PORT: string;
    }
  }
}

export {};