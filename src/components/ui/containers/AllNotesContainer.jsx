// src/components/ui/containers/AllNotesContainer.jsx
"use client";
import React, { useEffect, useState } from "react";
import CloseNote from "@/components/ui/cards/CloseNote";
import { getUserNotes } from "@/utils/getUserNotes";

export default function AllNotesContainer({ context = 'home' }) {

  let emptyText = '';
  if (context === 'home') {
    emptyText = "You don't have any notes yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === 'tags') {
    emptyText = "You don't have any tags saved yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === 'archive') {
    emptyText = "You don't have any notes in your archive yet. Start a new note to capture your thoughts and ideas.";
  } else if (context === 'search') {
    emptyText = "You don't have any notes to search yet. Start a new note to capture your thoughts and ideas.";
  }

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const userNotes = await getUserNotes();
      setNotes(userNotes);
    }
    loadNotes();
  }, []);

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {notes.length === 0 ? (
        <div className="w-full rounded-sm bg-neutral-800 flex justify-center items-center p-3">
          <p className="text-neutral-400 text-center text-sm leading-[130%]">
            {emptyText}
          </p>
        </div>
      ) : (
        notes.map((note) => (
          <CloseNote
            key={note.id}
            title={note.title}
            date={note.dateText || note.timeText || ""}
            tags={note.tags || []}
          />
        ))
      )}
    </div>
  );
}
