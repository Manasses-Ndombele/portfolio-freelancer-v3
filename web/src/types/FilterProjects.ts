export type FilterKey =
  | "all"
  | "sales"
  | "branding"
  | "webSystems"
  | "automations"
  | "others";

export interface FilterContextType {
  filter: FilterKey | string;
  defineFilter: (f: FilterKey | string) => void;
}
