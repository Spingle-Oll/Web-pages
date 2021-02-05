let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
  let theme = document.getElementById("theme");


  if(theme.getAttribute("href") == "light-mode.css"){
  	theme.href = "dark-mode.css";
  }esle{
  	theme.href="light-mode.css";
  }
}