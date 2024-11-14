import LanguageSwitcher from '@/components/language-switcher/LanguageSwitcher';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">SOGAT</div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}