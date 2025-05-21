//React
"use client";
import { useState } from "react";

//Function
import { saveNote } from "@/utils/SaveNote";

//Components
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import NewNoteInfoCard from "@/components/ui/cards/NewNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";
import NewNoteTitleInput from "@/components/ui/inputs/NewNoteTitleInput";

export default function NewNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagsText, setTagsText] = useState("");

  const handleSaveNote = async () => {
    const tags = tagsText
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const now = new Date();
    const dateText = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const timeText = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    try {
      await saveNote(title, content, tags, dateText, timeText);
      alert("Note saved successfully!");
      setTitle("");
      setContent("");
      setTagsText("");
    } catch (error) {
      alert("Error saving note:", +error.message);
      console.error("Error saving note:", error);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Header />
      <OpenNoteHeader onSave={handleSaveNote} />
      <NewNoteTitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <NewNoteInfoCard tagsText={tagsText} onChange={(e) => setTagsText(e.target.value)} mode="darkMode" />
      <div className="overflow-y-auto px-3">
        <NoteTextArea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <NavBar />
    </div>
  );
}
