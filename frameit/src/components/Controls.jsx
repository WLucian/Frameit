import { fonts, backgrounds, fontColors } from "../data/options";
import FontPicker from "./FontPicker";
import BackgroundPicker from "./BackgroundPicker";
import ColorPicker from "./ColorPicker";

export default function Controls({
  font,
  fontSize,
  background,
  fontColor,
  quote,
  author,
  alignment,
  showAuthor,
  aspectRatio,
  setFont,
  setFontSize,
  setFontColor,
  setBackground,
  setQuote,
  setAuthor,
  setAlignment,
  setAspectRatio,
  setShowAuthor,
}) {
  return (
    <div>
      <div>
        <textarea name="" id=""></textarea>
        <button>Get random quote</button>
      </div>
      <div className="flex space-x-4 overflow-x-scroll">
        {fonts.map((fontOption) => (
          <FontPicker
            key={fontOption.personality}
            font={fontOption}
            setFont={setFont}
            selectedFont={font}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {backgrounds.map((bgInUse) => (
          <BackgroundPicker
            key={bgInUse.label}
            background={bgInUse}
            setBackground={setBackground}
            selectedBackground={background}
          />
        ))}
      </div>
      <div className="flex gap-3">
        {fontColors.map((usedColor) => (
          <ColorPicker
            key={usedColor.name}
            Color={usedColor}
            selectedColor={fontColor}
            setFontColor={setFontColor}
          />
        ))}
      </div>
      <div>font size here</div>
      <div>alignment here</div>
      <div>aspect ratio here</div>
      <div>show author here</div>
    </div>
  );
}
