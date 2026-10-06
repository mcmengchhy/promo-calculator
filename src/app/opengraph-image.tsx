import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'PomoFocus - Free Online Pomodoro Timer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Glow circle */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#f43f5e',
            filter: 'blur(120px)',
            opacity: 0.3,
          }}
        />

        {/* Badge */}
        <div
          style={{
            background: 'rgba(244, 63, 94, 0.2)',
            border: '1px solid rgba(244, 63, 94, 0.4)',
            color: '#fb7185',
            padding: '8px 24px',
            borderRadius: '999px',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          FREE PRODUCTIVITY TOOL
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: '-2px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #ffffff, #f43f5e)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 16,
          }}
        >
          PomoFocus Timer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 26,
            color: '#94a3b8',
            maxWidth: '800px',
            textAlign: 'center',
          }}
        >
          Boost focus & master your time with custom work-rest cycles
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
