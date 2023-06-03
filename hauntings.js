const hauntings = class {
  
  
  // static functions can be called even if no hauntings object is initialized
  static flickerText(intensity, flicker){
    //console.log("flicker is running")
      flicker = ! flicker;
      
      let flickerText = document.getElementsByClassName("flickerText");
      for (let x = 0; x < flickerText.length; x++){
        //console.log(flickerText[x].style)
        if (flicker && Math.random() < intensity)
          flickerText[x].style.fontSize = (Math.random() *20 + 30) + "pt";
        else
          flickerText[x].style.fontSize = "50pt";
      }
      
   }
   
   
   
  static flickerImage(intensity, flicker){
      flicker = ! flicker;
      
      
      let flickerImage = document.getElementsByClassName("flickerImage");
      for (let x = 0; x < flickerImage.length; x++){
        
        if (flicker && Math.random() < intensity)
          flickerImage[x].style.mixBlendMode = "normal";
        else
          flickerImage[x].style.mixBlendMode = "exclusion";
        }
    }
    
  static textReplacement(intensity, data){
    let phrases = ["#$%#%", "<strong>", "</strong>"];
    if (data.pagesVisited["Enchanté Cosmetics Haunted"])
      phrases.push("<strong>DO YOU WANT TO BE BEAUTIFUL</strong>")
    if(data.pagesVisited["New Makeup"])
      phrases.push("<strong>At What Cost?</strong>")
    if(data.pagesVisited["Hax"])
      phrases.push("<strong>HAX</strong>")
    if(data.pagesVisited["Bath and Body"])
      phrases.push("I need to shave.")
    if(data.pagesVisited["Fragrance"])
      phrases.push("<strong>Do I smell nice?</strong>")
    if(data.pagesVisited["Skincare"])
      phrases.push("Am I pretty?")
    if (data.pagesVisited["Brand Makeup"])
        phrases.push('<iframe width="560" height="315" src="https://www.youtube.com/embed/MF-6FmQ-6Q4" title="YouTube video player" frameborder="0" autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>')
    let paragraphs = document.getElementsByTagName("p");
    for (let x = 0; x < paragraphs.length; x++){
      
      if (Math.random() < intensity){
        let textArray = paragraphs[x].innerHTML.split(" ");
        let insertionText = phrases[Math.floor(Math.random()*phrases.length)];
        let start = Math.floor(Math.random()*(textArray.length-insertionText.length))
        let end = start + insertionText.split(" ").length;
        textArray.splice(start, end, insertionText);
        let newInnerHtml = textArray.join(" ");
        paragraphs[x].innerHTML = newInnerHtml;
      }
    }
  }

  static blackhole(){
    var x = document.getElementsByTagName("*"); 
    for (let i = 0; i < x.length; i++) {
      x[i].style.position = "absolute"; 
      x[i].style.top = "50%"; 
      x[i].style.left = "50%"; 
      x[i].style.transition = "5s"; 
      x[i].style.transform = "translate(-50%, -50%)"
    };
  
}
    
}

/*
    function runAway(event, element){

    console.log(event, element)
    element.style.top = event.ScreenY + 5
    }
    */