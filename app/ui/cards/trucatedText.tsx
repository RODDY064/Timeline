"use client"

 export  default function TruncatedText ({ text }:{text:any}) {
  return (
    <div
      id="truncatedText"
      style={{
        maxWidth: '10rem',
        maxHeight: '2rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
      {text}
    </div>
  );
};
