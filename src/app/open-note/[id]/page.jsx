"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

// Componentes UI
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import MainTitle from "@/components/ui/text/main/MainTitle";
import OpenNoteInfoCard from "@/components/ui/cards/OpenNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function OpenNoteScreen() {
  const router = useRouter();
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNote() {
      try {
        const docRef = doc(db, "notes", id); // buscamos por el id
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNote(docSnap.data());
        } else {
          alert("Nota no encontrada.");
          router.push("/");
        }
      } catch (error) {
        console.error("Error al cargar la nota:", error);
        alert("No se pudo cargar la nota.");
        router.push("/");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchNote();
    }
  }, [id, router]);

  if (loading) {
    return <p className="text-white p-4">Cargando...</p>;
  }

  if (!note) {
    return <p className="text-white p-4">Nota no encontrada</p>;
  }

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden gap-2 bg-neutral-950 rounded-2xl">
      <Header />
      <OpenNoteHeader noteId={id} />
      <div className="px-3">
        <MainTitle text={note.title || "Sin título"} styles="text-white ml-2" />
      </div>
      <div className="px-3">
        <OpenNoteInfoCard
          icon="tag"
          mode="darkMode"
          date={`${note.dateText || ""} ${note.timeText || ""}`}
          tags1={note.tags?.[0] || ""}
          tag2={note.tags?.[1] || ""}
          text1="Tags"
          text2="Last Edited"
        />
      </div>
      <div className="overflow-y-auto px-3">
        <NoteTextArea value={note.content} onChange={() => {}} />
      </div>
      <NavBar />
    </div>
  );
}

export default OpenNoteScreen;
