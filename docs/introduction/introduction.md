---
id: introduction
title: Welcome
slug: /
---

Hello interested reader. Welcome to the Incremental Game Template.

My name is Isha. I have been developing incremental games since 2014. Most of them bad, some of them good.

Over the years I have developed certain features over and over for different games.
Currencies, Upgrades, Statistics and such.
This project aims to develop the 'final' version of these features, such that everyone can take advantage of them.


## What is this project
To gain the most out of this project, it is important to know what it is about exactly.
It is a library of useful scripts that work well together, combined into a single project.
You can consume this library and extend some classes to have a working game very quickly.
You can also manually copy snippets and apply them to your own project, with some modifications.

I expect you to be familiar with web development, as well as TypeScript, as I won't take the time to explain these things.

#### It is
- A collection of useful scripts that will help you develop more quickly
- A library you can easily integrate with your favourite frontend framework
- Inspiration for how to implement features every game needs
- Pretty neat

#### It is not
- A tutorial on how to develop webgames
- A game engine
- A guarantee for a good game. You still need to create interesting mechanics yourself :)

## Repositories
The IGT consists of 4 repositories:

- [igt-library](https://github.com/123ishaTest/igt-library): An npm package that contains all features and game logic
- [igt-docs](https://github.com/123ishaTest/igt-docs) You are here! The documentation for the entire project
- [igt-vue](https://github.com/123ishaTest/igt-vue) A Vue application that consumes `igt-docs` and provides Vue components
- [igt-demo](https://github.com/123ishaTest/igt-demo) A demo application/tutorial that takes `igt-vue` and builds a small game.

## Personal Preferences
I am by no means a programming expert. It is a fun hobby that I picked up while studying Computer Science.
Many, many choices in this template are made arbitrarily and might not be the optimal way to do things.
Feel free to contact me if you have some good ideas :)

Here are some of my opinions

- I like to overengineer tools.
- Enums are very nice. Especially string enums. I use them as much as possible to refer to objects.
- JS getters are useful if a method perform very little logic and should be treated as an attribute.
- JS setters are very confusing.
- There should be absolutely no presentation logic mixed with game logic.
- Features presented here should not depend on each other if possible. If they have to, this dependency should be injected.

