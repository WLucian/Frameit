import { useState, useEffect, useRef } from "react";
import Controls from "./components/Controls";
import { fonts, backgrounds, fontColors } from "./data/options";
import html2canvas from "html2canvas";
import QuoteCard from "./components/QuoteCard";

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
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "frameit-card.png";
    link.href = image;
    link.click();
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

  return (
    <div className="min-h-screen bg-[#0f1117] p-4 md:p-6">
      <div className="py-4">
        <h1 className="text-white text-2xl font-bold tracking-tight">
          Frame<span className="text-purple-400">it</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6 items-start">
        <div className="md:w-[60%] flex flex-col gap-3">
          <QuoteCard {...cardProps} />
          <button onClick={downloadCard} className="text-white text-sm">
            Download as Image
          </button>
        </div>
        <div className="md:w-[40%] bg-[#1a1d26] rounded-xl p-4">
          <Controls {...controlProps} />
        </div>
      </div>
    </div>
  );
}
