import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function BraceletBrosSite() {
  const [cart, setCart] = useState<string[]>([]);
  const [openCart, setOpenCart] = useState(false);

  // popup states
  const [showAbout, setShowAbout] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState<any>(null);
  const [selectedBead, setSelectedBead] = useState<string>("white");

  const addToCart = (item: string) => setCart([...cart, item]);
  const removeFromCart = (i: number) => setCart(cart.filter((_, idx) => idx !== i));

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur z-50 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-widest">BRACELET BROS</h1>

        <div className="flex items-center gap-6">
          <button onClick={() => setShowAbout(true)} className="text-sm hover:text-gray-300">About</button>
          <button onClick={() => setShowDesign(true)} className="text-sm hover:text-gray-300">Design</button>

          <button onClick={() => setOpenCart(!openCart)} className="relative">
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-black text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="relative h-screen flex items-center justify-center">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-500 rounded-full blur-[200px] opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-wider bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Bracelet Bros
          </h1>
          <p className="mt-4 text-gray-400">Faith • Style • Brotherhood</p>
        </motion.div>
      </div>

      {/* ABOUT + DESIGN PREVIEW SECTIONS */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <motion.div whileHover={{ scale: 1.05 }} onClick={() => setShowAbout(true)} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 cursor-pointer">
          <h2 className="text-3xl mb-3">About Us</h2>
          <p className="text-gray-400">Started as a school business, Bracelet Bros quickly turned into something bigger, a way to combine faith and creativity.</p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} onClick={() => setShowDesign(true)} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 cursor-pointer">
          <h2 className="text-3xl mb-3">Design</h2>
          <p className="text-gray-400">Different colors, sizes, and styles, designed so everyone can wear something that fits both their wrist and their faith.</p>
        </motion.div>
      </div>

      {/* SHOP */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-center mb-16">Shop</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {[
            { name: "Sky Faith", glow: "#9ca3af" },
            { name: "Pure Contrast", glow: "#ffffff" },
            { name: "Royal Glow", glow: "#c084fc" },
            { name: "Midnight Faith", glow: "#a855f7" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }} className="relative cursor-pointer" onClick={() => setSelectedDesign(item)}>

              <motion.div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: item.glow }} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />

              <Card className="relative bg-gray-950 border border-gray-800 rounded-3xl overflow-hidden">
                <div className="h-56 flex items-center justify-center">
                  <svg viewBox="0 0 120 100" width="140">
                    {item.name === "Sky Faith" && (
                      [30, 70].map((x, idx) => (
                        <g key={idx}>
                          <rect x={x} y="10" width="8" height="70" fill="#bfc5cc" />
                          <rect x={x - 15} y="35" width="38" height="8" fill="#bfc5cc" />
                        </g>
                      ))
                    )}

                    {item.name === "Pure Contrast" && (
                      <>
                        <g>
                          <rect x="30" y="10" width="8" height="70" fill="white" />
                          <rect x="15" y="35" width="38" height="8" fill="white" />
                        </g>
                        <g>
                          <rect x="70" y="10" width="8" height="70" fill="black" />
                          <rect x="55" y="35" width="38" height="8" fill="black" />
                        </g>
                      </>
                    )}

                    {item.name === "Royal Glow" && (
                      [30, 70].map((x, idx) => (
                        <g key={idx}>
                          <rect x={x} y="10" width="8" height="70" fill="white" />
                          <rect x={x - 15} y="35" width="38" height="8" fill="white" />
                        </g>
                      ))
                    )}

                    {item.name === "Midnight Faith" && (
                      [30, 70].map((x, idx) => (
                        <g key={idx}>
                          <rect x={x} y="10" width="8" height="70" fill="black" />
                          <rect x={x - 15} y="35" width="38" height="8" fill="black" />
                        </g>
                      ))
                    )}
                  </svg>
                </div>

                <CardContent className="p-5 text-center">
                  <h3 className="text-xl">{item.name}</h3>
                  <p className="text-gray-400">$4 each</p>
                  <Button className="mt-3 w-full bg-white text-black" onClick={(e) => { e.stopPropagation(); addToCart(item.name); }}>Add to Cart</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ABOUT POPUP */}
      <AnimatePresence>
        {showAbout && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center" onClick={() => setShowAbout(false)}>
            <motion.div className="bg-gray-900 p-8 rounded-2xl max-w-lg text-center" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl mb-4">About Us</h2>
              <p className="text-gray-400">We are a group of boys who started a business in school and grew it into something meaningful.</p>
              <Button className="mt-6" onClick={() => setShowAbout(false)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESIGN POPUP */}
      <AnimatePresence>
        {showDesign && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center" onClick={() => setShowDesign(false)}>
            <motion.div className="bg-gray-900 p-8 rounded-2xl max-w-lg text-center" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl mb-4">Design</h2>
              <p className="text-gray-400">Many colors and sizes so everyone can find something that fits.</p>
              <Button className="mt-6" onClick={() => setShowDesign(false)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESIGN DETAIL POPUP */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center" onClick={() => setSelectedDesign(null)}>
            <motion.div className="bg-gray-900 p-8 rounded-2xl max-w-xl text-center" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl mb-6">{selectedDesign.name}</h2>

              {/* LIVE PREVIEW */}
              <div className="flex justify-center gap-2 mb-6">
                {[
                // vivid solids
                "#ff2d2d","#7c3aed","#000000","#111111","#222222",
                "#22c55e","#10b981","#06b6d4","#38bdf8",
                "#f472b6","#ec4899","#fde047","#eab308",
                "#fb923c","#f97316","#ef4444","#dc2626",
                // light / pastel / frosted
                "#e5e7eb","#d1d5db","#f3f4f6","#ffffff",
                "#e0f2fe","#bae6fd","#a7f3d0","#bbf7d0",
                "#fde68a","#fecaca","#fbcfe8","#ddd6fe",
                // glassy / clear looks
                "linear-gradient(45deg,#ffffff,#d1d5db)",
                "linear-gradient(45deg,#e5e7eb,#9ca3af)",
                // granite / stone styles
                "linear-gradient(45deg,#2f2f2f,#6b7280)",
                "linear-gradient(45deg,#4b5563,#9ca3af)",
                // fun mixed colors
                "linear-gradient(45deg,#ef4444,#3b82f6)",
                "linear-gradient(45deg,#a855f7,#3b82f6)",
                "linear-gradient(45deg,#22c55e,#06b6d4)",
                "linear-gradient(45deg,#f59e0b,#ef4444)",
                "linear-gradient(45deg,#ec4899,#a855f7)",
                "linear-gradient(45deg,#3b82f6,#06b6d4)",
                "linear-gradient(45deg,#facc15,#f97316)",
                // tinted clear beads
                "linear-gradient(45deg,rgba(255,255,255,0.9),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(59,130,246,0.8),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(34,197,94,0.8),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(244,63,94,0.8),rgba(255,255,255,0.2))"
              ].map((color, i) => {
                const isGradient = String(color).includes("gradient");
                const style: any = isGradient
                  ? {
                      backgroundImage: `${color}, radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 40%)`,
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 6px 14px rgba(0,0,0,0.7)",
                    }
                  : {
                      backgroundColor: color,
                      backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 40%)",
                      boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 6px 14px rgba(0,0,0,0.7)",
                    };
                return (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full cursor-pointer border border-white/20"
                    style={style}
                    onClick={() => setSelectedBead(color)}
                  />
                );
              })}
              </div>

              {/* BEADS */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[
                // vivid solids
                "#ff2d2d","#7c3aed","#000000","#111111","#222222",
                "#22c55e","#10b981","#06b6d4","#38bdf8",
                "#f472b6","#ec4899","#fde047","#eab308",
                "#fb923c","#f97316","#ef4444","#dc2626",
                // light / pastel / frosted
                "#e5e7eb","#d1d5db","#f3f4f6","#ffffff",
                "#e0f2fe","#bae6fd","#a7f3d0","#bbf7d0",
                "#fde68a","#fecaca","#fbcfe8","#ddd6fe",
                // glassy / clear looks
                "linear-gradient(45deg,#ffffff,#d1d5db)",
                "linear-gradient(45deg,#e5e7eb,#9ca3af)",
                // granite / stone styles
                "linear-gradient(45deg,#2f2f2f,#6b7280)",
                "linear-gradient(45deg,#4b5563,#9ca3af)",
                // fun mixed colors
                "linear-gradient(45deg,#ef4444,#3b82f6)",
                "linear-gradient(45deg,#a855f7,#3b82f6)",
                "linear-gradient(45deg,#22c55e,#06b6d4)",
                "linear-gradient(45deg,#f59e0b,#ef4444)",
                "linear-gradient(45deg,#ec4899,#a855f7)",
                "linear-gradient(45deg,#3b82f6,#06b6d4)",
                "linear-gradient(45deg,#facc15,#f97316)",
                // tinted clear beads
                "linear-gradient(45deg,rgba(255,255,255,0.9),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(59,130,246,0.8),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(34,197,94,0.8),rgba(255,255,255,0.2))",
                "linear-gradient(45deg,rgba(244,63,94,0.8),rgba(255,255,255,0.2))"
              ].map((color, i) => (
                  <div key={i} className="w-7 h-7 rounded-full cursor-pointer border" style={{ background: color }} onClick={() => setSelectedBead(color)} />
                ))}
              </div>

              <Button className="w-full" onClick={() => setSelectedDesign(null)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CART */}
      {openCart && (
        <div className="fixed right-0 top-0 h-full w-80 bg-black p-6">
          <h2 className="text-2xl mb-4">Cart</h2>
          {cart.length === 0 ? <p>Empty</p> : cart.map((item, i) => (
            <div key={i} className="flex justify-between">
              {item}
              <button onClick={() => removeFromCart(i)}>X</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
