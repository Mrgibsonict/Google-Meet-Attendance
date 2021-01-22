if(ran == null){
	
	var ran = true;
	var date = new Date();
	var dateStr = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear();
	
	var code = dateStr + document.URL.split("/")[3].split("?")[0];
	var ls = window.localStorage;

	var register = []
	if(ls.getItem(code + "_register") != null){
		register = JSON.parse(ls.getItem(code + "_register"));
	}

	var checkExist = setInterval(function() {
		if (document.querySelector('#lcsclient') != null) {
			document.querySelector("[aria-label='Show everyone']").click();
			document.querySelector("[jscontroller='AXYg3e']").style.display = "none";
			
			
			if (document.querySelector('.Lf3gob') != null) {
				
				var registerButton = '<span id="downloadRegister"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf I9c2Ed M9Bg4d" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="is878e"><i class="google-material-icons" aria-hidden="true">done_all</i></div><div class="GdrRqd">Register</div></span></span></div></span>'
			
				document.querySelector(".Lf3gob").innerHTML += registerButton;
				
				var downloadButton = document.getElementById("downloadRegister");
				
				downloadButton.addEventListener('click', function(){
					
					saveRegister()
					
				});
				
			}else if (document.querySelector("[jsname = 'Kzha2e']") != null) {
				
				var registerButton = '<div id="downloadRegister" jscontroller="wnhwb" jsaction="JIbuQc:eMR1wc;L3AHvb:ggxfhd" class="cU0hbd" data-is-in-filmstrip="true"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="" jsaction="" jsname="BVty0" aria-disabled="false" tabindex="0"><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><i class="google-material-icons EVe89b D0baBe" aria-hidden="true">done_all</i><span class="GsqdZ K74C9e">Register</span></span></span></div></div>'
			
				document.querySelector("[jsname = 'Kzha2e']").innerHTML += registerButton;
				
				var downloadButton = document.getElementById("downloadRegister");
				
				downloadButton.addEventListener('click', function(){
					
					saveRegister()
					
				});
				
			}
			
			document.querySelector("[aria-label='Show everyone']").addEventListener('click', function(){
			
				if (document.querySelector('#downloadRegister') == null) {
				
					document.querySelector("[jscontroller='AXYg3e']").style.display = "none";
			
					if (document.querySelector('.Lf3gob') != null) {
						
						var registerButton = '<span id="downloadRegister"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf I9c2Ed M9Bg4d" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="is878e"><i class="google-material-icons" aria-hidden="true">done_all</i></div><div class="GdrRqd">Register</div></span></span></div></span>'
					
						document.querySelector(".Lf3gob").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}else if (document.querySelector("[jsname = 'Kzha2e']") != null) {
						
						var registerButton = '<div id="downloadRegister" jscontroller="wnhwb" jsaction="JIbuQc:eMR1wc;L3AHvb:ggxfhd" class="cU0hbd" data-is-in-filmstrip="true"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="" jsaction="" jsname="BVty0" aria-disabled="false" tabindex="0"><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><i class="google-material-icons EVe89b D0baBe" aria-hidden="true">done_all</i><span class="GsqdZ K74C9e">Register</span></span></span></div></div>'
					
						document.querySelector("[jsname = 'Kzha2e']").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}
					
				}
			});
			
			document.querySelector("[aria-label='Chat with everyone']").addEventListener('click', function(){
			
				if (document.querySelector('#downloadRegister') == null) {

					document.querySelector("[jscontroller='AXYg3e']").style.display = "none";


					if (document.querySelector('.Lf3gob') != null) {
						
						var registerButton = '<span id="downloadRegister"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf I9c2Ed M9Bg4d" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="is878e"><i class="google-material-icons" aria-hidden="true">done_all</i></div><div class="GdrRqd">Register</div></span></span></div></span>'
					
						document.querySelector(".Lf3gob").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}else if (document.querySelector("[jsname = 'Kzha2e']") != null) {
						
						var registerButton = '<div id="downloadRegister" jscontroller="wnhwb" jsaction="JIbuQc:eMR1wc;L3AHvb:ggxfhd" class="cU0hbd" data-is-in-filmstrip="true"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="" jsaction="" jsname="BVty0" aria-disabled="false" tabindex="0"><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><i class="google-material-icons EVe89b D0baBe" aria-hidden="true">done_all</i><span class="GsqdZ K74C9e">Register</span></span></span></div></div>'
					
						document.querySelector("[jsname = 'Kzha2e']").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}
			
					
				}
			});
			
			clearInterval(checkExist);
			checkInterval = setInterval(function() {
				
				if (document.querySelector('[aria-label="Participants"]') == null) {
				
					document.querySelector("[aria-label='Show everyone']").click();
					document.querySelector("[jscontroller='AXYg3e']").style.display = "none";
					
					if (document.querySelector('.Lf3gob') != null) {
						
						var registerButton = '<span id="downloadRegister"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf I9c2Ed M9Bg4d" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="is878e"><i class="google-material-icons" aria-hidden="true">done_all</i></div><div class="GdrRqd">Register</div></span></span></div></span>'
					
						document.querySelector(".Lf3gob").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}else if (document.querySelector("[jsname = 'Kzha2e']") != null) {
						
						var registerButton = '<div id="downloadRegister" jscontroller="wnhwb" jsaction="JIbuQc:eMR1wc;L3AHvb:ggxfhd" class="cU0hbd" data-is-in-filmstrip="true"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="" jsaction="" jsname="BVty0" aria-disabled="false" tabindex="0"><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><i class="google-material-icons EVe89b D0baBe" aria-hidden="true">done_all</i><span class="GsqdZ K74C9e">Register</span></span></span></div></div>'
					
						document.querySelector("[jsname = 'Kzha2e']").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}
				
				}
				
				if (document.querySelector('#downloadRegister') == null) {
					
					if (document.querySelector('.Lf3gob') != null) {
						
						var registerButton = '<span id="downloadRegister"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf I9c2Ed M9Bg4d" tabindex="0"><div class="Fvio9d MbhUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><div class="is878e"><i class="google-material-icons" aria-hidden="true">done_all</i></div><div class="GdrRqd">Register</div></span></span></div></span>'
					
						document.querySelector(".Lf3gob").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}else if (document.querySelector("[jsname = 'Kzha2e']") != null) {
						
						var registerButton = '<div id="downloadRegister" jscontroller="wnhwb" jsaction="JIbuQc:eMR1wc;L3AHvb:ggxfhd" class="cU0hbd" data-is-in-filmstrip="true"><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid Bs3rEf b5FiD QtoR3c M9Bg4d" jscontroller="" jsaction="" jsname="BVty0" aria-disabled="false" tabindex="0"><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span class="NPEfkd RveJvd snByac"><i class="google-material-icons EVe89b D0baBe" aria-hidden="true">done_all</i><span class="GsqdZ K74C9e">Register</span></span></span></div></div>'
					
						document.querySelector("[jsname = 'Kzha2e']").innerHTML += registerButton;
						
						var downloadButton = document.getElementById("downloadRegister");
						
						downloadButton.addEventListener('click', function(){
							
							saveRegister()
							
						});
						
					}
					
				}
				
				
				var curr = []
				
				  const participantsContainer = document.querySelector('[aria-label="Participants"]');
				  
				  const participantsElements = Array.from(participantsContainer.children ?? []);
				
				  participantsElements.forEach((participantElement) => {
					  
					const [imageElement] = participantElement.getElementsByTagName('img');
					const nameContainer = imageElement?.nextSibling;
					
					if (nameContainer) {
					  
					  const [nameElement] = nameContainer.getElementsByTagName('span');
														  
					  if (nameElement) {
						
						curr.push(nameElement.textContent)
						
					  }
					}
					
				  });
				  
				  curr = removeDuplicates(curr);
				  
				  curr.forEach(function(pupilName) {
					  
					  var exists = false;
					  
					  for(var i = 0; i < register.length; i++){
					  	
					  	if(register[i][0] == pupilName){
							  register[i][1] = register[i][1] + 1
							  exists = true;
						}
					    
					  }
					  if(!exists){
					  	var test = [pupilName, 1, new Date().toLocaleTimeString()]
						  register.push(test)
						  console.log("added to register")
					  }
					  
				  });
				  
				
				ls.setItem(code + "_register", JSON.stringify(register));
			}, 60000);
		}
	}, 1000);
}


