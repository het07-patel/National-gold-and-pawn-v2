import Image from "next/image";
import React from "react";

const commonAltAttr =
  "National Gold and Pawn";
const commonTitleAttr =
  "National Gold and Pawn";

export default function CustomImage({
  altAttr = commonAltAttr,
  titleAttr = commonTitleAttr,
  srcAttr,
  width,
  height,
  className = "",
  ...rest
}) {
  return (
    <Image
      alt={altAttr || commonAltAttr}
      src={srcAttr}
      title={titleAttr || commonTitleAttr}
      width={width}
      height={height}
      className={className}
      {...rest}
    ></Image>
  );
}
