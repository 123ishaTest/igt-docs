---
id: launch-behaviour
title: Launch Behaviour
---

This page will explain the life cycle of the features when the game is launching.

## Startup order
When the game starts, the `Feature` methods will be run in the following order:
```ts
export class App {

    static game: Game;

    static start(): void {
        // Create all feature objects and add them to the game
        this.game = new Game(
            {
                wallet: new Wallet([CurrencyType.Money, CurrencyType.Secondary]),
                /* Whatever features your game has */
            }
        );
        // All features now exist and can subscribe to each others events
        this.game.initialize();

        // Apply save data if it exists
        this.game.load();

        // Run start on all features and update the game state
        this.game.start(); 
    }
}
``` 

## See also
- [src/App.ts](https://github.com/123ishaTest/igt-library/blob/master/src/App.ts)
