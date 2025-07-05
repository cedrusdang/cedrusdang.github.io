import {useState} from "react";
import StyledPaper from "./styledPaper.js";
import { email } from "../data/info.js";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Copied to clipboard:", text);
  }).catch(err => {
    console.error("Failed to copy:", err);
  });
}

export default function MyEmail() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [copied, setCopied] = useState(false);
  const [emailPop, setEmailPop] = useState(false);

  const clickHandler = () => {
    copyToClipboard(email);
  };

  const handleButtonClick = () => {
    clickHandler();
    setCopied(true);    
    setEmailCopied(true);
    setEmailPop(true);
    setTimeout(() => setCopied(false), 100);
    setTimeout(() => setEmailPop(false), 200); // duration matches animation
  };

  return (
    <StyledPaper sx={{ marginTop: "1rem" }}>
      <StyledPaper>
        <h3 style={{ margin: "0 0 0.25rem 0" }}>My Email</h3>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0",
            }}
          >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  animation: emailPop ? 'pop 0.2s cubic-bezier(.36,1.7,.57,.99)' : 'none'
                }}
              >
                {emailCopied ? (
                  <MarkEmailReadRoundedIcon
                  fontSize="small"
                  color="action"
                  style={{ transform: "scale(1.2)" }}
                  onClick={handleButtonClick}
                  cursor="pointer"
                  title="Copy email to clipboard"
                  />
                ) : (
                  <EmailRoundedIcon
                  fontSize="small"
                  color="action"
                  style={{ transform: "scale(1.2)" }}
                  onClick={handleButtonClick}
                  cursor="pointer"
                  title="Copy email to clipboard"
                  />
                )}
              </span>
              <span style={{
                marginLeft: "0.4rem",
                borderColor: "main.secondary",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "16px",
                padding: "0.1rem 0.5rem 0.1rem 0.5rem",
                cursor: "pointer"
              }}
                onClick={handleButtonClick}
                title="Click to copy email"
                aria-label="Email address"
              >
                {email}
              </span>
              <button
                onClick={handleButtonClick}
                style={{
                  marginLeft: '0.4rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: 0,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: copied ? 'pop 0.2s cubic-bezier(.36,1.7,.57,.99)' : 'none'
                }}
                aria-label="Copy email"
              >
                <ContentCopyIcon fontSize="small" color={copied ? 'disabled' : 'action'} />
              </button>
            </div>
        <style>
          {`
            @keyframes pop {
              0% { transform: scale(1); }
              50% { transform: scale(1.3); }
              100% { transform: scale(1); }
            }
          `}
        </style>
      </StyledPaper>
    </StyledPaper>
  );
}
