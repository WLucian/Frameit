export default function ColorPicker({ Color, setFontColor, selectedColor }) {
  const isSelected = Color.name === selectedColor.name;

  return (
    <button
      style={{ background: Color.hex }}
      className={`w-7 h-7 rounded-full cursor-pointer border-2 transition-colors ${
        isSelected ? "border-[#B4791E]" : "border-[#EAE3D5]"
      }`}
      onClick={() => setFontColor(Color)}
      title={Color.name}
    />
  );
}
