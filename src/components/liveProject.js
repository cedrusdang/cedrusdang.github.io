import StyledPaper from "./styledPaper";
import Button from '@mui/material/Button';

function buttonLiveProject(text, href) {
    const handleClick = () => {
        window.open(href, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
                sx={{
                    margin: "1rem",
                    background: "linear-gradient(270deg, #ff4081, #7c4dff, #18ffff, #ff4081)",
                    backgroundSize: "600% 600%",
                    animation: "colorAnimation 8s ease infinite",
                    borderWidth: "1px",
                    borderStyle: "dotted",
                    borderColor: "lightblue",
                    fontFamily: "'Dancing Script', cursive",
                    textTransform: "none",
                    color: "primary.contrastText",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                        backgroundPosition: "100% 50%",
                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                    },
                    whiteSpace: "wrap"
                }}
            >
                {text}
            </Button>
            <style>
                {`
                    @keyframes colorAnimation {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
            </style>
        </>
    );
}

export default function LiveProject() {
    return (
        <StyledPaper>
            <StyledPaper>
                <h3
                    style={{ margin: "0.5rem 0 0 0" }}
                >
                    My Live Projects
                </h3>
                {buttonLiveProject(
                    <>
                        {"Little Lemon Restaurant"}
                        <br />
                        {"Front-End Developer Project"}
                    </>,
                    "https://portfoliofe.cedrusdang.com/"
                )}
            </StyledPaper>
        </StyledPaper>
    );
}
