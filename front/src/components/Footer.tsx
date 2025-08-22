import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <footer className={`w-full bg-white dark:bg-neutral-900 py-2 text-center shadow mt-auto`}>
      <Typography variant="body2" color="text.secondary">
        © 2025 Coin App
      </Typography>
    </footer>
  );
}