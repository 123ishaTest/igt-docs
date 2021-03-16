---
id: special-events
title: Special Events
---

Want to increase money gain by 10% each wednesday? Want to have an item you can only gain at 4:20? `Special Events` are
your friend.

You can schedule a special event for a specific time. You can provide the code that is run at the start and end. This
allows you to fully customize what your event does!

## Requirements

- Allow custom code to run at the start and end of each event
- Schedule weekly events
- Easily extendable for custom events

## Usage

```ts
// Schedule an event for a specific date and time.
this.addEvent(
    new SpecialEvent(SpecialEventId.AllowButton, 'Example Event', 'You can find the legendary sword now',
        new Date(2021, 2, 9, 13, 30), new Date(2021, 2, 10, 14, 30),
        () => {
            LootTables.addItem('Legendary Sword');
        },
        () => {
            LootTables.removeItem('Legendary Sword');
        },
    )
);
// You can also schedule weekly events
this.addEvent(
    new WeeklySpecialEvent(SpecialEventId.Weekly, 'Weekly Event', 'Every week this is active',
        new Date(2021, 2, 9), new Date(2021, 2, 10),
        () => {
            features.example.weeklyEventActive = true;
        },
        () => {
            features.example.weeklyEventActive = false;
        },
    )
);
```

## Implementation

It is easy to override the `AbstractSpecialEvent` class. You need to provide the following methods:

```ts
export class YourSpecialEvent extends SpecialEvent {
    getDateState(date: Date): SpecialEventDateState {
        // Implement
    }

    getTimeUntilEnd(date: Date): Date {
        // Implement
    }

    getTimeUntilStart(date: Date): Date {
        // Implement
    }
}
```

The `getDateState()` needs to return the following Enum:

```ts
export enum SpecialEventDateState {
    Before,
    During,
    After,
}
```

### Events

#### onEventStart

Emitted whenever an event starts.

```ts
App.game.features.specialEvents.onEventStart.subscribe(event => {
    console.log("Event started:", event.title);
});
```

#### onEventEnd

Emitted whenever an event ends.

```ts
App.game.features.specialEvents.onEventEnd.subscribe(event => {
    console.log("Event ended:", event.title);
});
```

## See also

- [src/ig-template/features/special-events/AbstractSpecialEvent.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/special-events/AbstractSpecialEvent.ts)
- [src/ig-template/features/special-events/SpecialEvents.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/special-events/SpecialEvents.ts)
- [src/ig-template/features/special-events/WeeklySpecialEvent.ts](https://github.com/123ishaTest/incremental-game-template/tree/master/src/ig-template/features/special-events/WeeklySpecialEvent.ts)
