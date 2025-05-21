import React from "react";
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import MainTitle from "@/components/ui/text/main/MainTitle";
import OpenNoteInfoCard from "@/components/ui/cards/OpenNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function OpenNoteScreen() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden gap-2 bg-neutral-950 rounded-2xl">
      <Header />
      <OpenNoteHeader />
      <div className="px-3">
        <MainTitle text="React Performance Optimization" styles="text-white ml-2" />
      </div>
      <div className="px-3">
        <OpenNoteInfoCard
        icon="tag"
        mode="darkMode"
        date="16 May 2025"
        tags1="Dev"
        tag2="React"
        text1="Tags"
        text2="Last Edited"
      />
      </div>
      <div className="overflow-y-auto px-3">
        <NoteTextArea />
      </div>
      <NavBar />
    </div>
  );
}

export default OpenNoteScreen;
