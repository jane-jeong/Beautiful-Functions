// [ 3강 : 자바스크립트 데이터 타입 ]

// 1. Use strict 
// added in ES5 
// use this for Vanila Javascript.
'use strict'; 

// 2. Constant (read only) 
// 상수 선언: const 
// use const whenever possible. 
// favor immutable data type always for a few reasons:
// - security 
// - thread safety
// - reduce human mistakes

const daysInWeek = 7; 
const maxNumber = 5; 
console.log("🚀 ~ file: lecture.js ~ line 18 ~ maxNumber", maxNumber);


// 3. Variable (read/write 가능)
// only use let if variable needs go change.
// 변수는 포인터로 할당된 메모리를 가리키고 메모리에 할당된 값을 바꿀 수 있다 (mutable type)
// 변수 선언: let (added in ES6, 이전의 var는 hoisting 문제가 있다)

let name = 'ellie';
console.log(name); 
name = 'hello'; 
console.log(name); 

// Block Scope ({ } 블록 안은 지역 변수, 블록 밖은 글로벌 변수)


// 4. Variable types 
// - primitive 타입, single item : number, string, boolean, null, undefiend, symbol (메모리에 value가 바로 저장)
// - object, box container : object는 크기가 너무 커서 value를 가리키는 레퍼런스가 메모리에 저장된다)
// - function, first-class function  

// [ Note ] 메모리 타입 정리 
// Immutable data types : primitive types('ellie'라는 스트링을 저장하면 'ellie' 통째로 수정해야지 한 단어씩 변경할 수 있다), frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS


// [ C 언어의 메모리타입은 ] 
// short(2 bytes), int(4 bytes), long(8 bytes) (정수), float(4 bytes), double(16 bytes), return

// [ JS에서는 ] 
// 숫자는 모두 number
// - 자바스크립트는 다이나믹하게 데이터타입이 결정되기 때문
let a = 12; 
let b = 1.2;

// 타입스크립트에서는 number만 명시해서 적어주면 됨 
let a: number = 12; 
let a: number = 1.2;

const count = 17; // integer 
const size = 17.1; // decimal number 
console.log('value: ${count}, type: ${typeof count}');  
console.log('value: ${size}, type: ${typeof size}');  

// number - special numeric values : 
const infinity = 1 / 0 ; // infinity 출력 
const negativeInfinity = -1 / 0; //-Infinity 출력 
const nAn = 'not a number' / 2 ; // NaN 출력
console.log(infinity)

// bigInt (fairly new, don't use it yet) 
const bigInt = 12345677913984723984723572095289528340n ; // bigInt 데이터타입. 현재는 크롬, 파이어폭스에서만 

// string 
const char = 'c'; 
const brendean = 'brendan'; 
const greeting = 'hello ' + brendan ; 
const helloBob = 'hi ${brendan}!'; // template literals (string) 
console.log('value: ${helloBob}, type: ${typeof helloBob}');
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); 

// boolean 
// false: 0, null, undefined, NaN, ''  -> false로 간주되어짐 
// true: any other value  
const canRead = true;
const test = 3 < 1; // false 
console.log('value: ${canRead}, type: ${typeof canRead}'); 
console.log('value: ${test}, type: ${typeof test}'); 

// null 
let nothing = null; // (텅텅 비어있는 엠티 값이야) 
console.log 

// undefined 
let x = undefined; // (텅텅 비어있는지 어쩐지 모르는 상태_
let x; 

// symbol, create unique indentifiers for objects  
const symbol1 = Symbol('id'); 
const symbol2 = Symbol('id'); 
// 동일한 아이디 string으로 심볼을 만들었지만 다른 심볼로 만들어지게 됨 

// 만약에 똑같은 심볼을 만들고 싶으면 
const gSymbol1 = Symbol.for('id'); 
console.log(gSymbol1 == gSymbol2); // true 
console.log('value : ${symbol1.description}, type: ${typeof symbl1}');


// 5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log();
text = 1; 
text = '7' + 5; // 출력: 7 - 숫자 5를 다이나믹하게 알아서 문자로 바꿈 
text = '8' / '2' ; // 출력: 4 - 문자를 다이나믹하게 알아서 숫자로 바꿈 

// 위험한 일 
let text = 'hello';
text.charAt(0)를 출력하면 'h' 나와야 되는데 중간에 다른 사람이 숫자로 바꾸게 되면 오류가 난다 


// 그래서 타입스크립트가 나옴
// 타입스크립트는 자바스크립트 위에 타입이 더 올려진 언어
// 타입스크립트는 나중에 BABEL로 컴파일해서 자바스크립트로 변환되게 됨 
// 실시간으로 보려면 자바스크립트로 해야해서 처음에 배울 때는 자바스크립트로 배워야한다
// 타입스크립트는 나중에 배우면 되고, 배우는 시간도 짧다 



// object, real-life object, data structure
// object는 박스  
const ellie = { name: 'ellie', age: 20};  // ellie는 const로 지정되어 있어서 한 번 할당되면 다른 오브젝트로 할당 불가능한데 엘리 안에 들어있는 name, age는 각각 포인터가 있어서 변수다. 즉, 변경 가능하다. 
ellie.age = 21; 


// [ 4강 : object, function + 코딩의 기본 연산자 operator, if, for, loop ] 

// 1. String concatenation 
'my' + ' cat' = 'my cat'
'1' + 2 

// 2. Numeric operators 
* 1 / * % ** 

// 3. Increment and decrement operators (++, --) 
let counter = 2; 
const preIncrement = ++ counter; 
// counter = counter + 1; 
// preIncrement = counter; (위 문장처럼 counter +1)

//postIncrement   
const postIncrement = counter++ ; 

//preDecrement
const preDecrement = --count;
console.log('preDecrement: ${preDecrement}, counter: ${counter}'); 

//postDecrement
const postDecrement = counter--;
console.log('postDecrement: ${postDecrement}, counter: ${counter}'); 


// 4. Assignment operators 
let x = 3; 
let y = 6; 
x += y; // x = x + y; 
x -= y; 
x *= y; 
x /= y; 

// 5. Comparison Operators 

// 6. Logical Operators (집중) 
// or : ||
// and : &&
// not : ! 

// || (or) - finds the first truthy value (true인 게 나오면 끝남)
console.log('or: ${value 1 || value2 || check()}'); 
// 표현식이나 함수를 맨 뒤에 호출하는 게 좋다 

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time 
        console.log('UGH'); 
    }
    return true;
    }

// 

