window.onload = function() {
	var now = new Date();
	var adates = [new Date(2015, 0, 30), new Date(2015, 1, 2), new Date(2015, 1, 4), new Date(2015, 1, 9), new Date(2015, 1, 11), new Date(2015, 1, 13), new Date(2015, 1, 18), new Date(2015, 1, 23), new Date(2015, 1, 25), new Date(2015, 2, 2), new Date(2015, 2, 4), new Date(2015, 2, 6), new Date(2015, 2, 11), new Date(2015, 2, 16), new Date(2015, 2, 18), new Date(2015, 2, 20), new Date(2015, 2, 23), new Date(2015, 2, 25)];

	var bdates = [new Date(2015, 0, 29), new Date(2015, 1, 3), new Date(2015, 1, 5), new Date(2015, 1, 6), new Date(2015, 1, 10), new Date(2015, 1, 12), new Date(2015, 1, 17), new Date(2015, 1, 19), new Date(2015, 1, 24), new Date(2015, 1, 26), new Date(2015, 1, 27), new Date(2015, 2, 3), new Date(2015, 2, 5), new Date(2015, 2, 10), new Date(2015, 2, 12), new Date(2015, 2, 13), new Date(2015, 2, 17), new Date(2015, 2, 19), new Date(2015, 2, 24), new Date(2015, 2, 26), new Date(2015, 2, 27)];

	var adatesap = [new Date(2015, 3, 13), new Date(2015, 3, 15), new Date(2015, 3, 17), new Date(2015, 3, 20), new Date(2015, 3, 22), new Date(2015, 3, 27), new Date(2015, 3, 29), new Date(2015, 4, 1)];

	var bdatesap = [new Date(2015, 3, 14), new Date(2015, 3, 16), new Date(2015, 3, 21), new Date(2015, 3, 23), new Date(2015, 3, 24), new Date(2015, 3, 28), new Date(2015, 3, 30)];

	springbreak = new Date(2015, 2, 27);
	apday = new Date(2015, 4, 8);

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
