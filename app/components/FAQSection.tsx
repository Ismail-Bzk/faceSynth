'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Section FAQ
 * Support multilingue avec next-intl
 */
export const FAQSection: React.FC = () => {
  const t = useTranslations();
  
  const faqs: FAQItem[] = t.raw('faq.items') as FAQItem[];
  const [expanded, setExpanded] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
          {t('faq.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          {t('faq.description')}
        </motion.p>

        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-neutral-card border border-neutral-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-bg/50 transition-colors"
              >
                <span className="text-left text-lg font-semibold text-neutral-text">
                  {faq.question}
                </span>
                <motion.span
                  className="text-primary-blue text-2xl font-bold flex-shrink-0 ml-4"
                  animate={{ rotate: expanded === idx ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neutral-border"
                  >
                    <p className="px-6 py-4 text-neutral-subtext leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
