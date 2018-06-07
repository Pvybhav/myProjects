var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var reversedArray = [];
document.getElementById("givenArray").innerHTML = "given Array is " + arr;
function arrayReverse(arr) {
	// has the code to display
	// the array elements in reverse order
	for (var i = arr.length - 1; i >= 0; i--) {
		reversedArray.push(arr[i]);
	}
	document.getElementById("reversedArray").innerHTML = "reversedArray is "
			+ reversedArray;
	reversedArray = [];
}

function arraySize(arr) {
	// has the code to display
	// the size of the array
	document.getElementById("length").innerHTML = "the length of given array is "
			+ arr.length;
}
