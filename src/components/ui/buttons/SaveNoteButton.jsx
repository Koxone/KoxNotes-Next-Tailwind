function SaveNoteButton({ styles = "", onClick, onSuccess }) {
  const handleClick = async () => {
    try {
      await onClick(); 
      if (onSuccess) onSuccess(); 
    } catch (error) {
      console.error("Error saving note:", error);
      alert("Ocurrió un error al guardar la nota.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-11 h-[18px] text-blue-500 text-[14px] font-[Inter] ${styles} font-normal flex justify-center items-center cursor-pointer whitespace-nowrap`}
    >
      Save Note
    </button>
  );
}

export default SaveNoteButton;
