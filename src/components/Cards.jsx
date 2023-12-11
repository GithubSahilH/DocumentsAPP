import React from "react";
import { FaRegFile } from "react-icons/fa";
import { TiDownloadOutline } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Cards({ data, referme }) {
  return (
    <motion.div
      drag
      dragConstraints={referme}
      whileDrag={{ scale: 2 }}
      className=" flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-zinc-100 px-5 py-10 overflow-hidden"
    >
      <FaRegFile />
      <p className="  text-sm mt-5 leading-tight font-semibold ">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full   left-0 ">
        <div className=" mb-3  py-3  px-8 flex items-center justify-between ">
          <h5>{data.filesize}</h5>

          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosCloseCircle />
            ) : (
              <TiDownloadOutline size=".9em" color="#ff7" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-green-500 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold  ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;
