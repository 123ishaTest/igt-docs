---
id: items
title: Items
---

`Items` can be a big part of your game. If you're making an RPG-like game, all your weapons and ores can be implemented
as items. You are able to create new items by extending the `AbstractItem` class, and it will work perfectly with
the [Inventory](../features/inventory.md) and [ItemList](../features/item-list.md).

## Requirements

- Easily implement custom items

## Implementation

An `AbstractItem` is simply a dataclass, but it allows us to implement custom behaviour easily.

```ts title="src/ig-template/tools/item/AbstractItem.ts"
export abstract class AbstractItem {
    name: string;
    id: ItemId;
    type: ItemType;
    description: string;
    maxStack: number
}
```

Let's say we want a `Consumable` item. That can be used once to gain some benefit:

```ts title="src/ig-template/tools/item/Consumable.ts"
export abstract class AbstractConsumable extends AbstractItem {

    /**
     * What will be shown on the consume button
     */
    abstract consumeLabel: string;

    protected constructor(name: string, description: string, id: ItemId, type: ItemType, maxStack: number = Infinity) {
        super(name, description, id, type, maxStack);
    }

    /**
     * What to do when this item is consumed.
     */
    abstract consume(): void;

    /**
     * NOTE: your consumables can probably do something more clever here.
     * Make sure to override this method as needed.
     */
    consumeMultiple(amount: number): void {
        for (let i = 0; i < amount; i++) {
            this.consume()
        }
    }

    abstract canConsume(): boolean;
}
```

And now the real work, and actual item that can be consumed. The Money Pouch. When opened, it gives 10 Money when
opened.

```ts title="src/ig-template/tools/item/instances/MoneyPouch.ts"
export class MoneyPouch extends AbstractConsumable {
    consumeLabel: string = "Open";
    _wallet: Wallet;

    moneyToGain: number = 10;

    constructor(wallet: Wallet) {
        super('Money Pouch', 'Open for some coins', ItemId.MoneyPouch, ItemType.Consumable);
        this._wallet = wallet;
    }

    canConsume(): boolean {
        return true;
    }

    consume(): void {
        this._wallet.gainCurrency(new Currency(this.moneyToGain, CurrencyType.Money));
    }

    consumeMultiple(amount: number): void {
        this._wallet.gainCurrency(new Currency(this.moneyToGain * amount, CurrencyType.Money));
    }
}
```

You can also store custom data with each item. For example the amount of stones in a slingshot. This can be done by
overriding the `save()` and `load()` methods.
:::caution If an item has custom data, you should probably set its `maxStack` to 1 to avoid duplication.
:::

```ts
export class ItemWithData extends AbstractItem {
    customData: number;

    constructor(customData: number = 3) {
        super('Item with data', `This custom data is also saved`, ItemId.ItemWithData, ItemType.Default, 1);
        this.customData = customData;
    }

    save(): object {
        return {
            customData: this.customData
        }
    }

    load(data: any) {
        this.customData = data.customData ?? this.customData;
        this.description = `This custom data is also saved. It is now (${this.customData})`;
    }
}
```

## See also

- [src/ig-template/features/items/AbstractItem.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/items/AbstractItem.ts)
- [src/ig-template/features/items/AbstractConsumable.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/items/AbstractConsumable.ts)
- [src/ig-template/features/items/instances/AbstractDataItem.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/items/instances/AbstractDataItem.ts)
