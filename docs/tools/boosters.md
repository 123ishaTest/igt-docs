---
id: boosters
title: Boosters
---

`Boosters` introduce a neat mechanic where the player can sacrifice one type of resource to gain a temporary boost.
You can use them for burn of excess resources with harsh diminishing returns.

## Requirements
- Multiple booster tiers
- Requirements per tier
- Automatically turn off if the player can't afford

## Usage
```ts
export class ExampleFeature extends UpgradesFeature {
    initialize() {
        this.booster = new Booster("Boost your experience gain by spending money every second", [
            new BoosterTier([new Currency(10, CurrencyType.Money)], 1.5, "1.5x"),
            new BoosterTier([new Currency(100, CurrencyType.Money), new ImpossibleRequirement()], 2, "2x"),
            new BoosterTier([new Currency(1000, CurrencyType.Money)], 3, "3x"),
        ], this._wallet, 1);
        
        this.booster.selectTier(2);
    }

    update(delta: number) {
        // Automatically apply costs based on delta and scale down if can't afford
        const boosterBonus = this.booster.perform(delta);
        
        const moneyToGain = 3 * boosterBonus;
    }
}
```

## See also 
- [src/ig-template/tools/boosters/Booster.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/tools/boosters/Booster.ts)
- [src/ig-template/tools/boosters/BoosterTier.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/tools/boosters/BoosterTier.ts)
