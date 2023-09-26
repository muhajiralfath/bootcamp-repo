# <span style="color: aqua">TypeScript</span>

---

## Sejarah

Sejarah TypeScript dimulai pada awal tahun 2012, ketika seorang programmer dari Microsoft bernama Anders Hejlsberg memulai proyek pengembangan bahasa baru yang akhirnya menjadi TypeScript. Anders Hejlsberg juga merupakan pengembang utama untuk bahasa pemrograman populer seperti Turbo Pascal, Delphi, C#, dan JScript (dialek JavaScript untuk Microsoft).

Motivasi di balik TypeScript adalah meningkatkan pengalaman pengembangan JavaScript, karena JavaScript pada saat itu adalah bahasa yang semakin populer untuk pengembangan web, tetapi memiliki beberapa kekurangan dalam hal keamanan dan alat bantu untuk pengembangan perangkat lunak berskala besar. Bahasa ini dirancang untuk mengatasi beberapa masalah yang dihadapi pengembang saat bekerja dengan JavaScript, seperti kurangnya dukungan untuk sistem tipe statis dan kurangnya fitur-fitur bahasa modern.

## Typescript vs JS

TypeScript adalah superset dari JavaScript yang menambahkan penandaan tipe opsional dan fitur lain seperti antarmuka, kelas, dan namespace. JavaScript adalah bahasa dengan tipe dinamis yang utamanya digunakan untuk pengembangan web di sisi klien dan juga dapat digunakan untuk pengembangan di sisi server.

- Tipe: TypeScript memiliki penandaan tipe opsional sementara JavaScript menggunakan tipe dinamis. Ini berarti bahwa dalam TypeScript, Anda dapat menentukan tipe data variabel, parameter, dan nilai kembalian, yang dapat membantu mendeteksi kesalahan terkait tipe pada saat kompilasi.
- Syntax: TypeScript memperluas sintaksis JavaScript dengan fitur-fitur seperti antarmuka, kelas, dan namespace. Hal ini memberikan struktur yang lebih kokoh dan terorganisir untuk proyek-proyek berskala besar.
- Peralatan: TypeScript memiliki dukungan peralatan yang lebih baik, seperti integrasi editor yang lebih baik, pemeriksaan tipe, dan refaktorisasi kode.
- Kompatibilitas Mundur: TypeScript sepenuhnya kompatibel dengan kode JavaScript yang sudah ada, yang berarti Anda dapat menggunakan TypeScript di lingkungan JavaScript apa pun.

## Install tyscript compiler

#### Install typescript secara global

```bash
npm i -g typescript
```

#### Install dengan node package manager

```
npm i ts-node
```

### Compile typescript

```
tsc <namafile>.ts
```

### Compile dan run typescript

```
ts-node <namafile>.ts
```

# <span style="color: aqua">Roadmap by Kamran Ahmed</span>

![roadmapsh](./img/roadmaptypeScript.png)

# Tipe Data<span style="color: aqua"></span>

Tipe data digunakan untuk mendefinisikan jenis nilai yang dapat disimpan dalam variabel. TypeScript mendukung berbagai jenis tipe data, seperti number, string, boolean, array, enum, void, any, never, null, undefined, dan object.

## <span style="color: aqua">Tipe Data Primitif</span>

Tipe data primitif digunakan untuk mewakili nilai sederhana. Ini termasuk nilai numerik, nilai string, dan nilai boolean. TypeScript mendukung tipe data primitif berikut.

### Tipe Data Boolean

Tipe data boolean digunakan untuk mewakili nilai boolean. Ini dapat digunakan untuk mewakili nilai true dan false.

```typescript
let isStudent: boolean = true; // nilai true
let isWorking: boolean = false; // nilai false
```

### Tipe Data Number

Tipe data number digunakan untuk mewakili nilai numerik. Ini dapat digunakan untuk mewakili bilangan bulat dan bilangan desimal. TypeScript mendukung nilai numerik dalam format desimal dan heksadesimal.

```typescript
let decimal: number = 10; // bilangan desimal
let hex: number = 0xf00d; // bilangan heksadesimal
```

### Tipe Data String

Tipe data string digunakan untuk mewakili nilai string. Ini dapat digunakan untuk mewakili teks. TypeScript mendukung nilai string dalam format kutipan tunggal dan ganda.

```typescript
let firstName: string = "John"; // menggunakan kutipan ganda
let lastName: string = "Doe"; // menggunakan kutipan tunggal
```

### Tipe Data Void

