---
id: loot-tables
title: Loot Tables
---

Loot Tables are very useful. You can use them for monster drop tables, opening card packs in a CCG,
~~or cash out and sell loot boxes~~. The `LootTable` allows you to combine different rewards.
So you can gain a [Key Item](../Features/key-items.md) or a [Currency](../Features/wallet.md) from the same table.

In the demo application, all `LootTable`s are store in a `Feature`.
This is not strictly necessary, but it's the easiest way to inject features into them and reuse tables.

## Requirements
- View possible rewards before rolling
- View rewards after rolling
- Roll on other tables
- Easily create new reward types
- Lock drops behind [Requirements](./requirements.md)

## Usage
```ts
// Create a new loot table
const table = new LootTable(LootTableId.Example, [
    // Always
    new CurrencyEntry(new IntRange(100, 200), CurrencyType.Money, wallet)
], [
    // One Of
    new InventoryItemEntry(itemList[ItemId.RawFish], inventory, 1, new IntRange(2, 3)),
    new InventoryItemEntry(itemList[ItemId.CookedFish], inventory),
], [
    // Any Of
    new KeyItemEntry(keyItems.getKeyItem(KeyItemId.Item1), keyItems, 0.5),
    new TableEntry(LootTableId.Example, lootTables, 0.05),
    new InventoryItemEntry(itemList[ItemId.MoneyPouch], inventory, 1, new IntRange(3, 5)),
])

table.roll() // AbstractLoot[], already applied
```
## Implementation
If we need to create a custom `Loot` type, we need to extend the `AbstractEntry`, which is a part of the table.
And we have to extend the `AbstractLoot`, which is the actual reward that can be applied.

In this example we will implement loot that gains a [Key Item](../Features/key-items.md).
```ts
export class KeyItemEntry extends AbstractLootEntry {
    _keyItems: KeyItems;
    item: KeyItem;

    constructor(item: KeyItem, KeyItems: KeyItems, weight: number = 1, requirement: Requirement = new NoRequirement()) {
        super(weight, new IntRange(1, 1), requirement);
        this.item = item;
        this._keyItems = KeyItems;
    }

    getLoot(): KeyItemLoot[] {
        if (!this.canGet() || this._keyItems.hasKeyItem(this.item.id)) {
            return [];
        }
        return [new KeyItemLoot(this.item, this._keyItems)];
    }
}
```

```ts
export class KeyItemLoot extends AbstractLoot {
    loot: KeyItem;
    _keyItems: KeyItems;

    constructor(loot: KeyItem, keyItems: KeyItems) {
        super(1);
        this.loot = loot;
        this._keyItems = keyItems;
    }

    /**
     * Actually award the loot-tables
     */
    apply(): void {
        this._keyItems.gainKeyItem(this.loot.id);
    }

    /**
     * Override to implement comparisons. Used for simplifying the list of loot
     */
    equals(other: AbstractLoot): boolean {
        return other instanceof KeyItemLoot && other.loot.id === this.loot.id;
    }

}
```

## See also
- [src/ig-template/tools/loot-tables/LootTable.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/loot-tables/LootTable.ts)
- [src/ig-template/tools/loot-tables/rewards/IgtLoot.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/loot-tables/rewards/IgtLoot.ts)
- [src/ig-template/tools/loot-tables/entries/IgtLootEntry.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/loot-tables/entries/IgtLootEntry.ts)
- [src/ig-template/tools/loot-tables/entries/TableEntry.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/loot-tables/entries/TableEntry.ts)
