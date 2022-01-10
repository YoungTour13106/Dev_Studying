## 바닐라 자바스크립트 기초

## 배운 내용

1. 함수를 사용하는 이유
2. 함수 선언 방법
3. Window 객체
4. 렉시컬 스코프(Lexical Scope)

## 1. 함수를 사용하는 이유

**함수(function)** 는 반복되는 코드를 줄이고 입력값에 따라 다양하게 동작하는 코드를 작성하기 위해서 사용합니다.

## 2. 함수 선언 방법

자바스크립트에서는 세 가지의 함수 선언 방법이 있습니다.

1. 일반적인 함수 선언
2. 익명 함수 선언
3. 화살표 함수 선언

```
// 일반적인 함수 선언
function sayHello(name) { console.log(name+" Hello!"); }

sayHello("Kim"); // sayHello 함수 호출
```

일반적인 함수 선언 형태는 `function 함수_이름(파라미터) { 실행 코드 }`입니다.

```
// 익명 함수 선언
const showPrice = function(price) { return price + loyalty; }

showPrice(3000); // showPrice 함수 호출
```

익명 함수 선언 형태는 `함수_이름 = function(파라미터) { 실행 코드 }`입니다.

function 키워드에 이름이 존재하지 않아서 **익명함수(anonymous function)** 라고 부릅니다.

```
// 화살표 함수 선언
const showPrice = (price) => { return price + loyalty; }

showPrice(4000); // showPrice 함수 호출
```

화살표 함수 선언 형태는 `함수_이름 = (파라미터) => { 실행 코드 }`입니다.

**화살표 함수 문법**

1. function 키워드를 사용하지 않습니다.
2. 파라미터가 한 개이면 괄호(()) 생략이 가능합니다.
3. 실행 코드가 한 개라면 중괄호({})와 return문 생략이 가능합니다.

## 3. Window 객체

## 4. 렉시컬 스코프(Lexical Scope)

### 스코프(Scope)란?

변수 이름이 충돌되는 것을 방지하고자 자바스크립트에서 정한 규칙을 의미합니다.

예를 들어서 함수 외부와 내부에서 동일한 이름의 변수를 선언할 경우 의도치 않게 변수 이름이 충돌될 수 있습니다.

### 스코프의 종류

스코프는 다음과 같이 2가지가 있으며, 선언하는 변수의 위치에 따라서 유효한 스코프를 가집니다.

1. **전역 스코프(Global Scope)**
2. **지역 스코프(Local Scope)** 또는 **함수 레벨 스코프(Function-level Scope)**

이러한 스코프를 갖는 변수는 다음과 같이 구분합니다.

1. **전역 변수(Global Variables)**

전역 스코프를 가지며, 전역 객체인 **Window**의 프로퍼티로 등록됩니다.

2. **지역 변수(Local Variables)** : 지역 스코프를 가집니다.

자바스크립트는 다른 언어와 다르게 지역 스코프, 즉 **함수 레벨 스코프**가 함수 코드 블록 내에서만 유효합니다.

여기서 유효하다는 말은 **해당 스코프에서 선언된 변수에 참조(접근)이 가능하다는 것**을 의미합니다.

즉, if문 같은 중괄호 블록 내외부에서 동일한 이름의 변수를 선언하면 블록 내부는 유효하지 않습니다.

이 문제는 ES6에서 추가된 **let 키워드**를 사용하면 해결할 수 있습니다.

```
console.log("=====Function-level Scope=====");

var a = 10;
console.log("Global Variable 'a' using 'var': " + a);
function print() {
  var a = 20; // 함수 코드 블록 내에서만 유효
  console.log("Local Variable 'a' using 'var': " + a);
}

print();
console.log("Global Variable 'a' using 'var': " + a);

console.log("=====Block-level Scope=====");

var b = 200;

console.log("Global Variable 'b' using 'var': " + b); //250
{
  var b = 250; // 함수 블록 내에서만 유효
  console.log("Local Variable 'b' using 'var': " + b); //250
}

console.log("Global Variable 'b' using 'var': " + b); //250

let c = 1000;
console.log("Global Variable 'c' using 'let': " + c);
{
  let c = 2000; // 코드 블록 내에서만 유효
  console.log("Local Variable 'c' using 'let': " + c);
}

console.log("Global Variable 'c' using 'let': " + c);

```

![Scope] (./imgs/function/scope.png)

### 렉시컬 스코프란?

**렉시컬 스코프란(Lexical Scope)** 는 함수가 선언된 위치에 따라서 상위 스코프가 결정되는 것을 의미합니다.

렉시컬 스코프의 상위 스코프는 항상 **전역(Global)** 이며, 상위 스코프를 변경하는 것을 **동적 스코프(Dynamic Scope)** 라고 합니다.

위 코드에서 전역에 선언된 print 함수는 상위 스코프를 전역으로 갖고, 하위 스코프는 print 함수 내부가 됩니다.

따라서 하위 스코프에서 전역에 선언된 모든 변수에 참조(접근)이 가능합니다.

## 참고 자료

- [스코프](https://poiemaweb.com/js-scope)
