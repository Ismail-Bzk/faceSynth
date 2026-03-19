'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';

/**
 * Section Bénéfices clés
 * Support multilingue avec next-intl
 */

interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export const BenefitsSection: React.FC = () => {
  const t = useTranslations();
  
  const benefits = t.raw('benefits.items') as Benefit[];

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
    <SectionWrapper bgColor="light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className="text-h2 text-center mb-4" variants={itemVariants}>
          {t('benefits.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          {t('benefits.description')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {benefits.map((benefit, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card hover>
                {benefit.icon ? <div className="text-5xl mb-4">{benefit.icon}</div> : null}
                <h3 className="text-h3 mb-3 text-neutral-text">{benefit.title}</h3>
                <p className="text-neutral-subtext leading-relaxed">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
