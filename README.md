# Stadia Game History

This is the source code for the web app at https://wikitrivia.tomjwatson.com.

## Usage

### Prerequisites

```bash
npm install
```

### Development

```bash
npm run dev
```

Then visit http://localhost:3000/ to preview the website.

### Static build

To build a static version of the website, run:

```bash
npm run build
```

Then run said build with:

```bash
npm start
```

Or then export said build to the `out` folder with:

```bash
npm run export
```

## FAQ

### Where does the data come from?

The data is all sourced from [SOGDb](https://github.com/ja1984/sogdb).

### I was played a card that doesn't make sense - what gives?

There are some cards that unfortunately don't quite make sense or have bad data. These need to be removed from the game and, ideally, to have their underlying SOGDb entry fixed.

Please report any bad data here: https://github.com/ja1984/sogdb/issues.
