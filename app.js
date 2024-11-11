import {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  addDoc,
  db,
  arrayUnion, arrayRemove 
} from "./firebase.js";

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let cnic = document.getElementById("cnic");

  // add data with random id
  // try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //         name : name.value,
  //         phone : phone.value,
  //         address : address.value,
  //         cnic : cnic.value,

  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }

  // add data with decided id
  // try {
  //   await setDoc(doc(db, "users", "42345454545"), {
  //     name: name.value,
  //     phone: phone.value,
  //     address: address.value,
  //     cnic: cnic.value,
  //     favorites: { food: "Pizza", color: "Blue", subject: "recess" }
  //   });
  //   console.log("Document written");

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



});
