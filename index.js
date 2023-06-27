
function searchChar(pos, str, ch) {
    let pos = 0
	let i  = 0;
	while(i < str.length) {
	     if(str[i] == ch){
	    	return i;
	     }else {
	    	return -1;
	     }
}
}
let result =  searchChar(2,"shamil","mi");
console.log(result);



