---
id: game-states
title: Game States
---

The game accepts 4 possible states, and 4 transition methods that are shown in the following diagram.
![](images/state-machine.png)

```ts
export enum GameState {
    Launching = "Launching",
    Playing = "Playing",
    Paused = "Paused",
    Stopped = "Stopped",
}
```

