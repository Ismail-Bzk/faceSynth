'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';
import { Button } from './common/Button';

/**
 * Section Pricing et licences
 * Support multilingue avec next-intl
 */

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta?: string;
  popular?: boolean;
}

export const PricingSection: React.FC = () => {
  const t = useTranslations();
  
  const plans = t.raw('pricing.plans') as Plan[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper bgColor="light" id="pricing">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.h2 className="text-h2 text-center mb-4" variants={itemVariants}>
          {t('pricing.title')}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          {t('pricing.description')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={plan.popular ? 'md:scale-105' : ''}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.popular
                    ? 'ring-2 ring-primary-blue shadow-xl'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    {t('pricing.popularBadge')}
                  </div>
                )}

                <h3 className="text-h3 font-bold text-neutral-text mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-subtext text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary-blue mb-2">
                    {plan.price}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <span className="text-primary-blue font-bold">✓</span>
                      <span className="text-neutral-text text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {plan.cta ?? t('pricing.defaultCta')}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Note de confiance */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-6 bg-neutral-card border border-neutral-border rounded-xl text-center"
        >
          <p className="text-neutral-text">
            <span className="font-semibold text-primary-blue">{t('pricing.guaranteeTitle')}</span>{' '}
            {t('pricing.guaranteeText')}
          </p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
