import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  query,orderBy,
  db,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  getDoc,
  onSnapshot,
  limit,
  where
} from "./firebase.js";

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let cnic = document.getElementById("cnic");
  let age = document.getElementById("age");
  let hobbies = document.getElementById("hobbies");

  hobbies = hobbies.value.split(" ");

  // add data with random id
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name.value,
      phone: phone.value,
      address: address.value,
      cnic: cnic.value,
      age: age.value,
      hobbies: arrayUnion(...hobbies),
      time: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  // add data with decided id
  // try {
  //   await setDoc(doc(db, "users", "4654654"), {
  //     name: name.value,
  //     phone: phone.value,
  //     address: address.value,
  //     cnic: cnic.value,
  //    age:age.value,
  //    hobbies:arrayUnion(...hobbies),
  //    time:serverTimestamp()
  //   });
  //   console.log("Document written");

  // } catch (e) {
  //   console.log(e);
  // }

  // update all documents

  // const userRef = doc(db, "users", "42345454545");
  // try {
  //   await updateDoc(userRef, {
  //     "favorites.subject":"Maths",
  //   });
  //   console.log("data updated");
  // } catch (e) {
  //   console.log(e);
  // }

  // const userRef = doc(db, "users", "64564654654");

  // try {
  //   await updateDoc(userRef, {
  //     colors: arrayUnion("red","blue","yellow")
  // });
  //   console.log("array included");
  // } catch (e) {
  //   console.log(e);
  // }

  // read all documents
  // try {
  //   const querySnapshot = await getDocs(collection(db, "users"));

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} =>` ,doc.data());
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  // get a single doc

  // const docRef = doc(db, "users", "4654654");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   let time = docSnap.data().time
  //   console.log("Document data:",`${time.toString()}`);
  //   // console.log(time);
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }
});

const usersRef = collection(db, "users");

// const q = query(usersRef,orderBy("name","desc")) 
const q = query(usersRef,where("age",">","18")) 

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let userDiv = document.getElementById("userName");
  userDiv.innerHTML = "";
  querySnapshot.forEach((doc) => {
    console.count("calling");

    userDiv.innerHTML += `<p> ${doc.data().name}</p>`;
    console.log(doc.data().name);
  });
});
