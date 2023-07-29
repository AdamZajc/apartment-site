"use client";
import { motion } from "framer-motion";
import error from "@/assets/error.png";
import Image from "next/image";
import { data } from "@/data";

export default function Error() {
  return (
    <main className="h-screen flex justify-center items-center Rubik">
      <div className="w-[28rem] sm:w-[34rem] mx-4">
        <Image
          src={error}
          alt="error"
          className="h-64 sm:h-96 w-auto mx-auto"
        />
        <motion.h1
          initial={{
            y: "10px",
            opacity: 0,
          }}
          animate={{
            y: "0px",
            opacity: 1,
          }}
          className="text-3xl uppercase font-bold text-center"
        >
          It looks like an error has occured while loading the page
        </motion.h1>
        <div className="mt-4">
          <motion.button
            className="px-6 py-2 rounded-lg text-white"
            style={{ background: data.colors.primary }}
          >
            To Overview
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg float-right"
            style={{
              border: "3px solid " + data.colors.primary,
              color: data.colors.primary,
            }}
            onClick={() => window.location.reload()}
          >
            Reload Page
          </motion.button>
        </div>
      </div>
    </main>
  );
}
