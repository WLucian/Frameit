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
    <div
      className="w-full"
      style={{
        background:
          background.type === "image"
            ? `url(${background.value}) center/cover no-repeat`
            : background.value,
        aspectRatio: ratioMap[aspectRatio],
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: alignMap[alignment],
        justifyContent: positionMap[textPosition],
        padding: "22px",
      }}
      ref={cardRef}>
      <div
        style={{
          fontFamily: font.fontFamily,
          textAlign: alignment,
          fontSize: fontSize,
          color: fontColor.hex,
          lineHeight: 1.3,
        }}>
        <p>"{quote}"</p>
        {showAuthor && <p className="mt-2" style={{ fontSize: "0.6em", opacity: 0.8 }}>— {author}</p>}
      </div>
    </div>
  );
}
