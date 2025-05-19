"use client";
import { useRouter } from "next/navigation";

function NewNoteButton({ icon = '', mode = '' }) {
  const router = useRouter();

  const navigationHandler = () => {
    router.push('/new-note');
  };

  return (
    <button 
      onClick={navigationHandler}
      className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-blue-800 active:bg-blue-700 absolute bottom-17 right-4"
    >
      <img src={`/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  );
}

export default NewNoteButton;
