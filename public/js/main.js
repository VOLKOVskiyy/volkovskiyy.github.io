window.onload = function() {
		document.getElementById('loading').style.transform = 'translateY(100%)'
		setTimeout(function() {
			document.getElementById('loading').style.display = 'none'
		}, 400);
	}


function tem() {
		document.getElementById('shap1').style.backgroundColor = document.getElementById('shap1').style.backgroundColor == 'var(--red)' ? '#0066ff' : 'var(--red)'
		document.getElementById('shap2').style.backgroundColor = document.getElementById('shap2').style.backgroundColor == 'var(--red)' ? '#0066ff' : 'var(--red)'
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
	function strelka() {
		document.getElementById('strelka').style.left = '-50%'
		setTimeout(function() {
			document.getElementById('closeloading').style.display = 'block'
		}, 500);
		setTimeout(function() {
			document.getElementById('closeloading').style.transform = 'translateY(0%)'
		}, 550);
		setTimeout(function() {
			location.href = 'main.html'
		}, 1500);
	}