## 객체 지향 프로그래밍(OOP, Object Oriented Programming)

`Javascript`는 멀티 패러다임 프로그래밍 언어입니다.

따라서 `함수형 프로그래밍`, `객체형 프로그래밍` 둘 다 가능합니다.

여기서는 Javascript의 객체형 프로그래밍을 알아보겠습니다.

## 1. ES6 이전에 객체를 생성하는 방법

ES6 전에는 다음과 같이 `function` 키워드를 사용해서 객체를 생성했습니다.

```
// 객체 생성
function Song(singer, title, release) {
  // this.프로퍼티 = 값
  this.singer = singer;
  this.title = title;
  this.release = new Date(release);
  this.getRelease = function () {
    return this.release.getDay();
  };
  //console.log(this);
}

// ES6 이전 기능 : 객체에 프로퍼티 값으로 메소드 추가
Song.prototype.getInfo = function () {
  return `이 노래는 ${this.singer}의 노래이고 제목은 ${this.title} 입니다.`;
};

// 인스턴스화
const song1 = Song(); // this는 Window 객체이다.
// this : Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const song2 = new Song("bts", "DNA", "2017-09-18"); //this는 Song 객체
// this : Song {singer: 'bts', title: 'DNA', release: '2017-09-18'}

const song3 = new Song("EMINEM", "Love Yourself", "2001-05-11");
// this : Song {singer: 'EMINEM', title: 'Love Yourself', release: '2001-05-11'}

console.log(song1, song2, song3);
// undefined
// Song {singer: 'bts', title: 'DNA', release: '2017-09-18'}
// Song {singer: 'EMINEM', title: 'Love Yourself', release: '2001-05-11'}

```

여기서 핵심은 `new` 키워드로 객체를 생성할 수 있으며, 객체의 `프로퍼티(속성)`은

`함수`, `객체` 등 다양한 값이 올 수 있습니다.

만약 `new` 키워드를 사용하지 않으면 Window 객체에 프로퍼티가 등록됩니다.

```
function person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

const p = person("kim", 33);
// Window {name: 'kim', age: 33, …}
```

## 2. ES6 이후에 객체를 생성하는 방법

`ES6`부터 객체를 선언할 때 `Class` 키워드를 사용합니다.

```
class Song {
  constructor(singer, title, release) {
    this.singer = singer;
    this.title = title;
    this.release = new Date(release);
  }

  getReleaseDay() {
    return this.release.getDay();
  }
}

const song1 = new Song("BTS", "DNA", "2017-09-24");

console.log(song1);
```

`Class` 키워드를 사용하고 객체를 초기화시키기 위해서 `constructor` 메소드가 추가 되었습니다.

`ES6` 전과 마찬가지로 `new` 키워드를 사용하여 객체를 생성합니다.
