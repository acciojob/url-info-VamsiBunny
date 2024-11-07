//your JS code here. If required.
function url(str){

	 if (str === null) {
    return 0;  
  }
	let count=0;
  for(let i=0;i<str.length;i++){

	  count++
  
  }
	return count;
	
}
const str = prompt("Enter url"  );
alert(url(str));