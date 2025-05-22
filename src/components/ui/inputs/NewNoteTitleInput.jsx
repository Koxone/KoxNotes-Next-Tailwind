function NewNoteTitleInput({ value, onChange }) {
  return (
    <div className="px-4">
      <input
        className="placeholder:text-white placeholder:text-2xl mt-4 text-2xl text-white outline-0 bg-transparent w-full"
        type="text"
        value={value}
        onChange={onChange}
        maxLength="26"
        placeholder="Enter a title..."
      />
    </div>
  );
}

export default NewNoteTitleInput;
