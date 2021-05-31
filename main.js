function tem() {
		document.getElementById('shap1').style.backgroundColor = document.getElementById('shap1').style.backgroundColor == 'var(--red)' ? '#0066ff' : 'var(--red)'
		document.getElementById('shap2').style.backgroundColor = document.getElementById('shap2').style.backgroundColor == 'var(--red)' ? '#0066ff' : 'var(--red)'
		document.getElementById('bodyg').style.backgroundImage = document.getElementById('bodyg').style.backgroundImage == 'url(img/bg2red.png)' ? 'url(img/bg2.png)' : 'url(img/bg2red.png)'
	}
	function uvedom(id) {
		document.getElementById(id).style.display = 'inline-block'
		setTimeout(function() {
			document.getElementById(id).style.opacity = '1'
			document.getElementById(id).style.transform = 'translate(-50%) translateY(0%)'
		}, 10);
		setTimeout(function() {
			document.getElementById(id).style.opacity = '0'
			document.getElementById(id).style.transform = 'translate(-50%) translateY(100%)'
		}, 1500);
		setTimeout(function() {
			document.getElementById(id).style.display = 'none'
		}, 1750);
	}
	function mainP(locationHref) {
		document.getElementById('shap2').style.height = '100%'
		setTimeout(function() {
			location.href = locationHref
		}, 1000);
	}
	function strelka() {
		document.getElementById('strelka').style.left = '-50%'
		setTimeout(function() {
			location.href = 'index.html'
		}, 1500);
	}

	function openM(id) {
		document.getElementById(id).style.display = 'block'
		document.getElementById('fon').style.display = 'block'
		setTimeout(function() {
			document.getElementById(id).style.transform = 'translate(-50%) translateY(0%)'
			document.getElementById('fon').style.opacity = '.5'
		}, 10);
	}
	function closedM(id) {
		document.getElementById(id).style.transform = 'translate(-50%) translateY(100%)'
		document.getElementById('fon').style.opacity = '0'
		setTimeout(function() {
			document.getElementById(id).style.display = 'none'
		document.getElementById('fon').style.display = 'none'
		}, 300);
	}

	window.onload = function() {
		setTimeout(function() {
			document.getElementById('text').style.display = 'block'
			document.getElementById('logo').style.transform = 'translateY(0%)'
		}, 500);
		setTimeout(function() {
			document.getElementById('bgd').style.opacity = '0'
		}, 2000);
		setTimeout(function() {
			document.getElementById('bgd').style.display = 'none'
		}, 2500);
	}
