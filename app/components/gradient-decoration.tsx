"use client";

import { motion } from 'framer-motion';

export function GradientDecoration() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#10b981_0%,rgba(16,185,129,0.2)_20%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_120%,#059669_0%,rgba(5,150,105,0.2)_20%,transparent_50%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#34d399_0%,rgba(52,211,153,0.2)_20%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_20%,#10b981_0%,rgba(16,185,129,0.2)_20%,transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#6ee7b7_0%,rgba(110,231,183,0.2)_20%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_80%,#34d399_0%,rgba(52,211,153,0.2)_20%,transparent_50%)] opacity-30" />
      </div>
      <div className="fixed inset-0 -z-10 bg-white/50 dark:bg-black/50 backdrop-blur-[100px]" />
      <div 
        className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" 
      />
    </>
  );
}