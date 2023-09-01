import { motion } from "framer-motion";
import notfound from "../assets/404.png";
import { data } from "../data";

function Animation(delay: number) {
  return {
    initial: { y: "10px", opacity: 0 },
    animate: { y: "0px", opacity: 1 },
    transition: { type: "spring", delay },
  };
}

export function NotFound() {
  return (
    <main className="h-screen flex justify-center items-center Rubik">
      <div className="w-[32rem]">
        <motion.div {...Animation(0)}>
          <img
            src={notfound}
            alt="404"
            className="h-56 sm:h-80 w-auto mx-auto"
          />
        </motion.div>

        <motion.h1
          {...Animation(0.1)}
          className="text-3xl uppercase font-bold text-center"
        >
          It looks like the route you're looking for doesn't exist
        </motion.h1>
        <motion.div {...Animation(0.2)} className="mt-4">
          <button
            className="px-6 py-2 rounded-lg text-white"
            style={{ background: data.colors.primary }}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
          <button
            className="px-6 py-2 rounded-lg float-right"
            style={{
              border: "3px solid " + data.colors.primary,
              color: data.colors.primary,
            }}
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </motion.div>
      </div>
    </main>
  );
}
