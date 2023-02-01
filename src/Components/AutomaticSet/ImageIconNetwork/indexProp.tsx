import React from "react";

interface ImagePro {
  imageUrl:string
}

const ImageIcons: React.FC<ImagePro> = (props) => {
 
  const { imageUrl } = props;
  return (
    <div>
      <img src={imageUrl} alt="ImageLogo" />
    </div>
  );
};

export default ImageIcons;
