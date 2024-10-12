


class Bookshelf{
    constructor(){
        this.favoriteBooks=[];
    }
     addFavoriteBook(BookName){
        if(!BookName.includes("Great")){
            this.favoriteBooks.push(BookName)
        }
    }
    printFavoriteBooks(){
        console.log(`Favoite books:${String(this.favoriteBooks.length)}`);
        for(let book of this.favoriteBooks){
            console.log(book);
        }
        

    }
 }
    var BOOK_API = "https://some.url/api";
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
function loadBooks(thebookshelf){
    fakeAjax(BOOK_API,function onbooks(booksnames){
        for(let book of booksnames){
            thebookshelf.addFavoriteBook(book);
        }
        thebookshelf.printFavoriteBooks();
    })
}    
let example= new Bookshelf();
loadBooks(example);
    