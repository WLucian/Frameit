export default function BackgroundPicker({ background, setBackground, selectedBackground }) {
  return (
    <div>
      <div
        className={`w-full aspect-square rounded-lg cursor-pointer ${
          background.label === selectedBackground.label
            ? "border-purple-500 bg-[#1e1b3a]"
            : "border-[#2d3148] bg-[#0f1117]"
        }`}
        style={{
          background:
            background.type === "image"
              ? `url(${background.value}) center/cover no-repeat`
              : background.value,
        }}
        onClick={() => setBackground(background)}>
        {background.type === "image" && <p>IMG</p>}
      </div>
      <p>{background.label} </p>
    </div>
  );
}
