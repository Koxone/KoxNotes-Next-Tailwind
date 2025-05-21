// src/components/ui/containers/AllNotesContainer.jsx
"use client";
import React, { useEffect, useState } from "react";
import CloseNote from "@/components/ui/cards/CloseNote";
import { getUserNotes } from "@/utils/getUserNotes";

export default function AllNotesContainer() {
  const [notes, setNotes] = useState([]);

  // Cargar notas una sola vez cuando el componente se monta
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
        <p className="text-neutral-400 text-center mt-4">No notes yet.</p>
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
