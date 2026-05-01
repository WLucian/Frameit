import { useState, useEffect, useRef } from "react";
import Controls from "./components/Controls";
import { fonts, backgrounds, fontColors } from "./data/options";
import html2canvas from "html2canvas";
import QuoteCard from "./components/QuoteCard";

export default function App() {
  const [font, setFont] = useState(fonts[0]);
  const [fontSize, setFontSize] = useState(20);
  const [background, setBackground] = useState(backgrounds[4]);
  const [fontColor, setFontColor] = useState(fontColors[0]);
  const [quote, setQuote] = useState("The only way to do great work is to love what you do.");
  const [author, setAuthor] = useState("Steve Jobs");
  const [alignment, setAlignment] = useState("center");
  const [aspectRatio, setAspectRatio] = useState("square");
  const [showAuthor, setShowAuthor] = useState(true);

  const cardRef = useRef(null);

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
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
    setFont,
    setFontSize,
    setFontColor,
    setBackground,
    setQuote,
    setAuthor,
    setAlignment,
    setAspectRatio,
    setShowAuthor,
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFontSize(16);
    }
  }, []);

  return (
    <div className="w-full">
      <div>
        <h2>
          Frame <span>it</span>
        </h2>
      </div>
      <div className="flex flex-col h-screen  md:flex-row w-full items-start">
        <div className="md:w-[60%] max-h-screen max-w-lg">
          <QuoteCard {...cardProps} />
          <button onClick={downloadCard}>Download as Image</button>
        </div>
        <div className="md:w-[40%]">
          <Controls {...controlProps} />
        </div>
      </div>
    </div>
  );
}
