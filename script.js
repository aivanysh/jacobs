

function textmove(el,el2){

	var top = 0;
	var finishtop = 120;
	var opac = 0;
	var opacstep = 1/(finishtop-top);


	var top2 = 250;
	var finishtop2 = 140;
	
	var id = setInterval(frame, 10);

	function frame() {
    if (top == finishtop) {
      clearInterval(id);
    } else {
      top++; 
      top2--;
      opac += opacstep;
      el.style.top = top + 'px'; 
      el.style.opacity = opac;
      el2.style.top = top2 + 'px'; 
      el2.style.opacity = opac;
    }
  }
}

/******************************************************/

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("newsone");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    var el = slides[slideIndex-1].querySelector("div");
    var el2 = slides[slideIndex-1].querySelector("a");
    textmove(el,el2);
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // 
}

function newsshow(){
    document.getElementById("contentholderid").style.display = "none";
    document.getElementById("dopcontentholdID").style.display = "none";
    document.getElementById("newsholder").style.display = "block";
    document.getElementById("kpinstholder").style.display = "none";
    document.getElementById("tainstholder").style.display = "none";
    document.getElementById("apkholder").style.display = "none";
    hideallvideo()
}
function kpinstshow(){
    document.getElementById("contentholderid").style.display = "none";
    document.getElementById("dopcontentholdID").style.display = "none";
    document.getElementById("newsholder").style.display = "none";
    document.getElementById("kpinstholder").style.display = "block";
    document.getElementById("tainstholder").style.display = "none";
    document.getElementById("apkholder").style.display = "none";
    hideallvideo()
    
}
function tainstshow(){
    document.getElementById("contentholderid").style.display = "none";
    document.getElementById("dopcontentholdID").style.display = "none";
    document.getElementById("newsholder").style.display = "none";
    document.getElementById("kpinstholder").style.display = "none";
    document.getElementById("tainstholder").style.display = "block";
    document.getElementById("apkholder").style.display = "none";
    hideallvideo()
}

function apkshow(){
    document.getElementById("contentholderid").style.display = "none";
    document.getElementById("dopcontentholdID").style.display = "none";
    document.getElementById("newsholder").style.display = "none";
    document.getElementById("kpinstholder").style.display = "none";
    document.getElementById("tainstholder").style.display = "none";
    document.getElementById("apkholder").style.display = "block";
    hideallvideo()
}


/*************************************************************************/
var news={
    news1:{
        header:'Наполнен справочник видеоинструкций.',
        date:'20.07.2017',
        desc:'Справочник содержит описание работы функционала мобильго модуля и работу торгового агента с оборудованием.'
    },
    news2:{
        header:'Наполнен справочник инструкций ключевого пользователя.',
        date:'19.07.2017',
        desc:'Инструкции содержат описание настольного модуля, обязанности ключевого пользователя и порядок решения типовых задач.'
    }
}


function newsriter(){
    for (var nws in news){
            var nw = news[nws]
            var itm = document.getElementById("newsholder").firstElementChild;
            var cln = itm.cloneNode(true);
            
            var hed = document.createElement("h1");
            var node1 = document.createTextNode(nw.header);
            hed.appendChild(node1);
            cln.appendChild(hed);

            var dt = document.createElement("p");
            var node2 = document.createTextNode(nw.date);
            dt.appendChild(node2);
            cln.appendChild(dt);

            var dc = document.createElement("p");
            var node3 = document.createTextNode(nw.desc);
            dc.appendChild(node3);
            cln.appendChild(dc);

            
            document.getElementById("newsholder").appendChild(cln);
    }
    document.getElementById("newsholder").firstElementChild.style.display = "none"
}
newsriter()
/***************************************************************************** */

var kpinst={
    inst1:{
        header:'Наполнен справочник видеоинструкций3.',
        filename:'Send_MBD.pdf',
        desc:'Справочник содержит описание работы функционала мобильго модуля и работу торгового агента с оборудованием.'
    },
    inst2:{
        header:'Наполнен справочник инструкций ключевого пользователя.',
        filename:'Send_MBD.pdf',
        desc:'Инструкции содержат описание настольного модуля, обязанности ключевого пользователя и порядок решения типовых задач.'
    }
}

