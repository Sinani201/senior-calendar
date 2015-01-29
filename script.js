window.onload = function() {
	var now = Date.now();
	var adates = [new Date(2015, 1, 30), new Date(2015, 2, 2), new Date(2015, 2, 4), new Date(2015, 2, 9), new Date(2015, 2, 11), new Date(2015, 2, 13), new Date(2015, 2, 18), new Date(2015, 2, 23), new Date(2015, 2, 25), new Date(2015, 3, 2), new Date(2015, 3, 4), new Date(2015, 3, 6), new Date(2015, 3, 11), new Date(2015, 3, 16), new Date(2015, 3, 18), new Date(2015, 3, 20), new Date(2015, 3, 23), new Date(2015, 3, 25)];

	var bdates = [new Date(2015, 1, 29), new Date(2015, 2, 3), new Date(2015, 2, 5), new Date(2015, 2, 6), new Date(2015, 2, 10), new Date(2015, 2, 12), new Date(2015, 2, 17), new Date(2015, 2, 19), new Date(2015, 2, 24), new Date(2015, 2, 26), new Date(2015, 2, 27), new Date(2015, 3, 3), new Date(2015, 3, 5), new Date(2015, 3, 10), new Date(2015, 3, 12), new Date(2015, 3, 13), new Date(2015, 3, 17), new Date(2015, 3, 19), new Date(2015, 3, 24), new Date(2015, 3, 26), new Date(2015, 3, 27)];

	var adatesap = [new Date(2015, 4, 13), new Date(2015, 4, 15), new Date(2015, 4, 17), new Date(2015, 4, 20), new Date(2015, 4, 22), new Date(2015, 4, 27), new Date(2015, 4, 29), new Date(2015, 5, 1), new Date(2015, 5, 4), new Date(2015, 5, 6)];

	var bdatesap = [new Date(2015, 4, 14), new Date(2015, 4, 16), new Date(2015, 4, 21), new Date(2015, 4, 23), new Date(2015, 4, 24), new Date(2015, 4, 28), new Date(2015, 4, 30), new Date(2015, 5, 5), new Date(2015, 5, 7), new Date(2015, 5, 8)];

	springbreak = new Date(2015, 3, 27);
	apday = new Date(2015, 5, 8);

	var adaysleft = 0;
	for (var i = 0; i < adates.length; i++) {
		if (now < adates[i]) {
			adaysleft++;
		}
	}

	var atext = document.createTextNode(""+adaysleft);
	document.getElementById("aday").appendChild(atext);

	var bdaysleft = 0;
	for (var i = 0; i < bdates.length; i++) {
		if (now < bdates[i]) {
			bdaysleft++;
		}
	}

	var btext = document.createTextNode(""+bdaysleft);
	document.getElementById("bday").appendChild(btext);

	document.getElementById("schooldays").appendChild(
			document.createTextNode(""+(adaysleft+bdaysleft)));

	document.getElementById("totaldays").appendChild(
			document.createTextNode(""+(~~((springbreak-now)/(60*60*24*1000)))));

	// AP SECTION

	var adaysleftap = 0;
	for (var i = 0; i < adatesap.length; i++) {
		if (now < adatesap[i]) {
			adaysleftap++;
		}
	}

	var atextap = document.createTextNode(""+(adaysleft+adaysleftap));
	document.getElementById("adayap").appendChild(atextap);

	var bdaysleftap = 0;
	for (var i = 0; i < bdatesap.length; i++) {
		if (now < bdatesap[i]) {
			bdaysleftap++;
		}
	}

	var btextap = document.createTextNode(""+(bdaysleft+bdaysleftap));
	document.getElementById("bdayap").appendChild(btextap);

	document.getElementById("schooldaysap").appendChild(
			document.createTextNode(""+(adaysleft+adaysleftap+bdaysleft+bdaysleftap)));

	document.getElementById("totaldaysap").appendChild(
			document.createTextNode(""+(~~((apday-now)/(60*60*24*1000)))));
}
