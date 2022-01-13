var playStatus = true;
var pauseStatus = false;
var play = document.getElementById('play');
var pause = document.getElementById('pause');


function updateAnimationState() {
  var selecter = document.querySelectorAll(".trackbtn");
  var selecter2 = document.querySelectorAll(".trackbtn2");
  selecter.forEach((data) => 
  {
      if(data.style.animationPlayState == "" || data.style.animationPlayState == "paused")
      {
        data.style.animationPlayState = "running";
        playStatus = false;
        pauseStatus = true;
        TrackClick(); 
      }
      else
      {   
        data.style.animationPlayState = "paused";
        data.classList.remove("trackbtn"); 
        data.offsetWidth; 

        playStatus = true;
        pauseStatus = false;
        TrackClick();
        var cl = data.classList.value;
        data.classList.add("trackbtn");

      }
    
  });

  selecter2.forEach((data) => 
  {
      if(data.style.animationPlayState == "" || data.style.animationPlayState == "paused")
      {
        data.style.animationPlayState = "running";
        playStatus = false;
        pauseStatus = true;
        TrackClick();
      }
      else
      {   
        data.style.animationPlayState = "paused";
        data.classList.remove("trackbtn2"); 
        data.offsetWidth; 

        playStatus = true;
        pauseStatus = false;
        TrackClick();
        var cl = data.classList.value;
        data.classList.add("trackbtn2");

      }
    
  });

}

// track play/pause button

function TrackClick()
{
    if(playStatus)
    {
        pause.disabled = true;
        pause.style.cursor='not-allowed';
        play.disabled = false;
        play.style.cursor='pointer'
    }
    else if(pauseStatus)
    {
        play.disabled = true;
        play.style.cursor='not-allowed';
        pause.disabled = false;
        pause.style.cursor='pointer';
    }
}

TrackClick();


