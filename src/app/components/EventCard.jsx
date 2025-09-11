"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function EventCard({
  image,
  event_name,
  event_desc,
  tags = [],
  brochureLink,
}) {
  const route = useRouter();
  const Tag = ({ tag }) => {
    return (
      <div className="bg-green-700/20 hover:bg-green-800/20 px-3 py-1 rounded-xl text-green-500 border-[1px] border-green-800 md:text-sm text-xs transition-colors duration-100 text-nowrap">
        {tag}
      </div>
    );
  };

  return (
    <div className="flex flex-col rounded-lg hover:shadow-[0px_0px_18px_-7px_#00db51] md:h-[70vh] md:w-[50vh] p-3 m-4 border border-green-500 group">
      <img
        src={image}
        alt={event_name}
        className="w-full h-1/2 rounded-lg mb-4 object-cover"
      />
      <h1 className="group-hover:text-[#02fd07] text-neutral-50 text-2xl font-bold mb-2">
        {event_name}
      </h1>
      <div className="flex mb-2 gap-2 flex-wrap">
        {tags.map((ele) => (
          <Tag key={ele.key} tag={ele.value} />
        ))}
      </div>
      <p className="text-neutral-400 text-sm flex-grow overflow-hidden text-ellipsis w-full">
        {event_desc}
      </p>
      <motion.button
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.05,
        }}
        onTap={{
          scale: 0.95,
        }}
        className="mt-3 mb-1 rounded-lg bg-[#02fd07] px-3 text-lg font-bold py-2"
        onClick={() => route.push(brochureLink)}
      >
        View Brochure
      </motion.button>
    </div>
  );
}

export default EventCard;
