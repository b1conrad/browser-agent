ruleset com.bruceatbyu.picolabs.affiliate {
  meta {
    shares name, relationship
  }
  global {
    name = function(){
      ent:name
    }
    relationship = function(){
      ent:relationship
    }
  }
  rule record_affiliate {
    select when affiliate profile_changed
      name re#(.+)#
      relationship re#(^[ofse]$)#
      setting(name,relationship)
    fired {
      ent:name := name;
      ent:relationship := relationship
    }
  }
}
