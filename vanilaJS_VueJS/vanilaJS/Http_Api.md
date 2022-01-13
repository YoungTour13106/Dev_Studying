## HTTP API란?

`HTTP(HyperText Transfer Protocol)`는 인터넷 통신 프로토콜입니다.

`API(Application Programming Interface)`는 소프트웨어의 인터페이스입니다.

`인터페이스(Interface)`는 사용자 인터페이스도 있고, 다양한 이름을 가지고 있습니다.

윈도우 운영체제는 `GUI(Graphical User Interface)`를 제공하는데, 인터페이스가 있으면

편리하게 컴퓨터를 사용할 수 있다는 점이 비슷한 맥락으로 모든 인터페이스에 통용되는 것 같습니다.

따라서 `HTTP API`는 HTTP로 쉽게 소프트웨어로부터 데이터를 요청하고 응답받는 인터페이스라고 이해할 수 있습니다.

우리가 인터페이스에서 정한 규칙에 따라서 운영체제와 하드웨어가 상호작용하는 것처럼

애플리케이션끼리도 통신을 하기 위해서 인터페이스(API)를 사용하는데, 인터넷 환경에서는

HTTP 프로토콜로 통신해야 해서, HTTP API라고 부르는 것입니다.

## fetch

자바스크립트에서 HTTP API 요청을 보내기 위해서 기본적으로 제공하는 메소드가 있습니다.

그 메소드는 `fetch` 메소드이며, 반환값이 `promise`입니다.

그리고 다음과 같이 HTTP API 요청을 보낼 수 있습니다.

```
const corona = fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
```

`fetch` 메소드에 `url` 파라미터를 넘겨주면 해당 `url`로 HTTP API 요청을 하고 `res`라는 응답 정보를 받습니다.

보기 쉽게 응답 정보를 json 형태로 변환하기 위해 `json` 메소드를 호출합니다. 그리고 마지막으로 응답 정보를 확인합니다.

## 레퍼런스

- [API](https://ko.wikipedia.org/wiki/API)
