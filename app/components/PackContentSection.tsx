'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionWrapper } from './common/SectionWrapper';
import { Card } from './common/Card';
import frMessages from '../i18n/fr.json';
import enMessages from '../i18n/en.json';
import esMessages from '../i18n/es.json';
import arMessages from '../i18n/ar.json';

/**
 * Section Contenu du pack
 * Détail des images, résolutions, formats et métadonnées
 * Support multilingue avec next-intl
 */

interface Spec {
  title: string;
  description: string;
  icon?: string;
}

interface PackContentMessages {
  title: string;
  subtitle: string;
  specs: Spec[];
  annotations: string;
  annotationsList: string[];
  delivery: string;
  deliveryAccessTitle: string;
  deliveryAccessDescription: string;
  deliveryDocumentationTitle: string;
  deliveryDocumentationDescription: string;
  deliverySupportTitle: string;
  deliverySupportDescription: string;
}

const packContentByLocale: Record<string, PackContentMessages> = {
  fr: frMessages.packageContent as PackContentMessages,
  en: enMessages.packageContent as PackContentMessages,
  es: esMessages.packageContent as PackContentMessages,
  ar: arMessages.packageContent as PackContentMessages,
};

export const PackContentSection: React.FC = () => {
  const locale = useLocale();
  const packContent = packContentByLocale[locale] ?? packContentByLocale.fr;
  const specs = Array.isArray(packContent.specs) ? packContent.specs : [];
  const annotations = Array.isArray(packContent.annotationsList)
    ? packContent.annotationsList
    : [];

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
          {packContent.title}
        </motion.h2>
        <motion.p
          className="text-lg text-center text-neutral-subtext max-w-2xl mx-auto mb-16"
          variants={itemVariants}
        >
          {packContent.subtitle}
        </motion.p>

        {/* Specs principales */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          {specs.map((spec, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="text-center">
                {spec.icon ? <div className="text-4xl mb-3">{spec.icon}</div> : null}
                <p className="text-h3 font-bold text-primary-blue mb-2">{spec.title}</p>
                <p className="text-small text-neutral-subtext">{spec.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Annotations détaillées */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h3 className="text-h3 mb-6 text-neutral-text">{packContent.annotations}</h3>
            <div className="space-y-4">
              {annotations.map((annotation, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-neutral-bg/50 hover:bg-primary-blue/5 transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-primary-blue font-bold text-lg flex-shrink-0">→</span>
                  <span className="text-neutral-text">{annotation}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info format livraison */}
          <motion.div variants={itemVariants}>
            <h3 className="text-h3 mb-6 text-neutral-text">{packContent.delivery}</h3>
            <Card className="space-y-4">
              <div>
                <h4 className="font-semibold text-neutral-text mb-2">{packContent.deliveryAccessTitle}</h4>
                <p className="text-neutral-subtext">
                  {packContent.deliveryAccessDescription}
                </p>
              </div>
              <div className="border-t border-neutral-border pt-4">
                <h4 className="font-semibold text-neutral-text mb-2">{packContent.deliveryDocumentationTitle}</h4>
                <p className="text-neutral-subtext">
                  {packContent.deliveryDocumentationDescription}
                </p>
              </div>
              <div className="border-t border-neutral-border pt-4">
                <h4 className="font-semibold text-neutral-text mb-2">{packContent.deliverySupportTitle}</h4>
                <p className="text-neutral-subtext">
                  {packContent.deliverySupportDescription}
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};
