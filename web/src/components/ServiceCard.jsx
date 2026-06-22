import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Card className="h-full border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 p-3 bg-secondary/10 rounded-xl w-fit">
            <Icon className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
