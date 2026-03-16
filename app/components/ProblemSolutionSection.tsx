'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';

/**
 * Section Problème / Solution
 * Présente les défis actuels et comment FaceSynth les résout
 * Support multilingue avec next-intl
 */
export const ProblemSolutionSection: React.FC = () => {
  const t = useTranslations();
  
  const problems = t.raw('problemSolution.problems');
  const solutions = t.raw('problemSolution.solutions');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper bgColor="white">
      <div className="space-y-16">
        {/* Problèmes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2 className="text-h2 text-center mb-12" variants={itemVariants}>
            {t('problemSolution.title')}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {problems.map((problem, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card hover>
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-h3 mb-3 text-neutral-text">{problem.title}</h3>
                  <p className="text-neutral-subtext">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Séparateur visuel */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex-grow h-px bg-neutral-border"></div>
          <span className="text-2xl text-primary-blue">↓</span>
          <div className="flex-grow h-px bg-neutral-border"></div>
        </div>

        {/* Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.h2 className="text-h2 text-center mb-12" variants={itemVariants}>
            {t('problemSolution.solutionTitle')}
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {solutions.map((solution, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card hover className="bg-gradient-to-br from-primary-blue/5 to-primary-indigo/5 border-primary-blue/20">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-h3 mb-3 text-primary-blue">{solution.title}</h3>
                  <p className="text-neutral-text">{solution.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
