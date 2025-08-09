import { IoniconName } from "~/data/Ionicons";

/*******************************************
 * Get the icon name for the type of project this is

 */
export function projectToIcon(type: string): IoniconName {
  return type == "media"
    ? "film-outline"
    : type == "design"
    ? "color-filter-outline"
    : "code-outline";
}
