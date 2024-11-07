function url(str) {
  if (!str) {  
    return 0;  
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

const str = prompt("Enter url");
alert("The length of the URL is: " + url(str));
