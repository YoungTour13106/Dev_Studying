## 1. 삼항 연산자

`삼항 연산자`는 `if ~ else`문을 간결하게 작성할 수 있는 연산자입니다.

`삼항 연산자`는 `(조건문) ? 참인 경우 실행 : 거짓인 경우 실행`의 형태 입니다.

또한 각 실행에 삼항 연산자를 중첩시킬 수 있는데, 이는 가독성이 좋지 않기 때문에

`if ~ else`문이 필요한 경우 `삼항 연산자`를 사용합니다.

```
const num = 10;

(num > 10) ? console.log("10보다 큽니다.") : console.log("10보다 같거나 작습니다.")
```

## 2. 배열 내장 메소드

`배열`은 기본적으로 `forEach`, `map`, `filter`, `reduce` 메소드를 제공합니다.

## 2.1. forEach

앞서 [반복문 파트](Condition_Loop.md)에서 인덱스 없이 배열의 요소에 접근하기 위해

`for of`를 사용했습니다. `forEach`도 동일하게 인덱스 없이 동작합니다.

`forEach`는 `배열명.forEach(함수(요소명, 요소_인덱스) { 실행_코드 })`의 형태입니다.

`forEach`의 함수는 다음과 같이 `화살표 함수(Arrow Function)`을 사용할 수 있습니다.

```
const coronaCases = [
  { city: "Seoul", case: 1000 },
  { city: "Daejeon", case: 500 },
  { city: "Daegu", case: 300 },
  { city: "Busan", case: 100 },
];

coronaCases.forEach((corona, index) => {
  console.log(index);
  console.log(corona);
  console.log(corona.city);
  console.log(corona.case);
});
```

## 2.2. map

`map`은 배열 요소의 값을 가공하여 새로운 배열을 만들때 사용합니다.

예를 들어서 `coronaCases`의 각 도시별 확진자수를 메시지 형태로 변환할 수 있습니다.

`map`은 `배열명.map(함수(요소명, 요소_인덱스) { return 새로운_요소 })`의 형태입니다.

`map`의 함수는 다음과 같이 `화살표 함수(Arrow Function)`을 사용할 수 있습니다.

```
const coronaCases = [
  { city: "Seoul", case: 1000 },
  { city: "Daejeon", case: 500 },
  { city: "Daegu", case: 300 },
  { city: "Busan", case: 100 },
];

const emergencyMessage = coronaCases.map((coronaCase) => {
  return `오늘 ${coronaCase.city}의 확진자 수는 ${coronaCase.case}명입니다.`;
});

console.log(emergencyMessage);
// ['오늘 Seoul의 확진자 수는 1000명입니다.',
//  '오늘 Daejeon의 확진자 수는 500명입니다.',
//  '오늘 Daegu의 확진자 수는 300명입니다.',
//  '오늘 Busan의 확진자 수는 100명입니다.']
```

## 2.3. filter

`filter`는 이름 그대로 배열의 요소를 필터링하여 `map`처럼 새로운 배열을 생성하는 메소드입니다.

`filter`은 `배열명.filter(함수(요소명, 요소_인덱스) { return 참_또는_거짓 })`의 형태입니다.

- `반환값이 참인 경우` : 해당 요소를 새로운 배열에 추가합니다.
- `반환값이 거짓인 경우` : 해당 요소를 버립니다.

`filter`의 함수는 다음과 같이 `화살표 함수(Arrow Function)`을 사용할 수 있습니다.

```
const coronaCases = [
  { city: "Seoul", case: 1000 },
  { city: "Daejeon", case: 500 },
  { city: "Daegu", case: 300 },
  { city: "Busan", case: 100 },
];

const emergencyMessage = coronaCases
  .filter((coronaCase) => {
    return coronaCase.case >= 300;
  })
  .map((coronaCase) => {
    return `오늘 ${coronaCase.city}의 확진자 수는 ${coronaCase.case}명입니다.`;
  });

console.log(emergencyMessage);
// ['오늘 Seoul의 확진자 수는 1000명입니다.',
//  '오늘 Daejeon의 확진자 수는 500명입니다.',
//  '오늘 Daegu의 확진자 수는 300명입니다.']
```

`filter`에서 반환한 배열을 `map`이 재가공하여 확진자 수가 300명 이상인 경우만

긴급 메세지를 생성하였습니다. 이처럼 `filter`와 `map`은 함께 사용될 수 있습니다.

## 2.4. reduce

`reduce`는 배열을 하나 값으로 변형할 때 사용하는 메소드입니다.

이게 무슨 말이냐면, 예를 들어서 숫자를 원소로 갖는 배열로 합계를 구한다고 가정하겠습니다.

```
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((acc, cur) => {
    return acc + cur; // acc = acc + cur
}, 0);

console.log(sum);
```

`reduce`는 `배열명.reduce(함수(누적값, 현재값) { return 누적값 + 현재값; }, 초기값)`의 형태입니다.

`초기값`은 `누적값`을 초기화시킵니다. 위 코드에서는 0으로 초기화합니다.

코로나 총 확진자 수를 구하기 위해서 `reduce`를 사용해 보겠습니다.

```
const coronaCases = [
  { city: "Seoul", case: 1000 },
  { city: "Daejeon", case: 500 },
  { city: "Daegu", case: 300 },
  { city: "Busan", case: 100 },
];

const totalCases = coronaCases.reduce((acc, cur) => {
    return acc+cur.case;
}, 0);

console.log(totalCases);
```

따라서 배열을 한 가지의 결과값으로 만들고 싶을 때 `reduce`를 사용하며

배열의 요소가 객체라면 반드시 `초기값`을 명시해줘야 에러가 뜨지 않습니다.

## 레퍼런스

- [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
