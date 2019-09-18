async function main(){
  var their_did = location.hash.substring(1)
  // start it up
  var pe = await PicoEngine();
  window.pe = pe;// make it global so we can use it in the devtools console

  // now you can use pe (instance of pico-engine-core)

  var rootECI = await pe.getRootECI()

  var ridWrangler = 'io.picolabs.wrangler'
  var agent_rbase = 'https://raw.githubusercontent.com/Picolab/G2S/master/krl/';
  var agent_rids = [
    'html',
    'webfinger',
    'org.sovrin.agent.ui',
    'org.sovrin.agent_message',
    'org.sovrin.agent',
    'org.sovrin.edge',
  ];
  var regRids = await pe.runQuery({eci:rootECI,rid:ridWrangler,name:'registeredRulesets'})
  for ( var i=0; i<agent_rids.length; ++i ){
    if (regRids.includes(agent_rids[i])) {
    } else {
      console.log('register: ',agent_rids[i]);
      await pe.registerRulesetURL(agent_rbase+agent_rids[i]+'.krl');
    }
  }

  alert('started');
  console.log('started');

  var agentECI = null
  var children = await pe.runQuery({
    eci: rootECI,
    rid: ridWrangler,
    name: "children"
  })
  if(children && children.length){
    agentECI = children[0].eci
  } else {
    alert('Your agent has not been created yet')
    location = 'agent.html'
  }
  var myself = await pe.runQuery({
    eci: agentECI,
    rid: 'io.picolabs.wrangler',
    name: 'myself'
  })

  console.log('myself:', JSON.stringify(myself));
  $('#refresh').click(function (e) {
    e.preventDefault()
    doDisplay()
  })
  var ridAgent = 'org.sovrin.agent'
  var $theSection = $('#section')
  var doDisplay = async function(){
    var hasRids = await pe.runQuery({eci:agentECI,rid:ridWrangler,name:'installedRulesets'})
    var isAgent = hasRids.includes(ridAgent)
    if(isAgent){
      var ui = await pe.runQuery({eci:agentECI,rid:ridAgent,name:'ui'})
      var connections = ui.connections || []
      var verified = null
      for(var i=0; i<connections.length; ++i){
        var conn = connections[i]
        if(conn.their_did === their_did){
          verified = conn
        }
      }
      if(verified) {
        $theSection.html('Welcome, '+verified.label)
      } else {
        $theSection.html('You are not logged in')
      }
    } else {
      $theSection.html('Internal error')
    }
  }
  doDisplay()
}
main().catch(console.error)