function removeDuplicates(array) {
  array.splice(0, array.length, ...(new Set(array)))
  return array
};

function getSurname(words) {
	var n = words.split(" ");
	return n[n.length - 1];
}

function nameForSorting(name){
	
	var surname = getSurname(name)
	var pupilName = surname + " " + name;
	pupilName = pupilName.substring(0, pupilName.lastIndexOf(" "));
	pupilName = pupilName.toLowerCase();
	return pupilName;
}

function saveRegister(){
	
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	var tempRegister = JSON.parse(ls.getItem(code + "_register"))
	var registerCSV = "Surname, First Names, Time Joined, Minutes Attended\n"
	var teacherData = tempRegister.shift();
	
	tempRegister.sort(function(a,b){ return nameForSorting(a[0]) > nameForSorting(b[0]) ? 1 : -1; });
	
	tempRegister.forEach(function(registerEntry) {
		
		var surname = getSurname(registerEntry[0])
		  var pupilName = surname + "," + registerEntry[0]
		  pupilName = pupilName.substring(0, pupilName.lastIndexOf(" "));
		
		registerCSV += pupilName+","+registerEntry[2]+","+registerEntry[1]+"\n"
	});
	
	var blob = new Blob(['\ufeff' + registerCSV], {type: 'text/plain;charset = utf-8'}),
		url = window.URL.createObjectURL(blob);
	var date = new Date();
	var dateStr = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + date.getFullYear();
	
	a.href = url;
	a.download = "register_" + teacherData[0] +"_"+ dateStr + "__" + teacherData[2] + "_(" + teacherData[1] + "mins).csv";
	a.click();
	window.URL.revokeObjectURL(url);
}