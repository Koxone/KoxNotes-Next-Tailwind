import React from "react";
// import Empty from "@/components/ui/modals/Empty";
import MainTagsTitle from "@/components/ui/text/main/MainTagsTitle";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import Header from "@/components/ui/header/Header";
import NavBar from "@/components/ui/nav/NavBar";

function OpenTagListScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-start gap-4 overflow-hidden rounded-2xl bg-neutral-950">
        <GoBackButton text="All Tags" styles="" />
        <MainTitle
          text="Notes Tagged:"
          styles="text-neutral-400 mb-3"
          subtitleStyles="text-neutral-500"
          tag="Dev"
          subtitle="All notes with Dev tag are shown here."
        />
        <AllNotesContainer />
      </div>
      <NavBar />
    </div>
  );
}

export default OpenTagListScreen;
