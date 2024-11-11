"use client";

import { motion } from 'framer-motion';
import { Code2, Smartphone, ChevronDown } from 'lucide-react';
import { ServiceCard } from './components/service-card';
import { GradientDecoration } from './components/gradient-decoration';
import Link from 'next/link';


export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Expert in building modern, responsive web applications with cutting-edge technologies.",
      features: [
        "Custom web application development",
        "Responsive design implementation",
        "Performance optimization",
        "SEO-friendly architecture",
        "API integration and development"
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "GraphQL"
      ]
    },
    {
      icon: Smartphone,
      title: "Flutter App Development",
      description: "Specialized in creating cross-platform mobile applications with exceptional user experience.",
      features: [
        "Native-like performance",
        "Cross-platform development",
        "Custom UI/UX implementation",
        "State management",
        "Third-party integrations"
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST APIs",
        "Getx",
        "Bloc"
      ]
    }
  ];

  
  return (
    <>
      
      <div className="relative min-h-screen overflow-hidden pt-16">
        <GradientDecoration />
        
        <main className="max-w-screen-xl mx-auto px-4 py-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 mb-32"
          >
            <div className="relative flex flex-col items-center">
              
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <h1 className="text-6xl text-center md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-foreground via-foreground/80 to-foreground/40 bg-clip-text text-transparent">
                Dhruva N L Choudhary
                </h1>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              </motion.div>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 text-center relative"
              >
                Crafting exceptional digital experiences through modern web and mobile development
              </motion.p>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-12"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="cursor-pointer p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                >
                  <ChevronDown className="h-6 w-6 text-emerald-500" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                Icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                technologies={service.technologies}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-32"
          >
            <div className="inline-block relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 blur-xl" />
              <div className="relative bg-background/80 backdrop-blur-sm rounded-lg px-8 py-6">
                <p className="text-xl text-muted-foreground mb-4">
                  Ready to bring your ideas to life?
                </p>
                <a 
                  href="mailto:lci2021014@iiitl.ac.in" 
                  className="text-2xl font-semibold hover:text-emerald-500 transition-colors"
                >
                  lci2021014@iiitl.ac.in
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-sm text-muted-foreground"
          >
            Crafted with ❤️ by <Link className='text-emerald-500 hover:text-emerald-600 font-bold transition-all ease-linear' href="https://northack.com">Northack</Link>
          </motion.footer>
        </main>
      </div>
    </>
  );
}