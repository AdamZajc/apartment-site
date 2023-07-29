"use client";
import { data } from "@/data";
import { motion } from "framer-motion";
import type { Metadata } from "next";
import Image from "next/image";
import terrace from "@/assets/apartment/terrace.png";

export const metadata: Metadata = {
  title: data.appName,
};

function Feature({ text, icon, index }: any) {
  return (
    <motion.div
      initial={{ y: "10px", opacity: 0 }}
      animate={{ y: "0px", opacity: 1 }}
      transition={{ type: "spring", delay: index / 10 }}
      className="flex gap-3 px-8 py-3 items-center justify-center bg-gray-100 text-xl rounded-xl mx-4"
    >
      <div className="text-4xl">{icon}</div>
      {text}
    </motion.div>
  );
}

export default function Page() {
  return (
    <main>
      <Image src={terrace} alt="image" />
      <section className="px-6 md:px-12 lg:px-24 py-8 text-center">
        <h1 className="uppercase text-4xl font-black pb-8">
          Our offer includes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.included.map((feature: any, index: number) => {
            return (
              <Feature
                text={feature.text}
                icon={feature.icon}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