Tipe data void digunakan untuk mewakili nilai kosong atau tidak ada. Biasanya digunakan sebagai tipe pengembalian dari fungsi yang tidak mengembalikan nilai.

```typescript
function printMessage(message: string): void {
  console.log(message);
}
```

### Tipe Data Null dan Undefined

Tipe data null dan undefined digunakan untuk mewakili nilai null dan undefined secara berturut-turut. Secara default, null dan undefined adalah sub-tipe dari semua tipe data lainnya. Ini berarti bahwa Anda dapat menetapkan nilai null dan undefined ke tipe data lainnya seperti number dan string.

```typescript
let x: number = null;
let y: string = undefined;
```

## <span style="color: aqua">Tipe Data Object</span>

Tipe data object digunakan untuk mewakili nilai non-primitif dan non-boolean. Ini berarti bahwa tipe data object dapat digunakan untuk mewakili fungsi, array, dan objek JavaScript.

### Tipe Data Interface

Tipe data interface digunakan untuk mendefinisikan kontrak untuk objek. Ini dapat digunakan untuk mendefinisikan struktur objek bersama dengan tipe data masing-masing properti objek. Tipe data interface dapat ditentukan dengan menyediakan nama interface dan daftar properti bersama dengan tipe data mereka.

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

function printPerson(person: Person) {
  console.log(`First Name: ${person.firstName}, Last Name: ${person.lastName}`);
}

let person = { firstName: "John", lastName: "Doe" };
printPerson(person);
```

### Tipe Data Class

Tipe data class digunakan untuk membuat kelas. Ini dapat digunakan untuk mendefinisikan properti dan metode kelas. Tipe data class dapat ditentukan dengan menyediakan nama kelas dan daftar properti dan metode kelas.

```typescript
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
console.log(person.getFullName());
```

### Tipe Data Enum

Tipe data enum digunakan untuk mewakili kumpulan nilai yang dapat ditetapkan. Ini mirip dengan enum dalam bahasa pemrograman lain seperti C# dan Java. Tipe data enum dapat ditentukan dengan menyediakan nama enum dan daftar nilai yang mungkin.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

### Tipe Data Array

Tipe data array digunakan untuk mewakili kumpulan nilai. Ini mirip dengan array dalam JavaScript. Tipe data array dapat ditentukan dengan dua cara. Cara pertama menggunakan sintaksis tipe[] dan cara kedua menggunakan sintaksis generic Array<tipe>.

```typescript
// menggunakan sintaksis tipe[]
let list: number[] = [1, 2, 3];

// menggunakan sintaksis generic Array<tipe>
let list: Array<number> = [1, 2, 3];
```

### Tipe Data Tuple (Seperti Array dalam Java)

Tipe data tuple digunakan untuk mewakili array dengan jumlah elemen tetap. Tipe data tuple dapat ditentukan dengan menyediakan tipe data untuk setiap elemen dalam array.

```typescript
let person: [string, number] = ["John Doe", 25];
```

## <span style="color: aqua">Other Types</span>

### Tipe Data Any

Tipe data any digunakan untuk mewakili nilai yang dapat berubah. Ini mirip dengan tipe data dinamis dalam bahasa pemrograman lain seperti C# dan Java. Tipe data any dapat ditentukan dengan menyediakan tipe data any.

```typescript
let value: any = 10;
value = true;
value = "John Doe";
```

### Tipe Data object

Tipe data object digunakan untuk mewakili nilai non-primitif dan non-boolean. Ini berarti bahwa tipe data object dapat digunakan untuk mewakili fungsi, array, dan objek JavaScript.

```typescript
let person: object = {
  firstName: "John",
  lastName: "Doe",
};
```

### Tipe Data Never

Tipe data never digunakan untuk mewakili nilai yang tidak pernah terjadi. Misalnya, tipe pengembalian dari fungsi yang selalu menghasilkan pengecualian memiliki tipe never.

```typescript
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

### Tipe Data Unknown

Tipe data unknown digunakan untuk mewakili nilai yang tidak diketahui. Ini mirip dengan tipe data any, tetapi lebih aman karena tidak dapat mengonversi, memanggil, atau melakukan operasi lainnya pada nilai tipe data unknown kecuali membandingkannya dengan nilai lain, atau memeriksa bahwa Anda dapat memanggil atau memanggilnya. mengonversi ke tipe data lain.

```typescript
let value: unknown = 10;
value = true;
value = "John Doe";
```

## <span style="color: aqua">Tipe Data Assertion</span>

