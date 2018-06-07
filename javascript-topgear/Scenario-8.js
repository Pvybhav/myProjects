var vowelsArray = [];
str = document.getElementById("string").value;
function getDetails(str) {
	for (var i = 0; i < str.length; i++) {
		var letter = str[i].toLowerCase();
		if (letter == "a" || letter == "e" || letter == "i" || letter == "o"
				|| letter == "u") {
			// alert(letter);
			vowelsArray.push(letter);
			//alert(vowelsArray)
		}
	}
	document.getElementById("result").innerHTML = "the no.of vowels in the given string is: "
			+ vowelsArray.length
			+ "<br/>"
			+ "vowels in the string you entered is: " + vowelsArray;

	vowelsArray = [];
}