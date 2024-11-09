const Heading = (props) => {
  const {
    text,
    fontWeight,
    color,
    fontSize,
    style,
    className,
    lineHeight,
    showLine,
  } = props;

  // const blogTextContainer = {
  //   minHeight: "44px",
  //   overflow: "hidden",
  //   lineHeight: " 1rem",
  //   textOverflow: "ellipsis",
  //   display: "-webkit-box",
  //   WebkitBoxOrient: " vertical",
  //   WebkitLineClamp: "5",
  //   maxHeight: "calc(4 * 1.25em)",
  //   margin: "0.25rem",
  // };

  const fontStyle = {
    fontSize: fontSize ? fontSize : "2.5rem",
    color: `${color}`,
    fontWeight: fontWeight,
    // maxHeight: "calc(2 * 1.25em)",
    lineHeight: lineHeight ? `${lineHeight}` : "1.2",
    maxHeight:
      lineHeight && showLine
        ? `calc(${lineHeight} * ${showLine})`
        : "calc(2 * 1.25em)",

    overflow: "hidden",
    ...style,
  };

  return (
    <div className={className} style={fontStyle}>
      {text}
    </div>
  );
};

export default Heading;
