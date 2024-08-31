var b=0;

function dragstart001(event)
{
	event.dataTransfer.setData("choice001",event.target.id)
}

function dragstart002(event)
{
	event.dataTransfer.setData("choice002",event.target.id)
}

function dragstart003(event)
{
	event.dataTransfer.setData("choice003",event.target.id)
}

function allowDrop001(event)
{
	event.preventDefault();
}
function allowDrop002(event)
{
	event.preventDefault();
}
function allowDrop003(event)
{
	event.preventDefault();
}

function drop006(event)
{
	var data = event.dataTransfer.getData("choice001");
  event.target.appendChild(document.getElementById(data));
  score001.innerHTML=++b;

    place001.innerHTML="C";
}
function drop007(event)
{
	var data = event.dataTransfer.getData("choice002");
  event.target.appendChild(document.getElementById(data));
  score001.innerHTML=++b;

  place002.innerHTML="a";
  
}
function drop008(event)
{
	var data = event.dataTransfer.getData("choice003");
  event.target.appendChild(document.getElementById(data));
  score001.innerHTML=++b;
  place003.innerHTML="t";
  
}

function submit001()
{
	if(b==3)
        {
            message001.innerHTML="Congratulations";
            var x = document.getElementById("myAudio");
                    x.play();
            setTimeout(function(){
                x.pause();
            },1400)
        }
	
else
	message001.innerHTML="Try Again";
}



function timerfun(secs,elem)
{
var element =document.getElementById(elem);
element.innerHTML="Timer "+secs;
if(secs<0){
	clearTimeout(timer);
	element.innerHTML=" Time Out ";
	setTimeout(function () {
   window.location.href = "game3.htm"; //will redirect to your blog page (an ex: blog.html)
}, 1000)

}
secs--;
var timer =setTimeout('timerfun('+secs+',"'+elem+'")',1000);
	
	
}
/*
setTimeout(function () {
   window.location.href = "blog.html"; //will redirect to your blog page (an ex: blog.html)
},10000)*/