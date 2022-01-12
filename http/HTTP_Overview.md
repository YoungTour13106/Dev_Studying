## HTTP 개요

## HTTP란?

`HTTP(Hypertext Transfer Protocol)`는 인터넷 세계의 공통 언어입니다.

웹 브라우저, 서버, 웹 애플리케이션이 HTTP를 통해 서로 통신합니다.

## 다룰 내용

1. 웹 클라이언트와 서버가 통신하는 방법
2. 웹 리소스란?
3. MIME 타입이란?
4. URI란?
5. URL이란?

## 1. 웹 클라이언트와 서버가 통신하는 방법

`웹 리소스(Web Resource)`는 `웹 서버(Web Server)`에 존재합니다.

`웹 서버`는 `HTTP 프로토콜`로 통신합니다. 따라서 `HTTP 서버`라고 부릅니다.

`웹 서버`에게 HTTP 요청을 보내는 프로그램을 `웹 클라이언트(Web Client)`라고 부릅니다.

`웹 클라이언트`는 `HTTP 클라이언트`라고 부르며, 가장 흔한 웹 클라이언트는 `웹 브라우저(Web Browser)`입니다.

`웹 브라우저`는 `웹 서버`에게 요청 정보를 보내고 응답 정보를 사용자에게 보여줍니다.

## 2. 웹 리소스란?

`웹 리소스(Web Resource)`는 두 가지 종류가 있습니다.

- **`정적 웹 리소스(Static Web Resource)`** : 텍스트, 이미지 파일 같이 파일 시스템에 존재하는 정적 파일
- **`동적 웹 리소스(Dynamic Web Resource)`** : 웹 컨텐츠를 생성하는 프로그램

## 3. MIME 타입이란?

`MIME(Multipurpose Internet Mail Extensions) 타입`은 HTTP 통신에서 `파일 형식` 정보를 주고 받기 위해서 사용합니다.

`웹 서버`가 HTTP 응답 정보에 MIME 타입을 지정하고 `웹 클라이언트`는 MIME 타입을 참고하여 응답 정보를 처리합니다.

### 3.1. MIME 타입 종류

대표적인 MIME 타입의 종류를 살펴보겠습니다.

1. `text/html` : HTML 문서 파일 형식을 의미합니다.
2. `text/plain` : 아스키(ASCII) 문서 파일 형식을 의미합니다.
3. `image/jpeg` : JPEG 이미지 파일 형식을 의미합니다.
4. `image/gif` : GIF 이미지 파일 형식을 의미합니다.
5. `video/quicktime` : Apple QuickTime 영상 파일 형식을 의미합니다.
6. `application/vnd.ms-powerpoint` : MS 파워포인트 파일 형식을 의미합니다.

## 4. URI란?

`URI(Uniform Resource Identifier)`는 `웹 클라이언트`가 요청한 `웹 리소스`의 이름을 의미합니다.

## 5. URL이란?

## 레퍼런스

- [MIME 타입](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
