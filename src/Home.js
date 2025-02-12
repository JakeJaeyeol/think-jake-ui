import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex justify-between items-center transition-all duration-300 z-50 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <h1 className="text-xl font-bold">Think Jake</h1>
        <ul className="flex space-x-6 text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold"
        >
          Think Jake.
        </motion.h1>
        <p className="text-xl mt-4 opacity-80">Jake's Note</p>
      </section>
    </div>
  );
}
