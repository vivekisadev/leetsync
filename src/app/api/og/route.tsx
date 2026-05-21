import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const rawCode = searchParams.get('code') || 'console.log("Hello Codeship!");';
    const lines = rawCode.split('\n');
    const displayCode = lines.slice(0, 14).join('\n') + (lines.length > 14 ? '\n  // ...' : '');
    const language = searchParams.get('lang') || 'javascript';
    const title = searchParams.get('title') || 'LeetCode Problem';

    return new ImageResponse(
      (
        <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d1117', // GitHub Night background
          padding: '40px',
          fontFamily: '"Space Grotesk", sans-serif',
        }}
      >
        {/* Inner Card (Editor Window) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: '#161b22', // GitHub Night inner panel
            border: '1px solid #30363d', // GitHub Night border
            borderRadius: '12px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative',
          }}
        >
          {/* macOS Window Controls */}
          <div style={{ display: 'flex', gap: '8px', position: 'absolute', top: '16px', left: '16px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
          </div>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', marginTop: '16px', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#8b949e', fontSize: '20px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
                {language}
              </span>
              <span style={{ color: '#c9d1d9', fontSize: '42px', fontWeight: 800, marginTop: '8px' }}>
                {title}
              </span>
            </div>
            {/* Status Badge */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(46, 160, 67, 0.15)', // GitHub Success Green
                border: '1px solid rgba(46, 160, 67, 0.4)',
                color: '#3fb950',
                padding: '8px 24px',
                borderRadius: '9999px',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              Accepted
            </div>
          </div>

          {/* Code Body */}
          <div
            style={{
              display: 'flex',
              color: '#c9d1d9', // GitHub Night text color
              fontSize: '18px',
              lineHeight: 1.5,
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
            }}
          >
            {displayCode}
          </div>
          
          {/* Codeship Watermark */}
          <div style={{ position: 'absolute', bottom: '20px', right: '24px', color: '#8b949e', fontSize: '18px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Codeship Auto-Sync
          </div>
        </div>
      </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
