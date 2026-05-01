export default function ColorPicker({ Color, setFontColor, selectedColor }) {
  return (
    <div
      style={{ background: Color.hex }}
      className={`w-7 h-7 rounded-[50%] cursor-pointer border-2 ${Color.name === selectedColor.name ? `border-purple-500 ` : ` border-transparent`} `}
      onClick={() => setFontColor(Color)}></div>
  );
}
