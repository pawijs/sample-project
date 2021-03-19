# Pawi sample project

Sample project. Do not forget to install vscode extension :-)

Some information on the project on [dev.to](https://dev.to/maia_tae/visual-live-coding-proof-of-concept-1o7l)

![Screen Shot 2021-02-27 at 6 48 01 PM](https://user-images.githubusercontent.com/79422935/109376981-0e93f980-792d-11eb-97a3-5978224e8642.png)

## Explore code

The examples are in `src`.

Install **Pawi** extension in VSCode to view and edit branches.

## Running projects

```sh
npm install
npm run serve
```

Open http://127.0.0.1:8080 in **a modern browser** (tested on Google Chrome 88 and Safari 14.0).

You can now edit code / branch structure and you should see the results updating live (on save).

### "blank" project

This project is a blank slate for you to try things.

### "add" project

This project is special because it uses the tree as a function to compute a value instead of
rendering every frame.

### "3D-midi" project

This is an experiment to sync the rotation of the cube to the song position
of a DAW through MIDI. For this to work, you need to setup midi sync with
"IAC Driver Bus 1" (Mac OS X).

Say hello [@maia_tae](https://twitter.com/maia_tae).
