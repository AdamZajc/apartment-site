"use client";
import { data } from "@/data";
import { CSSProperties, ReactNode } from "react";
import footerTitle from "@/assets/footerTitle.png";
import Image from "next/image";
import { motion } from "framer-motion";

const HeadingStyle: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 700,
  color: data.colors.secondary,
  marginBottom: "5px",
};

function TextAnimation(delay: number) {
  return {
    initial: { y: "10px", opacity: 0 },
    animate: { y: "0px", opacity: 1 },
    transition: { type: "spring", delay },
  };
}

function Section({
  title,
  children,
  delay,
}: {
  title: string;
  children: ReactNode;
  delay: number;
}) {
  return (
    <section>
      <motion.h1 {...TextAnimation(delay)} style={HeadingStyle}>
        {title}
      </motion.h1>
      {children}
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <svg
        viewBox="0 0 900 100"
        width="100%"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <path
          d="M0 32L21.5 30.8C43 29.7 86 27.3 128.8 27C171.7 26.7 214.3 28.3 257.2 30.5C300 32.7 343 35.3 385.8 33.8C428.7 32.3 471.3 26.7 514.2 25.2C557 23.7 600 26.3 642.8 30.7C685.7 35 728.3 41 771.2 40.5C814 40 857 33 878.5 29.5L900 26L900 101L878.5 101C857 101 814 101 771.2 101C728.3 101 685.7 101 642.8 101C600 101 557 101 514.2 101C471.3 101 428.7 101 385.8 101C343 101 300 101 257.2 101C214.3 101 171.7 101 128.8 101C86 101 43 101 21.5 101L0 101Z"
          fill="#cdf4dd"
        ></path>
        <path
          d="M0 36L21.5 36.8C43 37.7 86 39.3 128.8 41.7C171.7 44 214.3 47 257.2 50.2C300 53.3 343 56.7 385.8 54.3C428.7 52 471.3 44 514.2 40.2C557 36.3 600 36.7 642.8 38.3C685.7 40 728.3 43 771.2 44.5C814 46 857 46 878.5 46L900 46L900 101L878.5 101C857 101 814 101 771.2 101C728.3 101 685.7 101 642.8 101C600 101 557 101 514.2 101C471.3 101 428.7 101 385.8 101C343 101 300 101 257.2 101C214.3 101 171.7 101 128.8 101C86 101 43 101 21.5 101L0 101Z"
          fill="#aaddbf"
        ></path>
        <path
          d="M0 58L21.5 60.5C43 63 86 68 128.8 69C171.7 70 214.3 67 257.2 63.7C300 60.3 343 56.7 385.8 56.3C428.7 56 471.3 59 514.2 59.2C557 59.3 600 56.7 642.8 58.5C685.7 60.3 728.3 66.7 771.2 66.5C814 66.3 857 59.7 878.5 56.3L900 53L900 101L878.5 101C857 101 814 101 771.2 101C728.3 101 685.7 101 642.8 101C600 101 557 101 514.2 101C471.3 101 428.7 101 385.8 101C343 101 300 101 257.2 101C214.3 101 171.7 101 128.8 101C86 101 43 101 21.5 101L0 101Z"
          fill="#88c5a1"
        ></path>
        <path
          d="M0 73L21.5 75.7C43 78.3 86 83.7 128.8 85.7C171.7 87.7 214.3 86.3 257.2 84.8C300 83.3 343 81.7 385.8 80.2C428.7 78.7 471.3 77.3 514.2 76.2C557 75 600 74 642.8 74.8C685.7 75.7 728.3 78.3 771.2 78.3C814 78.3 857 75.7 878.5 74.3L900 73L900 101L878.5 101C857 101 814 101 771.2 101C728.3 101 685.7 101 642.8 101C600 101 557 101 514.2 101C471.3 101 428.7 101 385.8 101C343 101 300 101 257.2 101C214.3 101 171.7 101 128.8 101C86 101 43 101 21.5 101L0 101Z"
          fill="#65ae84"
        ></path>
      </svg>
      <div
        className="-mt-3.5 z-10 px-24 py-8"
        style={{ backgroundColor: data.colors.primary }}
      >
        <div className="grid grid-cols-4 gap-16 pb-12 text-white">
          <section>
            <motion.div {...TextAnimation(0)}>
              <Image src={footerTitle} alt="title" />
            </motion.div>
            <motion.p
              {...TextAnimation(0)}
              transition={{ type: "spring", delay: 0.5 }}
              className="text-justify text-sm mt-3"
            >
              {data.footer.text}
            </motion.p>
          </section>
          <Section title="Lorem Ipsum" delay={0}>
            <></>
          </Section>
          <Section title="Lorem Ipsum" delay={0.1}>
            <></>
          </Section>
          <Section title="Contact Us" delay={0.2}>
            <motion.p {...TextAnimation(0.5)} className="text-sm">
              <span className="text-base font-medium">
                {data.footer.contact.phone.substring(0, 3)}
              </span>
              {data.footer.contact.phone.substring(3)}
            </motion.p>
            <motion.p {...TextAnimation(0.6)} className="text-sm mt-1">
              {data.footer.contact.email}
            </motion.p>
          </Section>
        </div>
        <motion.p {...TextAnimation(0.5)} className="text-center text-white">
          Copyright &copy; 2023, AZStudio - All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
