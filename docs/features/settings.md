---
id: settings
title: Settings
---

<!--- Introduction text, can be a bit personal -->
From changing the layout to toggling the automation of a feature, a `Setting` is anything the user can freely control.


## Requirements
- Allow the player to easily change settings
- Boolean, Number and String options
- Extendable with different types
- Multiple choice and Range settings
- Set a default value
- Lock settings and even options behind [requirements](../tools/requirements.md)
- Save & Load

## Usage
<!--- Example script that displays most of the functionality -->
```ts
const settings = new Settings();

settings.add(
    new MultipleChoiceSetting(SettingId.ExampleSetting, "Example setting", [
        new SettingOption<number>("Option 1", 1),
        new SettingOption<number>("Option 2", 2),
        new SettingOption<number>("Option 3", 3),
    ], 2));

settings.setSetting(SettingId.ExampleSetting, 4); // Not a valid option, nothing happens
settings.setSetting(SettingId.ExampleSetting, 1);

// Passing <number> is optional.
const exampleSetting = settings.getSetting<number>(SettingId.ExampleSetting);
if (exampleSetting?.value === 1) {
    // Do something
}
```
## Implementation
<!--- Implementation details -->
The abstract `Setting` class is the base for all custom settings.
It uses [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/generics.html) which allows the setting value to be any type you like.

```ts title="src/ig-template/features/settings/Setting.ts"
export abstract class Setting<T> {
    id: SettingId;
    displayName: string;
    options: SettingOption<T>[];
    defaultValue: T;
    value: T;

    requirement: Requirement;

    set(value: T): void {
        if (!this.canAccess) {
            return;
        }
        if (this.validValue(value)) {
            this.value = value;
        } else {
            console.warn(`${value} is not a valid value for setting ${this.id}. It could be that the option is not yet unlocked.`);
        }
    }

    validValue(value: T): boolean {
        const option = this.options.find((option) => option.value === value);
        if (option == undefined || !option.canAccess) {
            return false;
        }
        return true;
    }

    isSelected(value: T): boolean {
        return this.value === value;
    }

    get canAccess(): boolean {
        return this.requirement.isCompleted
    }
}
```

An example extension is the `RangeSetting`, which allows its value to be any float between an min and max.

```ts title="src/ig-template/features/settings/RangeSetting.ts"
export class RangeSetting extends Setting<number> {
    min: number;
    max: number;

    constructor(id: SettingId, displayName: string, min: number, max: number, defaultValue: number, requirement?: Requirement) {
        // Pass the default value as an option
        super(id, displayName, [new SettingOption<number>("Default", defaultValue)], defaultValue, requirement);

        if (min >= max || max <= min) {
            throw new RangeError(`Invalid range settings (min: ${min}, max: ${max}) for setting ${this.id}`)
        }
        this.min = min;
        this.max = max;

        if (!this.validValue(this.defaultValue)) {
            throw new RangeError(`${this.defaultValue} is not a valid value for setting ${this.id}.`);
        }
    }

    validValue(value: number): boolean {
        return value >= this.min && value <= this.max;
    }
}
```


## See also 
- [src/ig-template/features/settings](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/settings)
- [src/ig-template/features/settings/Setting.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/settings/Setting.ts)
- [src/ig-template/features/settings/BooleanSetting.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/settings/BooleanSetting.ts)
