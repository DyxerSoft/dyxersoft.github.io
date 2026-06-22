import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function ProblemCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-card border-border hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 p-3 bg-destructive/10 rounded-xl w-fit">
            <Icon className="w-6 h-6 text-destructive" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-card-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProblemCard;
