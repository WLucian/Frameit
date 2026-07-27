import { useState, useEffect, useRef } from "react";
import Controls from "./components/Controls";
import { fonts, backgrounds, fontColors } from "./data/options";
import html2canvas from "html2canvas";
import QuoteCard from "./components/QuoteCard";
import { Download } from "lucide-react";

export default function App() {
  const [font, setFont] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState(20);
  const [background, setBackground] = useState(backgrounds[5]);
  const [fontColor, setFontColor] = useState(fontColors[3]);
  const [textPosition, setTextPosition] = useState("center");
  const [quote, setQuote] = useState("The only way to do great work is to love what you do.");
  const [author, setAuthor] = useState("Steve Jobs");
  const [alignment, setAlignment] = useState("center");
  const [aspectRatio, setAspectRatio] = useState("square");
  const [showAuthor, setShowAuthor] = useState(true);

  const cardRef = useRef(null);

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current, { useCORS: true, allowTaint: true });

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "frameit-card.png";
      // Safari requires the anchor to actually be in the DOM for click()
      // to trigger a real download rather than being silently ignored.
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => URL.revokeObjectURL(url), 60000);
    }, "image/png");
  };

  const cardProps = {
    font,
    fontSize,
    background,
    fontColor,
    quote,
    author,
    alignment,
    showAuthor,
    cardRef,
    aspectRatio,
    textPosition,
  };

  const controlProps = {
    font,
    fontSize,
    background,
    fontColor,
    quote,
    author,
    alignment,
    showAuthor,
    aspectRatio,
    textPosition,
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
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFontSize(16);
    }
  }, []);

  const ratioLabel =
    aspectRatio === "square" ? "1 : 1" : aspectRatio === "portrait" ? "9 : 16" : "16 : 9";

  return (
    <div className="min-h-screen bg-[#FBF8F2] p-4 sm:p-6 md:p-10">
      <div className="mb-6 sm:mb-8">
        <h1
          className="text-xl sm:text-2xl tracking-tight text-[#211C17]"
          style={{ fontFamily: "Fraunces, serif" }}>
          Frame<span className="text-[#B4791E]">it</span>
        </h1>
        <p className="text-[12px] sm:text-[13px] text-[#8a8378] mt-1">
          Turn a quote into something worth framing.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 items-center lg:items-start">
        <div className="lg:w-[58%] w-full flex flex-col items-center gap-4">
          <div
            className="relative p-4 sm:p-6 rounded-sm w-full max-w-[420px]"
            style={{
              background: "#FFFFFF",
              boxShadow:
                "0 20px 45px -15px rgba(33,28,23,0.18), 0 6px 14px -6px rgba(33,28,23,0.12)",
            }}>
            <QuoteCard {...cardProps} />
            <span className="absolute -bottom-3 right-3 sm:right-4 bg-[#211C17] text-[#F0B84D] text-[9px] sm:text-[10px] font-mono tracking-wider px-2 py-1 rounded-sm uppercase">
              {ratioLabel}
            </span>
          </div>

          <button
            onClick={downloadCard}
            className="flex items-center justify-center gap-2 text-[13px] text-white bg-[#B4791E] hover:bg-[#a06a19] transition-colors px-4 py-2.5 rounded-md font-medium w-full max-w-[420px] min-h-[44px]">
            <Download size={15} /> Download as Image
          </button>
        </div>

        <div className="lg:w-[42%] w-full bg-white border border-[#EAE3D5] rounded-xl p-4 sm:p-5">
          <Controls {...controlProps} />
        </div>
      </div>
    </div>
  );
}
