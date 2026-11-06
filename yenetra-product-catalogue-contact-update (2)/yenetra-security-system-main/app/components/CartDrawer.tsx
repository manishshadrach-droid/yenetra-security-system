"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart } = useCart();

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black z-40"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 bg-[#020617] text-white p-6 border-l border-cyan-500 z-50 shadow-2xl"
          >
            <h2 className="text-lg tracking-widest text-cyan-400 mb-6">
              YOUR SETUP
            </h2>

            {cart.length === 0 ? (
              <p className="text-sm text-gray-400">No systems selected</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-gray-400">x{item.qty}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 text-xs"
                  >
                    remove
                  </button>
                </div>
              ))
            )}

            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-sm">Total: ₹{total}</p>

              <a
                href={`https://wa.me/91XXXXXXXXXX?text=I want quote for ${cart
                  .map((i) => i.name)
                  .join(", ")}`}
                target="_blank"
                className="block mt-4 text-center bg-cyan-500 text-black py-2 rounded hover-glow"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}