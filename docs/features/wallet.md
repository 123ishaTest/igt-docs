---
id: wallet
title: Wallet
---

<!--- Introduction text, can be a bit personal -->
One of the first features I like to design in any language is the `Wallet`.
Its main purpose is to store and save currencies.
It should also be able to check if the player can afford something or not.

## Requirements
<!-- Everything that is needed for this feature to work -->
- Store currencies
- Check if the player can afford something
- Emit an event when currency is gained
- Apply currency multipliers if applicable
- Easily extendable with more currencies
- Save & Load

## Implementation
<!--- Implementation details -->
To avoid making typos regarding currencies, we declare an enum `CurrencyType`
```ts
export enum CurrencyType {
    Money = "Money",
    Secondary = "Secondary",
}
```

`Currency` then simply becomes
```ts
export class Currency {
    amount: number;
    type: CurrencyType;

    constructor(amount: number, type: CurrencyType) {
        this.amount = amount;
        this.type = type;
    }

    /**
     * Whether or not this currency is valid. Your game can have different rules
     */
    public isValid(): boolean {
        if (isNaN(this.amount)) {
            return false;
        }
        return this.amount > 0;
    }

    // Math methods as TS does not support operator overloading
    public add(amount: number) {
        this.amount += amount;
    }

    // Other math methods omitted
}
```

And the `Wallet` has to deal with storing the currencies

```ts
export class Wallet extends Feature {

    /**
     * Gain the specified currency and apply the global multiplier
     */
    public gainCurrency(currency: Currency): void {
        currency.multiply(this.getCurrencyMultiplier(currency.type));

        if (!currency.isValid()) {
            console.warn(`Could not add currency ${currency.toString()}`);
            return;
        }

        this._onCurrencyGain.dispatch(currency);
        this._currencies[currency.type] += currency.amount;
    }

    public hasCurrency(currency: Currency): boolean {
        return this._currencies[currency.type] >= currency.amount;
    }

    /**
     * Remove the currency amount from the specified currency.
     * IMPORTANT: This method does not care if amounts go negative
     * @param currency
     */
    public loseCurrency(currency: Currency) {
        if (!currency.isValid()) {
            console.warn(`Could not lose currency ${currency.toString()}`);
            return;
        }
        this._currencies[currency.type] -= currency.amount;
    }

    /**
     * Subtracts the specified currency and returns true if the wallet has enough.
     * Otherwise return false and don't subtract anything
     * @param currency
     * @constructor
     */
    public payIfPossible(currency: Currency): boolean {
        if (this.hasCurrency(currency)) {
            this.loseCurrency(currency);
            return true;
        }
        return false;
    }
}

```


### Multipliers
To avoid a dependency on `App.game`, the `Wallet` internally keeps track of a list of multipliers per `CurrencyType`.
If a `Feature` changes a multiplier (by for example buying an upgrade),
it needs to trigger a recalculation by emitting the `onCurrencyMultiplierChange` event.
`App.game` will then recalculate this multiplier and update the `Wallet`.

```ts
export class Wallet extends Feature {
    private _multipliers: Record<CurrencyType, number> = {} as Record<CurrencyType, number>

    public getCurrencyMultiplier(type: CurrencyType) {
        return this._multipliers[type] ?? 1;
    }

    public setCurrencyMultiplier(multiplier: number, type: CurrencyType) {
        this._multipliers[type] = multiplier;
    }
}
```

### Saving and Loading
Saving now becomes very straightforward. We only need to add each currency to the `WalletSaveData`.
```ts
// WalletSaveData.ts
export interface WalletSaveData extends SaveData {
    money: number;
    secondary: number;
}

// Wallet.ts
export class Wallet extends Feature {
    public save(): WalletSaveData {
        return {
            money: this.currencies[CurrencyType.Money],
            secondary: this.currencies[CurrencyType.Secondary],
        }
    }

    public load(data: WalletSaveData): void {
        this.currencies[CurrencyType.Money] = data.money ?? this.currencies[CurrencyType.Money];
        this.currencies[CurrencyType.Secondary] = data.secondary ?? this.currencies[CurrencyType.Secondary];
    }
}
```

:::info
You might think that declaring the currencies 3 times just to save them is a bit excessive.
It is possible to simply return `currencies` and save that.
This does however leave you with a bit less control when modifying saves as TS can't tell which attributes exist.
It's up to you!
:::

### Events
<!--- Events this feature emits -->
#### onCurrencyGain
Emitted whenever a currency is gained.
```ts
App.game.wallet.onCurrencyGain.subscribe(currency => {
    console.log("We gained", currency.amount, currency.type);
});
```



<!---
## TODO
Nothing yet...
-->

## See also 
- [src/ig-template/features/wallet](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/wallet)
