import MainTitle from "@/components/ui/text/main/MainTitle";
import NavBar from "@/components/ui/nav/NavBar";
import AllNotesContainer from "@/components/ui/containers/AllNotesContainer";
import Header from "@/components/ui/header/Header";
import NewNoteButton from "@/components/ui/buttons/NewNoteButton";

function MainScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-center overflow-hidden bg-neutral-950 rounded-2xl">
        <MainTitle text="All Notes" styles="text-white mb-4" />
        <AllNotesContainer />
        <NewNoteButton icon="plus" mode="darkMode" />
      </div>
      <NavBar />
    </div>
  );
}

export default MainScreen;
