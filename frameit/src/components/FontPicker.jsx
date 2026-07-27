export default function FontPicker({ font, setFont, selectedFont }) {
  const isSelected = font.personality === selectedFont.personality;

  return (
    <button
      className={`shrink-0 border rounded-md px-3 py-2 text-center min-w-[84px] min-h-[44px] transition-colors ${
        isSelected ? "border-[#B4791E] bg-[#FCF3E2]" : "border-[#EAE3D5] hover:border-[#a39a89]"
      }`}
      onClick={() => setFont(font)}>
      <p className="text-[13px] font-medium text-[#211C17]" style={{ fontFamily: font.fontFamily }}>
        {font.fontFamily}
      </p>
      <p className="text-[10px] text-[#a39a89]">{font.personality}</p>
    </button>
  );
}
