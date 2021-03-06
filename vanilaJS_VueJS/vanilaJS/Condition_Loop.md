## 조건문

## 1. '=='와 '==='의 차이점

`==`와 `===`은 비교 연산자입니다.

- `==` : 데이터 타입은 비교하지 않는 연산자입니다.
- `===` : 데이터 타입까지 비교하는 연산자입니다.

```
const num = "10";

if (num == 10) { // true
  console.log("10과 같습니다.");
}

if (num === 10) { //false
  console.log("10과 같습니다.");
}
```

코드로 어느 정도 이해는 가지만, 구체적으로 왜 그런지 궁금합니다.

먼저 두 비교 연산자를 구분하기 위한 이름은 다음과 같습니다.

- `==` : 동등 연산자(loose equality)라고 부릅니다.
- `===` : 일치 연산자(strict equality)라고 부릅니다.

여기서 `동등`과 `일치`의 의미를 아는 것이 중요합니다.

- `동등함`이란 같은 객체를 갖거나 같은 값을 가지도록 변환할 수 있다.

- `일치함`이란 같은 객체를 갖고 값도 같다.

따라서 일치 연산자의 결과는 동등 연산자의 결과와 항상 같지만

동등 연산자의 결과는 일치 연산자의 결과와 항상 같지 않습니다.

위 코드에서 num은 문자열 타입이고, 조건문의 숫자 10은 정수 타입입니다.

같은 객체를 갖는 조건은 만족하지 않지만, 문자열 10이 숫자 10으로 변환할 수 있으므로

첫 번째 조건문은 참이 됩니다.

두 번째 조건문은 같은 객체를 갖고 있지 않기 때문에 거짓이 되는 것입니다.

그래서 두 비교 연산자는 데이터 타입을 비교하느냐 비교하지 않느냐로 이해할 수 있습니다.

일반적으로 일치 연산자(`===`)를 사용하면 동등 연산자(`==`) 때문에 발생하는 혼란을 미리 예방할 수 있습니다.

## 2. 반복문

반복문의 종류는 다음과 같습니다.

- `while` : `while(조건문) { 실행 코드 }`
- `for` : `for(변수 선언; 조건문; 증감식) { 실행 코드 }`
- `for of` : `for(요소명 of 배열명) { 실행 코드 }`
- `for in` : `for(속성명 in 오브젝트명) { 실행 코드 }`

### 2.1. for of

`for of`는 `for(요소명 of 배열명) { 실행 코드 }`의 형태입니다.

- `요소명`은 변수에 값을 할당하지 않은 `let + 이름`을 의미합니다.
- `배열명`은 각 요소에 접근하고자 하는 배열 이름을 의미합니다.

이 반복문은 `인덱스` 없이 배열의 요소에 접근하고자 할 때 사용합니다.

```
const animals = [
  { name: "lion", size: "big" },
  { name: "monkey", size: "small" },
  { name: "dog", size: "small" },
];

for (let animal of animals) {
  console.log(animal);
}
```

### 2.2. for in

`for in`은 `for(속성명 in 오브젝트명) { 실행 코드 }`의 형태입니다.

- `속성명`은 변수에 값을 할당하지 않은 `let + 속성명`을 의미합니다.
- `오브젝트명`은 각 속성값에 접근하고자 하는 객체를 의미합니다.

따라서 이 반복문은 오브젝트의 각 `속성(키값)`에 접근하고자 할 때 사용합니다.

```
const animal = {
  name: "lion",
  size: "big",
  color: "red",
};

for (let prop in animal) {
  console.log(prop); // 속성(키값) 출력
  console.log(animal[prop]); // 속성값 출력
}
```

## 3. 스위치문

`switch`는 여러 조건문이 필요한 경우 사용하는 키워드입니다.

`switch`는`switch(입력값) { case 값1: break; case 값2: break ... default: }`의 형태입니다.

`입력값`에 의해서 `값1 케이스`가 실행되거나 `값2 케이스`가 실행되며, 아무것도 해당하지 않으면

`default 케이스`가 실행됩니다. 각 케이스에는 `break`문을 넣어 다른 케이스가 실행되지 않도록 합니다.

```
const animals = [
  { name: "lion", size: "big" },
  { name: "monkey", size: "small" },
  { name: "dog", size: "small" },
];

switch (animal[0].name) {
  case "lion":
    console.log("사자입니다.");
    break;
  case "monkey":
    console.log("원숭이입니다.");
    break;
  default:
    console.log("동물이 아닙니다.");
}
```
