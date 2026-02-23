import React, { useState, useEffect } from 'react';

export const TypeWriter: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState<'typing' | 'complete'>('typing');

  useEffect(() => {
    if (phase !== 'typing') return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setPhase('complete');
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text, phase]);

  useEffect(() => {
    if (phase !== 'complete') return;
    const blink = setInterval(() => {
      setShowCursor(c => !c);
    }, 500);
    return () => clearInterval(blink);
  }, [phase]);

  return (
    <span className={className}>
      {phase === 'typing' ? (
        <span className="font-mono text-emerald-400">{'> '}{displayText}{showCursor && '▌'}</span>
      ) : (
        displayText
      )}
    </span>
  );
};