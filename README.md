# browser-agent
agent running in a browser

### supported browsers

in theory, any browser which supports the IndexedDB API

we have tested

- Chrome version 77

## installation

### using the local filesystem

1. use [download](https://b1conrad.github.io/browser-agent/download.html) and click on the links to download `agent.html` and `index.html`
1. open downloaded `index.html` in a supported browser
1. when prompted, give your local agent a label (e.g. your name)

### using `git`, `npm`, and `node` to run a local server

pre-requisite is that you have those programs installed on your device

1. in a folder of your choice do `git clone https://github.com/b1conrad/browser-agent.git`
1. change to the installed folder (i.e. `cd browser-agent`)
1. install dependencies (i.e. `npm install`)
1. run a localhost server (on port `1800` pronounced "one eight hundred") with command `node app.js`
1. open `localhost:1800` in a supported browser
1. when prompted, give your local agent a label (e.g. your name)
