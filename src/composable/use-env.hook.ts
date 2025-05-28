export enum Env{
    API_API_URL = "VITE_API_URL"
}

export const useEnvConfig = (key:Env) => {
    return import.meta.env[key];
}