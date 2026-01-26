import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function Logo({ 
  variant = 'horizontal', 
  dark = false,
  className = '' 
}) {
  const { language } = useLanguage();
  
  const getLogoPath = () => {
    if (variant === 'emblem') {
      return '/logo.png';
    }
    return language === 'ar' 
      ? '/logo.png'
      : '/logo.png'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={getLogoPath()}
        alt="Yafel Real Estate"
        className="object-contain"
        style={{ width: variant === 'emblem' ? 200 : 200, height: variant === 'emblem' ? 70 : 70 }}
      />
    </div>
  );
}
