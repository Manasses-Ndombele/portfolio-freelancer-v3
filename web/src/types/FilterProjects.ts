export type FilterTypes = "skills" | "categories";

export interface MainFilterTypes {
  value: string;
  _type: FilterTypes;
}

export interface FilterContextType {
  filter: MainFilterTypes;
  defineFilter: (f: MainFilterTypes) => void;
}
