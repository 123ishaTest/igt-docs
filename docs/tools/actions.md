---
id: actions
title: Actions
---

`Actions` are of use for all games. Basically any operation that takes some time with some sort of outcome can be implemented as an Action.
Actions can be repeated for when you want to gather resources, or singular when constructing a building.
There are also `RecipeActions` that take an input/output to transform items in your [Inventory](../features/inventory).

## Requirements
- Easy to implement custom behaviour
- Allow repetition of actions
- Notify when action is completed

## Usage
```ts
const fishAction = new GainItemAction(ItemId.RawFish, 'Fish', 3, features.inventory, features.itemList);

const delta = 0.2;
fishAction.perform(delta);
```

## Implementation
We can create our custom Action by overriding the `AbstractAction.ts`.
If we want an action to reward an [Items](./items.md) for example.

```ts title="src/ig-template/actions/GainItemAction.ts"
export class GainItemAction extends AbstractAction {

    itemId: ItemId;

    _inventory: Inventory;
    _itemList: ItemList;

    constructor(itemId: ItemId, description: string, duration: number, inventory: Inventory, itemList: ItemList) {
        super(description, duration);
        this.itemId = itemId;
        this._inventory = inventory;
        this._itemList = itemList;
    }

    gainReward(): boolean {
        this._inventory.gainItem(this._itemList[this.itemId]);
        return true;
    }

}
```
#### Events
<!--- Events this feature emits -->
#### onCompletion
Emitted whenever this action is completed. Not that actions can be repeated and thus completed multiple times.
```ts
App.game.features.feature.action.onCompletion.subscribe(action => {
    console.log("Completed", action.description);
});
```

## See also 
- [src/ig-template/tools/actions](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/tools/actions)
- [src/ig-template/tools/actions/AbstractAction.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/tools/actions/AbstractAction.ts)
- [src/ig-template/tools/actions/GainItemAction.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/tools/actions/GainItemAction.ts)
