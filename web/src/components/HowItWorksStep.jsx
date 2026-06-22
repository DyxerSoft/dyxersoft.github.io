import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function HowItWorksStep({ number, title, description, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col md:flex-row items-start md:items-center gap-4"
    >
      <div className="flex items-center gap-4 flex-1">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      {!isLast && (
        <ArrowRight className="hidden md:block w-8 h-8 text-primary/40 flex-shrink-0" />
      )}
    </motion.div>
  );
}

export default HowItWorksStep;
