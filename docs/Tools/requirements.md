---
id: requirements
title: Requirements
---

<!--- Introduction text, can be a bit personal -->
Requirements are very important in incremental games, where features are often locked behind certain requirements.
The `Requirement` is an abstract class which makes the implementation more generic, and will be used many times in your game.
 
## Requirements (haha)
<!-- Everything that is needed for this feature to work -->
- Be as generic, and easily extendable, as possible 
- Get the completion progress
- Get a hint on completion conditions
- Variations for multiple requirements (One/All requirements from a list)

## Implementation
<!--- Implementation details -->
The abstract base class if very straightforward. It exposes a bunch of getters.
I use getters here because these methods should really be seen as attributes. They should not perform any logic, just access data.

```ts title=""src/ig-template/tools/requirements/Requirement.ts"
export abstract class Requirement {

    get isCompleted(): boolean {
        return this.actualValue >= this.targetValue;
    }

    get progress(): Progress {
        return new Progress(Math.min(this.actualValue, this.targetValue), this.targetValue);
    }

    abstract get hint(): string;

    abstract get actualValue(): number;

    abstract get targetValue(): number;
}
```

We can extend this for example with a `CurrencyRequirement`:

```ts title="src/ig-template/features/wallet/CurrencyRequirement.ts"
export class CurrencyRequirement extends Requirement {

    private _wallet: Wallet;
    amount: number;
    type: CurrencyType;

    get actualValue(): number {
        return this._wallet.getAmount(this.type);
    }

    get targetValue(): number {
        return this.amount;
    }

    get hint(): string {
        return `Have ${this.amount} ${this.type}`;
    }

}
```
Extend `Requirement` with whatever you like! I expect your game will have a ton of custom requirements.
## See also 
- [src/ig-template/tools/requirements/](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/requirements)
- [src/ig-template/tools/requirements/Requirement.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/requirements/Requirement.ts)
- [src/ig-template/tools/requirements/CustomRequirement.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/requirements/CustomRequirement.ts)
- [src/ig-template/features/wallet/CurrencyRequirement.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/wallet/CurrencyRequirement.ts)
