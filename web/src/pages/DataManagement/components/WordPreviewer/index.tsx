// import React, { useEffect, useRef } from "react";

// interface WordPreviewerProps {
//   fileUrl: string;
//   onError?: (error: Error) => void;
// }

const WordPreviewer = ({ fileUrl }) => {
  return (
    <iframe
      style={{ width: "100%", height: "100%", border: "none" }}
      src={`https://view.officeapps.live.com/op/view.aspx?src=` + fileUrl}
    ></iframe>
  );
};

export default WordPreviewer;