Tipe data assertion digunakan untuk memberi tahu kompiler TypeScript tentang tipe data variabel. Ini mirip dengan casting dalam bahasa pemrograman lain seperti C# dan Java. Tipe data assertion dapat dilakukan dengan dua cara. Cara pertama menggunakan sintaksis tipe dan cara kedua menggunakan sintaksis as.

```typescript
// menggunakan sintaksis as
let message: any = "Hello World";
let messageLength: number = (message as string).length;

// menggunakan sintaksis as any
let message: any = "Hello World";
let messageLength: number = (message as any).length;
```

## Tipe Data Combining

Tipe data combining digunakan untuk menggabungkan dua atau lebih tipe data. Ini mirip dengan tipe data gabungan dalam bahasa pemrograman lain seperti C# dan Java. Tipe data gabungan dapat ditentukan dengan menyediakan daftar tipe data yang dipisahkan dengan karakter pipa.

### Tipe Data Union

Tipe data union digunakan untuk mendefinisikan tipe data yang dapat memiliki lebih dari satu tipe. Ini mirip dengan union type dalam bahasa pemrograman lain seperti C# dan Java. Tipe data union dapat ditentukan dengan menyediakan daftar tipe data yang dipisahkan dengan karakter pipa.

```typescript
let id: string | number;
id = 10; // ok
id = "10"; // ok
id = true; // error
```

### Tipe Data Intersection

Tipe data intersection digunakan untuk mendefinisikan tipe data yang dapat memiliki lebih dari satu tipe. Ini mirip dengan intersection type dalam bahasa pemrograman lain seperti C# dan Java. Tipe data intersection dapat ditentukan dengan menyediakan daftar tipe data yang dipisahkan dengan karakter ampersand.

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

interface Student {
  age: number;
}

type PersonStudent = Person & Student;

let personStudent: PersonStudent = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};
```

### Tipe Data Alias

Tipe data alias digunakan untuk mendefinisikan alias untuk tipe data lainnya. Ini mirip dengan tipe data alias dalam bahasa pemrograman lain seperti C# dan Java. Tipe data alias dapat ditentukan dengan menyediakan nama alias dan tipe data yang ingin di-alias.

```typescript
type Person = {
  firstName: string;
  lastName: string;
};

function printPerson(person: Person) {
  console.log(`First Name: ${person.firstName}, Last Name: ${person.lastName}`);
}

let person = { firstName: "John", lastName: "Doe" };
printPerson(person);
```

### Tipe Data keyof operator

Tipe data keyof operator digunakan untuk mendapatkan daftar nama properti dari tipe data. Ini mirip dengan operator keyof dalam bahasa pemrograman lain seperti C# dan Java. Tipe data keyof operator dapat ditentukan dengan menyediakan nama tipe data.

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

type PersonKey = keyof Person;

let personKey: PersonKey = "firstName";
```

## <span style="color: aqua">Type Guard / Narrowing</span>

Type guard digunakan untuk memeriksa tipe data variabel. Ini dapat digunakan untuk memeriksa tipe data variabel dan menghindari kesalahan saat mengakses properti dari variabel. Type guard dapat dilakukan dengan dua cara. Cara pertama menggunakan sintaksis typeof dan cara kedua menggunakan sintaksis instanceof.

### Type Guard typeof

Type guard typeof digunakan untuk memeriksa tipe data variabel. Ini dapat digunakan untuk memeriksa tipe data variabel dan menghindari kesalahan saat mengakses properti dari variabel. Type guard typeof dapat dilakukan dengan menyediakan nama variabel dan tipe data yang ingin diperiksa.

```typescript
let value: string | number = "Hello World";
if (typeof value === "string") {
  console.log(value.length);
}
```

### Type Guard instanceof

Type guard instanceof digunakan untuk memeriksa tipe data variabel. Ini dapat digunakan untuk memeriksa tipe data variabel dan menghindari kesalahan saat mengakses properti dari variabel. Type guard instanceof dapat dilakukan dengan menyediakan nama variabel dan tipe data yang ingin diperiksa.

```typescript
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
if (person instanceof Person) {
  console.log(person.getFullName());
}
```

#### Equality

Equality digunakan untuk memeriksa kesamaan nilai variabel. Ini dapat digunakan untuk memeriksa kesamaan nilai variabel dan menghindari kesalahan saat mengakses properti dari variabel. Equality dapat dilakukan dengan menyediakan nama variabel dan nilai yang ingin diperiksa.

