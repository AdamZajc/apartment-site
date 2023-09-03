import { data } from "../data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

interface INavItem {
  text: string;
  href: string;
  active: string;
  index: number;
}

function NavItem({ text, href, active, index }: INavItem) {
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
      style={{ color: active === text ? data.colors.primary : "black" }}
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
  const [opened, setOpened] = useState<boolean>(false);

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
        setScrolled(true);
        return setActive("Overview");
      case "/rooms":
        setScrolled(true);
        return setActive("Rooms");
      case "/neighborhood":
        return setActive("Neighborhood");
      case "/attractions":
        return setActive("Attractions");
      default:
        setScrolled(false);
    }
  }

  function handleScroll() {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
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
        mobile ? "left-4 right-4 px-8" : "left-12 right-12 px-12"
      } ${
        scrolled ? "bg-white shadow" : ""
      } py-2.5 flex items-center rounded-lg z-50`}
    >
      <h1
        className="text-2xl font-semibold"
        style={{ color: data.colors.primary }}
      >
        {data.appName}
      </h1>
      {mobile ? (
        <>
          <motion.button
            className="text-3xl ml-auto mr-0"
            onClick={() => setOpened(true)}
          >
            <RiMenu3Line />
          </motion.button>
          <ul
            className={`h-screen w-80 bg-red-600 fixed top-0 ${
              opened ? "right-0" : "-right-96"
            } bottom-0`}
          >
            <motion.button
              className="m-6 text-3xl"
              onClick={() => setOpened(false)}
            >
              <MdOutlineClose />
            </motion.button>
          </ul>
        </>
      ) : (
        <ul className="flex gap-10 uppercase ml-auto mr-0">
          {data.navbar.links.map(
            (link: { text: string; href: string }, index: number) => {
              return (
                <NavItem
                  text={link.text}
                  href={link.href}
                  active={active}
                  key={index}
                  index={index}
                />
              );
            }
          )}
        </ul>
      )}
    </nav>
  );
}
