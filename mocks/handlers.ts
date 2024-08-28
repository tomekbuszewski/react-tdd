import { activities } from "./activities/activities.ts";
import { signin } from "./signin/signin.ts";

export const handlers = [...activities, ...signin];