```typescript
let value: string | number = "Hello World";
if (value === "string") {
  console.log(value.length);
}
```

#### Truthiness

Truthiness digunakan untuk memeriksa nilai kebenaran variabel. Ini dapat digunakan untuk memeriksa nilai kebenaran variabel dan menghindari kesalahan saat mengakses properti dari variabel. Truthiness dapat dilakukan dengan menyediakan nama variabel.

```typescript
let value: string | number = "Hello World";
if (value) {
  console.log(value.length);
}
```

#### Type Predicates

Type predicates digunakan untuk memeriksa tipe data variabel. Ini dapat digunakan untuk memeriksa tipe data variabel dan menghindari kesalahan saat mengakses properti dari variabel. Type predicates dapat dilakukan dengan menyediakan nama variabel dan tipe data yang ingin diperiksa.

```typescript
function isPerson(value: any): value is Person {
  return value instanceof Person;
}

class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Doe");
if (isPerson(person)) {
  console.log(person.getFullName());
}
```

## <span style="color: aqua">TypeScript Function</span>

### Function

Function digunakan untuk mendefinisikan fungsi. Ini mirip dengan fungsi dalam JavaScript. Function dapat ditentukan dengan menyediakan nama fungsi dan daftar parameter fungsi bersama dengan tipe data mereka. Tipe data pengembalian fungsi dapat ditentukan dengan menyediakan tipe data pengembalian.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

##### Arrow Function

Arrow function digunakan untuk mendefinisikan fungsi. Ini mirip dengan fungsi dalam JavaScript. Arrow function dapat ditentukan dengan menyediakan daftar parameter fungsi bersama dengan tipe data mereka. Tipe data pengembalian fungsi dapat ditentukan dengan menyediakan tipe data pengembalian.

```typescript
const add = (x: number, y: number): number => {
  return x + y;
};
```

##### Optional Parameter

Optional parameter digunakan untuk mendefinisikan parameter opsional. Ini dapat digunakan untuk mendefinisikan parameter fungsi yang tidak wajib. Optional parameter dapat ditentukan dengan menyediakan tanda tanya (?) setelah nama parameter.

```typescript
function add(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}
```

##### Default Parameter

Default parameter digunakan untuk mendefinisikan nilai default untuk parameter. Ini dapat digunakan untuk mendefinisikan nilai default untuk parameter fungsi. Default parameter dapat ditentukan dengan menyediakan nilai default setelah tipe data parameter.

```typescript
function add(x: number, y: number = 0): number {
  return x + y;
}
```

##### Rest Parameter

Rest parameter digunakan untuk mendefinisikan parameter variadic. Ini dapat digunakan untuk mendefinisikan parameter fungsi yang dapat menerima jumlah argumen yang tidak terbatas. Rest parameter dapat ditentukan dengan menyediakan tanda titik tiga (…) sebelum nama parameter.

```typescript
function add(...numbers: number[]): number {
  return numbers.reduce((x, y) => x + y, 0);
}
```

##### Overloading

Overloading digunakan untuk mendefinisikan beberapa tanda tangan fungsi. Ini dapat digunakan untuk mendefinisikan beberapa tanda tangan fungsi dengan nama yang sama. Overloading dapat dilakukan dengan menyediakan beberapa tanda tangan fungsi dengan nama yang sama.

```typescript
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}
```

##### Typing function

Typing function digunakan untuk mendefinisikan tipe data fungsi. Ini dapat digunakan untuk mendefinisikan tipe data fungsi. Typing function dapat dilakukan dengan menyediakan tipe data parameter dan tipe data pengembalian.

```typescript
type Add = (x: number, y: number) => number;
let add: Add = (x, y) => x + y;
```

# <span style="color: aqua">TypeScript Interface</span>

### Types vs Interface

Di TypeScript, ada dua cara utama untuk mendefinisikan tipe data yang kompleks: menggunakan type dan interface. Kedua pendekatan ini dapat digunakan untuk menggambarkan struktur data, tetapi ada beberapa perbedaan utama antara keduanya. Berikut adalah perbandingan antara type dan interface di TypeScript:

##### type

- type digunakan untuk mendefinisikan alias tipe yang bisa digunakan kembali. Ini memungkinkan Anda untuk memberikan nama pada tipe data dan menggunakan kembali di berbagai bagian kode.
- Dapat menggabungkan beberapa tipe menggunakan operator seperti & (intersection) dan | (union).
- Dapat menggabungkan tipe primitif, objek, dan tipe lainnya.
- Mendukung fitur tipe seperti mapped types, conditional types, dan template literals types.

