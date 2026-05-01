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
}) {
  const ratioMap = {
    square: "1/1",
    portrait: "9/16",
    landscape: "16/9",
  };

  return (
    <div>
      <div
        className="w-full max-h-[80vh] "
        style={{
          background: background.type === "image" ? `url(${background.value})` : background.value,
          aspectRatio: ratioMap[aspectRatio],
          overflow: "hidden",
        }}
        ref={cardRef}>
        <div
          style={{
            fontFamily: font.fontFamily,
            textAlign: alignment,
            fontSize: fontSize,
            color: fontColor.hex,
          }}>
          <p>{quote}</p>
          {showAuthor && <p>{author}</p>}
        </div>
      </div>
    </div>
  );
}
