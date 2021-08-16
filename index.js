// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 3: Append content
$('.controls').on("click", function(){
switchImg() {
    if (x == 1) { //if the audio file is played
      document.getElementsByClassName("bounceMe").src = "images/.gif";
      } 
      else if (x == 2) { //if the audio file is NOT played
      document.getElementByClassName("bounceMe").src = "images/downArrow.png";
    }
  }