```typescript
type Person = {
  name: string;
  age: number;
};

type Point = {
  x: number;
  y: number;
};

type Coordinate = Point & {
  z: number;
};
```

##### interface

- interface digunakan untuk mendefinisikan kontrak untuk objek dan struktur data lainnya.
- Dapat diberi nama seperti type, tetapi nama interface seringkali lebih umum digunakan untuk menggambarkan entitas objek.
- Mendukung ekstensi, yaitu Anda dapat mewarisi satu interface dari yang lain dengan menggunakan kata kunci extends.
- Interface dapat digunakan untuk menetapkan tipe fungsi.

```typescript
interface Person {
  name: string;
  age: number;
}

interface Point {
  x: number;
  y: number;
}

interface Coordinate extends Point {
  z: number;
}
```

# <span style="color: aqua">Class</span>

## Class

Class digunakan untuk mendefinisikan kelas. Ini mirip dengan kelas dalam JavaScript. Class dapat ditentukan dengan menyediakan nama kelas dan daftar properti dan metode kelas.

```typescript
class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Constructor Parameter Property

Constructor parameter property digunakan untuk mendefinisikan properti kelas. Ini dapat digunakan untuk mendefinisikan properti kelas dan menginisialisasi nilai mereka dari parameter konstruktor. Constructor parameter property dapat ditentukan dengan menyediakan kata kunci public, private, atau protected sebelum nama parameter.

```typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

##### Static Property

Static property digunakan untuk mendefinisikan properti kelas statis. Ini dapat digunakan untuk mendefinisikan properti kelas yang dapat diakses tanpa membuat instance kelas. Static property dapat ditentukan dengan menyediakan kata kunci static sebelum nama properti.

```typescript
class Person {
  static defaultAge = 25;
  static getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}
```

##### Static Method

Static method digunakan untuk mendefinisikan metode kelas statis. Ini dapat digunakan untuk mendefinisikan metode kelas yang dapat diakses tanpa membuat instance kelas. Static method dapat ditentukan dengan menyediakan kata kunci static sebelum nama metode.

```typescript
class Person {
  static defaultAge = 25;
  static getFullName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`;
  }
}
```

### Constructor Overloading

Constructor overloading digunakan untuk mendefinisikan beberapa tanda tangan konstruktor. Ini dapat digunakan untuk mendefinisikan beberapa tanda tangan konstruktor dengan nama yang sama. Constructor overloading dapat dilakukan dengan menyediakan beberapa tanda tangan konstruktor dengan nama yang sama.

```typescript
class Person {
  constructor(public firstName: string, public lastName: string);
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Access Modifier

Access modifier digunakan untuk mengontrol akses ke properti dan metode kelas. Ini dapat digunakan untuk mengontrol akses ke properti dan metode kelas. Access modifier dapat ditentukan dengan menyediakan kata kunci public, private, atau protected sebelum nama properti atau metode.

```typescript
class Person {
  public firstName: string;
  private lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Abstract Class

Abstract class digunakan untuk mendefinisikan kelas abstrak. Ini dapat digunakan untuk mendefinisikan kelas yang tidak dapat diinstansiasi. Abstract class dapat ditentukan dengan menyediakan kata kunci abstract sebelum nama kelas.

```typescript
abstract class Person {
  constructor(public firstName: string, public lastName: string) {}

  abstract getFullName(): string;
}

class Student extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Inheritance

Inheritance digunakan untuk mewarisi properti dan metode kelas. Ini dapat digunakan untuk mewarisi properti dan metode kelas. Inheritance dapat dilakukan dengan menyediakan kata kunci extends setelah nama kelas.

```typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
```

### Polymorphism

Polymorphism digunakan untuk mendefinisikan metode yang dapat diimplementasikan ulang. Ini dapat digunakan untuk mendefinisikan metode yang dapat diimplementasikan ulang. Polymorphism dapat dilakukan dengan menyediakan kata kunci abstract sebelum nama metode.

```typescript
abstract class Person {
  constructor(public firstName: string, public lastName: string) {}

  abstract getFullName(): string;
}

class Student extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

### Method Overriding

Method overriding digunakan untuk mendefinisikan metode yang dapat diimplementasikan ulang. Ini dapat digunakan untuk mendefinisikan metode yang dapat diimplementasikan ulang. Method overriding dapat dilakukan dengan menyediakan kata kunci override sebelum nama metode.

```typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```
