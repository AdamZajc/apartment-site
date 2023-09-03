import { data } from "../data";
import { CSSProperties } from "react";
import footerTitle from "../assets/footerTitle.png";
import { motion } from "framer-motion";
import { SVGWaves } from ".";

const HeadingStyle: CSSProperties = {
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: data.colors.accent2,
  marginBottom: "5px",
};

function Animation(delay: number | undefined) {
  return {
    initial: { y: "10px", opacity: 0 },
    animate: { y: "0px", opacity: 1 },
    transition: { type: "spring", delay },
  };
}

interface ISection {
  title?: string;
  children?: React.ReactNode;
  delay?: number;
}

function Section({ title, children, delay }: ISection) {
  return (
    <motion.section {...Animation(delay)}>
      <h1 style={HeadingStyle}>{title}</h1>
      <div style={{ color: "white" }}>{children}</div>
    </motion.section>
  );
}

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <SVGWaves />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8 px-16 py-8"
        style={{ background: data.colors.primary }}
      >
        <Section>
          <img src={footerTitle} alt="logo" className="w-72 h-auto" />
        </Section>
        <Section title="Pages" delay={0.1}>
          <div className="grid grid-flow-row gap-1">
            {data.navbar.links.map((link) => {
              return (
                <a href={link.href} key={link.text}>
                  {link.text}
                </a>
              );
            })}
            <a href="/gallery">Gallery</a>
          </div>
        </Section>
        <Section title="Contact" delay={0.2}></Section>
        <Section title="Contact" delay={0.3}>
          {data.footer.contact.phone}
          {data.footer.contact.email}
        </Section>
      </div>
    </footer>
  );
}
