function VisualOR() {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="or-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="or-lamp" cx="50%" cy="42%" r="38%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2B7A8C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="420" fill="url(#or-bg)" />
      {/* Room grid */}
      {[80, 160, 240, 320, 400, 480].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="420"
          stroke="rgba(43,122,140,0.06)"
          strokeWidth="1"
        />
      ))}
      {[70, 140, 210, 280, 350, 420].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="520"
          y2={y}
          stroke="rgba(43,122,140,0.06)"
          strokeWidth="1"
        />
      ))}
      {/* Surgical lamp overhead */}
      <circle
        cx="260"
        cy="175"
        r="130"
        stroke="rgba(43,122,140,0.1)"
        strokeWidth="1"
        fill="url(#or-lamp)"
      />
      <circle
        cx="260"
        cy="175"
        r="100"
        stroke="rgba(43,122,140,0.14)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="260"
        cy="175"
        r="72"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="260"
        cy="175"
        r="44"
        stroke="rgba(43,122,140,0.22)"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="260"
        cy="175"
        r="18"
        fill="rgba(43,122,140,0.28)"
        stroke="rgba(43,122,140,0.5)"
        strokeWidth="1.5"
      />
      <circle cx="260" cy="175" r="6" fill="#2B7A8C" />
      {/* Cross-hair lines */}
      <line
        x1="260"
        y1="20"
        x2="260"
        y2="115"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <line
        x1="260"
        y1="235"
        x2="260"
        y2="380"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <line
        x1="30"
        y1="175"
        x2="145"
        y2="175"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <line
        x1="375"
        y1="175"
        x2="490"
        y2="175"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      {/* 45-degree indicators */}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={260 + 110 * Math.cos(rad)}
            y1={175 + 110 * Math.sin(rad)}
            x2={260 + 135 * Math.cos(rad)}
            y2={175 + 135 * Math.sin(rad)}
            stroke="rgba(43,122,140,0.15)"
            strokeWidth="1"
          />
        );
      })}
      {/* Tick marks on outer circle */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        const inner = i % 6 === 0 ? 118 : 125;
        return (
          <line
            key={i}
            x1={260 + inner * Math.cos(a)}
            y1={175 + inner * Math.sin(a)}
            x2={260 + 132 * Math.cos(a)}
            y2={175 + 132 * Math.sin(a)}
            stroke="rgba(43,122,140,0.15)"
            strokeWidth={i % 6 === 0 ? 1.5 : 0.75}
          />
        );
      })}
      {/* Operating table */}
      <rect
        x="195"
        y="305"
        width="130"
        height="52"
        rx="8"
        fill="none"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1.5"
      />
      <rect
        x="202"
        y="313"
        width="116"
        height="36"
        rx="6"
        fill="rgba(43,122,140,0.04)"
      />
      <line
        x1="260"
        y1="305"
        x2="260"
        y2="357"
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
      />
      {/* Equipment silhouettes */}
      <rect
        x="42"
        y="270"
        width="40"
        height="90"
        rx="6"
        fill="none"
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
      />
      <circle
        cx="62"
        cy="280"
        r="10"
        fill="none"
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
      />
      <rect
        x="438"
        y="270"
        width="40"
        height="90"
        rx="6"
        fill="none"
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
      />
      <line
        x1="458"
        y1="290"
        x2="458"
        y2="340"
        stroke="rgba(43,122,140,0.1)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Corner brackets */}
      {(
        [
          [28, 28],
          [492, 28],
          [28, 392],
          [492, 392],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={i % 2 === 0 ? cx + 16 : cx - 16}
            y2={cy}
            stroke="rgba(43,122,140,0.2)"
            strokeWidth="1.5"
          />
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={i < 2 ? cy + 16 : cy - 16}
            stroke="rgba(43,122,140,0.2)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function VisualRecovery() {
  const w = 520,
    h = 420,
    mid = h / 2;
  const pts: [number, number][] = [];
  for (let x = 0; x <= w; x += 6) {
    const phase = (x / w) * Math.PI * 4;
    const amp =
      x > 80 && x < 440
        ? 38 * Math.sin(phase) * Math.exp(-Math.pow((x - 260) / 180, 2))
        : 0;
    pts.push([x, mid - amp]);
  }
  const pathD = pts
    .map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`))
    .join(" ");
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="rec-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ecg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0" />
          <stop offset="30%" stopColor="#2B7A8C" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#2B7A8C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2B7A8C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="520" height="420" fill="url(#rec-bg)" />
      {/* Grid */}
      {[52, 104, 156, 208, 260, 312, 364, 416, 468].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="420"
          stroke="rgba(43,122,140,0.05)"
          strokeWidth="1"
        />
      ))}
      {[70, 140, 210, 280, 350, 420].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="520"
          y2={y}
          stroke="rgba(43,122,140,0.05)"
          strokeWidth="1"
        />
      ))}
      {/* Horizontal baseline */}
      <line
        x1="30"
        y1={mid}
        x2="490"
        y2={mid}
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      {/* ECG wave */}
      <path
        d={pathD}
        stroke="url(#ecg-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Glowing dots on peaks */}
      {pts
        .filter((_, i) => i % 16 === 8)
        .map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="rgba(43,122,140,0.15)" />
            <circle cx={x} cy={y} r="2.5" fill="#2B7A8C" />
          </g>
        ))}
      {/* Monitor display frame */}
      <rect
        x="158"
        y="52"
        width="204"
        height="120"
        rx="10"
        fill="rgba(255,255,255,0.6)"
        stroke="rgba(43,122,140,0.14)"
        strokeWidth="1.5"
      />
      <rect
        x="166"
        y="60"
        width="188"
        height="104"
        rx="7"
        fill="rgba(43,122,140,0.04)"
      />
      {/* Monitor readout lines */}
      {[75, 92, 109, 126, 143].map((y) => (
        <line
          key={y}
          x1="174"
          y1={y}
          x2="346"
          y2={y}
          stroke="rgba(43,122,140,0.08)"
          strokeWidth="1"
        />
      ))}
      <text
        x="174"
        y="82"
        fill="#2B7A8C"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.7"
      >
        SpO₂ 98%
      </text>
      <text
        x="174"
        y="100"
        fill="#3D4E60"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.6"
      >
        HR 72 bpm
      </text>
      <text
        x="174"
        y="118"
        fill="#3D4E60"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.5"
      >
        NIBP 120/80
      </text>
      <text
        x="174"
        y="136"
        fill="#3D4E60"
        fontSize="9"
        fontFamily="monospace"
        opacity="0.4"
      >
        Temp 36.7 °C
      </text>
      {/* Bed outline */}
      <rect
        x="148"
        y="310"
        width="224"
        height="68"
        rx="10"
        fill="none"
        stroke="rgba(43,122,140,0.14)"
        strokeWidth="1.5"
      />
      <ellipse
        cx="192"
        cy="310"
        rx="30"
        ry="18"
        fill="rgba(43,122,140,0.06)"
        stroke="rgba(43,122,140,0.12)"
        strokeWidth="1"
      />
      <rect
        x="155"
        y="318"
        width="210"
        height="52"
        rx="8"
        fill="rgba(43,122,140,0.04)"
      />
      {/* IV stand */}
      <line
        x1="420"
        y1="270"
        x2="420"
        y2="380"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="2"
      />
      <line
        x1="400"
        y1="370"
        x2="440"
        y2="370"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="2"
      />
      <ellipse
        cx="420"
        cy="275"
        rx="14"
        ry="22"
        fill="none"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="1.5"
      />
      {/* Corner brackets */}
      {(
        [
          [28, 28],
          [492, 28],
          [28, 392],
          [492, 392],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={i % 2 === 0 ? cx + 16 : cx - 16}
            y2={cy}
            stroke="rgba(43,122,140,0.15)"
            strokeWidth="1.5"
          />
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={i < 2 ? cy + 16 : cy - 16}
            stroke="rgba(43,122,140,0.15)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function VisualSteril() {
  const arcs = [
    { r: 110, sweep: 240, offset: -90, color: "rgba(43,122,140,0.25)" },
    { r: 82, sweep: 200, offset: 30, color: "rgba(43,122,140,0.18)" },
    { r: 56, sweep: 270, offset: 160, color: "rgba(43,122,140,0.14)" },
  ];
  function describeArc(
    cx: number,
    cy: number,
    r: number,
    startDeg: number,
    endDeg: number,
  ) {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    const lg = endDeg - startDeg > 180 ? 1 : 0;
    return `M${x1},${y1} A${r},${r} 0 ${lg},1 ${x2},${y2}`;
  }
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="steril-bg" cx="50%" cy="48%" r="58%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="420" fill="url(#steril-bg)" />
      {/* Grid dots */}
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 11 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * 52 + 14}
            cy={r * 58 + 20}
            r="1.2"
            fill="rgba(43,122,140,0.08)"
          />
        )),
      )}
      {/* Rotating arcs */}
      {arcs.map((arc, i) => (
        <g key={i}>
          <path
            d={describeArc(260, 200, arc.r, arc.offset, arc.offset + arc.sweep)}
            stroke={arc.color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Arrow head at end */}
          <circle
            cx={
              260 + arc.r * Math.cos(((arc.offset + arc.sweep) * Math.PI) / 180)
            }
            cy={
              200 + arc.r * Math.sin(((arc.offset + arc.sweep) * Math.PI) / 180)
            }
            r="4"
            fill={arc.color.replace("0.", "0.6")}
          />
        </g>
      ))}
      {/* Center autoclave icon */}
      <rect
        x="228"
        y="168"
        width="64"
        height="64"
        rx="10"
        fill="rgba(43,122,140,0.08)"
        stroke="rgba(43,122,140,0.22)"
        strokeWidth="1.5"
      />
      <rect
        x="238"
        y="178"
        width="44"
        height="44"
        rx="7"
        fill="rgba(43,122,140,0.06)"
      />
      <circle
        cx="260"
        cy="200"
        r="12"
        fill="rgba(43,122,140,0.15)"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="1.5"
      />
      <text
        x="260"
        y="205"
        textAnchor="middle"
        fill="#2B7A8C"
        fontSize="12"
        fontWeight="600"
      >
        ✓
      </text>
      {/* Temperature gauge bottom */}
      <path
        d="M 192 340 A 68 68 0 0 1 328 340"
        stroke="rgba(43,122,140,0.14)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 192 340 A 68 68 0 0 1 280 276"
        stroke="rgba(43,122,140,0.55)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="260" cy="340" r="10" fill="#2B7A8C" />
      <line
        x1="260"
        y1="340"
        x2="260"
        y2="290"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text
        x="260"
        y="365"
        textAnchor="middle"
        fill="rgba(43,122,140,0.6)"
        fontSize="10"
        fontWeight="600"
      >
        134 °C
      </text>
      {/* Tick marks around gauge */}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = ((180 + i * 30) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={260 + 60 * Math.cos(a)}
            y1={340 + 60 * Math.sin(a)}
            x2={260 + 70 * Math.cos(a)}
            y2={340 + 70 * Math.sin(a)}
            stroke="rgba(43,122,140,0.2)"
            strokeWidth="1.5"
          />
        );
      })}
      {/* Outer ring marks */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={260 + 125 * Math.cos(a)}
            y1={200 + 125 * Math.sin(a)}
            x2={260 + 132 * Math.cos(a)}
            y2={200 + 132 * Math.sin(a)}
            stroke="rgba(43,122,140,0.1)"
            strokeWidth="1"
          />
        );
      })}
      {/* Corner brackets */}
      {(
        [
          [28, 28],
          [492, 28],
          [28, 392],
          [492, 392],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={i % 2 === 0 ? cx + 16 : cx - 16}
            y2={cy}
            stroke="rgba(43,122,140,0.18)"
            strokeWidth="1.5"
          />
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={i < 2 ? cy + 16 : cy - 16}
            stroke="rgba(43,122,140,0.18)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

function VisualEquipment() {
  const nodes: [number, number][] = [
    [260, 190],
    [150, 120],
    [370, 120],
    [120, 270],
    [400, 270],
    [200, 340],
    [320, 340],
    [260, 80],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [1, 7],
    [2, 7],
    [1, 3],
    [2, 4],
  ];
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <radialGradient id="eq-bg" cx="50%" cy="46%" r="62%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="420" fill="url(#eq-bg)" />
      {/* Fine grid */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 52}
          y1="0"
          x2={i * 52}
          y2="420"
          stroke="rgba(43,122,140,0.05)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1="0"
          y1={i * 52}
          x2="520"
          y2={i * 52}
          stroke="rgba(43,122,140,0.05)"
          strokeWidth="1"
        />
      ))}
      {/* Connection edges */}
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="rgba(43,122,140,0.12)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
      ))}
      {/* Laparoscope camera schematic */}
      <rect
        x="195"
        y="160"
        width="130"
        height="58"
        rx="10"
        fill="rgba(255,255,255,0.55)"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1.5"
      />
      <circle
        cx="218"
        cy="189"
        r="16"
        fill="rgba(43,122,140,0.1)"
        stroke="rgba(43,122,140,0.25)"
        strokeWidth="1.5"
      />
      <circle cx="218" cy="189" r="8" fill="rgba(43,122,140,0.2)" />
      <circle cx="218" cy="189" r="3" fill="#2B7A8C" />
      <line
        x1="234"
        y1="180"
        x2="315"
        y2="180"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <line
        x1="234"
        y1="198"
        x2="315"
        y2="198"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <text
        x="242"
        y="186"
        fill="rgba(43,122,140,0.7)"
        fontSize="8"
        fontWeight="500"
      >
        4K · 60fps
      </text>
      <text x="242" y="197" fill="rgba(43,122,140,0.5)" fontSize="7">
        Karl Storz
      </text>
      {/* Node dots */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={y}
            r={i === 0 ? 14 : 9}
            fill="rgba(43,122,140,0.08)"
            stroke="rgba(43,122,140,0.22)"
            strokeWidth="1.5"
          />
          <circle
            cx={x}
            cy={y}
            r={i === 0 ? 6 : 4}
            fill="#2B7A8C"
            opacity={i === 0 ? 0.8 : 0.5}
          />
        </g>
      ))}
      {/* C-arm silhouette */}
      <path
        d="M 60 340 Q 60 270 100 250 Q 140 230 140 170 Q 140 140 160 130"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect
        x="45"
        y="335"
        width="30"
        height="18"
        rx="4"
        fill="none"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="1.5"
      />
      <rect
        x="148"
        y="120"
        width="28"
        height="20"
        rx="4"
        fill="none"
        stroke="rgba(43,122,140,0.18)"
        strokeWidth="1.5"
      />
      {/* Electrosurgery unit */}
      <rect
        x="360"
        y="300"
        width="96"
        height="68"
        rx="8"
        fill="rgba(255,255,255,0.45)"
        stroke="rgba(43,122,140,0.15)"
        strokeWidth="1.5"
      />
      {[316, 326, 336, 346, 356].map((y) => (
        <line
          key={y}
          x1="372"
          y1={y}
          x2="444"
          y2={y}
          stroke="rgba(43,122,140,0.08)"
          strokeWidth="1"
        />
      ))}
      <text
        x="408"
        y="320"
        textAnchor="middle"
        fill="rgba(43,122,140,0.6)"
        fontSize="8"
        fontWeight="600"
      >
        ESU · 300W
      </text>
      <circle
        cx="390"
        cy="350"
        r="8"
        fill="rgba(43,122,140,0.12)"
        stroke="rgba(43,122,140,0.25)"
        strokeWidth="1.5"
      />
      <circle
        cx="426"
        cy="350"
        r="8"
        fill="rgba(43,122,140,0.12)"
        stroke="rgba(43,122,140,0.25)"
        strokeWidth="1.5"
      />
      {/* Corner brackets */}
      {(
        [
          [28, 28],
          [492, 28],
          [28, 392],
          [492, 392],
        ] as [number, number][]
      ).map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx}
            y1={cy}
            x2={i % 2 === 0 ? cx + 16 : cx - 16}
            y2={cy}
            stroke="rgba(43,122,140,0.18)"
            strokeWidth="1.5"
          />
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={i < 2 ? cy + 16 : cy - 16}
            stroke="rgba(43,122,140,0.18)"
            strokeWidth="1.5"
          />
        </g>
      ))}
    </svg>
  );
}

export { VisualOR, VisualRecovery, VisualSteril, VisualEquipment };
