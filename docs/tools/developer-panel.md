---
id: developer-panel
title: Developer Panel
---

When play-testing your game, it often happens that you want to set some variables to test something out.
You could load a specific save file, or do some hacking through the console, but this isn't always feasible.

The Developer Panel is a solution! It allows each `Feature` to register a list of `Field`s, that perform actions specific to your Feature.
You can add an input field that allows you to set any value to an attribute. Or a button that runs a custom function!


## Requirements
- Support the most basic use-cases (number input)
- Only exists in Development mode and will be disabled in production


## Usage
Each `Feature` has a `getDeveloperPanelFields()` method that returns an empty list by default.
Override this method with a list of fields, and they will show up in the Panel under the Features tab!

```ts
export class IgtWallet extends Feature {
    money: number = 0;
    moneyMultiplier: number = 1;

    getDeveloperPanelFields(): AbstractField[] {
        return [
            // Create an editable textfield for the attribute 'money'
            new NumberField('money', 'Current Money'),
            
            // Create a button with a custom function
            new FunctionField(() => {
                this.money = 10
            }, 'Set money to 10').setCssClass('btn-blue'),
            
            // Create a range slider for the attribute 'money'
            new RangeField('money', 0, 100, 2, 'Money Slider'),
            
            // Create a dropdown menu
            new ChoiceField('moneyMultiplier', [
                ['0.5x', 0.5],
                ['1x', 1],
                ['2x', 2],
            ], 'Multiplier'),
        ];
    }
}
```

## See also 
- [Available fields](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/developer-panel/fields/)
