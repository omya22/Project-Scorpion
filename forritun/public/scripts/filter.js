$(document).ready(function(){
$("#circles-slider")
    
    .slider({
        min: 0,
        max: 100,
        values: [50, 100],
        range: true,
        value: 20
    })

      .slider("pips", {
        rest:"label",
        step: 2
    });
      

$(".slider")
                        
    .slider({ 
        min: 0, 
        max: 1000, 
        step: 100 
    })
                            
    .slider("pips", {
        rest: "label",
        step: 2
    })
                            
    .slider("float");
});