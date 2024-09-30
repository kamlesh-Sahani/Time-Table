const SubmitButton = ({ buttonValue }: { buttonValue: string }) => {
  return (
    <button
      type="submit"
      className="bg-blue-700 text-black px-4 py-2 rounded hover:bg-blue-500 transition-all duration-300 font-semibold"
    >
      {buttonValue}
    </button>
  );
};

export default SubmitButton;
