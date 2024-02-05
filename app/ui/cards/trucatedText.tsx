import { useEffect, useRef, useState } from 'react';

export default function TruncatedText({ text , num }:{text:string, num?:string}) {
    
    const spanRef = useRef<HTMLSpanElement>(null);
    const [truncatedText, setTruncatedText] = useState<string>(text);

  useEffect(() => {
    const spanWidth = spanRef.current?.offsetWidth || 0;
    const maxAllowedWidth = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (spanWidth > maxAllowedWidth) {
      const truncatedLength = Math.floor((text.length * maxAllowedWidth) / spanWidth) - 3; // Subtracting space for ellipsis
      const truncatedText = text.slice(0, truncatedLength) + '...';
      setTruncatedText(truncatedText);
    }
  }, [text]);

  return <span className={num ?  num : "w-[10rem]"} ref={spanRef}>{truncatedText}</span>;
}

