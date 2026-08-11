import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { IMAGES } from "@/config/images";
import { SectionHeading } from "./SectionHeading";

export default function OurWork() {
  const [open, setOpen] = useState<number | null>(null);
  const items = IMAGES.gallery;

  return (
    <section id="work" className="relative bg-off-white py-24 sm:py-32">
      <div className="grain-dark absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Our Work"
          title="Real cars, real bays"
          sub="Photographs from the Somatane workshop — the same hands that will work on yours."
          light
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <motion.button
              key={item.src + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-[20px] border border-border-light shadow-soft"
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  i % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 text-left text-sm font-medium text-white">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-graphite/95 p-4"
            onClick={() => setOpen(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 rounded-full border border-white/20 p-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              src={items[open]!.src}
              alt={items[open]!.label}
              className="max-h-[82vh] w-auto rounded-2xl object-contain"
            />
            <p className="absolute bottom-8 text-sm text-text-muted">{items[open]!.label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}