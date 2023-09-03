import { data } from "../data";

export function Neighborhood() {
  return (
    <main>
      <div
        className="w-full h-[40rem] grid place-items-center"
        style={{
          background: `url("${data.photos.building[1]}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="uppercase text-white font-black text-9xl tracking-widest">
          Neighborhood
        </h1>
      </div>
      <p>Complex consists of many buildings</p>
    </main>
  );
}
