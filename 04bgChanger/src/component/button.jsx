

function ColorButton({ color, onClick, Name }) {
  return (
    <button
      className={`px-4 py-2 text-white rounded transition ${color}`}
      onClick={onClick}
    >
      {Name}
    </button>
  );
}

export default ColorButton;
