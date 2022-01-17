## 1. 컬렉션 프레임워크

`컬렉션 프레임워크(Collection Framework)`는 `자료구조(DataStructure)`를 바탕으로

재사용 가능한 인터페이스와 클래스들의 집합을 의미합니다.

## 2. 컬렉션의 주요 인터페이스

`컬렉션 프레임워크`의 주요 인터페이스는 `List`, `Set`, `Map`이 있습니다.

### 2.1. List 컬렉션

#### 2.1.1 List 특징

1. 요소를 `인덱스(Index)`로 관리합니다.
2. 저장 순서가 유지됩니다.
3. 구현 클래스로 `ArrayList`, `Vector`, `LinkedList` 등이 있습니다.

#### 2.1.2 ArrayList

1. 배열과 달리 크기가 동적으로 변경될 수 있습니다.
2. 인덱스로 요소를 검색하거나 리스트에 맨 뒤에 요소를 추가할 때 사용합니다.

```
// ArrayList 생성 방법
// List<T> list = new ArrayList<T>();

List<String> list = new ArrayList<String>();
List<String> list = new ArrayList<String>(10);
List<String> list = new ArrayList<>();

// 배열로 ArrayList 생성 방법
// List<T> list = Arrays.asList(T array);

List<String> list = Arrays.asList("Kim", "Jung", "Hong");
List<Integer> list = Arrays.asList(10, 20, 30);
```

#### 2.1.3 Vector

1. `ArrayList`와 비슷한 구조입니다.
2. `ArrayList`와 다른 점은 `Vector`는 `동기화(synchroniszed) 메소드`로 구성되어 있습니다.
3. 멀티 스레드 환경에서 안전하게 요소를 삭제, 추가할 수 있습니다.

```
// Vector 생성 방법
List<T> list = new Vector<T>();
```

#### 2.1.4 LinkedList

1. 인덱스가 아닌 `링크(link)`로 요소를 관리합니다.
2. 중간 요소를 삭제하거나 추가할 때 사용하는 리스트입니다.

```
// LinkedList 생성 방법
List<T> list = new LinkedList<T>();
```

### 2.2. Set 컬렉션

#### 2.2.1. Set 특징

1. 저장 순서가 유지되지 않습니다.
2. 요소의 중복을 허용하지 않습니다.
3. `반복자(Iterator)`를 사용하여 요소를 검색합니다.
4. 구현 클래스로 `HashSet`, `LinkedHashSet`, `TreeSet` 등이 있습니다.

#### 2.2.2. HashSet

1. 객체를 저장하기 전에 `hashCode 메소드`를 호출하여 객체의 해시코드를 얻습니다.
2. 저장되어 있는 객체들의 해시코드와 비교합니다.
3. 동일한 해시코드가 있으면 `equals 메소드`로 두 객체를 비교합니다.
4. true가 반환되면 중복 저장이므로, 객체를 저장하지 않습니다.

```
// HashSet 생성 방법
Set<T> set = new HashSet<T>();

// 반복자(iterator)로 요소 검색하기
Iterator<T> iterator = set.iterator();
while(iterator.hasNext()){
    T element = iterator.next();
}

// 반복자 대신 for문 이용하기
for(T element : set){ 실행_코드 }
```

#### 2.2.3. TreeSet

1. `이진 트리(BinaryTree)`의 형태로 객체를 검색합니다.
2. 부모 노드보다 작으면 왼쪽 노드에 저장합니다.
3. 부모 노드보다 크면 오른쪽 노드에 저장합니다.
4. 왼쪽 마지막 노드는 제일 작은 값이 됩니다.
5. 오른쪽 마지막 노드는 제일 큰 값이 됩니다.
6. 오름차순 정렬: [왼쪽 노드 → 부모 노드 → 오른쪽 노드]
7. 내림차순 정렬: [오른쪽 노드 → 부모 노드 → 왼쪽 노드]

```
// TreeSet 생성 방법
TreeSet<T> treeSet = new TreeSet<T>();
TreeSet<T> treeSet = new TreeSet<T>(Comparator comp);

// TreeSet 내림차순 정렬
NavigableSet<T> descendingSet = treeSet.descendingSet();
for(T element : descendingSet){
	System.out.println(element);
}

// TreeSet 오름차순 정렬
NavigableSet<T> ascendingSet = descendingSet.descendingSet();
for(T element : ascendingSet){
	System.out.println(element);
}
```

### 2.3. Map 컬렉션

#### 2.3.1. Map 특징

1. `키(Key)`와 `값(Value)`로 구성된 컬렉션입니다.
2. `키(Key)`는 중복 저장할 수 없습니다. 따라서 `Set` 컬렉션입니다.
3. `값(Value)`는 중복 저장할 수 있습니다.
4. `키(Key)`는 주로 `String 클래스`를 사용하고, `값(Value)`은 `기본 타입`이 올 수 없습니다.
5. 구현 클래스로 `HashMap`, `HashTable`, `LinkedHashMap`, `Properties`, `TreeMap` 등이 있습니다.

```
// Map 생성 방법
Map<K, V> map = new HashMap

// Map 요소 접근 방법 1
Set<K> keySet = map.keySet();
Iterator<K> keyIterator = keySet.iterator();
while(keyIterator.hasNext()){
    K key = keyIterator.next();
    V value = map.get(key);
}

// Map 요소 접근 방법 2
Set<Map.Entry<K, V>> entrySet = map.entrySet();
Iterator<Map.Entry<K, V>> entryIterator = entrySet.iterator();
while(entryIterator.hasNext()){
    Map.Entry<K, V> entry = entryIterator.next();
}

// Map 요소 접근 방법 3
Set<Map.Entry<K, V>> entrySet = map.entrySet();
for(Map.Entry<K, V> entry : entrySet){
	K key = entry.getKey();
	V value = entry.getValue();
}
```

