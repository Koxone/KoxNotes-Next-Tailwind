import React from "react";
import NavBarButton from "../buttons/NavBarButton";
import NewNoteButton from "../buttons/NewNoteButton";

function NavBar() {
  return (
    <div className="w-full h-14 bg-neutral-800 flex flex-row justify-between items-center sticky bottom-0 py-3 px-8">
      {/* <NewNoteButton icon="plus" mode="darkMode"/> */}
      <NavBarButton icon="home" mode="darkMode" />
      <NavBarButton icon="search" mode="darkMode" />
      <NavBarButton icon="archive" mode="darkMode" />
      <NavBarButton icon="tag" mode="darkMode" />
      <NavBarButton icon="settings" mode="darkMode" />
    </div>
  );
}

export default NavBar;
