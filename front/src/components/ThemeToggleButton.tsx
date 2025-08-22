import Button from '@mui/material/Button';
import { useTheme } from '../theme/ThemeContext';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button variant="contained" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
}