function kpinstwriter(){
    for (var nws in kpinst){
            var nw = kpinst[nws]
            var itm = document.getElementById("kpinstholder").firstElementChild;
            var cln = itm.cloneNode(true);
            
            var hed = document.createElement("h1");
            var node1 = document.createTextNode(nw.header);
            hed.appendChild(node1);
            cln.appendChild(hed);

            var dc = document.createElement("p");
            var node3 = document.createTextNode(nw.desc);
            dc.appendChild(node3);
            cln.appendChild(dc);
        
            cln.setAttribute("href",  'instructions/'+nw.filename);
            cln.setAttribute("target",  "_blank");
            document.getElementById("kpinstholder").appendChild(cln);
    }
    document.getElementById("kpinstholder").firstElementChild.style.display = "none"
}
kpinstwriter()


/********************tainstwriter********* */
var tainst={
    inst1:{
        header:'Наполнен справочник видеоинструкций4.',
        filename:'Send_MBD.pdf',
        desc:'Справочник содержит описание работы функционала мобильго модуля и работу торгового агента с оборудованием.'
    },
    inst2:{
        header:'Наполнен справочник инструкций ключевого пользователя.',
        filename:'Send_MBD.pdf',
        desc:'Инструкции содержат описание настольного модуля, обязанности ключевого пользователя и порядок решения типовых задач.'
    }
}

function tainstwriter(){
    for (var nws in tainst){
            var nw = tainst[nws]
            var itm = document.getElementById("tainstholder").firstElementChild;
            var cln = itm.cloneNode(true);
            
            var hed = document.createElement("h1");
            var node1 = document.createTextNode(nw.header);
            hed.appendChild(node1);
            cln.appendChild(hed);

            var dc = document.createElement("p");
            var node3 = document.createTextNode(nw.desc);
            dc.appendChild(node3);
            cln.appendChild(dc);
        
            cln.setAttribute("href",  'instructions/'+nw.filename);
            cln.setAttribute("target",  "_blank");
            document.getElementById("tainstholder").appendChild(cln);
    }
    document.getElementById("tainstholder").firstElementChild.style.display = "none"
}
tainstwriter()
/****************************************************** */
function stopVideo() {
	var div = document.getElementById("cinema");
	for(var i=0;i<=5;i++){
	let iframe = div.getElementsByTagName("iframe")[i].contentWindow;
	iframe.postMessage('{"event":"command","func":"stopVideo","args":""}','*');
	}
}

function chanel(ch){
    var elem = document.getElementsByClassName('videoholder');	
		var i;	
		for(var i=0; i< elem.length;i++){
			elem[i].style.display = 'none';
        }
        document.getElementById("contentholderid").style.display = "none";
        document.getElementById("dopcontentholdID").style.display = "none";
        document.getElementById("newsholder").style.display = "none";
        document.getElementById("kpinstholder").style.display = "none";
        document.getElementById("tainstholder").style.display = "none";
		document.getElementById(ch).style.display = 'block';
		stopVideo();
}

function hideallvideo(){
    var elem = document.getElementsByClassName('videoholder');	
		var i;	
		for(var i=0; i< elem.length;i++){
			elem[i].style.display = 'none';
		}
		stopVideo();
    }

    /************apkwriter********************* */



    var apkdwnld={
        apk1:{
            header:'SalesWorks',
            version:'2.50.02.01',
            filename:'SWEAndroidMobileInstaller_2.50.02.01.apk',
            desc:'SWEAndroidMobileInstaller_2.50.02.01.apk'
        },
        apk2:{
            header:'SalesWorks',
            version:'2.63.02.01',
            filename:'SWEAndroidMobileInstaller_2.50.02.01.apk',
            desc:'SWEAndroidMobileInstaller_2.50.02.01.apk'
        }
    }
    
    function apkdownload(){
        for (var nws in apkdwnld){
                var nw = apkdwnld[nws]
                var itm = document.getElementById("apkholder").firstElementChild;
                var cln = itm.cloneNode(true);
                var x = cln.querySelectorAll('div');
                
                
                var hed = document.createElement("h2");
                var node1 = document.createTextNode(nw.header+" "+nw.version);
                hed.appendChild(node1);
                x[1].appendChild(hed);

                var hed2 = document.createElement("h3");
                var node2 = document.createTextNode("SoftServe Business Systems");
                hed2.appendChild(node2);
                x[1].appendChild(hed2);
    
                var dc = document.createElement("p");
                var node3 = document.createTextNode(nw.desc);
                dc.appendChild(node3);
                x[1].appendChild(dc);
            
                cln.setAttribute("href",  'files/'+nw.filename);
                document.getElementById("apkholder").appendChild(cln);
        }
        document.getElementById("apkholder").firstElementChild.style.display = "none"
    }
    apkdownload();