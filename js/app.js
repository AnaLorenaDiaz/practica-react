window.addEventListener("load", function(){
  
  var template = document.getElementById("article-list");
  var articles = document.getElementById("article");

  
  for(var i=1; i<5; i++){
    var clonado = template.cloneNode(true);
    clonado.removeAttribute("id");
    var h3 = clonado.getElementsByTagName("h3")[0];
    h3.innerHTML = h3.textContent +' '+i;
    articles.appendChild(clonado);
  }
});

