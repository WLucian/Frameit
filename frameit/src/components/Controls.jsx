import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
} from "lucide-react";
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
  setTextPosition,
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
      <div className="flex gap-2">
        <button
          onClick={() => {
            fontSize > 16 && setFontSize(fontSize - 1);
          }}>
          -
        </button>
        <p>{fontSize}</p>
        <button
          onClick={() => {
            fontSize < 50 && setFontSize(fontSize + 1);
          }}>
          +
        </button>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-4">
          <button onClick={() => setAlignment("left")}>
            <AlignLeft size={18} />
          </button>
          <button onClick={() => setAlignment("center")}>
            <AlignCenter size={18} />
          </button>
          <button onClick={() => setAlignment("right")}>
            <AlignRight size={18} />
          </button>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setTextPosition("top")}>
            <AlignStartHorizontal size={18} />
          </button>
          <button onClick={() => setTextPosition("center")}>
            <AlignCenterHorizontal size={18} />
          </button>
          <button onClick={() => setTextPosition("bottom")}>
            <AlignEndHorizontal size={18} />
          </button>
        </div>
      </div>
      <div className="flex gap-6">
        <button onClick={() => setAspectRatio("square")}>Square</button>
        <button onClick={() => setAspectRatio("portrait")}>Portrait</button>
        <button onClick={() => setAspectRatio("landscape")}>Landscape</button>
      </div>
      <div>
        <button onClick={() => setShowAuthor(!showAuthor)}>
          {showAuthor ? "Hide Author" : "Show Author"}{" "}
        </button>
      </div>
    </div>
  );
}
