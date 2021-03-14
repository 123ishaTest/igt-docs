---
id: redeemable-codes
title: Redeemable Codes
---

Redeemable codes are a great way to reward a specific set of players.
You can distribute a code in your Discord that gives the user 100 money once.
It is also useful for an early beta, where you can let the testers skip the early game with a code.

## Requirements
- Codes can be stored in the source, hashed so snoops can't find them
- Codes cannot be redeemed multiple times
- Codes should be able to give anything from any other Feature

## Usage
```ts
// Entering a code on a users behalf
const code = App.game.features.codes.enterCode("DUMMY");
if (!code) {
    console.log("Code incorrect or already redeemed")
} else {
    console.log(code.description)
}

// Calculating the hash for a new code
const hash = App.game.features.codes.hash("DUMMY")
console.log(hash); // 65408136

// Then you can create a new code in RedeemableCodes.ts
this.list.push(
    new RedeemableCode(RedeemableCodeId.exampleCode, 'Example code that gives 100 money, the key is "DUMMY"', 65408136, () => {
        features.wallet.gainCurrency(new Currency(100, CurrencyType.Money));
    })
)
```

## Implementation
People with access to the source code, will inspect it to see the codes.
To avoid them spoiling the codes for everybody, we hash the codes, and only store the hash in the source code.

Each code has an `Id`, which is used as a save key.
Redeemed codes are saved as a list of keys, so people can't claim them twice after a refresh.



## See also 
- [src/ig-template/features/codes](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/codes)
- [src/ig-template/features/codes/RedeemableCodes.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/codes/RedeemableCodes.ts)
- [src/ig-template/features/codes/RedeemableCode.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/codes/RedeemableCode.ts)
