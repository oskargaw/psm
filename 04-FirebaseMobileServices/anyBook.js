var firebaseConfig = {
  apiKey: "AIzaSyAg37psrC7R-x1XVrZKHJCjyIBn9ofaF4g",
  authDomain: "psm-books.firebaseapp.com",
  databaseURL: "https://psm-books.firebaseio.com",
  projectId: "psm-books",
  storageBucket: "psm-books.appspot.com",
  messagingSenderId: "311140147092",
  appId: "1:311140147092:web:831045f12e7715486b7981",
  measurementId: "G-ZG906XDRYX",
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const booksRef = firestore.collection("books");

const authorInput = document.getElementById("authorInput");
const titleInput = document.getElementById("titleInput");
const genreInput = document.getElementById("genreInput");
const yearInput = document.getElementById("yearInput");
const isbnInput = document.getElementById("isbnInput");

const saveToDb = () => {
  booksRef.doc("anyBook").set({
    author: authorInput.value,
    title: titleInput.value,
    genre: genreInput.value,
    year: yearInput.value,
    isbn: isbnInput.value,
  });
};

const anyBookRef = firestore.doc("books/anyBook");

const author = document.getElementById("author");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const year = document.getElementById("year");
const isbn = document.getElementById("isbn");

anyBookRef.onSnapshot(function (doc) {
  if (doc.exists) {
    console.log("Document data:", doc.data());
    authorText = document.createTextNode(doc.data().author);
    author.appendChild(authorText);

    titleText = document.createTextNode(doc.data().title);
    title.appendChild(titleText);

    genreText = document.createTextNode(doc.data().genre);
    genre.appendChild(genreText);

    yearText = document.createTextNode(doc.data().year);
    year.appendChild(yearText);

    isbnText = document.createTextNode(doc.data().isbn);
    isbn.appendChild(isbnText);
  } else {
    console.log("No such document!");
  }
});
