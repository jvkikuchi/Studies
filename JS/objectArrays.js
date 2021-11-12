// Count the number of categories and the number of books in each category
// Count the number of authors
// Show Augusto Curry books
// Create a function that print the books by an author

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionaria',
                author: 'T. Harv Eker',
            },

            {
                title: 'O homem mais rico da Babilonia',
                author: 'George S. Clason',
            },

            {
                title: 'Pai rico, pai pobre',
                author: 'Rober T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },

    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: 'Voce e Insubstituivel',
                author: 'Augusto Cury',
            },

            {
                title: 'Ansiedade - Como enfrentar o mal do seculo',
                author: 'Augusto Cury',
            },

            {
                title: 'Os 7 habitos das pessoas altamente eficazes',
                author: 'Stephen R. Covery',
            },
        ],   
    },
];

const totalCategories = booksByCategory.length;

for(let category of booksByCategory){
    console.log("Books total in category", category.category + ":");
    console.log("Total:", category.books.length);
}

function countAuthors(){
    let authors= [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total of authors = ", authors.length);

}

function showCuryBooks(){
    let curryBooks = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                curryBooks.push(book.title);
            }
        }
    }

    console.log("Books by Augusto Cury: ", curryBooks)
}

function bookByAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author == author){
                books.push(book.title);
            }
        }
    }

    console.log(`Books writen by ${author}: ${books.join(", ")}`);
}

countAuthors();
showCuryBooks();
bookByAuthor('George S. Clason');