import { data } from "../data";
import { CSSProperties } from "react";
import footerTitle from "../assets/footerTitle.png";
import { motion } from "framer-motion";

const HeadingStyle: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: data.colors.accent2,
  marginBottom: "5px",
};

function Animation(delay: number) {
  return {
    initial: { y: "10px", opacity: 0 },
    animate: { y: "0px", opacity: 1 },
    transition: { type: "spring", delay },
  };
}

function Section({ title, children, delay }: any) {
  return (
    <section {...Animation(delay)}>
      <motion.h1 style={HeadingStyle}>{title}</motion.h1>
      <div style={{ color: "white" }}>{children}</div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <svg
        id="visual"
        viewBox="0 0 4000 400"
        width="4000"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="w-full h-auto"
      >
        <path
          d="M0 122L95.2 135.2C190.3 148.3 380.7 174.7 571.2 178.8C761.7 183 952.3 165 1142.8 159.7C1333.3 154.3 1523.7 161.7 1714.2 160C1904.7 158.3 2095.3 147.7 2285.8 149.2C2476.3 150.7 2666.7 164.3 2857.2 156C3047.7 147.7 3238.3 117.3 3428.8 99.3C3619.3 81.3 3809.7 75.7 3904.8 72.8L4000 70L4000 401L3904.8 401C3809.7 401 3619.3 401 3428.8 401C3238.3 401 3047.7 401 2857.2 401C2666.7 401 2476.3 401 2285.8 401C2095.3 401 1904.7 401 1714.2 401C1523.7 401 1333.3 401 1142.8 401C952.3 401 761.7 401 571.2 401C380.7 401 190.3 401 95.2 401L0 401Z"
          fill="#19d985"
        ></path>
        <path
          d="M0 240L95.2 228.8C190.3 217.7 380.7 195.3 571.2 195.8C761.7 196.3 952.3 219.7 1142.8 230.7C1333.3 241.7 1523.7 240.3 1714.2 229.8C1904.7 219.3 2095.3 199.7 2285.8 191.7C2476.3 183.7 2666.7 187.3 2857.2 185.2C3047.7 183 3238.3 175 3428.8 167.5C3619.3 160 3809.7 153 3904.8 149.5L4000 146L4000 401L3904.8 401C3809.7 401 3619.3 401 3428.8 401C3238.3 401 3047.7 401 2857.2 401C2666.7 401 2476.3 401 2285.8 401C2095.3 401 1904.7 401 1714.2 401C1523.7 401 1333.3 401 1142.8 401C952.3 401 761.7 401 571.2 401C380.7 401 190.3 401 95.2 401L0 401Z"
          fill="#04b779"
        ></path>
        <path
          d="M0 228L95.2 233.2C190.3 238.3 380.7 248.7 571.2 255.2C761.7 261.7 952.3 264.3 1142.8 256.5C1333.3 248.7 1523.7 230.3 1714.2 221C1904.7 211.7 2095.3 211.3 2285.8 216.7C2476.3 222 2666.7 233 2857.2 244C3047.7 255 3238.3 266 3428.8 273.8C3619.3 281.7 3809.7 286.3 3904.8 288.7L4000 291L4000 401L3904.8 401C3809.7 401 3619.3 401 3428.8 401C3238.3 401 3047.7 401 2857.2 401C2666.7 401 2476.3 401 2285.8 401C2095.3 401 1904.7 401 1714.2 401C1523.7 401 1333.3 401 1142.8 401C952.3 401 761.7 401 571.2 401C380.7 401 190.3 401 95.2 401L0 401Z"
          fill="#0a956b"
        ></path>
        <path
          d="M0 310L95.2 314C190.3 318 380.7 326 571.2 327.2C761.7 328.3 952.3 322.7 1142.8 321C1333.3 319.3 1523.7 321.7 1714.2 322.3C1904.7 323 2095.3 322 2285.8 325.5C2476.3 329 2666.7 337 2857.2 336.5C3047.7 336 3238.3 327 3428.8 328.3C3619.3 329.7 3809.7 341.3 3904.8 347.2L4000 353L4000 401L3904.8 401C3809.7 401 3619.3 401 3428.8 401C3238.3 401 3047.7 401 2857.2 401C2666.7 401 2476.3 401 2285.8 401C2095.3 401 1904.7 401 1714.2 401C1523.7 401 1333.3 401 1142.8 401C952.3 401 761.7 401 571.2 401C380.7 401 190.3 401 95.2 401L0 401Z"
          fill="#17755a"
        ></path>
      </svg>
      <div
        className="grid grid-cols-4 items-start gap-8 px-16 py-8"
        style={{ background: data.colors.primary }}
      >
        <Section>
          <img src={footerTitle} alt="logo" className="w-72 h-auto" />
        </Section>
        <Section title="Pages">
          <div className="grid grid-flow-row gap-1">
            {data.navbar.links.map((link) => {
              return (
                <a href={link.href} key={link.text}>
                  {link.text}
                </a>
              );
            })}
          </div>
        </Section>
        <Section title="Contact"></Section>
        <Section title="Contact">
          {data.footer.contact.phone}
          {data.footer.contact.email}
        </Section>
      </div>
    </footer>
  );
}
