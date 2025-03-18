'use client'
import { motion } from "framer-motion";

const DotPattern = ({classes}) => {
  return (
    <motion.div
      className={`absolute ${classes} z-0 pointer-events-none`}
      initial={{ opacity: 0.3, scale: 1 }}
      animate={{
        opacity: [0.3, 0.5, 0.3], // Subtle pulsing effect
        scale: [1, 1.02, 1], // Slight scaling for depth
        x: [0, -10, 0], // Small movement to the left
        y: [0, -10, 0], // Small movement upward
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <svg
        className="absolute top-0 w-full h-full opacity-50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 20 }).map((_, row) =>
          Array.from({ length: 13 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col *5}
              cy={row *5}
              r="0.8"
              fill="currentColor"
              className=" text-purple-950"
            />
          ))
        )}
      </svg>
    </motion.div>
  );
};

export default DotPattern;