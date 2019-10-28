# browser-agent
agent running in a browser

### supported browsers

in theory, any browser which supports the IndexedDB API

we have tested

- Chrome version 77

## installation

### using the local filesystem

1. make a folder to be used (e.x. `mkdir browser-agent`)
1. download [`agent.html`](https://raw.githubusercontent.com/b1conrad/browser-agent/master/agent.html) and [`index.html`](https://raw.githubusercontent.com/b1conrad/browser-agent/master/index.html) files to that folder
1. open `index.html` in a browser
1. when prompted, give your local agent a label (e.x. your name)

### using `git`

1. in a folder of your choice do `git clone https://github.com/b1conrad/browser-agent.git`
1. change to the installed folder (i.e. `cd browser-agent`)
1. install dependencies (i.e. `npm install`)
1. run a localhost server (on port `1800` pronounced "one eight hundred") with command `node app.js`
1. open `localhost:1800` in a browser
1. when prompted, give your local agent a label (e.x. your name)
