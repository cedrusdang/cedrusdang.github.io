import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { copyright } from "../data/copyRight.js";

export default function BottomBar() {
    const theme = useTheme();
    const steelBlue = "#4682B4";

    const handleToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.background.default,
            textAlign: "center",
            padding: { xs: '0.25rem', sm: '1rem' },
            boxShadow: 3,
        }}>
            <Typography
                variant="h8"
                color="textSecondary"
                sx={{
                    textAlign: "center",
                    fontSize: { xs: '0.7rem', sm: '1rem' },
                    color: theme.palette.text.secondary,
                    whiteSpace: 'pre-line',
                }}
            >
                Copyright: {copyright} |{' '}
                <Link
                    href="#top"
                    underline="hover"
                    sx={{ color: steelBlue, cursor: "pointer", display: "inline-flex", alignItems: "center" }}
                    onClick={handleToTop}
                >
                    To Top of Page&nbsp;
                    <span style={{ fontSize: '1.1em' }}>↑</span>
                </Link>
            </Typography>
        </Box>
    );
}