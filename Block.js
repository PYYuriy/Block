window.onload = function () {
	var sf = document.forms.f1
	function getE(idName){
		return document.getElementById(idName);
	}

	sf.btCrElement.onclick = function() {
			getE("workDiv").style.display = "block";
	}
	sf.widthBlok.onblur = function(){
		getE("workDiv").style.width =sf.widthBlok.value +"px";
	}
	sf.heightBlock.onblur = function(){
		getE("workDiv").style.height =sf.heightBlock.value +"px";
	}
	getE("colRed").onclick = function(){
		getE("workDiv").style.background = "red"
	}
	getE("colGreen").onclick = function(){
		getE("workDiv").style.background = "green"
	}
	getE("colBlue").onclick = function(){
		getE("workDiv").style.background = "blue"
	}
	function checkValue (a){
		if(isNaN(a)){
			alert("This is Not a Namber");
		}else if (a < 0){
			alert("It's should be positive number");
		}
	}


	sf.btCrCoordinates.onclick = function(){
		getE("navigate").style.display ="none";
		var n = +prompt("Введіть кількість координат","1");
			checkValue (n);
			var coordX = [];
			var coordY = [];
			
			for (var i = 0; i < n; i++) {
				var x = +prompt("Enter coordinat X"+(i+1),"");
				checkValue (x);
				if (isNaN(x) || x<0) break;
				var y = +prompt("Enter coordinat Y"+(i+1),"");
				checkValue (y);
				if (isNaN(y) || x<0) break;
				coordX[i] = x;
				coordY[i] = y;
				var j=0;
				getE("workDiv").onmouseover = function(){
				this.style.marginTop = coordX[j] +"%";
				this.style.marginLeft = coordY[j] +"%";
				alert(j+1+" check X: "+coordX[j]+", Y:"+coordY[j]);
				j++;
				if(j==n) j=0;
				}
			
		}


	}



}