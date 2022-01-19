## Working with Fragments in Thymeleaf

Source : [Working with Fragments in Thymeleaf](https://www.baeldung.com/spring-thymeleaf-fragments)

## 다룰 내용

웹 사이트의 공통 부분들을 재사용하기 위한 Thymeleaf 가이드

## 1. 실습 환경

- Eclipse 2021-06 (4.20.0)
- Java 11
- SpringBoot 2.6.2
- Thymeleaf 3.0 또는 그 이상

## 2. 프로젝트 생성

1. [스프링 프로젝트 생성](https://start.spring.io/)
2. 프로젝트 설정
3. 의존성 라이브러리 설정: **Spring Web MVC**, **Thymeleaf**

## 3. Fragments 컨트롤러 작성

이 컨트롤러는 웹 애플리케이션의 뷰(View)를 결정하는 클래스입니다.

```
@Controller
public class FragmentsController {
	@GetMapping("/fragments")
	public String getHome() {
		return "fragments";
	}

	@GetMapping("/markup")
	public String markupPage() {
		return "markup";
	}

	@GetMapping("/params")
	public String paramsPage() {
		return "params";
	}

	@GetMapping("/other")
	public String otherPage(Model model) {
		model.addAttribute("data", StudentUtils.buildStudents());
		return "other";
	}
}
```

## 4. 뷰(View) 작성

웹 사이트를 개발할 때 화면 이동을 해도 공통적으로 보여지는 부분들이 있습니다.

대표적으로, `헤더(Header)`, `푸터(Footer)`, `메뉴(Nav)` 등이 있습니다.

이러한 부분들을 `Fragments`라고 부릅니다.

## 4.1. fragments.html

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Thymeleaf Fragments: home</title>

<!-- include 방법은 deprecated 입니다. -->
<th:block th:include="fragments/general.html :: headerfiles"></th:block>

</head>
<body>
    <!-- fragments 폴더의 general.html에서 header 프래그먼트를 해당 태그 안에 삽입합니다. -->
	<header th:insert="fragments/general.html :: header"></header>
	<p>Go to the next page to see fragments in action</p>

    <!-- fragments 폴더의 general.html에서 footer 프래그먼트로 교체합니다. -->
	<div th:replace="fragments/general.html :: footer"></div>
</body>
</html>
```

프래그먼트를 웹 사이트에 삽입하는 방법은 3가지가 있습니다.

1. `insert` : 태그 안에 컨텐츠를 삽입합니다.
2. `replace` : 해당 태그를 대체합니다.
3. `include` : 이 방법은 `deprecated` 이므로 권장하지 않습니다.

## 4.2. general.html

`fragments.html`에 삽입된 `header`, `footer` 프래그먼트를 포함하는 `general.html` 코드입니다.

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head th:fragment="headerfiles">
<meta charset="UTF-8">
<link th:href="@{/css/styles.css}" rel="stylesheet">
</head>
<body>
	<div th:fragment="header">
		<h1>Thymeleaf Fragments sample</h1>
	</div>

	<p>Go to the next page to see fragments in action</p>
	<aside>
		<div>This is a sidebar</div>
	</aside>
	<div class="another">This is another sidebar</div>

	<footer th:fragment="footer">
		<a th:href="@{/fragments}">Fragments Index</a>
		<a th:href="@{/markup}">Markup inclusion</a>
		<a th:href="@{/params}">Fragment params</a>
		<a th:href="@{/other}">Other</a>
	</footer>
</body>
</html>
```

## 5. 선택자를 사용해서 프래그먼트 삽입하기

CSS의 선택자(Selector)처럼 프래그먼트를 삽입할 수 있습니다.

선택자로 프래그먼트를 삽입하기 위해서 `fragments.html`의 `body 태그`는 다음과 같이 수정할 수 있습니다.

```
<body>
	<!-- th:insert, th:replace -->
	<!--
	<header th:insert="fragments/general.html :: header"></header>
	<p>Go to the next page to see fragments in action</p>
	<div th:replace="fragments/general.html :: footer"></div>
	-->

    <!-- 선택자(태그 이름, 클래스명...)로 프래그먼트 삽입하기 -->
	<header th:insert="fragments/general.html :: header"></header>
	<div th:replace="fragments/general.html :: aside"></div>
	<div th:replace="fragments/general.html :: div.another"></div>
	<div th:replace="fragments/general.html :: footer"></div>
</body>
```

## 6. 프래그먼트에 파라미터값 넘겨주기

프래그먼트에 변화를 주기 위해서 파라미터 값을 넘겨줄 수 있는데요.

파라미터를 넘겨받을 프래그먼트를 정의하기 위해 `forms.html` 코드를 작성합니다.

```
<div th:fragment="formField (field, value, size)">

    <div>
        <label th:for="${#strings.toLowerCase(field)}">
            <span th:text="${field}">Field</span>
        </label>
    </div>

    <div>
        <input type="text" th:id="${#strings.toLowerCase(field)}"
                            th:name="${#strings.toLowerCase(field)}"
                            th:value="${value}"
                            th:size="${size}">
    </div>
</div>
```

이제 `fragments.html` 에서 `formField 프래그먼트`에 파라미터값을 넘겨주면 됩니다.

```
<body>
	<!-- Parameterized Fragments -->
	<header th:insert="fragments/general.html :: header"></header>
	<div th:replace="fragments/forms.html :: formField(field='Name', value='John Doe', size='40')"></div>
	<div th:replace="fragments/general.html :: footer"></div>
</body>
```

## 7. 프래그먼트 조건 표현식

```
<!-- Fragment Inclusion Expressions -->
<div th:replace="${#lists.size(data) > 0} ?
				~{fragments/menus.html :: dataPresent} :
				~{fragments/menus.html :: noData}"></div>
```

## 8. 테이블 생성하기

`table.html` 생성

```
<table>
	<thead th:fragment="fields(theadFields)">
		<tr th:replace="${theadFields}"></tr>
	</thead>

	<tbody th:fragment="tableBody(tableData)">
		<tr th:each="row: ${tableData}">
			<td th:text="${row.id}">0</td>
			<td th:text="${row.name}">Name</td>
		</tr>
	</tbody>
</table>
```

`fragments.html` 수정

```
<body>
	<!-- Flexible Layouts -->
	<header th:replace="fragments/general.html :: header"></header>
	<table>
		<thead th:replace="fragments/table.html :: fields(~{ :: .myFields})">
			<tr class="myFields">
				<th>Id</th>
				<th>Name</th>
			</tr>
		</thead>

		<div th:replace="fragments/table.html :: tableBody(tableData=${data})"></div>
	</table>
	<div th:replace="fragments/general.html :: footer"></div>
</body>
```
