function generateHeader(currentPage) {
  var header = document.getElementById('header');
  var img = document.createElement("IMG"); 
  img.src = '/media/banner.jpg';
  img.style.width = '100%';
  header.appendChild(img);       
  var bar = document.createElement('UL');
  addHeaderItem(bar,'Home','index.html',currentPage,false);
  addHeaderItem(bar,'Projects','projects.html',currentPage,false);
  //addHeaderItem(bar,'Code','code.html',currentPage,false);
  //addHeaderItem(bar,'Applets','code.html',currentPage,false);
  //addHeaderItem(bar,'Blog','code.html',currentPage,true);
  addHeaderItem(bar,'About Me','aboutme.html',currentPage,true);
  header.appendChild(bar);
}

function addHeaderItem (header, name, link, currentPage, isRight) {
    
  var headerItem = document.createElement('LI');
  var AheaderItem = document.createElement('A');
  AheaderItem.href=link;
  AheaderItem.innerHTML = name;
  if (currentPage == name) {
    AheaderItem.className = 'active';
  }
  if (isRight) {
    headerItem.style = 'float:right';
  }
  headerItem.appendChild(AheaderItem)
  header.appendChild(headerItem)
}
