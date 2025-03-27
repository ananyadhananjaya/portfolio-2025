import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth animations using Spring
  const smoothX = useSpring(cursorX, { stiffness: 600, damping: 50 });
  const smoothY = useSpring(cursorY, { stiffness: 600, damping: 50 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-500 rounded-full pointer-events-none"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          opacity: 0.7,
        }}
      />
    </>
  );
}
