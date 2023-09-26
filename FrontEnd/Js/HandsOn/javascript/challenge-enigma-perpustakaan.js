
class Book {
    constructor(code, title, publisher, publicationYear, author) {
        this.code = code
        this.title = title
        this.publisher = publisher
        this.publicationYear = publicationYear
        this.author = author
    }
}

class Library {
    constructor() {
        this.book = []
        this.responseOK = {
            "code" : "00",
            "message" : "Success",
            "data" : {}
        }
        this.responseFailed = "{ code: 'xx', message: 'Failed, Data invalid or not found', data: null }"
    }

    add(code, title, publisher, punlicationYear, author) {

        console.log("-=========== Tambah Buku")
        if (code != null && title != null && publisher != null && author != null){
            const book = new Book(code, title, publisher, punlicationYear, author)
            this.book.push(book)
            this.responseOK.data = book
            console.log(this.responseOK)

        } else {
            console.log(this.responseFailed)
        }
        this.responseOK.data = {}
    }

    getAll() {
        console.log(`-=========== List Buku`)
        if (this.book.length !== 0){
            this.responseOK.data = this.book
            console.log(this.responseOK)
        } else {
            console.log(this.responseFailed)
        }
        this.responseOK.data = {}
    }

    searchByTitle(title) {
        console.log(`-=========== Filter Buku Berdasarkan Judul`)
        const filterBook = this.book.find(b => b.title === title);
        if (filterBook) {
            this.responseOK.data = filterBook
            console.log(this.responseOK)
        } else {
            console.log(`{ code: 'xx', message: '${title} not found', data: null }`)
        }
        this.responseOK.data = {}
    }

    delete(code) {
        console.log(`-=========== Hapus Buku Berdasarkan Code`)
        const index = this.book.findIndex(b => b.code === code);
        if (index !== -1) {
            this.book.splice(index, 1);
            console.log(`{ code: '00', message: 'Success deleted', data: '${code}' }`)
        } else {
            console.log(`{ code: 'xx', message: 'Failed deleted', data: null }`)
        }

    }

}
console.log(`Enigma Perpustakaan`)
const library = new Library();

library.add("NV01", "Cinta Suci", "Enigma", 2020, "Heru") // Tambah berhasil
library.add("NV02", "Cinta Ibnu denga sidia", "Enigma", 2020) // Tambah gagal => atribut tidak lengkap
library.getAll() // berisi satu data
library.delete("NV01") // data dihapus
library.searchByTitle("Cinta Suci") // gagal karena data buku tidak ditemukan
library.getAll() // gagal karena isi dari daftar buku kosong



