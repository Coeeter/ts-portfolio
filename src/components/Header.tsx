import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function Header({
  header,
  variant,
}: {
  header: string;
  variant?: string;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const boxStyle =
    variant === 'sub'
      ? {}
      : {
          display: 'flex',
          justifyContent: 'center',
        };

  const position =
    variant === 'sub'
      ? {}
      : {
          left: '50%',
          transform: 'translateX(-50%)',
        };

  return (
    <Box
      {...boxStyle}
      mb={variant === 'sub' ? 2 : (isMobile ? 3 : 5)}
    >
      <Typography
        variant={variant === 'sub' ? 'h5' : 'h4'}
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
            ...position,
          },
        }}
      >
        <span>{header}</span>
      </Typography>
    </Box>
  );
}
