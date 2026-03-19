'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';

/**
 * Section Variations et contrôle des distributions
 * Support multilingue avec next-intl
 */

export const VariationsSection: React.FC = () => {
  const t = useTranslations();
  
  const variations = t.raw('variations.items') as string[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
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
          {t('variations.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          {t('variations.subtitle')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {variations.map((variation, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card hover className="h-full">
                <h3 className="text-h3 text-primary-blue mb-2 font-semibold">{variation}</h3>
                <p className="text-neutral-subtext text-sm">{t('variations.confidence')}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Message de confiance */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-primary-blue/10 to-primary-indigo/10 border border-primary-blue/20 rounded-2xl"
        >
          <p className="text-neutral-text text-lg leading-relaxed text-center">
            ✨ <span className="font-semibold text-primary-blue">{t('variations.transparencyTitle')}</span> -{' '}
            {t('variations.transparencyDescription')}
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
