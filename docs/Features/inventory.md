---
id: inventory
title: Inventory
---

The `Inventory` is a known concept. It can keep track of [Items](../Tools/items.md), and display them to the player.
It should also be able to check if you have enough items to perform certain actions.


## Requirements
- Keep track of `AbstractItem`s
- Make it easy to gain and lose items of a specific `ItemId`
- Items can contain optional data
- Drag and drop support
- Allow merging and swapping items

## Usage
<!--- Example script that displays most of the functionality -->

## Implementation
Internally the Inventory uses the `InventorySlot` class.
It is a simple data class with a few helper methods.
```ts
export class InventorySlot {
    item: AbstractItem;
    amount: number;

    isEmpty(): boolean {
    };

    isFull(): boolean {
    };

    gainItems(amount: number) {
    };
}
```
Note how it contains the actual `AbstractItem`, not just a reference to its id.
This allows us to store additional data in items, like durability of a weapon.
#### Events
<!--- Events this feature emits -->

#### onItemGain
Emitted whenever an item is gained.
```ts
App.game.features.inventory.onItemGain.subscribe((item, amount) => {
    console.log("Something happened", data);
});
```

## See also
- [src/ig-template/features/inventory/IgtInventory.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/inventory/IgtInventory.ts)
- [src/ig-template/features/inventory/InventorySlot.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/features/inventory/InventorySlot.ts)
