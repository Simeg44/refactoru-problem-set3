var palindrome = function(word) {
	var j = word.length - 1;
	for (var i = 0; i < (word.length/2); i++) {
		if (word[i] != word[j]) {
			return false;
		}
		j--;
		
	}
	return true;
}

var dashInsert = function(num) {
	var array = num.toString().split("");
	var index = [];
	var j = 1;
	for (var i = 0; i < array.length -1; i++) {
		if (array[i] % 2 != 0 && array[j] % 2 != 0) {
			index.push(i);
		}
		j++;
	}
	index.forEach(function(i, place) {
		var spot = i + place + 1;
		array.splice(spot, 0, "-");
	});	

	return array.join("");
}

var caesarCipher = function(word, num) {
	var array = word.split("");
	cipher = [];
	array.forEach(function(character) {
		var value = character.charCodeAt();
		if ((value > 64 && value < 91) || (value > 96 && value < 122)) {
			
			var newValue = value + num;
			if ((newValue > 90 && newValue < 97) || (newValue > 122)) {
				newValue = newValue - 26;
				cipher.push(String.fromCharCode(newValue));
			}
			else {
				cipher.push(String.fromCharCode(newValue));
			}
		}
		else {
			cipher.push(String.fromCharCode(value));
		}

	})
	return cipher.join("");
}

console.log(palindrome("racecar"));
console.log(palindrome("civic"));
console.log(palindrome("redder"));
console.log(palindrome("palindrome"));
console.log(dashInsert(454793));
console.log(dashInsert(33333333));
console.log(caesarCipher("Caesar Cipher", 2));
console.log(caesarCipher("yz YZ", 2))


$(document).on('ready', function() {
  
});