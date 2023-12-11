import React, { useRef } from "react";
import Cards from "./Cards";
import { motion } from "framer-motion";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is an audio file",
      filesize: ".3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Uploaded...", tagColor: "green" },
    },
    {
      desc: "This is a PDF",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Downloading Now...", tagColor: "green" },
    },
    {
      desc: "This is a MP4 file",
      filesize: ".6mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Error...", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Cards data={item} referme={ref} />
      ))}
    </div>
  );
}

export default Foreground;
