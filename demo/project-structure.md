---
id: project-structure
title: Project Structure
---

Let's take a look at the files we have in our repository.
It is important to note that we have used a Vue template, so most files are just standard Vue files.

- `/src` contains the main files we will be working with
    - `/assets` contains mostly images
    - `/components` contains the Vue components provided by `igt-vue`
    - `/src` contains the actual source code that builds on the `igt-library`
- `/tests` contains a single smoke test which starts the game and runs 100 ticks. It can be run with `npm run test`

Please take some time clicking through the files to get an even better understanding of what is going on.

Now that you know the files we're working with, let's make some changes!
