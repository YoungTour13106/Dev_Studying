## 웹 애플리케이션에서 파일 사용하기

## File API

`File API`는 사용자가 파일을 업로드하고 업로드한 파일의 내용을 읽어오도록 도와줍니다.

## 1. 업로드한 파일에 접근하기

사용자가 업로드한 파일의 위치와 어떤 정보를 포함하고 있는지 확인해보겠습니다.

## 1.1 FileList

```
const customFileInput = document.querySelector(".custom-file-input");

// customFileInput 객체의 files를 출력합니다.
console.log(customFileInput.files); // FileList {length: 0}length: 0[[Prototype]]: FileList
```

`FileList`는 `File` 오브젝트를 포함하는 리스트입니다.

사용자가 업로드한 파일들은 `File` 오브젝트로 `FileList`에 포함됩니다.

## 1.2 change 이벤트

업로드한 파일의 내용을 확인해보고 싶으면

파일을 업로드한 뒤 `File` 오브젝트의 내용을 출력해서 확인해보면 됩니다.

이때 `addEventListener` 메소드로 `change` 이벤트를 등록해야 합니다.

```

const customFileInput = document.querySelector(".custom-file-input");

// customFileInput 객체의 files를 출력합니다.
console.log(customFileInput.files); // FileList {length: 0}length: 0[[Prototype]]: FileList

customFileInput.addEventListener("change", (e) => {
    console.log(e.target.files[0]);
});
```

![File Object](<imgs/using_files_from_web_application(1).png>)

```
File {
    lastModified: 1638870267013
    lastModifiedDate: Tue Dec 07 2021 18:44:27 GMT+0900 (한국 표준시)
    name: "정보처리기사.png"
    size: 144183
    type: "image/png"
    webkitRelativePath: ""
}
```

`File` 오브젝트는 파일에 대한 정보를 제공하고, 웹 페이지에서 자바스크립트로 파일의 내용에 접근할 수 있도록 도와줍니다.

`File` 오브젝트의 각 프로퍼티에 대한 설명은 다음과 같습니다.

- `lastModified` : 파일의 최종 수정 날짜를 밀리세컨드(millisecond) 단위로 나타냅니다.
- `lastModifiedDate` : 파일의 최종 수정 날짜를 `Date`로 나타냅니다.
- `name` : 파일의 이름을 나타냅니다.
- `size` : 파일의 크기를 바이트로 나타냅니다.
- `type` : 파일의 MIME 타입을 나타냅니다.
- `webkitRelativePath` :

## 2. 업로드한 파일 사이즈 체크하기

```
function updateFileSize(e) {
    let nBytes = 0; // 모든 파일의 바이트 합계
    let oBytes = e.target.files; // FileList
    let nFiles = e.target.files.length; // File 개수

    // 모든 파일의 바이트 합계 구하기
    for (let nFilesId = 0; nFilesId < nFiles; nFilesId++) {
    nBytes += oBytes[nFilesId].size;
    }

    // 출력 사이즈 단위 설정
    let sOutput = nBytes + " bytes";
    const aMultiples = [
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
    ];
    for (
    nMultiple = 0, nApprox = nBytes / 1024;
    nApprox > 1;
    nApprox /= 1024, nMultiple++
    ) {
    sOutput =
        nApprox.toFixed(3) +
        " " +
        aMultiples[nMultiple] +
        " (" +
        nBytes +
        " bytes)";
    }

    console.log(sOutput);
}
```

## 레퍼런스

- [File](https://developer.mozilla.org/ko/docs/Web/API/File)
- [webkitRelativePath]()
- [What is the purpose of webkitRelativePath property in File object?](https://stackoverflow.com/questions/8374135/what-is-the-purpose-of-webkitrelativepath-property-in-file-object)
