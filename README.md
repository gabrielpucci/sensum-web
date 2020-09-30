### Sensum web: a lightweight Sensum for any OS

## Roadmap

The goal of this project is to make a simple sensations creator, reader and voter. This means:

1. Creating the basic UI elements to show, create and react to sensations

2. Wiring the UI elements to a state which will hold the app's data

3. Wiring the state and UI to the Sensum backend to show the existing sensations

4. Wiring up the UI elements to write events to the Sensum backend

In practice, this means there will be at least two steps to this project, with an optional third one.

Step one **[DONE]** encompasses reading and showing:

1. ~~Creating presentational components~~
2. ~~Creating app state~~
3. ~~Getting sensations from API, storing them~~
4. ~~Showing sensations to user~~

Step two **[CURR]** encompasses creating and voting:

1. Getting and storing new tokens, showing them on screen
2. Creating sensation creation form
3. Validation + sending new sensation through API
4. Voting system

Step three may include:

1. Polishing up the UI.

   - We could use something like [swipeable components](https://www.npmjs.com/package/react-swipeable) to navigate sensations.
   - (TODO)

2. Adding the entire functionality of the sensum-mobile's Tamagotchi

## Contributing

PRs are welcome. Here're a few suggestions:

- If the browser offers a native tool to deal with it, use that tool.
- Try to make stuff as accessible and fun as possible
- Don't mind old browsers. We shouldn't be held back by Windows.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
