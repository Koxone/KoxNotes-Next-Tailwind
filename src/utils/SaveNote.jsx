import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "@/firebase/config";

export async function saveNote(title, content, tags = [], dateText, timeText, id) {
  const user = auth.currentUser;
  if (!user) throw new Error("User not authenticated");

  const note = {
    title,
    content,
    tags,
    userId: user.uid,
    id,
    createdAt: new Date(),
    dateText,
    timeText,
    lastEdited: new Date(),
  };
  await addDoc(collection(db, "notes"), note);
}
