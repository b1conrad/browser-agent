ruleset com.bruceatbyu.lets_connect {
  global {
    pattern = re#(http.+[?].*c_i=.+)#
  }
//
// check for already canonical
//
  rule guard_for_canonicity {
    select when sovrin new_invitation
      url re#(http.+[?].*c_i=.+)#
    fired {
      last
    }
  }
//
// convert any Let's connect url into an canonical one
//
  rule accept_let_s_connect_invitation {
    select when sovrin new_invitation
      url re#Let.s connect.*(https://.*)#i setting(url)
    pre {
      res = http:get(url,dontFollowRedirect=true)
      ok = res{"status_code"} == 302
      location = ok => res{["headers","location"]} | null
    }
    if ok && location && location.match(pattern) then noop()
    fired {
      raise sovrin event "new_invitation"
        attributes event:attrs.put("url",location)
    }
  }
}
