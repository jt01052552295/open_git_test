var total = 20;
var results = [0, 1];

console.time('Getting Fibonaccie Numbers');

for(var i=0; i<total; i++){
	if(i>=2){
		results.push( results[i-2] + results[i-1]);
	}
}

console.log("Fibonaccie ["+ total + "] th Number is ["+ results[total-1] +"]");
console.log("All number is ["+ results + "]");

console.timeEnd('Getting Fibonaccie Numbers');