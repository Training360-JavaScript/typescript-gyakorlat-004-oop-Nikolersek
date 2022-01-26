// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, "Superman", "male", 100, 5),
    new HumanHero(2, "Batman", "male", 100, 2),
    new HumanHero(3, "Agent Carter", "female", 101, 3)
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1, "blabla", 2, 3, "stb"),
    new TransformerHero(1, "blabla", 2, 3, "stb"),
    new TransformerHero(1, "blabla", 2, 3, "stb")
];
