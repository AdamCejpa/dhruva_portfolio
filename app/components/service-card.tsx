"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
  features: string[];
  technologies: string[];
}

export function ServiceCard({ title, description, Icon, index, features, technologies }: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
      aria-labelledby={`service-card-${index}-title`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      <div className="relative p-8 rounded-lg border bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-colors">
        <header className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-lg bg-emerald-500/10">
            <Icon className="h-8 w-8 text-emerald-500" aria-hidden="true" />
          </div>
          <h3 id={`service-card-${index}-title`} className="text-2xl font-semibold">
            {title}
          </h3>
        </header>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="space-y-4">
          <section>
            <h4 className="text-lg font-medium mb-2">Key Features</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>
          
          <section>
            <h4 className="text-lg font-medium mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.section>
  );
}
