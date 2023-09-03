import { useEffect, useState } from "react";
import { data } from "../data";
import { Map, SVGWaves } from "../components";

// Icons
import { FaMapMarkerAlt } from "react-icons/fa";

export function Home() {
  const i1 = [
    ...data.photos.beedroom,
    ...data.photos.livingroom,
    ...data.photos.kitchen,
  ];
  const i2 = [
    ...data.photos.swimming_pool,
    ...data.photos.terrace,
    ...data.photos.bathroom,
  ];

  const [src1, setSrc1] = useState(i1[0]);
  const [src2, setSrc2] = useState(i2[0]);

  const [deviceSize, setDeviceSize] = useState<
    "x-small" | "small" | "medium" | "large"
  >();

  function handleResize() {
    if (window.innerWidth >= 1024) {
      setDeviceSize("large");
    } else if (window.innerHeight <= 1023 && window.innerHeight >= 768) {
      setDeviceSize("medium");
    } else if (window.innerWidth <= 767 && window.innerHeight >= 426) {
      setDeviceSize("small");
    } else if (window.innerWidth < 426) {
      setDeviceSize("x-small");
    }
  }

  function getTransform() {
    if (deviceSize === "small") {
      return "scale(0.75)";
    } else if (deviceSize === "x-small") {
      return "scale(0.8)";
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setSrc1((s) => i1[i1.indexOf(s) < i1.length - 1 ? i1.indexOf(s) + 1 : 0]);
      setSrc2((s) => i2[i2.indexOf(s) < i2.length - 1 ? i2.indexOf(s) + 1 : 0]);
    }, 5000);

    // Event Listeners
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <main>
      <section className="grid grid-flow-row mb-48 lg:mb-0 lg:flex justify-center items-center place-items-center gap-24 h-screen">
        <div
          style={{
            transform: getTransform() || "",
          }}
        >
          <img
            src={src1}
            alt="view"
            className="w-96 h-72 rotate-12 border-8"
            style={{ borderColor: data.colors.accent2 }}
          />
          <img
            src={src2}
            alt="view"
            className="w-96 h-72 -rotate-6 z-10 -mt-16 ml-36 border-8"
            style={{ borderColor: data.colors.accent2 }}
          />
        </div>
        <div className="grid grid-flow-row gap-3">
          <h1 className="text-4xl font-black Rubik">ReCasa Vacational</h1>
          <p className="w-96 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at lorem
            ac nibh sagittis egestas quis varius leo. In sodales quam ligula,
            nec tincidunt lacus pulvinar at.
          </p>
          <div className="flex gap-6 Rubik">
            <button
              className="px-8 py-2 rounded-lg uppercase text-white font-semibold"
              style={{ background: data.colors.accent2 }}
            >
              Our Offer
            </button>
            <button
              className="uppercase font-semibold px-8 py-2 rounded-lg border-[3px]"
              style={{ borderColor: data.colors.accent2 }}
              onClick={() => window.location.replace("/gallery")}
            >
              Photo Gallery
            </button>
          </div>
        </div>
      </section>
      <section>
        <SVGWaves />
        <div
          className="px-32 py-8"
          style={{ backgroundColor: data.colors.primary }}
        >
          <h1 className="text-white Rubik text-center text-5xl mb-5 font-bold">
            Our offer includes
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.included.map((item: any, index: number) => {
              return (
                <div
                  className="px-8 py-3 bg-white rounded-lg flex items-center justify-center gap-4 text-lg"
                  key={index}
                >
                  <div style={{ color: data.colors.accent2, fontSize: "2rem" }}>
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
        <SVGWaves rotated />
      </section>
      <Map />
      <section>
        <SVGWaves />
        <div
          className="px-56 py-8"
          style={{ backgroundColor: data.colors.primary }}
        >
          <h1 className="text-white Rubik text-center text-5xl mb-5 font-bold">
            How to get there?
          </h1>
          <div className="grid grid-cols-3 gap-12">
            {data.transport.map((t: any, index: number) => {
              return (
                <div
                  style={{
                    backgroundColor:
                      index % 2 === 0 ? "white" : data.colors.accent2,
                    color: index % 2 === 0 ? "" : "white",
                  }}
                  className="px-8 py-6 rounded-xl text-sm"
                >
                  <div className="flex">
                    <h1 className="flex items-center gap-1.5 text-4xl font-bold">
                      {t.icon}
                      {t.line ? t.line : ""}
                    </h1>
                    <div className="ml-auto mr-0 text-sm">
                      {t.from ? (
                        <p className="flex gap-2">
                          <div className="text-xs">from</div> {t.from}
                        </p>
                      ) : (
                        ""
                      )}

                      <p className="flex gap-2">
                        <div className="text-xs">to</div> {t.to}
                      </p>
                    </div>
                  </div>
                  <p className="my-4 h-40">{t.instructions}</p>
                  <p className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-lg" />
                    {t.method === "car"
                      ? "Start navigation "
                      : "Check the timetable "}
                    <a
                      href={t.website}
                      style={{ color: data.colors.primary }}
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <SVGWaves rotated />
      </section>
    </main>
  );
}
