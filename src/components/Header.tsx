import { Box, Typography } from '@mui/material';

export default function Header({ header }: { header: string }) {
  return (
    <Box display="flex" justifyContent="center" mb={5}>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          userSelect: 'none',
          position: 'relative',
          display: 'inline',
          '&::before': {
            content: '""',
            width: '75%',
            height: '5px',
            borderRadius: '10px',
            bgcolor: 'primary.main',
            marginInline: 'auto',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)'
          },
        }}
      >
        <span>{header}</span>
      </Typography>
    </Box>
  );
}
