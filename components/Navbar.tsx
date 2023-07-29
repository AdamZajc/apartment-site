"use client";
import { data } from "@/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

function NavItem({ text, href, active, index }: any) {
  const host = process.env.HOST_URL;

  return (
    <motion.li
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
        delay: index / 10,
      }}
      className="relative group"
      style={{ color: active === text ? data.colors.primary : "#000" }}
      whileHover={{ color: data.colors.primary }}
    >
      <a href={href}>{text}</a>
      <span
        style={{ backgroundColor: data.colors.primary }}
        className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full"
      ></span>
    </motion.li>
  );
}

export default function Navbar() {
  const [mobile, setMobile] = useState<boolean>();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState<boolean>();

  function handleResize() {
    if (window.innerWidth >= 1024) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }

  function handleUrl() {
    switch (window.location.pathname) {
      case "/":
        return setActive("Overview");
      case "/rooms":
        return setActive("Rooms");
      case "/neighborhood":
        return setActive("Neighborhood");
      case "/attractions":
        return setActive("Attractions");
    }
  }

  function handleScroll() {
    if (window.location.pathname === "/") {
      return setScrolled(true);
    }

    if (window.scrollY >= 400) {
      return setScrolled(true);
    }

    return setScrolled(false);
  }

  useEffect(() => {
    handleResize();
    handleUrl();
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("popstate", handleUrl, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handleUrl);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed top-5 ${
        mobile ? "left-4 right-4 px-4" : "left-12 right-12 px-12"
      } ${
        scrolled ? "bg-white shadow-lg" : ""
      } py-2.5 flex items-center rounded-lg z-50`}
    >
      <h1
        className="uppercase text-2xl font-semibold"
        style={{ color: data.colors.primary }}
      >
        {data.appName}
      </h1>
      {mobile ? (
        <>
          <RiMenu3Line className="text-3xl ml-auto mr-0" />
          <ul></ul>
        </>
      ) : (
        <ul className="flex gap-10 uppercase ml-auto mr-0">
          {data.navbar.links.map((link: any, index: number) => {
            return (
              <NavItem
                text={link.text}
                href={link.href}
                active={active}
                key={index}
                index={index}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
}
