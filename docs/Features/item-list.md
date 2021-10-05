---
id: item-list
title: Item List
---

The `ItemList` is a `Feature` that can supply other Features with [Items](../Tools/items.md).
It is closely related to the [Inventory](./inventory.md).
## Requirements

- Supply a fresh instance of any item when requested
- Be able to inject all features in these items.

## Usage
With a full game, all you need to do is store a reference to the ItemList in the Feature you want to use it in.
```ts
export class MyFeature {
    _itemList: ItemList
    
    initialize(features: Features) {
        this._itemList = features.itemList;
    }
    
    update(delta: number) {
        const moneyPouch: MoneyPouch = this._itemList.moneyPouch;
    }
}
```
Or you can set it up from scratch
```ts
const itemList = new ItemList();
const wallet = new IgtWallet([CurrencyType.Money]);
itemList.initialize({
    wallet: wallet,
})

const moneyPouch = itemList.moneyPouch;
moneyPouch.consume();

wallet.money // 10
```

## Implementation
All items are implemented as `get`ters. This keeps the implementation clean.
```ts
export class ItemList extends Feature {

    // Overridden in the initialize
    _features = undefined as unknown as Features

    constructor() {
        super('item-list');
    }

    initialize(features: Features) {
        super.initialize(features);
        // Store all the features in case we need them
        this._features = features;
    }

    get moneyPouch(): MoneyPouch {
        // The ItemList is responsible for injecting the Wallet
        return new MoneyPouch(this._features.wallet)
    }
}
```
:::danger
The name of the items' getter, should be exactly the same as the value of the `ItemId`. That is how items are loaded.
:::


## See also
- [src/ig-template/features/item-list/IgtItemList.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/item-list/IgtItemList.ts)

