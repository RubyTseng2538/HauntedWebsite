
  // store your narrative beats and functions herenarrativeBeasts =   
beats = [



  {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed> 60   }, 
    unlock: function(manager, data){      data.intensity = 0.1;          },  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return document.title ==="Enchanté Cosmetics Haunted" }, 
    unlock: function(manager, data){      manager.setPhase("phase2");
                                          data.intensity = 0.3;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return document.title==="Hax"}, 
    unlock: function(manager, data){      manager.setPhase("phase3")
                                          data.intensity = 0.9;},  
    report: function(manager, data){return}
  },
  
  {
    triggered: false,
    test: function(manager, data){        return document.title ==="New Makeup" }, 
    unlock: function(manager, data){      data.startWordReplacement = true;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 16000 }, 
    unlock: function(manager, data){      data.hole = true;},  
    report: function(manager, data){return}
  },
  ]
  