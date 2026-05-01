export default function FontPicker({ font, setFont, selectedFont }) {
  return (
    <div
      className={`cursor-pointer border rounded-lg px-3 py-2 text-center min-w-[80px] ${
        font.personality === selectedFont.personality
          ? "border-purple-500 bg-[#1e1b3a]"
          : "border-[#2d3148] bg-[#0f1117]"
      }`}
      onClick={() => setFont(font)}>
      <p className="text-[14px] font-bold text-white" style={{ fontFamily: font.fontFamily }}>
        {font.fontFamily}
      </p>
      <p className="text-[12px] font-normal text-[#ffffff] ">{font.personality} </p>
    </div>
  );
}
