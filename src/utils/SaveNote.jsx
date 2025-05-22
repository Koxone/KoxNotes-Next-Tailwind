import { collection, addDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export async function saveNote(title, content, tags = [], dateText, timeText) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const noteData = {
    title,
    content,
    tags,
    userId: user.uid,
    createdAt: new Date(),
    dateText,
    timeText,
    lastEdited: new Date(),
  };

  const docRef = await addDoc(collection(db, "notes"), noteData);

  await updateDoc(docRef, { id: docRef.id });

  return docRef.id;
}
