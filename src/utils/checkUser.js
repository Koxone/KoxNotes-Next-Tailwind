import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/config"; 


export default function checkUser() {
  const user = auth.currentUser;
  if (user) {
    console.log("User is logged in:", user);
  } else {
    console.log("No user is logged in");
  }
    return user;
}