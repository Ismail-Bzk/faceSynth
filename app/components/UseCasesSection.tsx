'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';

/**
 * Section Cas d'usage
 * Support multilingue avec next-intl
 */

interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export const UseCasesSection: React.FC = () => {
  const t = useTranslations();
  
  const useCases = t.raw('useCases.items') as UseCase[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper bgColor="white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className="text-h2 text-center mb-4" variants={itemVariants}>
          {t('useCases.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          {t('useCases.description')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {useCases.map((useCase, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card hover>
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-h3 mb-3 text-neutral-text">{useCase.title}</h3>
                <p className="text-neutral-subtext leading-relaxed">{useCase.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
