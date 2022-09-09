function sumofTwo (arr) {
for (let i = 0; i < arr.length; i++){
    if (arr[i] + arr[i] == 0){
    return true
 } else {
     return false}
}
//O(n)
}

console.log(sumofTwo([1,2,-3,4]))

function checkUnique (str) { 
	const list = new Set(); 
	for (const character of str.split("")) { 
 
		list.add(character); 
	} 
	return str.length === list.size; 
}; 
//O(n)
console.log(checkUnique('abcde'))
console.log(checkUnique('abcdee'))

function isPangram(string){
    let str = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(str.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }
  //O(1)
  console.log(isPangram('The quick brown fox jumps over the lazy dog'))
  console.log(isPangram('not a pangram'))

  function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  //O(1)
  console.log(findLongestWord("I love barbecue sauce"));