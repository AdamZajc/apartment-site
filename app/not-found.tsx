"use client";
import { motion } from "framer-motion";
import notfound from "@/assets/404.png";
import Image from "next/image";
import { data } from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Page Not Found",
};

export default function NotFound() {
  return (
    <main className="h-screen flex justify-center items-center Rubik">
      <div className="w-[32rem]">
        <Image
          src={notfound}
          alt="404"
          className="h-56 sm:h-80 w-auto mx-auto"
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
          It looks like the route you're looking for doesn't exist
        </motion.h1>
        <div className="mt-4">
          <motion.button
            initial={{
              y: "10px",
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              type: "spring",
            }}
            className="px-6 py-2 rounded-lg text-white"
            style={{ background: data.colors.primary }}
            onClick={() => window.history.back()}
          >
            Go Back
          </motion.button>
          <motion.button
            initial={{
              y: "10px",
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              delay: 0.1,
            }}
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
