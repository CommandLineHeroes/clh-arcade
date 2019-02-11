# Command Line Heroes ARCADE!

This is a game switcher for the Command Line Heroes arcade cabinets.

## Step 0: initial setup

    npm install

Then if you're deploying to a cab, run:

    npm start

Or if you're developing, run:

    npm run dev

The only difference is that `dev` includes browser-sync.

## Step 1: create `games/`

Create a symlink named `games` that points to a directory containing all the games.

    ln -s ../path-to-games games

The games dir should have the following format.  See [clh-arcade-think](https://github.com/CommandLineHeroes/clh-arcade-think) for an example.
```
games
├── game-1
│   ├── index.html
│   └── thumb.png
└── game-2
    ├── index.html
    └── thumb.png
```
*Note: the thumbnails do not have to be in the game directories.*

## Step 2: create game metadata

Create `games.json`.

    cp games.sample.json games.json

Edit the sample, creating one entry for each game.

Each game object has:

 - `name` - the name of the game (not used right now, but may well be needed)
 - `path` - the path to the game, for example `games/foo/` or `games/MyGame/MyGame.html`
 - `thumb` - the path to the thumbnail (does not have to be inside `games/`)


That should do it!  Enjoy and post issues if anything doesn't work.
