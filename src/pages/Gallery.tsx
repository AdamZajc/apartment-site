import { useEffect, useState } from "react";
import { data } from "../data";

function GalleryImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="photo"
      style={{
        border: `8px solid ${data.colors.secondary}`,
        marginBottom: "1rem",
      }}
    />
  );
}

export function Gallery() {
  const imports = data.photos;
  const photos: string[] = [
    ...imports.bathroom,
    ...imports.beedroom,
    ...imports.livingroom,
    ...imports.swimming_pool,
    ...imports.terrace,
    ...imports.kitchen,
  ].sort((a, b) => 0.5 - Math.random());

  const [deviceSize, setDeviceSize] = useState<
    "x-small" | "small" | "medium" | "large"
  >();
  const [chunkSize, setChunkSize] = useState<number>(1);

  function handleResize() {
    if (window.innerWidth >= 1024) {
      setDeviceSize("large");
      setChunkSize(Math.round(photos.length / 4));
    } else if (window.innerHeight <= 1023 && window.innerHeight >= 768) {
      setDeviceSize("medium");
      setChunkSize(Math.round(photos.length / 2));
    } else if (window.innerWidth <= 767 && window.innerHeight >= 426) {
      setDeviceSize("small");
      setChunkSize(Math.round(photos.length / 2));
    } else if (window.innerWidth < 426) {
      setDeviceSize("x-small");
      setChunkSize(photos.length);
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  });

  const chunks = [];
  for (let i = 0; i < photos.length; i += chunkSize) {
    chunks.push(photos.slice(i, i + chunkSize));
  }

  console.log(chunks);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 sm:px-12 md:px-24 xl:px-36">
      {chunks.map((chunk: string[], index: number) => {
        return (
          <div
            className={
              index === 0
                ? "mt-12"
                : index === 2
                ? "mt-20"
                : index === 3
                ? "mt-8"
                : ""
            }
            key={index}
          >
            {chunk.map((src: string, index: number) => {
              return <GalleryImage src={src} key={100 * index + index} />;
            })}
          </div>
        );
      })}
    </main>
  );
}
