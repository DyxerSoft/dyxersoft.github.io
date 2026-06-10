import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function IndustryCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Card className="h-full bg-secondary/10 border-secondary/30 hover:shadow-lg hover:scale-105 transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div className="mb-4 p-4 bg-secondary/20 rounded-2xl">
            <Icon className="w-8 h-8 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default IndustryCard;