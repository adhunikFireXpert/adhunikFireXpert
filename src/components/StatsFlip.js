import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Props:
 *  - end: number (target)
 *  - suffix: string (e.g. "+")
 *  - label: string (text under the number)
 *  - duration: number (seconds, how long to count)
 */
function FlipCounter({ end = 0, suffix = "", label = "", duration = 1500 }) {
  const [value, setValue] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    // animate from 0 to end over duration ms
    const start = performance.now();
    startRef.current = start;
    const from = 0;
    const to = end;
    const total = Math.max(1, duration);

    function tick(now) {
      const t = Math.min(1, (now - start) / total);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.floor(from + (to - from) * eased);

      // if value changed, trigger flip
      setValue((prev) => {
        if (prev !== current) {
          setIsFlipping(true);
          // remove flip class after animation time (match CSS .digit-flip 450ms)
          window.setTimeout(() => setIsFlipping(false), 450);
        }
        return current;
      });

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
        // ensure final value
        setValue(to);
        setIsFlipping(true);
        window.setTimeout(() => setIsFlipping(false), 450);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, duration]);

  return (
    <div className="flex flex-col  items-center">
      <div
        className={`inline-block text-2xl md:text-4xl font-extrabold tracking-tight tabular-nums`}
        aria-hidden
      >
        <span
          className={`inline-block text-red-500 transform-gpu will-change-transform ${
            isFlipping ? "digit-flip" : "digit-static"
          }`}
        >
          {value}
        </span>
        <span className="ml-1 text-red-500 text-2xl md:text-4xl font-extrabold">
          {suffix}
        </span>
      </div>

      <div className="mt-3 text-center max-w-xs">
        <p className="text-[8px]  md:text-sm ">{label}</p>
      </div>
    </div>
  );
}

export default function StatsFlip() {
  return (
    <section className=" ">
      <div className="max-w-6xl mx-auto px-4">
        

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-3 gap-8 items-center"
        >
          <div className=" rounded-2xl  flex flex-col items-center">
            <FlipCounter
              end={19}
              suffix="+"
              duration={1400}
              label="Years of Proven Engineering Legacy"
            />
          </div>

          <div className=" rounded-2xl  md:p-6 flex flex-col items-center">
            <FlipCounter
              end={600}
              suffix="+"
              duration={1600}
              label="Integrated Projects Delivered"
            />
          </div>

          <div className=" rounded-2xl md:p-6 flex flex-col items-center">
            <FlipCounter
              end={100}
              suffix="%"
              duration={1300}
              label="Compliant with NBC Standards"
            />
          </div>
        </motion.div>
      </div>

      {/* Inline styles for the flip animation */}
      <style jsx>{`
        .tabular-nums {
          font-variant-numeric: tabular-nums;
        }

        /* static: small subtle scale to keep layout stable */
        .digit-static {
          transition: transform 220ms ease;
          transform-origin: 50% 50%;
        }

        /* flip animation - quick rotateX with perspective for 3D feel */
        .digit-flip {
          animation: digitFlip 420ms ease forwards;
          transform-origin: 50% 50%;
        }

        @keyframes digitFlip {
          0% {
            transform: perspective(600px) rotateX(0deg) translateY(0);
            filter: brightness(1);
          }
          35% {
            transform: perspective(600px) rotateX(-70deg) translateY(-6%);
            filter: brightness(0.9);
          }
          70% {
            transform: perspective(600px) rotateX(20deg) translateY(2%);
            filter: brightness(1.02);
          }
          100% {
            transform: perspective(600px) rotateX(0deg) translateY(0);
            filter: brightness(1);
          }
        }

        /* small responsive tweaks */
        @media (min-width: 768px) {
          .digit-flip {
            animation-duration: 480ms;
          }
        }
      `}</style>
    </section>
  );
}
