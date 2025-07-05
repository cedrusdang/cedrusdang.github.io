import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function PersonalIcons() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.grey[50],
                opacity: 0.9,
                width: '6rem',
                height: '6rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                boxShadow:
                    theme.palette.mode === 'dark'
                        ? `0 3px 6px ${theme.palette.primary.main}, 0 1.5px 3px rgba(20,20,40,0.24) inset`
                        : `0 3px 6px ${theme.palette.primary.main}, 0 1.5px 3px rgba(33, 33, 60, 0.08) inset`,
                transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1)',
                m: '0.5rem',
                transform: 'perspective(600px) rotateX(6deg) scale(1)',
                border: `1.5px solid ${theme.palette.divider}`,
            }}
        >
            <img
                src={'/MyIcon.webp'}
                alt="Personal Icon"
                style={{
                    width: '4rem',
                    height: 'auto',
                    borderRadius: '50%',
                }}
            />
        </Box>
    );
}
