## 1. NIO

`NIO(New Input Output)`는 Java 표준 입출력(I/O)과 네트워크 API들을 개선한 새로운 입출력 API입니다.

**IO와 NIO의 목적**은 데이터를 입출력 하는 것입니다. 하지만 동작 방식에서 차이를 보입니다.

`NIO`는 다음과 같이 동작합니다.

1. `채널(Channel)`
2. `버퍼(Buffer)`
3. `비동기(asynchronous)`
4. `논블럭킹(Non-Blocking)`

### 1.1 채널(Channel) 방식

`채널(Channel)`은 양방향으로 데이터를 통신하는 통로를 의미합니다.

기존의 입출력은 `스트림(Stream)` 방식이였는데, 이는 단방향 데이터 통로이며

입력과 출력을 위한 `입력 스트림(InputStream)`과 `출력 스트림(OutputStream)`이 필요합니다.

## 레퍼런스

- [Non-blocking I/O (Java)](<https://en.wikipedia.org/wiki/Non-blocking_I/O_(Java)>)
- [Java IO vs NIO](https://www.baeldung.com/java-io-vs-nio)
- [Java NIO Tutorial](http://tutorials.jenkov.com/java-nio/index.html)
