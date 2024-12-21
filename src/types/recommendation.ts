export interface SoilParameters {
  ph: string;
  moisture: string;
  texture: string;
  organicMatter: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
}

export interface ClimateParameters {
  temperature: string;
  rainfall: string;
  humidity: string;
  sunlight: string;
}

export interface RecommendationFormData {
  soil: SoilParameters;
  climate: ClimateParameters;
}