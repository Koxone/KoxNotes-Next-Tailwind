import React from "react";
import OpenNoteHeader from "@/components/ui/header/OpenNoteHeader";
import MainTitle from "@/components/ui/text/main/MainTitle";
import OpenNoteInfoCard from "@/components/ui/cards/OpenNoteInfoCard";
import NoteTextArea from "@/components/ui/inputs/NoteTextArea";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function OpenNoteScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen pr-4 pl-4 pb-4 flex flex-col justify-center items-center gap-4 rounded-2xl bg-neutral-950">
        <OpenNoteHeader />
        <MainTitle text="React Performance Optimization" styles="text-white" />
        <OpenNoteInfoCard
          icon="tag"
          mode="darkMode"
          date="16 May 2025"
          tags1="Dev"
          tag2="React"
          text1="Tags"
          text2="Last Edited"
        />
        <NoteTextArea />
      </div>
      <NavBar />
    </div>
  );
}

export default OpenNoteScreen;
