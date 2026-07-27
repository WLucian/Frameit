export default function BackgroundPicker({ background, setBackground, selectedBackground }) {
  const isSelected = background.label === selectedBackground.label;

  return (
    <button
      onClick={() => setBackground(background)}
      className={`w-full aspect-square rounded-md border-2 transition-colors ${
        isSelected ? "border-[#B4791E]" : "border-transparent hover:border-[#EAE3D5]"
      }`}
      style={{
        background:
          background.type === "image"
            ? `url(${background.value}) center/cover no-repeat`
            : background.value,
      }}
      title={background.label}
    />
  );
}
