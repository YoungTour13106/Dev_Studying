## DOM이란?

`DOM(Document Object Model)`은 자바스크립트로 HTML 문서를 조작하기 위한 객체입니다.

## DOM을 사용하는 방법

자바스크립트로 DOM을 사용하는 방법은 대표적으로 3가지가 있습니다.

1. HTML 태그의 id 값으로 얻는 방법
2. HTML 태그의 class 값으로 얻는 방법
3. querySelector로 얻는 방법

HTML 태그의 id와 class 속성은 다음과 같은 기준으로 작성합니다.

1. HTML 태그가 문서 내에서 한 번만 사용되는 경우 `id`를 사용합니다.
2. HTML 태그가 문서 내에서 여러 번 사용되는 겨웅 `class`를 사용합니다.

```
// index.html

<div id="wrap">
    <ul class="list"> // 리스트는 여러번 사용될 가능성이 있습니다.
        <li class="item">치킨</li>
        <li class="item">라면</li>
        <li class="item">떡볶이</li>
        <li class="item">김밥</li>
    </ul>
</div>

// index.js

const wrap = document.getElementById("wrap");
const list = document.getElementsByClassName("list");
const items = document.getElementsByClassName("item); // HTMLCollection(4) [li.item, li.item, li.item, li.item]
// const items = document.querySelectorAll(".item"); // NodeList(4) [li.item, li.item, li.item, li.item]

const item = document.querySelector(".item");
```

`document`의 `querySelector` 메소드를 사용하면, `CSS 선택자(Selector)`로 이름을

지정해서 DOM 객체를 얻을 수 있습니다. 이때 단일 태그에 대해서만 동작하며,

여러 개의 태그를 리스트로 읽어올려면 `querySelectorAll` 메소드를 사용합니다.

## 이벤트(Event) 등록과 이벤트 객체(Event Object)

자바스크립트는 어떤 버튼을 눌렀을 때 이벤트가 발생하고

발생한 이벤트에 따라서 다르게 동작할 수 있도록 해줍니다.

이벤트가 발생했을 때 동작방식을 지정해주기 위해서 `addEventListener` 메소드를 사용합니다.

```
// 버튼을 한 번만 누를 수 있는 기능을 추가해봅시다.
// index.html
<button class="oneBtn">원버튼</button>

// index.js
const oneBtn = document.querySelector(".oneBtn");

oneBtn.addEventListener("click", (e) => {
  e.target.disabled = true;
  e.target.innerText = "눌렀음";
});
```

이벤트를 등록할 DOM 객체의 `addEventListener(액션, 동작) { 실행_코드 }`로 이벤트를

등록하고, 동작 방식을 설정할 수 있습니다.

이때 `동작`은 함수를 파라미터로 전달해야 합니다. `화살표 함수(arrow function)`도 가능합니다.

이벤트가 발생하면, 함수의 파라미터로 `이벤트 객체(Event Object)`가 전달되는데 이 객체는

발생한 이벤트에 대한 정보를 가지고 있어서, 어떤 요소에 이벤트가 발생했는지 알 수 있습니다.

이벤트 객체(e)의 `target`은 이벤트가 발생한 요소를 의미하며, 버튼을 클릭했으므로

버튼을 비활성화 시키고 버튼 이름은 "눌렀음"으로 변경해주었습니다.
