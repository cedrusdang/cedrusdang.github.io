import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { mottos } from '../data/intro.js'; 
import Box from '@mui/material/Box';

function TypingEffect({ text, speed, onPhaseChange }) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('firstStart'); // 'start','typing','end','delete'
  const [index, setIndex] = useState(0);

  // Reset state when text changes
  useEffect(() => {
    setPhase('typing');
    setIndex(0);
    setDisplayed('');
  }, [text]);

  // Start blinking cursor phase
  useEffect(() => {
    if (phase !== 'start') return;
    let visible = true;
    const timer = setInterval(() => {
      setDisplayed(visible ? "|" : "");
      visible = !visible;
    }, speed * 8);
    const timeout = setTimeout(() => {
      clearInterval(timer);
      setPhase('typing');
    }, speed * 8 * 6);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [phase, speed]);

  // Typing effect with moving cursor
  useEffect(() => {
    if (phase !== 'typing') return;
    if (index > text.length) {
      setPhase('end');
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, index) + (index < text.length ? "|" : ""));
      setIndex(index + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [phase, index, text, speed]);

  // End blinking cursor phase
  useEffect(() => {
    if (phase !== 'end') return;
    let visible = true;
    const timer = setInterval(() => {
      setDisplayed(visible ? text + "|" : text + "\u00A0");
      visible = !visible;
    }, speed * 8);
    const timeout = setTimeout(() => {
      clearInterval(timer);
      setPhase('delete');
    }, speed * 8 * 12); ///
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [phase, speed, text]);

  // Delete effect with blinking cursor
  useEffect(() => {
    if (phase !== 'delete') return;
    if (index === 0) {
      setPhase('changeMotto');
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, index) + (index < text.length ? "|" : ""));
      setIndex(index - 1);
    }, speed*0.6);
    return () => clearTimeout(timer);
  }, [phase, index, text, speed]);

  // Notify parent to change motto
  useEffect(() => {
    if (phase === 'changeMotto' && onPhaseChange) {
      onPhaseChange();
    }
  }, [phase, onPhaseChange]);

  return (
    <Typography
      variant="h6"
      sx={{
        textAlign: 'center',
        whiteSpace: 'pre-line',
        fontFamily: '"Dancing Script", cursive', // Add font family for dancing effect
        letterSpacing: '0.04em',
      }}
    >
      {displayed}
    </Typography>
  );
}

// Main component to rotate mottos
export default function RotatingMottos({ speed = 60 }) {
  const [index, setIndex] = useState(0);

  // Handler to update index
  const handlePhaseChange = () => setIndex(i => (i + 1) % mottos.length);

  return (
    <Box sx={{padding: '0 0.5rem 0.5rem 0.5rem'}}>
      <Box
        sx={{
          height: { xs: '8rem', sm: '6rem'},
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <TypingEffect
          text={mottos[index]}
          speed={speed}
          onPhaseChange={handlePhaseChange}
        />
      </Box>
    </Box>
  );
}
