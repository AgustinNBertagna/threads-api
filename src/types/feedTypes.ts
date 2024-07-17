export interface FeedQuery {
  country?: Country;
  quantity?: number;
}

export enum Country {
  USA = "US",
  EEUU = "EU",
  UK = "GB",
  ARG = "AR",
  MEX = "MX",
  BRA = "BR",
  JPN = "JP",
  IND = "IN",
}
