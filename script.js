function indexOfIgnoreCase(s1, s2) {
  // write your code here 
	let main = s1.toLowerCase();
	let result =  s2.toLowerCase();
	return main.indexOf(result);  
}

Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
