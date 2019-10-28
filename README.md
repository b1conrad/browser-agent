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

### you will need an "inbound routing agent"

otherwise, your local Pico Agent will be able to send outbound agent-to-agent messages,
but won't be able to receive any such messages

ask to use our routing agent "Faythe" (email message to picolabsbyu@gmail.com)

or

set up your own, by

- installing a pico-engine (in the cloud somewhere) and installing
the rulesets listed at the [G2S project](https://github.com/Picolab/G2S) (note that you
won't need to set up an agency)
- creating a Pico Agent with the
`org.sovrin.router` ruleset installed in it
- giving it a channel named "router_request" 
with type "well_known"

once this is done, you'll be able to configure the inbound router
in your local Pico Agent using

- for "router host" the web address of the cloud-based pico-engine
- for "router request eci" the id of the well_known/router_request channel
- for "router label" the name of the router pico