#### 2.3.2. HashMap

```
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class HashMapExample1 {

	public static void main(String[] args) {
		Map<String, Integer> map=new HashMap<String, Integer>();

		map.put("신용권", 85);
		map.put("홍길동", 90);
		map.put("동장군", 80);
		map.put("홍길동", 95);
		System.out.println("총 Entry 수: "+map.size());

		System.out.println("\t홍길동 : "+map.get("홍길동"));
		System.out.println();

		Set<String> keySet=map.keySet();
		Iterator<String> keyIterator=keySet.iterator();
		while(keyIterator.hasNext()) {
			String key=keyIterator.next();
			Integer value= map.get(key);
			System.out.println("\t"+key+" : "+value);
		}
		System.out.println();

		map.remove("홍길동");
		System.out.println("총 Entity 수: "+map.size());

		Set<Map.Entry<String, Integer>> entrySet=map.entrySet();
		Iterator<Map.Entry<String, Integer>> entryIterator=entrySet.iterator();

		while(entryIterator.hasNext()) {
			Map.Entry<String, Integer> entry=entryIterator.next();
			String key = entry.getKey();
			Integer value = entry.getValue();
			System.out.println("\t"+key+" : "+value);
		}

		System.out.println();

		map.clear();
		System.out.println("총 Entry 수: "+map.size());
	}
}
```

#### 2.3.3. Hashtable

1. `동기화(synchronized) 메소드`로 구성되어 있습니다.
2. 멀티 스레드 환경에서 안전하게 객체를 추가, 삭제할 수 있습니다. (thread safe)

```
import java.util.Hashtable;
import java.util.Map;
import java.util.Scanner;

public class HashTableExample {

	public static void main(String[] args) {
		Map<String, String> map=new Hashtable<String, String>();

		map.put("spring", "12");
		map.put("summer", "123");
		map.put("fall", "1234");
		map.put("winter", "12345");

		Scanner scanner = new Scanner(System.in);

		while(true) {
			System.out.println("아이디와 비밀번호를 입력해주세요");
			System.out.println("아이디: ");
			String id=scanner.nextLine();

			System.out.println("비밀번호: ");
			String password=scanner.nextLine();
			System.out.println();

			if(map.containsKey(id)) {
				if(map.get(id).equals(password)) {
					System.out.println("로그인 되었습니다.");
					break;
				}else {
					System.out.println("비밀번호가 일치하지 않습니다.");
				}
			}else {
				System.out.println("입력하신 아이디가 존재하지 않습니다.");
			}
		}
	}
}
```

#### 2.3.4. Properties

1. `Hashtable`의 하위 클래스입니다.
2. `키(Key)`와 `값(Value)`를 `String 타입`으로 제한한 컬렉션입니다.
3. 애플리케이션 옵션 정보, 데이터베이스 연결 정보, 다국어 정보 같은 `프로퍼티 파일(.properties)`로 주로 사용됩니다.
4. `load 메소드`를 호출하여 프로퍼티 파일을 로딩합니다.

```
import java.io.FileReader;
import java.net.URLDecoder;
import java.util.Properties;

public class PropertiesExample {

	public static void main(String[] args) throws Exception {
		Properties properties=new Properties();
        // PropertiesExample 클래스가 있는 파일을 기준으로
        // getResource 메소드는 URL 객체를 반환하고 URL 객체의 getPath 메소드는 절대 경로를 반환한다.
		String path=PropertiesExample.class.getResource("database.properties").getPath();
		path=URLDecoder.decode(path, "utf-8");
		properties.load(new FileReader(path));

		String driver=properties.getProperty("driver");
		String url=properties.getProperty("url");
		String username=properties.getProperty("username");
		String password=properties.getProperty("password");

		System.out.println("driver: "+driver);
		System.out.println("url: "+url);
		System.out.println("username: "+username);
		System.out.println("password: "+password);
	}
}
```

#### 2.3.5. TreeMap

1. `이진 트리(BinaryTree)`의 형태로 `키(Key)` 값을 검색합니다.
2. 부모 노드보다 작으면 왼쪽 노드에 저장합니다.
3. 부모 노드보다 크면 오른쪽 노드에 저장합니다.
4. 왼쪽 마지막 노드는 제일 작은 값이 됩니다.
5. 오른쪽 마지막 노드는 제일 큰 값이 됩니다.
6. 오름차순 정렬: [왼쪽 노드 → 부모 노드 → 오른쪽 노드]
7. 내림차순 정렬: [오른쪽 노드 → 부모 노드 → 왼쪽 노드]

```
// TreeMap 생성 방법
TreeMap<K, V> treeMap = new TreeMap<K, V>();

// 내림 차순 정렬(Descending Sort)
NavigableMap<K, V> descendingMap = treeMap.descendingMap();
Set<Map.Entry<K, V>> entrySet = descendingMap.entrySet();
for(Map.Entry<K, V> entry : entrySet){
	System.out.println(entry.getKey()+"-"+entry.getValue());
}

// 오름 차순 정렬(Ascending Sort)
NavigableMap<K, V> ascendingMap = descendingMap.descendingMap();
Set<Map.Entry<K, V>> entrySet = ascendingMap.entrySet();
for(Map.Entry<K, V> entry : entrySet){
	System.out.println(entry.getKey()+"-"+entry.getValue());
}
```

## 레퍼런스

- [Java collections framework](https://en.wikipedia.org/wiki/Java_collections_framework)
- [List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)
- [ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)
- [Vector](https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html)
- [LinkedList](https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html)
- [Set](https://docs.oracle.com/javase/8/docs/api/java/util/Set.html)
- [HashSet](https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html)
