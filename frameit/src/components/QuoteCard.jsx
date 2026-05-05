export default function QuoteCard({
  font,
  fontSize,
  background,
  fontColor,
  quote,
  author,
  alignment,
  aspectRatio,
  showAuthor,
  cardRef,
  textPosition,
}) {
  const ratioMap = {
    square: "1/1",
    portrait: "9/16",
    landscape: "16/9",
  };

  const positionMap = {
    center: "center",
    top: "flex-start",
    bottom: "flex-end",
  };

  const alignMap = {
    center: "center",
    left: "flex-start",
    right: "flex-end",
  };

  return (
    <div>
      <div
        className="md:w-[60%] max-w-lg max-h-[85vh] overflow-hidden"
        style={{
          background: background.type === "image" ? `url(${background.value})` : background.value,
          aspectRatio: ratioMap[aspectRatio],
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: alignMap[alignment],
          justifyContent: positionMap[textPosition],
          padding: "15px",
        }}
        ref={cardRef}>
        <div
          style={{
            fontFamily: font.fontFamily,
            textAlign: alignment,
            fontSize: fontSize,
            color: fontColor.hex,
          }}>
          <p className="leading-none">"{quote}"</p>
          {showAuthor && <p>-{author}</p>}
        </div>
      </div>
    </div>
  );
}
