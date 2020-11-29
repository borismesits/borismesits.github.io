function generateNavbar(currentPage) {
  var titlecard = document.getElementById('titlecard');
  
  var navbar = document.createElement('NAV');
  navbar.setAttribute("class", "w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center");
  navbar.setAttribute("style","z-index:3;width:300px;font-weight:bold");
  navbar.setAttribute("id","mySidebar");

  var homeText = document.createElement('A');
  homeText.setAttribute('href','index.html');
  homeText.setAttribute('onclick','w3_close()');
  homeText.setAttribute('class','w3-bar-item w3-button w3-padding-64');
  homeText.innerHTML = 'HOME';
  
  var closeText = document.createElement('A');
  closeText.setAttribute('href','javascript:void(0)');
  closeText.setAttribute('onclick','w3_close()');
  closeText.setAttribute('class','w3-bar-item w3-button w3-padding w3-hide-large');
  closeText.innerHTML = 'CLOSE';
  
  var projectsText = document.createElement('A');
  projectsText.setAttribute('href','projects.html');
  projectsText.setAttribute('onclick','w3_close()');
  projectsText.setAttribute('class','w3-bar-item w3-button');
  projectsText.innerHTML = 'PROJECTS';
  
  var aboutText = document.createElement('A');
  aboutText.setAttribute('href','#about');
  aboutText.setAttribute('onclick','w3_close()');
  aboutText.setAttribute('class','w3-bar-item w3-button');
  aboutText.innerHTML = 'ABOUT';
  
  var codesText = document.createElement('A');
  aboutText.setAttribute('href','#codes');
  aboutText.setAttribute('onclick','w3_close()');
  aboutText.setAttribute('class','w3-bar-item w3-button');
  aboutText.innerHTML = 'CODES';
  
  var demosText = document.createElement('A');
  aboutText.setAttribute('href','#demos');
  aboutText.setAttribute('onclick','w3_close()');
  aboutText.setAttribute('class','w3-bar-item w3-button');
  aboutText.innerHTML = 'DEMOS';
  
  var blogText = document.createElement('A');
  aboutText.setAttribute('href','#blog');
  aboutText.setAttribute('onclick','w3_close()');
  aboutText.setAttribute('class','w3-bar-item w3-button');
  aboutText.innerHTML = 'BLOG';

  navbar.appendChild(homeText);
  navbar.appendChild(projectsText);
  navbar.appendChild(aboutText);
  navbar.appendChild(codesText);
  navbar.appendChild(demosText);
  navbar.appendChild(blogText);
  
  navbar.appendChild(closeText);
  
  var header = document.createElement('HEADER');
  header.setAttribute('class','w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16');
  
  var span = document.createElement('SPAN');
  span.setAttribute('class','w3-left w3-padding');
  span.innerHTML = 'Boris Mesits';
  
  /*var spacing = document.createElement('P');
  spacing.setAttribute('class','w3-top w3-hide-large');
  spacing.innerHTML = 'asasdfasdfsdfsfsdfsfsdfsfsdfsadfsd';
  linebreak = document.createElement("br");
  spacing.appendChild(linebreak);*/
  
  var openButton = document.createElement('A');
  openButton.setAttribute('href','javascript:void(0)');
  openButton.setAttribute('class','w3-right w3-button w3-white');
  openButton.setAttribute('onclick','w3_open()');
  openButton.innerHTML = '☰';
  
  header.appendChild(span);
  header.appendChild(openButton);
  
  var overlay = document.createElement('DIV');
  overlay.setAttribute('class','w3-overlay w3-hide-large w3-animate-opacity');
  overlay.setAttribute('onclick','w3_close()');
  overlay.setAttribute('style','cursor:pointer');
  overlay.setAttribute('title','close side menu');
  overlay.setAttribute('id','myOverlay');
  
  document.body.appendChild(navbar);
  document.body.appendChild(header);
  document.body.appendChild(overlay);
  document.body.appendChild(spacing);
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// SLIDESHOW CODE
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center" style="z-index:3;width:300px;font-weight:bold" id="mySidebar"><br>
  <h3 class="w3-padding-64 w3-center"><b>Boris<br>Mesits</b></h3>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-padding w3-hide-large">CLOSE</a>
  <a href="#" onclick="w3_close()" class="w3-bar-item w3-button">PORTFOLIO</a> 
  <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button">ABOUT ME</a> 
  <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
</nav>

<!-- Top menu on small screens -->
<header class="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
  <span class="w3-left w3-padding">Boris Mesits</span>
  <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
</header>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
*/