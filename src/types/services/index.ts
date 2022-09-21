export interface GetResipesResponse {
  q: string;
  from: number;
  to: number;
  more: boolean;
  count: number;
  hits: Hit[];
}

export interface Hit {
  recipe: Recipe;
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: CuisineType[];
  mealType: MealType[];
  dishType: string[];
  totalNutrients: { [key: string]: Total };
  totalDaily: { [key: string]: Total };
  digest: Digest[];
}

export enum CuisineType {
  American = 'american',
  Mexican = 'mexican',
  SouthAmerican = 'south american',
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: SchemaOrgTag | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: Unit;
  sub?: Digest[];
}

export enum SchemaOrgTag {
  CarbohydrateContent = 'carbohydrateContent',
  CholesterolContent = 'cholesterolContent',
  FatContent = 'fatContent',
  FiberContent = 'fiberContent',
  ProteinContent = 'proteinContent',
  SaturatedFatContent = 'saturatedFatContent',
  SodiumContent = 'sodiumContent',
  SugarContent = 'sugarContent',
  TransFatContent = 'transFatContent',
}

export enum Unit {
  Empty = '%',
  G = 'g',
  Kcal = 'kcal',
  Mg = 'mg',
  Μg = 'µg',
}

export interface Ingredient {
  text: string;
  quantity: number;
  measure: null | string;
  food: string;
  weight: number;
  foodCategory: null | string;
  foodId: string;
  image: null | string;
}

export enum MealType {
  LunchDinner = 'lunch/dinner',
}

export interface Total {
  label: string;
  quantity: number;
  unit: Unit;
}
