import { useTheme } from '../context/ThemeContext';

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-5 right-5 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-200 ${
        theme === 'dark'
          ? 'bg-text-dark'
          : 'bg-text-light'
      }`}
      aria-label="Toggle theme"
    />
  );
} 