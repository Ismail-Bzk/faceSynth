'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from './common/Button';
import { LeadCaptureForm } from './LeadCaptureForm';

/**
 * Section Hero - Présentation principale du produit FaceSynth
 * ✅ INTÉGRATION I18N: Utilise useTranslations() pour charger les textes
 * Les clés utilisées: 'hero.title', 'hero.subtitle', 'hero.cta1', 'hero.cta2', 'features'
 */
export const HeroSection: React.FC = () => {
  // 🔑 Charger les traductions avec useTranslations()
  const t = useTranslations();
  const [showForm, setShowForm] = useState(false);
  const syntheticFaceImages = [
    '/images/faces/face-1.jpg',
    '/images/faces/face-2.svg',
    '/images/faces/face-3.svg',
    '/images/faces/face-4.svg',
    '/images/faces/face-5.svg',
    '/images/faces/face-6.svg',
    '/images/faces/face-7.svg',
    '/images/faces/face-8.svg',
    '/images/faces/face-9.svg',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="hero-gradient relative overflow-hidden pt-20 pb-20 sm:pt-32 sm:pb-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-indigo/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl"></div>

      <div className="container-main relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenu texte */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-h1 text-neutral-text leading-tight"
              variants={itemVariants}
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              className="text-lg text-neutral-subtext leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Points clés rapides */}
            <motion.div className="space-y-3 pt-4" variants={itemVariants}>
              {[
                t('features.0.description'),
                t('features.1.description'),
                t('features.2.description'),
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-primary-blue font-bold text-lg">✓</span>
                  <span className="text-neutral-text">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA principaux */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => setShowForm(true)}
              >
                {t('hero.cta1')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  // Scroll vers la section de contact ou ouvre un formulaire
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('hero.cta2')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Visuel hero - Grille de visages synthétiques */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 sm:h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-md">
              {/* Grille placeholder pour les visages synthétiques */}
              <div className="grid grid-cols-3 gap-3 w-full h-full">
                {syntheticFaceImages.map((faceSrc, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-primary-blue/10 to-primary-indigo/10 rounded-lg border border-primary-blue/20 flex items-center justify-center relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' }}
                  >
                    <Image
                      src={faceSrc}
                      alt={`Synthetic face ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 33vw, 120px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={i < 3}
                    />
                    {/* Simulation d'annotations (landmarks, bounding box) */}
                    <div className="absolute inset-1 border border-primary-blue/30 rounded pointer-events-none"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-indigo rounded-full opacity-50 group-hover:opacity-100 transition-opacity relative z-10"></div>
                    <div className="absolute top-1 right-1 text-xs text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity">
                      {`#${i + 1}`}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Overlay avec texte explicatif */}
              <div className="absolute -bottom-8 left-0 right-0 text-center text-small text-neutral-subtext">
                <p className="font-semibold">{t('hero.overlay')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de capture de lead */}
      {showForm && (
        <LeadCaptureForm onClose={() => setShowForm(false)} />
      )}
    </section>
  );
};
