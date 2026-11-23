import React from 'react';

/* Apple rasmlari o‘rniga kod bilan chizilgan illyustratsiyalar.
   Xohlasangiz, ularni o‘z rasmlaringiz (<img src=... />) bilan almashtirishingiz mumkin. */

export function Wallpaper({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2b3a9a" />
        <stop offset=".35" stopColor="#8a4fd0" />
        <stop offset=".6" stopColor="#f07a8c" />
        <stop offset="1" stopColor="#f6b36b" />
      </linearGradient>
      <linearGradient id={`${id}-hill`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#9bd13a" />
        <stop offset="1" stopColor="#1f7a3a" />
      </linearGradient>
    </defs>
  );
}

function Screen({ id, x, y, w, h, r = 4 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={r} fill="#111" />
      <rect x={x + 3} y={y + 3} width={w - 6} height={h - 6} rx={r - 1} fill={`url(#${id}-sky)`} />
      <path d={`M${x + 3} ${y + h - 3} L${x + 3} ${y + h * 0.62} Q${x + w * 0.35} ${y + h * 0.4} ${x + w * 0.6} ${y + h * 0.7} T${x + w - 3} ${y + h * 0.6} L${x + w - 3} ${y + h - 3} Z`} fill={`url(#${id}-hill)`} />
    </g>
  );
}

export function LaptopPair({ id = 'lp', pro = false, tone = '#c9ccd1' }) {
  const body = tone;
  return (
    <svg viewBox="0 0 300 190" role="img" aria-label={pro ? 'MacBook Pro' : 'MacBook Air'} className="art-svg">
      <Wallpaper id={id} />
      <g transform="translate(66 6)">
        <Screen id={id} x={0} y={0} w={194} h={122} />
        {pro && <rect x={80} y={0} width={34} height={7} rx={3.5} fill="#111" />}
      </g>
      <g transform="translate(18 34)">
        <Screen id={id} x={0} y={0} w={194} h={122} />
        {pro && <rect x={80} y={0} width={34} height={7} rx={3.5} fill="#111" />}
        <path d="M-14 126 H208 L214 134 Q214 138 208 138 H-8 Q-14 138 -14 134 Z" fill={body} />
        <rect x={74} y={126} width={46} height={4} rx={2} fill="#00000022" />
      </g>
    </svg>
  );
}

export function HelloIllustration() {
  return (
    <svg viewBox="0 0 520 300" role="img" aria-label="iMac, Mac Studio and MacBook" className="art-svg">
      <defs>
        <linearGradient id="hl-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff9d2e" />
          <stop offset=".3" stopColor="#ffd23f" />
          <stop offset=".55" stopColor="#35c46a" />
          <stop offset=".8" stopColor="#2f8ff0" />
          <stop offset="1" stopColor="#7a52e0" />
        </linearGradient>
        <linearGradient id="chart-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5f5f7" />
          <stop offset="1" stopColor="#e6e8ee" />
        </linearGradient>
      </defs>
      {/* iMac */}
      <rect x="215" y="6" width="290" height="190" rx="10" fill="#f1f1f3" />
      <rect x="222" y="13" width="276" height="150" rx="4" fill="#e9eefb" />
      <rect x="215" y="166" width="290" height="30" rx="0" fill="#7ea6d8" />
      <rect x="215" y="166" width="290" height="2" fill="#00000010" />
      <path d="M355 196 H375 L384 262 H346 Z" fill="#a9c4e6" />
      <path d="M318 262 H412 Q420 262 420 270 V274 H310 V270 Q310 262 318 262 Z" fill="#7ea6d8" />
      <text x="360" y="118" textAnchor="middle" fontFamily="Brush Script MT, Segoe Script, cursive" fontStyle="italic" fontSize="62" fontWeight="700" fill="url(#hl-g)">hello</text>
      {/* Mac Studio */}
      <rect x="0" y="146" width="104" height="82" rx="10" fill="#d9dadd" />
      <rect x="0" y="146" width="104" height="14" rx="7" fill="#eceef0" />
      <circle cx="16" cy="196" r="3" fill="#8c8e92" /><circle cx="28" cy="196" r="3" fill="#8c8e92" />
      <rect x="40" y="194" width="14" height="5" rx="2" fill="#8c8e92" />
      {/* MacBook with charts */}
      <g transform="translate(86 100)">
        <rect x="0" y="0" width="190" height="118" rx="6" fill="#1b1b1d" />
        <rect x="5" y="5" width="180" height="108" rx="2" fill="url(#chart-bg)" />
        <rect x="12" y="14" width="62" height="40" rx="3" fill="#a77bf0" />
        <rect x="18" y="22" width="44" height="3" fill="#ffffffaa" /><rect x="18" y="30" width="36" height="3" fill="#ffffff88" />
        <circle cx="116" cy="64" r="22" fill="#5aa2f2" />
        <path d="M116 64 L116 42 A22 22 0 0 1 137 71 Z" fill="#a77bf0" />
        <rect x="12" y="62" width="62" height="40" rx="3" fill="#fff" />
        <rect x="18" y="70" width="48" height="3" fill="#cfd3dc" /><rect x="18" y="78" width="40" height="3" fill="#cfd3dc" /><rect x="18" y="86" width="44" height="3" fill="#cfd3dc" />
        <rect x="152" y="14" width="26" height="86" rx="3" fill="#ffffff" />
        <path d="M-12 120 H204 L210 127 Q210 131 204 131 H-6 Q-12 131 -12 127 Z" fill="#2a2a2c" />
      </g>
    </svg>
  );
}

export function PhoneAndMac() {
  return (
    <svg viewBox="0 0 540 340" role="img" aria-label="MacBook Pro and iPhone" className="art-svg">
      <Wallpaper id="pm" />
      <rect x="50" y="4" width="470" height="296" rx="14" fill="#1a1a1c" />
      <rect x="58" y="12" width="454" height="280" rx="6" fill="url(#pm-sky)" />
      <path d="M58 292 L58 190 Q170 130 280 200 T512 170 L512 292 Z" fill="url(#pm-hill)" />
      <rect x="248" y="4" width="70" height="10" rx="5" fill="#111" />
      <rect x="150" y="48" width="260" height="196" rx="5" fill="#fff" />
      <rect x="164" y="62" width="150" height="14" fill="#111" />
      <rect x="164" y="84" width="150" height="5" fill="#bbb" />
      <rect x="164" y="98" width="70" height="60" fill="#9bc5e8" /><rect x="242" y="98" width="72" height="60" fill="#d8d0c6" />
      <rect x="164" y="166" width="150" height="3" fill="#ccc" /><rect x="164" y="174" width="150" height="3" fill="#ccc" /><rect x="164" y="182" width="120" height="3" fill="#ccc" />
      <rect x="328" y="62" width="70" height="170" rx="3" fill="#f0f0f2" />
      <rect x="58" y="268" width="454" height="22" fill="#ffffff55" />
      <path d="M0 302 H570 Q570 314 556 314 H14 Q0 314 0 302 Z" fill="#3a3a3d" />
      <rect x="240" y="302" width="90" height="6" rx="3" fill="#1d1d1f" />
      {/* iPhone */}
      <g transform="translate(20 108)">
        <rect x="0" y="0" width="108" height="226" rx="18" fill="#2a2a2c" />
        <rect x="5" y="5" width="98" height="216" rx="14" fill="#fff" />
        <rect x="5" y="5" width="98" height="108" rx="14" fill="#7cc1d8" />
        <rect x="5" y="70" width="98" height="43" fill="#e9d9b8" />
        <rect x="34" y="9" width="40" height="9" rx="4.5" fill="#111" />
        <rect x="26" y="120" width="76" height="86" rx="8" fill="#f4f4f6" stroke="#ddd" />
        <rect x="34" y="132" width="56" height="4" fill="#888" /><rect x="34" y="148" width="48" height="4" fill="#888" /><rect x="34" y="164" width="52" height="4" fill="#888" />
      </g>
    </svg>
  );
}

export function WatchAndMac() {
  return (
    <svg viewBox="0 0 540 340" role="img" aria-label="MacBook Pro and Apple Watch" className="art-svg">
      <Wallpaper id="wm" />
      <rect x="50" y="4" width="470" height="296" rx="14" fill="#1a1a1c" />
      <rect x="58" y="12" width="454" height="280" rx="6" fill="url(#wm-sky)" />
      <path d="M58 292 L58 190 Q170 130 280 200 T512 170 L512 292 Z" fill="url(#wm-hill)" />
      <path d="M0 302 H570 Q570 314 556 314 H14 Q0 314 0 302 Z" fill="#3a3a3d" />
      <rect x="40" y="118" width="96" height="116" rx="26" fill="#2a2a2c" />
      <rect x="47" y="125" width="82" height="102" rx="20" fill="#0c0c0d" />
      <circle cx="88" cy="176" r="30" fill="none" stroke="#ff3b5c" strokeWidth="7" />
      <circle cx="88" cy="176" r="19" fill="none" stroke="#9cf03a" strokeWidth="7" />
      <rect x="62" y="66" width="52" height="54" fill="#d6d6da" /><rect x="62" y="232" width="52" height="54" fill="#d6d6da" />
      <rect x="170" y="60" width="240" height="170" rx="6" fill="#fff" />
      <rect x="186" y="78" width="120" height="12" fill="#111" /><rect x="186" y="100" width="190" height="5" fill="#ccc" /><rect x="186" y="112" width="170" height="5" fill="#ccc" />
    </svg>
  );
}

export function IpadAndMac() {
  return (
    <svg viewBox="0 0 540 340" role="img" aria-label="MacBook Pro and iPad" className="art-svg">
      <Wallpaper id="im" />
      <rect x="40" y="4" width="470" height="296" rx="14" fill="#1a1a1c" />
      <rect x="48" y="12" width="454" height="280" rx="6" fill="url(#im-sky)" />
      <path d="M48 292 L48 190 Q160 130 270 200 T502 170 L502 292 Z" fill="url(#im-hill)" />
      <path d="M0 302 H560 Q560 314 546 314 H14 Q0 314 0 302 Z" fill="#3a3a3d" />
      <rect x="320" y="120" width="190" height="196" rx="14" fill="#2a2a2c" />
      <rect x="327" y="127" width="176" height="182" rx="9" fill="#fff" />
      <circle cx="385" cy="190" r="34" fill="#a77bf0" /><circle cx="440" cy="238" r="28" fill="#5aa2f2" />
      <rect x="150" y="60" width="150" height="150" rx="6" fill="#fff" />
      <rect x="166" y="78" width="100" height="10" fill="#111" /><rect x="166" y="100" width="118" height="5" fill="#ccc" /><rect x="166" y="112" width="100" height="5" fill="#ccc" />
    </svg>
  );
}

export function Desktop({ kind, tone }) {
  const common = { viewBox: '0 0 300 190', className: 'art-svg', role: 'img' };
  if (kind === 'imac') return (
    <svg {...common} aria-label="iMac">
      <Wallpaper id="d1" />
      <rect x="55" y="8" width="190" height="124" rx="8" fill="#dfe6f2" />
      <rect x="62" y="15" width="176" height="94" rx="3" fill="url(#d1-sky)" />
      <rect x="55" y="112" width="190" height="20" fill={tone || '#9bb7de'} />
      <path d="M140 132 H160 L166 172 H134 Z" fill={tone || '#b6c9e6'} /><rect x="112" y="172" width="76" height="8" rx="4" fill={tone || '#9bb7de'} />
    </svg>
  );
  if (kind === 'mini') return (
    <svg {...common} aria-label="Mac mini">
      <rect x="70" y="95" width="160" height="34" rx="10" fill="#c9ccd1" />
      <rect x="70" y="95" width="160" height="10" rx="5" fill="#e4e6e9" />
      <circle cx="205" cy="116" r="2" fill="#8c8e92" />
    </svg>
  );
  if (kind === 'studio') return (
    <svg {...common} aria-label="Mac Studio">
      <rect x="85" y="60" width="130" height="86" rx="12" fill="#c9ccd1" />
      <rect x="85" y="60" width="130" height="16" rx="8" fill="#e4e6e9" />
      <circle cx="105" cy="112" r="3.5" fill="#8c8e92" /><circle cx="118" cy="112" r="3.5" fill="#8c8e92" />
    </svg>
  );
  if (kind === 'pro') return (
    <svg {...common} aria-label="Mac Pro">
      <rect x="95" y="20" width="110" height="150" rx="10" fill="#c9ccd1" />
      {Array.from({ length: 6 }).map((_, row) => Array.from({ length: 9 }).map((__, col) => <circle key={`${row}-${col}`} cx={112 + col * 9.5} cy={40 + row * 11} r="2.4" fill="#9a9ca1" />))}
      <rect x="100" y="170" width="100" height="6" rx="3" fill="#8c8e92" />
    </svg>
  );
  if (kind === 'studio-display') return (
    <svg {...common} aria-label="Studio Display">
      <Wallpaper id="d2" />
      <rect x="55" y="8" width="190" height="122" rx="7" fill="#d9dbe0" />
      <rect x="61" y="14" width="178" height="110" rx="3" fill="url(#d2-sky)" />
      <path d="M140 130 H160 L168 172 H132 Z" fill="#c6c8cd" /><rect x="112" y="172" width="76" height="7" rx="3.5" fill="#c6c8cd" />
    </svg>
  );
  return (
    <svg {...common} aria-label="Pro Display XDR">
      <Wallpaper id="d3" />
      <rect x="50" y="8" width="200" height="124" rx="4" fill="#cfd1d6" />
      <rect x="56" y="14" width="188" height="112" rx="2" fill="url(#d3-sky)" />
      <path d="M130 132 H170 L176 170 H124 Z" fill="#b9bbc0" /><rect x="112" y="170" width="76" height="8" rx="2" fill="#b9bbc0" />
    </svg>
  );
}
