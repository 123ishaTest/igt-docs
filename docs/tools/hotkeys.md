---
id: hotkeys
title: Hotkeys
---

<!--- Introduction text, can be a bit personal -->
Navigating Incremental Games can sometimes be a bit of a pain.
In my opinion, a games' difficulty should not come from its UI.
Hotkeys can improve User Experience by allowing the user to navigate tabs or claim resources with a single button press.

## Requirements
<!-- Everything that is needed for this feature to work -->
- Work on all keyboard layouts
- Disable keybinds on request
- Possibility to add a [Requirement](requirements.md) to a keybind
- Get an overview of all registered keybinds

## Usage
```ts
// Create your first keybind.
const keyBind = new KeyBind("shift+x",
    "Do a thing", () => {
        console.log("shift + x pressed!");
        // Additional logic
    }, KeyEventType.KeyUp
);

// And register it.
HotKeys.addKeyBind(keyBind);

// Get a list of descriptions for the registered keybinds.
HotKeys.getKeyBindDescriptions().forEach(keyBind => {
    console.log(keyBind.keys) // "shift+x"
    console.log(keyBind.description) // "Do a thing"
})

// This callback only triggers if the condition is met.
const keyBindWithRequirement = new KeyBind("ctrl+a",
    "Do another thing", () => {
        console.log("ctrl + a pressed!");
        // Additional logic
    }, new CurrencyRequirement(10, CurrencyType.Money)
);
HotKeys.addKeyBind(keyBindWithRequirement);

// Or use a custom condition.
const keyBindWithCustomCondition = new CustomConditionKeyBind("x",
    "Only works on wednesdays", () => {
        // Perform some logic
    }, () => {
        return new Date().getDay() === 3;
    })

// Manually trigger a callback.
HotKeys.trigger("ctrl+a");
```


## Implementation
<!--- Implementation details -->
I decided to use the [Mousetrap library](https://craig.is/killing/mice).
It works very well and handles different keyboard layouts for us automatically!

We need to pass the event type to Mousetrap. The following types are supported.
```ts title="src/ig-template/tools/hotkeys/KeyEventType.ts"
export enum KeyEventType {
    KeyPress = "keypress",
    KeyDown = "keydown",
    KeyUp = "keyup"
}
```

A `KeyBind` is a fairly simple data class.
```ts title="src/ig-template/tools/hotkeys/KeyBind.ts"
export class KeyBind {
    keys: string | string[];
    description: string;
    callback: Function;
    requirement: Requirement;
    eventType: KeyEventType;
}
```

On top of that a list of keybinds need to be kept such that you can always request a list of them.
```ts title="src/ig-template/tools/hotkeys/HotKeys.ts"
/**
 * Easily add KeyBinds from anywhere in your codebase.
 * Very useful to switch tabs or claim resources!
 */
export class HotKeys {

    /**
     * List of all registered keybinds
     * @private
     */
    private static _keyBinds: KeyBind[] = [];

    /**
     * Register a keybind with mousetrap, but add the requirement in the callback.
     */
    public static addKeyBind(keyBind: KeyBind) {
        Mousetrap.bind(keyBind.keys, () => {
            if (keyBind.requirement.isCompleted) {
                keyBind.callback();
            }
        }, keyBind.eventType)
        this._keyBinds.push(keyBind);
    }

    /**
     * Unregister a keybind from mousetrap.
     */
    public static removeKeyBind(keys: string | string[], action = KeyEventType.KeyDown) {
        this._keyBinds = this._keyBinds.filter((keyBind) => keyBind.keys !== keys);
        Mousetrap.unbind(keys, action);
    }

    /**
     * Manyally trigger a callback. Note that the requirement still needs to be completed for it to run.
     */
    public static trigger(keys: string, action = KeyEventType.KeyDown) {
        Mousetrap.trigger(keys, action);
    }

    /**
     * Generate a list of all descriptions to show in the UI.
     */
    public static getKeyBindDescriptions(): KeyBindDescription[] {
        return this._keyBinds.map(keyBind => {
            const keysText: string = (typeof keyBind.keys === 'string') ? keyBind.keys : keyBind.keys.join(", ");

            return {
                'keys': keysText,
                'description': keyBind.description
            };
        });
    }

    /**
     * Remove all registered keybinds.
     */
    public static reset(): void {
        this._keyBinds = [];
        Mousetrap.reset();
    }
}

```

## TODO
- Let the player set they own keybinds.

## See also 
- [Mousetrap documentation](https://craig.is/killing/mice)
- [src/ig-template/tools/hotkeys/](https://github.com/123ishaTest/incremental-game-template/blob/master/src/ig-template/tools/hotkeys)
- [src/ig-template/tools/hotkeys/](https://github.com/123ishaTest/incremental-game-template/blob/master/src/ig-template/tools/hotkeys)
