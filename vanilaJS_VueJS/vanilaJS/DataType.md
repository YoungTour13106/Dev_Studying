# 바닐라 자바스크립트 기초

## 자바스크립트 원시 타입

프로그래밍 언어에서 값의 종류를 데이터 타입, 자료형등으로 불립니다.

자바스크립트에서도 값의 종류를 **원시 타입(primitive type)**이라 부르며

**숫자, 문자열, 불리언, null, undefined, 심볼**이 있습니다.

다음은 값의 타입을 확인하기 위해서 **typeof 연산자**를 사용하는 코드입니다.

```
// typeof
const MAX_sIZE = 12;
let str = "Vanila Javascript";
let isClosed = true;
let currentValue = null;
let n;                              // 초기화하지 않으면 undefined 할당
const RED = Symbol("apple");

console.log(typeof MAX_sIZE);       // number
console.log(typeof str);            // string
console.log(typeof isClosed);       // boolean
console.log(typeof currentValue);   // object
console.log(typeof n);              // undefined
console.log(typeof RED);            // symbol
```

## 템플릿 문법

**템플릿 문법(backtick)**은 변수나 상수를 문자열과 결합하는 방법입니다.

템플릿 문법 이전에는 문자열과 변수[상수]를 + 연산자로 결합하였습니다.

```
let name = "Kim";
let age = 15;

const message = "저는 "+name+"이고, 나이는 "+age+"입니다.";
console.log(message);
```

템플릿 문법은 문자열 안에 변수나 상수를 기입하는 방식이며, 백틱(``)을 사용합니다.

```
let location = "Seoul";
let temperature = -1;

const message = `오늘 ${location}은 기온 ${temperature}입니다.`;
console.log(message);
```
