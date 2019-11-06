# browser-agent
sovrin Indy agent running in a browser

### supported browsers

in theory, any browser which supports the IndexedDB API

we have tested

- Chrome version 77

## installation

consider these three possible ways to install a browser agent

### using the local filesystem

1. use this [download page](https://b1conrad.github.io/browser-agent/download.html) and click on the links to download `agent.html` and `index.html` (or just click on the link for `spa.html`)
1. open downloaded `index.html` (or `spa.html#agent`) in a supported browser
1. when prompted, give your local agent a label (e.g. your name)

### using `git`, `npm`, and `node` to run a local server

pre-requisite is that you have those programs installed on your device

1. in a folder of your choice do `git clone https://github.com/b1conrad/browser-agent.git`
1. change to the installed folder (i.e. `cd browser-agent`)
1. install dependencies (i.e. `npm install`)
1. run a localhost server (on port `1800` pronounced "one eight hundred") with command `node app.js`
1. open `localhost:1800` in a supported browser
1. when prompted, give your local agent a label (e.g. your name)

### use one owned by this repo

1. https://b1conrad.github.io/browser-agent/spa.html#agent
1. when prompted, give your local agent a label (e.g. your name)

see cleanup instructions below when you have tried it out

## you will need an "inbound routing agent"

otherwise, your local Pico Agent will be able to send outbound agent-to-agent messages,
but won't be able to receive any such messages

ask to use our routing agent "Faythe" (email message to picolabsbyu@gmail.com)

or

set up your own, by

- installing and running a pico-engine (in the cloud somewhere) and registering
the rulesets listed at the [G2S project](https://github.com/Picolab/G2S) (note that you
_won't_ need to set up an agency)
- creating a Pico Agent with the
`org.sovrin.router` ruleset installed in it
- giving it a channel named "router_request" 
with type "well_known"

once you have access to a routing agent, you'll be able to configure the inbound router
in your local Pico Agent using

- for "router host" the web address of the cloud-based pico-engine hosting your router pico
- for "router request eci" the id of the well_known/router_request channel of your router pico
- for "router label" the name of the router pico

## cleanup

while viewing a browser agent which you no longer wish to use
you can release the storage space it has encumbered

1. open developer tools
1. select the Application tab
1. open the arrow beside IndexedDB
1. click on level-js-pico-engine
1. click the button Delete database
1. confirm

