import React from "react";
import CloseTagListCard from "@/components/ui/cards/CloseTagListCard";
import MainTitle from "@/components/ui/text/main/MainTitle";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function TagsListScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen pt-6 px-6 overflow-hidden flex flex-col rounded-2xl bg-neutral-950">
        <MainTitle text="Tags" styles="text-white mb-4" />
        <div className="w-full h-fit overflow-y-auto flex flex-col gap-1">
          {/* <Empty text='You don’t have any tags saved yet. Start a new note to capture your thoughts and ideas.'/> */}
          {/* <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" />
          <CloseTagListCard mode="darkMode" text="Cooking" /> */}
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default TagsListScreen;
