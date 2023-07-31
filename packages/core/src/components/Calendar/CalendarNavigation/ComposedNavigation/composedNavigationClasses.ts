import { getClasses } from "@core/utils/classes";

export interface HvComposedNavigationClasses {
  navigationContainer?: string;
  navigationMonth?: string;
}

const classKeys: (keyof HvComposedNavigationClasses)[] = [
  "navigationContainer",
  "navigationMonth",
];

const composedNavigationClasses = getClasses(classKeys, "HvComposedNavigation");

export default composedNavigationClasses;
