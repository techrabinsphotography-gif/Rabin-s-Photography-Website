import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Cursor ring follows instantly
      cursor.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`;
    };

    // Dot trails smoothly behind
    const animateDot = () => {
      dotX += (mouseX - dotX) * 0.12;
      dotY += (mouseY - dotY) * 0.12;
      dot.style.transform = `translate(${dotX - 5}px, ${dotY - 5}px)`;
      animFrame = requestAnimationFrame(animateDot);
    };
    animFrame = requestAnimationFrame(animateDot);

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    // Add hover effect on interactive elements
    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, label").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };
    addListeners();

    // Observe DOM changes to catch dynamically added elements
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer ring - mix-blend-mode makes it invert automatically on white/dark bg */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform", mixBlendMode: "difference" }}
      >
        <div
          style={{
            width: isHovering ? "56px" : "40px",
            height: isHovering ? "56px" : "40px",
            borderRadius: "50%",
            border: `2px solid ${isHovering ? "#ff4f5a" : "white"}`,
            background: isHovering ? "rgba(255,79,90,0.3)" : "transparent",
            transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
            transform: isClicking ? "scale(0.8)" : "scale(1)",
          }}
        />
      </div>

      {/* Inner trailing dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ willChange: "transform", mixBlendMode: "difference" }}
      >
        <div
          style={{
            width: isClicking ? "14px" : "10px",
            height: isClicking ? "14px" : "10px",
            borderRadius: "50%",
            background: isHovering ? "#ff4f5a" : "white",
            transition: "width 0.15s ease, height 0.15s ease, background 0.2s ease",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
