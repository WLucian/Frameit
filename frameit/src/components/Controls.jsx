import { useState } from "react";
import {
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignStartHorizontal,
  AlignCenterHorizontal,
  AlignEndHorizontal,
  ChevronDown,
} from "lucide-react";
import { fonts, backgrounds, fontColors } from "../data/options";
import FontPicker from "./FontPicker";
import BackgroundPicker from "./BackgroundPicker";
import ColorPicker from "./ColorPicker";

const quoteCategories = [
  { label: "Motivational", tag: "inspirational" },
  { label: "Wisdom", tag: "wisdom" },
  { label: "Love", tag: "love" },
  { label: "Success", tag: "success" },
  { label: "Friendship", tag: "friendship" },
  { label: "Humor", tag: "humorous" },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#a39a89] font-mono mb-2 sm:mb-3">
      {children}
    </p>
  );
}

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
  textPosition,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async (tag) => {
    setMenuOpen(false);
    setLoading(true);
    try {
      const res = await fetch(`https://api.quotable.io/random?tags=${tag}`);
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      console.error("Couldn't fetch a quote:", err);
    } finally {
      setLoading(false);
    }
  };

  const iconBtn = (active) =>
    `p-2.5 sm:p-2 rounded-md transition-colors ${
      active ? "bg-[#B4791E] text-white" : "text-[#a39a89] hover:text-[#211C17]"
    }`;

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* Quote */}
      <div>
        <SectionLabel>Quote</SectionLabel>
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          rows={3}
          className="w-full bg-[#FBF8F2] border border-[#EAE3D5] rounded-md p-3 text-[#211C17] text-sm resize-none focus:outline-none focus:border-[#B4791E] placeholder:text-[#a39a89]"
          placeholder="Type or paste a quote..."
        />
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="flex-1 bg-[#FBF8F2] border border-[#EAE3D5] rounded-md px-3 py-2.5 sm:py-2 text-[#211C17] text-sm focus:outline-none focus:border-[#B4791E] min-h-[44px] sm:min-h-0"
            placeholder="Author"
          />
          <div className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center gap-1.5 text-[12px] text-[#8a8378] hover:text-[#B4791E] border border-[#EAE3D5] hover:border-[#B4791E] rounded-md px-3 py-2.5 sm:py-0 transition-colors min-h-[44px] sm:min-h-0 w-full sm:w-auto whitespace-nowrap">
              {loading ? "Loading..." : "Get a quote"} <ChevronDown size={13} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-1 w-full sm:w-40 bg-white border border-[#EAE3D5] rounded-md shadow-lg z-10 overflow-hidden">
                {quoteCategories.map((c) => (
                  <button
                    key={c.tag}
                    onClick={() => fetchQuote(c.tag)}
                    className="w-full text-left text-[12px] text-[#211C17] hover:bg-[#FBF8F2] hover:text-[#B4791E] px-3 py-2.5 transition-colors">
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-px bg-[#EAE3D5]" />

      {/* Type */}
      <div>
        <SectionLabel>Type</SectionLabel>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {fonts.map((fontOption) => (
            <FontPicker
              key={fontOption.personality}
              font={fontOption}
              setFont={setFont}
              selectedFont={font}
            />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => fontSize > 14 && setFontSize(fontSize - 1)}
            className="w-9 h-9 sm:w-7 sm:h-7 rounded-md border border-[#EAE3D5] text-[#211C17] hover:border-[#B4791E]">
            −
          </button>
          <p className="font-mono text-[13px] text-[#211C17] w-8 text-center">{fontSize}</p>
          <button
            onClick={() => fontSize < 50 && setFontSize(fontSize + 1)}
            className="w-9 h-9 sm:w-7 sm:h-7 rounded-md border border-[#EAE3D5] text-[#211C17] hover:border-[#B4791E]">
            +
          </button>
        </div>
      </div>

      <div className="h-px bg-[#EAE3D5]" />

      {/* Palette */}
      <div>
        <SectionLabel>Palette</SectionLabel>
        <div className="grid grid-cols-4 gap-2 mb-3">
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
      </div>

      <div className="h-px bg-[#EAE3D5]" />

      {/* Position */}
      <div>
        <SectionLabel>Position</SectionLabel>
        <div className="flex gap-4 sm:gap-6 flex-wrap">
          <div className="flex gap-1">
            <button className={iconBtn(alignment === "left")} onClick={() => setAlignment("left")}>
              <AlignLeft size={16} />
            </button>
            <button className={iconBtn(alignment === "center")} onClick={() => setAlignment("center")}>
              <AlignCenter size={16} />
            </button>
            <button className={iconBtn(alignment === "right")} onClick={() => setAlignment("right")}>
              <AlignRight size={16} />
            </button>
          </div>
          <div className="flex gap-1">
            <button className={iconBtn(textPosition === "top")} onClick={() => setTextPosition("top")}>
              <AlignStartHorizontal size={16} />
            </button>
            <button
              className={iconBtn(textPosition === "center")}
              onClick={() => setTextPosition("center")}>
              <AlignCenterHorizontal size={16} />
            </button>
            <button
              className={iconBtn(textPosition === "bottom")}
              onClick={() => setTextPosition("bottom")}>
              <AlignEndHorizontal size={16} />
            </button>
          </div>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap">
          {["square", "portrait", "landscape"].map((r) => (
            <button
              key={r}
              onClick={() => setAspectRatio(r)}
              className={`text-[12px] px-3 py-2 sm:py-1.5 rounded-md border transition-colors capitalize min-h-[40px] sm:min-h-0 ${
                aspectRatio === r
                  ? "border-[#B4791E] text-[#B4791E]"
                  : "border-[#EAE3D5] text-[#a39a89] hover:border-[#a39a89]"
              }`}>
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#EAE3D5]" />

      <button
        onClick={() => setShowAuthor(!showAuthor)}
        className="text-[12px] text-[#8a8378] hover:text-[#B4791E] text-left transition-colors min-h-[32px]">
        {showAuthor ? "Hide author" : "Show author"}
      </button>
    </div>
  );
}
