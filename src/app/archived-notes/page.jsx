import MainTitle from "@/components/ui/text/main/MainTitle";
import CloseNote from "@/components/ui/cards/CloseNote";
import NavBar from "@/components/ui/nav/NavBar";
import Header from "@/components/ui/header/Header";

function ArchivedNotesScreen() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-center gap-4 overflow-hidden rounded-2xl bg-neutral-950">
        <MainTitle
          text="Archived Notes"
          styles="text-white mb-3"
          subtitle="All your archived notes are stored here. You can restore or delete them anytime."
          subtitleStyles="text-neutral-500"
        />
        <div className="w-full h-full flex flex-col overflow-y-auto">
          <CloseNote title="React Performance Optimization" date="16 May 2025" />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default ArchivedNotesScreen;
