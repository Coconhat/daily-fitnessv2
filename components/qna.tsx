"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

const tabs = [
  {
    title: "Why do you charge an hourly fee in addition to membership?",
    description:
      "Our dual pricing model ensures that members only pay for the time they actually use the gym, making it more cost-effective for everyone. This allows us to maintain top-quality equipment and facilities while keeping membership fees affordable.",
  },
  {
    title: "How do I prove I'm a student to get the discounted rate?",
    description:
      "Simply bring a valid student ID card with you when you sign up.",
  },
  {
    title: "Is there a maximum time limit per visit?",
    description:
      "No, you can stay as long as you like during our operating hours. The hourly fee will be calculated based on your total time at the gym.",
  },
];
function QNA() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeItem, setActiveItem] = useState<
    | {
        title: string;
        description: string;
      }
    | undefined
  >(tabs[0]);

  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="container mx-auto pb-10 pt-2">
        <div className="h-fit border  rounded-lg p-2 dark:bg-[#111111] bg-[#F2F2F2]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? "border-b" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                className={`p-3 px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all font-semibold dark:text-white text-black   flex gap-2 
               `}
              >
                <Plus
                  className={`${
                    activeIndex === index ? "rotate-45" : "rotate-0 "
                  } transition-transform ease-in-out w-5 h-5  dark:text-gray-200 text-gray-600`}
                />
                {tab.title}
              </button>
              <AnimatePresence mode="sync">
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.14,
                    }}
                  >
                    <p
                      className={`dark:text-white text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QNA;
