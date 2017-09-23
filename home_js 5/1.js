
// Task 1
var c1 = document.getElementById('c1');
document.getElementById('b1').onclick = b1;
	function b1 () {
		var a1 = document.getElementById('a1').value;
		c1.innerHTML = a1.length;
	}


// Task 2
var a2 = ['dwarf', 'knight', 'skeleton', 'wizard']
var c2 = document.getElementById('c2');
document.getElementById('b2').onclick = b2;
	function b2 () {
		for (i = 0; i<a2.length; i++) {
			c2.innerHTML += '<img src="images/' + a2[i] + '.png">';
		}
	}


// Task 3


var c3 = document.getElementById('c3');
document.getElementById('b3').onclick = b3;
	function b3 () {
		var a3 = document.getElementById('a3').value;
		
		if (a3.indexOf('https://') == 0) {
			c3.innerHTML = a3.substring(8);
		}

		else if(a3.indexOf('http://') == 0) {
			c3.innerHTML = a3.substring(7);
		}
	}

// Task 4


var c4 = document.getElementById('c4');
document.getElementById('b4').onclick = b4;
	function b4 () {
		var a4 = document.getElementById('a4').value;

		 if (a4.indexOf('https://www.') == 0) {
			c4.innerHTML = a4.substring(12);
		}

		else if (a4.indexOf('http://www.') == 0) {
			c4.innerHTML = a4.substring(11);
		}
		else if (a4.indexOf('https://') == 0) {
			c4.innerHTML = a4.substring(8);
		}

		else if(a4.indexOf('http://') == 0) {
			c4.innerHTML = a4.substring(7);
		}

		else {
			c4.innerHTML = a4;
		}
	}


// Task 5
var result = document.getElementById('result');

document.getElementById('btn').onclick = btn;
	function btn () {
		var name = document.getElementById('name').value;
		var surname = document.getElementById('surname').value;
		var mail = document.getElementById('mail').value;
		var pas = document.getElementById('pas').value;
		name = name.replace(/\s/g, '');
		surname = surname.replace(/\s/g, '');
		mail = mail.replace(/\s/g, '');
		pas = pas.replace(/\s/g, '');
		if ( (pas.length > 4) && (mail.indexOf('@') != -1) ) {
			result.innerHTML = 'Добро пожаловать';
		}
		else {
			result.innerHTML = 'Ошибка';
		}

		console.log(name);
	}




// Task 6
var c6 = document.getElementById('c6');
document.getElementById('b6').onclick = b6;
	function b6 () {
		var a6 = document.getElementById('a6').value;
		c6.innerHTML = a6.charCodeAt(0);
	}