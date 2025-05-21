import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export async function getUserNotes() {
  const user = auth.currentUser;
  if (!user) return [];

  const q = query(collection(db, "notes"), where("userId", "==", user.uid));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
