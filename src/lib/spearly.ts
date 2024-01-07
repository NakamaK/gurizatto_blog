import { SpearlyApiClient } from "@spearly/sdk-js";

const API_DOMAIN = "api.spearly.com"

export const spearlyApiClient = 
  new SpearlyApiClient(import.meta.env.SPEARLY_API_KEY, API_DOMAIN)
