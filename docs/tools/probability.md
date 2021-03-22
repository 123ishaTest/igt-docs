---
id: probability
title: Probability
---

<!--- Introduction text, can be a bit personal -->
Randomness is a tricky thing to get right. Ideally you have all your randomness from the same source. This makes it much
easier to validate, and dismiss players complaining about RNG with confidence. The only way for the droprate on item X
to be broken, is if it were broken everywhere in your game.

## Requirements

- It should be complete, the developer should never have to use `Math.random()` in their own scripts
- Support all basic operations
- Support custom types. Any type should be able to be drawn from a distribution

## Usage
```ts
// integer between min (inclusive) and max (exclusive)
const number = Random.intBetween(10, 20);

// 1 in 1000 chance to be true
const isLegendary = Random.booleanWithOneInChance(1000);

// 50% chance to be true
const fiftyFifty = Random.booleanWithProbability(0.5)

// Random element from array
const element = Random.fromArray([1, 4]);

// Weighted distribution (weights don't have to be normalized)
const distribution = new WeightedDistribution([
    new Outcome<number>(1, 0.01),
    new Outcome<number>(2, 0.99),
]);

distribution.draw() // 1 or 2, but probably 2


// Add requirements to Outcomes!
const distributionWithRequirements = new WeightedDistribution([
    new Outcome<number>(1, 0.01),
    new Outcome<number>(2, 0.99, new BooleanRequirement('always false', () => false)),
]);

distribution.draw() // 1

// Draw custom objects
class MyObject {
    itemId: string;
    description: string;
}

const weapon = new MyObject('weapon', 'to attack with');
const shield = new MyObject('shield', 'to block with');

const distributionWithCustomObjects = new WeightedDistribution([
    new Outcome<MyObject>(weapon, 1),
    new Outcome<MyObject>(shield, 1),
]);

distributionWithCustomObjects.draw() // The 'weapon' or 'shield' object
```

## TODO
- Add more distributions (gaussian, uniform)

## See also
- [src/ig-template/tools/probability/Random.ts](https://github.com/123ishaTest/incremental-game-template/blob/master/src/ig-template/tools/probability/Random.ts)
- [src/ig-template/tools/probability/Outcome.ts](https://github.com/123ishaTest/incremental-game-template/blob/master/src/ig-template/tools/probability/Outcome.ts)
- [src/ig-template/tools/probability/WeightedDistribution.ts](https://github.com/123ishaTest/incremental-game-template/blob/master/src/ig-template/tools/probability/WeightedDistribution.ts)
