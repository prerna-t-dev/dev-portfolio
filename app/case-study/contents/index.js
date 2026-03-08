import ScoopContent from "./scoop";
import MoziWashContent from "./moziwash";
import CounterCultureCoffeeContent from "./counter-culture-coffee";

/** Map case study slug → content component. Add new case studies here and create a new file in contents/. */
export const caseStudyContents = {
  scoop: ScoopContent,
  moziwash: MoziWashContent,
  "counter-culture-coffee": CounterCultureCoffeeContent,
};
