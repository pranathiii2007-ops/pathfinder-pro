import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Rocket, Sparkles } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => onComplete(), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center gradient-primary"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center text-primary-foreground">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <GraduationCap className="w-24 h-24" />
              {phase >= 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-8 h-8 text-warning" />
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            CareerPath India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl opacity-90 mb-8"
          >
            Your Journey to Success Starts Here
          </motion.p>

          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex items-center justify-center gap-2"
            >
              <Rocket className="w-6 h-6 animate-bounce-subtle" />
              <span className="text-lg">Let's Begin!</span>
            </motion.div>
          )}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 10,
              }}
              animate={{
                y: -10,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}