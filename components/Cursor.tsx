"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const [isTouch, setIsTouch] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [hoverType, setHoverType] = useState<"link" | "image" | null>(null);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Approx lerp 0.08 with a framer motion spring
    const smoothX = useSpring(cursorX, { damping: 25, stiffness: 120, mass: 0.5 });
    const smoothY = useSpring(cursorY, { damping: 25, stiffness: 120, mass: 0.5 });

    useEffect(() => {
        setMounted(true);
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouch(true);
            return;
        } else {
            setIsTouch(false);
        }

        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target || !target.closest) return;

            const linkNode = target.closest('[data-cursor="link"]');
            const imageNode = target.closest('[data-cursor="image"]');

            if (linkNode) setHoverType("link");
            else if (imageNode) setHoverType("image");
            else setHoverType(null);
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!mounted || isTouch) return null;

    return (
        <>
            {/* CROSSHAIR */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: cursorX, y: cursorY }}
                animate={{ opacity: hoverType === "link" ? 0 : 1 }}
                transition={{ duration: 0 }}
            >
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-ink" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[20px] bg-ink" />
                </div>
            </motion.div>

            {/* OUTER SQUARE */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{ x: smoothX, y: smoothY }}
            >
                <motion.div
                    className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 border border-ink"
                    animate={{
                        width: hoverType === "link" ? 40 : 24,
                        height: hoverType === "link" ? 40 : 24,
                        opacity: hoverType === "image" ? 0 : hoverType === "link" ? 1 : 0.4,
                    }}
                    transition={{ duration: 0 }} /* Instant transition as requested for links */
                />
            </motion.div>
        </>
    );
}
