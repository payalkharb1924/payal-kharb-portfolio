// "use client";

// import { motion } from "framer-motion";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => ({
//     pathLength: 1,
//     opacity: 1,
//     transition: {
//       pathLength: {
//         delay: i * 0.5,
//         type: "spring",
//         duration: 2,
//         bounce: 0,
//       },
//       opacity: { delay: i * 0.5, duration: 0.1 },
//     },
//   }),
// };

// export default function SignatureName() {
//   return (
//     <motion.svg
//       viewBox="0 0 1024 1024"
//       width="300"
//       height="120"
//       initial="hidden"
//       animate="visible"
//       style={{
//         margin: "auto",
//         display: "block",
//         transform: "rotate(180deg)",
//       }}
//     >
//       {/* P */}
//       <motion.path
//         d="M928,992.372C928,992.372,96,992.372,96,992.372C42.976,992.372,0,949.428,0,896.372C0,896.372,0,256.372,0,256.372C0,203.444,42.816,160.564,95.68,160.436C95.68,160.436,416,160.436,416,160.436C416,160.436,416,121.492,416,121.492C416,121.492,216.256,95.54,216.256,95.54C201.984,91.988,192,79.188,192,64.5C192,46.804,206.304,32.5,224,32.5C224,32.5,800,32.5,800,32.5C817.696,32.5,832,46.804,832,64.5C832,79.188,822.016,91.988,807.744,95.572C807.744,95.572,608,121.492,608,121.492C608,121.492,608,160.436,608,160.436C608,160.436,928.32,160.436,928.32,160.436C981.184,160.564,1024,203.444,1024,256.372C1024,256.372,1024,896.372,1024,896.372C1024,949.428,980.992,992.372,928,992.372Z"
//         stroke="#ff0088"
//         strokeWidth={10}
//         strokeLinecap="round"
//         fill="transparent"
//         custom={1}
//         variants={draw}
//       />
//       {/* K */}
//       <motion.path
//         d="M864,864.5C864,864.5,160,864.372,160,864.372C142.304,864.372,128,850.196,128,832.5C128,832.5,128,384.5,128,384.5C128,366.804,142.304,352.5,160,352.5C160,352.5,864,352.5,864,352.5C881.696,352.5,896,366.804,896,384.5C896,384.5,896,832.5,896,832.5C896,850.196,881.696,864.5,864,864.5Z"
//         stroke="#0d63f8"
//         strokeWidth={10}
//         strokeLinecap="round"
//         fill="transparent"
//         custom={2}
//         variants={draw}
//       />
//     </motion.svg>
//   );
// }
// *******************************************************************************************8

// ############################################################################################################

"use client";

import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function SignatureName() {
  return (
    <motion.svg
      width="400"
      height="200"
      viewBox="0 0 400 200"
      initial="hidden"
      animate="visible"
      style={svgStyle}
    >
      {/* Stylish "P" Path */}
      <motion.path
        d="M50,150 L50,30 C50,15 65,10 90,10 C115,10 130,25 130,50 C130,75 115,90 90,90 L50,90"
        stroke="#ff0088"
        custom={1}
        variants={draw}
        style={pathStyle}
      />

      {/* Stylish "K" Path */}
      <motion.path
        d="M200,30 L200,150 M200,90 L260,30 M200,90 L260,150"
        stroke="#0d63f8"
        custom={2}
        variants={draw}
        style={pathStyle}
      />
    </motion.svg>
  );
}

const svgStyle = {
  maxWidth: "100%",
  margin: "0 auto",
  display: "block",
};

const pathStyle = {
  strokeWidth: 12, // thicker stroke
  strokeLinecap: "round",
  fill: "transparent",
};
