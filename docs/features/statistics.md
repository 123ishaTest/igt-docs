---
id: statistics
title: Statistics
---

Statistics are fun. Whether they track total money gained or times defeated, it is always interesting to view everything you've done in a game.
The `Statistics` feature makes it easy to track any sort of statistic!

`Statistics` can also be used for [Requirements](../tools/requirements.md).
They will also form the basis for most [Achievements](./achievements.md)
## Requirements
- Track numbers and arrays of numbers.
- Subscribe to other `Feature`s so nothing depends on `Statistics`.
- Newly added statistics are saved automatically.

## Usage

```ts
export class IgtStatistics extends Feature {
    public totalMoneyGained: NumberStatistic;

    initialize(features: Features): void {

        // You can register statistics as attributes for easy access, but you don't have to.
        this.totalMoneyGained = this.registerStatistic(new NumberStatistic(StatisticId.TotalMoneyGained, 'Total money'));

        // Then add an event listener to update the statistic
        features.wallet.onCurrencyGain.subscribe((currency: Currency) => {
            if (currency.type === CurrencyType.Money) {
                this.totalMoneyGained.increment(currency.amount);
            }
        });
        // Done!
    }
}
```

## See also 
- [src/ig-template/features/statistics](https://github.com/123ishaTest/igt-library/tree/master/src/ig-template/features/statistics)
