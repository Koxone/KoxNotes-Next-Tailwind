import React from "react";
import MainTagsTitle from "@/components/ui/text/main/MainTagsTitle";
import GoBackButton from "@/components/ui/buttons/GoBackButton";
import MainTitle from "@/components/ui/text/main/MainTitle";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import SearchInput from "@/components/ui/inputs/SearchInput";
import NavBar from "@/components/ui/nav/NavBar";
import Header from "@/components/ui/header/Header";

function SearchScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col items-start gap-4 overflow-hidden flex-shrink-0 rounded-2xl bg-neutral-950">
        <MainTitle
          text="Search"
          styles="text-white mb-3"
          subtitleStyles="text-neutral-500"
          subtitle="All notes matching Dev are displayed below."
        />
        <SearchInput />
        <AllNotesContainer />
      </div>
      <NavBar />
    </div>
  );
}

export default SearchScreen;
