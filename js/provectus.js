"use strict";

document.write('Version #1 (two branches): ');

console.time("Execution time took");

var i=0, a;

while (i < 100) {
 i+=1;
 a=i;
 if (i%5==0) {a='buzz';} 

 if (i%3==0) {
	a='fizz';
		if (i%5==0) {
		a='fizzbuz';

	}

  } 

 document.write(a+'   ');
}

console.timeEnd("Execution time took");



document.write('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Version #2 (trivial solution, three branches): ');

console.time("Execution time took");

var i=0, a;

while (i < 100) {
 i+=1;
 a=i;
 if (i%3==0) {a='fizz';}
 if (i%5==0) {a='buzz';} 
 if ((i%3==0) && (i%5==0)) {a='fizzbuzz';}

 document.write(a+'   ');

}

console.timeEnd("Execution time took");



document.write('&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Version #3 (one large branch with the internal branches): ');

console.time("Execution time took");

var i=0, a;


while (i < 100) {
 i+=1;
 if (i%3==0) {
	a='fizz';
	if (i%5==0) {a=a+'buzz';}
	 document.write(a+'   ');
 }
  else if (i%5==0) {document.write('buzz  ');} else

{ document.write(i+'   ');}

}

console.timeEnd("Execution time took");