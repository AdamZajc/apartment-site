import { useEffect, useState } from "react";

// Image Imports
import b1 from "../assets/apartment/bedroom1.png";
import l1 from "../assets/apartment/livingroom1.png";
import l2 from "../assets/apartment/livingroom2.png";
import t1 from "../assets/apartment/terrace1.png";
import sp1 from "../assets/apartment/swimmingpool1.jpg";
import sp2 from "../assets/apartment/swimmingpool2.jpg";
import { data } from "../data";

export function Home() {
  const i1 = [b1, l1, t1];
  const i2 = [sp1, l2, sp2];

  const [src1, setSrc1] = useState(b1);
  const [src2, setSrc2] = useState(sp1);

  useEffect(() => {
    setInterval(() => {
      setSrc1(i1[i1.indexOf(src1) < i1.length - 1 ? i1.indexOf(src1) + 1 : 0]);
      setSrc2(i2[i2.indexOf(src2) < i2.length - 1 ? i2.indexOf(src2) + 1 : 0]);
    }, 5000);
  }, []);
  return (
    <main>
      <section className="flex justify-center items-center gap-24 h-screen">
        <div>
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
            >
              Attractions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
