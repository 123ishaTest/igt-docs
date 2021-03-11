---
id: achievements
title: Achievements
---

Achievements are great. Not only is it a way to reward the player for doing random stuff. They also promise that your game is worthwhile.
If the player can see they have many rows of achievements left to complete, they will keep playing for a longer time.


## Requirements
- Make it easy to create an achievement based on a  [Statistic](./statistics.md)
- Custom achievements that can be manually completed
- Title, description and image, to add some flavour to achievements

## Usage

```ts
export class Achievements extends Feature {
    initialize(features: Features): void {
        // You can base achievements on statistics
        this.registerAchievement(
            new Achievement(
                AchievementId.TotalMoney100, "Gain 100 total money", 'Automatically triggered if you gain enough money',
                new NumberStatisticRequirement(features.statistics.totalMoneyGained, 100),
            )
        );

        // Or have manual ones. You'll have to trigger them with `achievement.forceUnlock()`
        this.registerAchievement(
            new CustomAchievement(AchievementId.ExampleAchievement, "Custom Achievement", 'Can be completed manually')
        );
    }

}
```

### Events
#### onUnlock
Emitted whenever an Achievement is unlocked.
```ts
App.game.features.achievements.onUnlock.subscribe(achievement => {
    console.log("Achievement unlocked:", achievement.title);
});
```

## See also 
- [src/ig-template/features/achievements](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/achievements)
