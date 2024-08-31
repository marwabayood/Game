  /* *******************************************************Tik tak tok******************************************************************************/
function reset(A,B,C)
            {
                 document.getElementById('A'+A).style.backgroundColor="rgb(153, 51, 51)";
                 document.getElementById('A'+B).style.backgroundColor="rgb(153, 51, 51)";
                 document.getElementById('A'+C).style.backgroundColor="rgb(153, 51, 51)";
                
                setTimeout(function()
                {
                 location.reload();  
                },3000);
            }
            var turn=true;
            var squre = [];
            
            function checkowner()
            {
                for(var i=1;i<=9;i++)
                    {
                     squre[i] = document.getElementById("A"+i).innerHTML;
                    }
                //horozintal
                if(squre[1]==squre[2]&&squre[2]==squre[3]&& squre[1]!="")
                    {
                        reset(1,2,3);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation";
                    }
                 if(squre[4]==squre[5]&&squre[5]==squre[6]&& squre[4]!="")
                    {
                        reset(4,5,6);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;                 
                    }
                if(squre[7]==squre[8]&&squre[8]==squre[9]&& squre[7]!="")
                    {
                        reset(7,8,9);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;                 
                    }
                //vertical
                if(squre[1]==squre[4]&&squre[4]==squre[7]&& squre[1]!="")
                    {
                        reset(1,4,7);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;                 
                    }
                if(squre[2]==squre[5]&&squre[5]==squre[8]&& squre[2]!="")
                    {
                        reset(2,5,8);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;         
                    }
                if(squre[3]==squre[6]&&squre[6]==squre[9]&& squre[3]!="")
                    {
                        reset(3,6,9);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;               
                    }
                //diagonal
                if(squre[1]==squre[5]&&squre[5]==squre[9]&& squre[1]!="")
                    {
                        reset(1,5,9);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation" ;  
                    }
                 if(squre[3]==squre[5]&&squre[5]==squre[7]&& squre[3]!="")
                    {
                        reset(3,5,7);
                        document.getElementById("article1").style.display="block";
                        document.getElementById("article1").innerHTML="Congratulation";
                    }
            }
            
            function insert(id){
                var s =document.getElementById(id);
                if(turn && s.innerHTML=="")
                    {
                        s.innerHTML="X";
                        turn=!turn;
                    }
                else if(!turn && s.innerHTML=="")
                   {
                        s.innerHTML="O";
                        turn=!turn;
                    }
                checkowner();
            }
/**********************************************************Match************************************************************************/

           var start = function(e) {
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('iconId', e.target.id);
				e.dataTransfer.setDragImage(e.target, 0, 0);
				return true;
			}

			var enter = function(e) {
				return true;
			}

			var over = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var targetId = e.target.id;

				if (targetId.indexOf('icon') > -1) {
					return true;
				}

				return false;
			}

			var drop = function(e) {
				var iconId = e.dataTransfer.getData('iconId');
				var icon = document.getElementById(iconId);
				e.target.appendChild(icon);
				e.stopPropagation();
				return false;
			}

			var end = function(e) {
				e.dataTransfer.clearData('iconId');
				return true;
			}

			var pollResults = function() {
				var score = document.getElementById('score');
				score.innerHTML = 0;

				var hitboxes = document.getElementById('dropzone-holder').children;

				for (var i = 0; i < hitboxes.length; ++i) {
					var hitbox = hitboxes[i];
					var dropzone = hitbox.lastElementChild;

					if (dropzone.children.length > 0) {
						dropzone.style.backgroundSize = '0';

						var dropzoneId = dropzone.id;
						var iconId = dropzone.firstElementChild.id;

						var dropzoneName = dropzoneId.substring(dropzoneId.indexOf('-') + 1);
						var iconName = iconId.substring(iconId.indexOf('-') + 1);

						dropzone.previousElementSibling.setAttribute('class', 'answer show');

						if (iconName == dropzoneName) {
							dropzone.previousElementSibling.src = 'img/correct-green.png';
							score.innerHTML = parseInt(score.innerHTML) + 1;
						} else {
							dropzone.previousElementSibling.src = 'img/wrong-red.png';
						}
					} else {
						dropzone.previousElementSibling.setAttribute('class', 'answer hide');
						dropzone.style.backgroundSize = '100% auto';
					}
				}
                 

                    
				if (parseInt(score.innerHTML) == 10) {
					//alert('Congratulations! You won the game!');
                    var x = document.getElementById("myAudio");
                    x.play();
                    setTimeout(function(){
                        x.pause();
                        clearInterval(clear);
                    },1400)                    
				}
                
			}

			var clear = setInterval(pollResults, 50);




