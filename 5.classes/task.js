class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) 
  {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state; 
    this.state = 100;
    this.type = null;
  }
  
  fix() {
    this.state *= 1.5;
  }
  
  setState(arg) {
    if(arg < 0) {
      this.state = 0;
    } 
      
    else if (arg > 100) 
    {
      this.state = 100;
    }  

    else {
      this.state = arg;
    }
     } ;
  
  getState() 
  {
    return this.state;
  }
}


class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount, state, type) 

  {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  } 
}


class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author, state, type) 
  {
    super(name, releaseDate, pagesCount, state, type)
    this.author = author;
    this.type = "book"
  }
}


class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author, state, type) 
  {
    super(name, releaseDate, pagesCount, author, state, type); 
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author, state, type) 
  {
    super(name, releaseDate, pagesCount, author, state, type); 
    this.type = "fantastic";
  }
}


class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author, state, type)
  {
    super(name, releaseDate, pagesCount, author, state, type)
    this.type = "detective";
  }
}


class Library {
  
  constructor (name, books) {
    this.name = name; 
    this.books = books; 
    this.books = []; 
  }

  addBook(book) {
    this.book = book; 
    if (this.book.state > 30) {
      this.books.push(this.book)
    }
    return this.books
  }

  findBookBy(type, value) {
    
    const book = this.books.find(book => book[type] === value);

    if (book === undefined) {
      return null;} 
      else {return book}   
        }
  
  giveBookByName(bookTitle) {
    const bookIndex = this.books.findIndex(idx => idx.name === bookTitle); 

    if (bookIndex === -1) {
      
      return null
    } 
      else 
        {
          const volume = this.books[bookIndex]; 
                                             
                            this.books.splice(bookIndex, 1);

                            return volume
                          }
  }
  
  }
