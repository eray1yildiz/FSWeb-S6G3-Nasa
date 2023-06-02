import React from "react";

const Image = props => {
  const { dataUrl } = props;
  return (
    <div>
      <img src={dataUrl} alt="img" />
    </div>
  );
};

export default Image;
