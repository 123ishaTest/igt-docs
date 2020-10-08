---
id: project-setup
title: Project Setup
---

This page will explain the layout of the project.

## Project Structure
The global static root object is called `App`.
When it is started, it creates an instance of `Game` where you can inject different Features.
This means that all features are accessible with `App.game.<feature>`.

## Feature
Features can be implemented by extending the `Feature` class.
Features like this automatically get included in the game loop.
This means they get called with `update(delta: number)` automatically, as well as being saved and loaded.
A game will consist of multiple features communicating with each other.

## Terminology
I am a huge fan of using `Enum`s over strings. They prevent mistakes with minimal boilerplate.

#### Id vs Type
Anything that uniquely identifies an object instance should be an `Id`. Otherwise, it should be a `Type`.

```ts
export enum UpgradeId {
  ExampleUpgradeOne,
  ExampleUpgradeTwo,
}

export enum UpgradeType {
  MoneyMultiplier,
  ExampleMultiplier,
}

export class Upgrade {
  id: UpgradeId;
  type: UpgradeType;
  // Other stuff
}
```

## Conventions
:::caution
All percentages scale from `0` to `1`. **Not 0 to 100%**. This is nicer as you can simply multiply all of them.
:::

:::caution
All times are floats in seconds.
`const time: number = 1;` means 1 second.
:::
