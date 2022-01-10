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
