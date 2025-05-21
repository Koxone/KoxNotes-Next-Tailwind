"use client";
import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import ArchiveButton from "../buttons/ArchiveButton";
import CancelButton from "../buttons/CancelButton";
import SaveNoteButton from "../buttons/SaveNoteButton";
import GoBackButton from "../buttons/GoBackButton";

import { useRouter } from "next/navigation";

function OpenNoteHeader({ onSave }) {
  const router = useRouter();

  const goTo = () => {
    router.push("/");
  };

  return (
    <div className="flex py-3 w-full sticky top-0 px-4 border-b border-neutral-800 mb-3">
      <GoBackButton styles="mr-[60px]" goTo={goTo} icon="arrow-left" mode="darkMode" />
      <DeleteButton icon="delete" mode="darkMode" styles="mr-[16px]" />
      <ArchiveButton icon="archive" mode="darkMode" styles="mr-[16px]" />
      <CancelButton styles="mr-[32px]" />
      <SaveNoteButton onClick={onSave} onSuccess={() => router.back()} />
    </div>
  );
}

export default OpenNoteHeader;
