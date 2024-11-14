'use client';

import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

const NAVIGATION_LINKS = [
  { key: 'home', path: '/' },
  { key: 'group', path: '/group' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' }
];

export default function NavigationContent({ onClose, locale }) {
  const t = useTranslations('navigation');

  return (
    <div className="fixed inset-0 bg-blue-600 z-50">
      <div className="flex h-full">
        {/* Left column with image */}
        <div className="relative hidden md:block w-1/2 h-full">
          <Image
            src="/images/navigation-default.webp"
            alt="Navigation background"
            fill
            className="object-cover"
          />
          <div className="absolute top-8 left-8">
            <Image
              src="/images/sogat-white.webp"
              alt="Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right column with navigation */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col">
          <div className="flex justify-end mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
              aria-label={t('close')}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>

          <nav className="flex-1">
            <ul className="space-y-6 text-white text-4xl md:text-6xl font-bold">
              {NAVIGATION_LINKS.map(({ key, path }) => (
                <li key={key}>
                  <Link
                    href={`/${locale}${path}`}
                    className="hover:text-white/80 transition-colors"
                    onClick={onClose}
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col space-y-4 text-white">
            <Link
              href={`/${locale}/personal`}
              className="text-sm hover:text-white/80 transition-colors"
              onClick={onClose}
            >
              {t('personalSpace')}
            </Link>
            <div className="flex justify-between items-center">
              <Link
                href={`/${locale}/legal`}
                className="text-sm hover:text-white/80 transition-colors"
                onClick={onClose}
              >
                {t('legalNotice')}
              </Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}