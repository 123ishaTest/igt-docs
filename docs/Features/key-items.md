---
id: key-items
title: Key Items
---

Key Items are a way to store some information when the player reaches a significant milestone.
Maybe a Rusty Key that grants access to a location, or a Quantum Spanner which boosts production by 20%.

## Requirements
- Title, description and image, to add some flavour

## Usage

```ts
const keyItems = new IgtKeyItems();
keyItems.registerKeyItem(new KeyItem(KeyItemId.Item1, "Item 1", "Grants access to something", "Maybe look over there?", "logo.png"))
keyItem.hasItem(KeyItemId.Item1); // False
keyItem.gainKeyItem(KeyItemId.Item1);
keyItem.hasKeyItem(KeyItemId.Item1); // True

keyItem.getKeyItem(KeyItemId.Item1).name; // Item 1
```

### Events
#### onKeyItemGain
Emitted whenever an Achievement is unlocked.
```ts
App.game.features.keyItems.onKeyItemGain.subscribe(keyItem => {
    console.log("KeyItem unlocked:", keyItem.name);
});
```

## See also 
- [src/ig-template/features/key-items/IgtKeyItems.ts](https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/key-items/IgtKeyItems.ts)
- [src/ig-template/features/key-items/KeyItem.ts](https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/key-items/KeyItem.ts)
