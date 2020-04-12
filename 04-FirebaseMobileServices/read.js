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

const peopleRef = firestore.collection("people");

peopleRef.get().then((snapshot) =>
  snapshot.docs.map((item) => {
    let personTableRow = document.createElement("tr");

    let personFirstName = document.createElement("td");
    let personFirstNameText = document.createTextNode(item.data().firstName);
    personFirstName.appendChild(personFirstNameText);
    personTableRow.appendChild(personFirstName);

    let personLastName = document.createElement("td");
    let personLastNameText = document.createTextNode(item.data().lastName);
    personLastName.appendChild(personLastNameText);
    personTableRow.appendChild(personLastName);

    let personEmail = document.createElement("td");
    let personEmailText = document.createTextNode(item.data().email);
    personEmail.appendChild(personEmailText);
    personTableRow.appendChild(personEmail);

    let personGender = document.createElement("td");
    let personGenderText = document.createTextNode(item.data().gender);
    personGender.appendChild(personGenderText);
    personTableRow.appendChild(personGender);

    let personJobTitle = document.createElement("td");
    let personJobTitleText = document.createTextNode(item.data().jobTitle);
    personJobTitle.appendChild(personJobTitleText);
    personTableRow.appendChild(personJobTitle);

    let tableBody = document.getElementById("personTableBody");
    tableBody.appendChild(personTableRow);
  })
);
