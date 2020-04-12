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

const booksRef = firestore.collection("people");

let request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    saveToDb(request.response);
  }
};
request.open("GET", "mockData.json");
request.send();

const saveToDb = (people) => {
  let peopleObjectsArray = JSON.parse(people);

  peopleObjectsArray.map(
    ({ first_name, last_name, email, gender, job_title }) => {
      booksRef.doc().set({
        firstName: first_name,
        lastName: last_name,
        email: email,
        gender: gender,
        jobTitle: job_title,
      });
    }
  );
};
