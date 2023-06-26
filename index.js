
function searchChar(pos, str, ch) {
	let i  = 0;
	while(i < str.length) {
	     if(str[i] == ch){
	    	return i;
	     }else {
	    	return -1;
	     }
}
}
let result =  searchChar("shamil","mi");
console.log(result);



