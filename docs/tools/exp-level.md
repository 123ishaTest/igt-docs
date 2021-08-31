---
id: exp-level
title: ExpLevel
---

<!--- Introduction text, can be a bit personal -->
Incremental games often use something that can be leveled up.
It could be an RPG-like skill that provides bonuses based on the level. Or an item that can be leveled up five times.

This tool allows you to easily add such functionality by providing exp needed per level!

## Requirements
- Support exp functions as well as hardcoded values
- Get the progress to the next level to display it

## Usage

```ts
// Create a skill based on a hardcoded list of exp required.
const maxLevel = 5;
const expPerLevel = [0, 10, 30, 60, 100];
const skill = new DiscreteExpLevel(maxLevel, expPerLevel);

skill.getLevel(); // 1
skill.gainExperience(10);
skill.getLevel(); // 2

skill.gainExperience(100000);
skill.getLevel(); // 5

// Or use a custom function instead!
function levelFunction(level: number) {
    return (level - 1) * 10;
}

const anotherSkill = new ContinuousExpLevel(5, levelFunction);
anotherSkill.getExpNeededForLevel(2); // 10
anotherSkill.gainExperience(10);
anotherSkill.getLevel() // 2
```



## See also 
- [src/ig-template/tools/exp-level/IgtExpLevel.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/exp-level/IgtExpLevel.ts)
- [src/ig-template/tools/exp-level/DiscreteExpLevel.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/exp-level/DiscreteExpLevel.ts)
- [src/ig-template/tools/exp-level/ContinuousExpLevel.ts](https://github.com/123ishaTest/igt-library/blob/master/src/ig-template/tools/exp-level/ContinuousExpLevel.ts)
