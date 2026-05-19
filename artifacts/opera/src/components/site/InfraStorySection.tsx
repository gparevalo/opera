import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";

/* ─── Data ──────────────────────────────────────────────────────── */
type FloatCard = { label: string; value: string; x: string; y: string; delay: number };
type Story = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  floats: FloatCard[];
  visualKey: string;
};

const STORIES_ES: Story[] = [
  {
    num: "01",
    eyebrow: "Quirófanos",
    title: "Salas quirúrgicas de clase mundial",
    desc: "Tres quirófanos ISO 7 / Clase C equipados con tecnología de punta para procedimientos de mediana y baja complejidad, con turnover predecible.",
    bullets: [
      "Equipamiento Stryker y Karl Storz",
      "Iluminación LED quirúrgica fría",
      "Mesas operatorias eléctricas",
      "Monitoreo multiparamétrico continuo",
    ],
    floats: [
      { label: "Clasificación", value: "ISO 7 · Clase C", x: "60%", y: "10%", delay: 0 },
      { label: "Quirófanos activos", value: "3", x: "5%", y: "55%", delay: 0.12 },
      { label: "Control térmico", value: "±0.5 °C", x: "62%", y: "73%", delay: 0.22 },
    ],
    visualKey: "or",
  },
  {
    num: "02",
    eyebrow: "Recuperación PACU",
    title: "Recuperación monitorizada",
    desc: "Área post-anestésica con ratio enfermera/paciente 1:2, monitoreo ECG continuo y protocolos de alta temprana segura.",
    bullets: [
      "Monitoreo ECG + SpO₂ permanente",
      "Ratio 1:2 enfermera / paciente",
      "Alta temprana promedio ≤ 4 h",
      "Comunicación directa con el médico",
    ],
    floats: [
      { label: "Satisfacción", value: "≥ 98%", x: "58%", y: "8%", delay: 0 },
      { label: "Alta promedio", value: "< 4 horas", x: "6%", y: "60%", delay: 0.14 },
      { label: "Monitoreo", value: "24 / 7", x: "60%", y: "74%", delay: 0.24 },
    ],
    visualKey: "rec",
  },
  {
    num: "03",
    eyebrow: "Esterilización",
    title: "Esterilización certificada",
    desc: "Ciclo cerrado de esterilización centralizada con trazabilidad total por lote, indicadores biológicos y certificación ARCSA.",
    bullets: [
      "Autoclave clase B con ciclos validados",
      "Indicadores biológicos por ciclo",
      "Trazabilidad completa por lote",
      "Norma ISO 13485 e INEN",
    ],
    floats: [
      { label: "Duración del ciclo", value: "< 30 min", x: "56%", y: "9%", delay: 0 },
      { label: "Trazabilidad", value: "100%", x: "6%", y: "58%", delay: 0.15 },
      { label: "Norma", value: "ISO 13485", x: "58%", y: "73%", delay: 0.25 },
    ],
    visualKey: "steril",
  },
  {
    num: "04",
    eyebrow: "Equipamiento",
    title: "Tecnología médica avanzada",
    desc: "Equipamiento quirúrgico de marcas líderes mundiales disponible para todos los especialistas sin inversión inicial.",
    bullets: [
      "Torres laparoscópicas 4K Karl Storz",
      "Fluoroscopía con arco en C",
      "Electrobisturí bipolar avanzado",
      "Ultrasonido intraoperatorio",
    ],
    floats: [
      { label: "Marca líder", value: "Karl Storz · Stryker", x: "48%", y: "8%", delay: 0 },
      { label: "Soporte técnico", value: "24 / 7", x: "5%", y: "58%", delay: 0.14 },
      { label: "Inversión inicial", value: "$ 0", x: "60%", y: "74%", delay: 0.22 },
    ],
    visualKey: "equip",
  },
];

const STORIES_EN: Story[] = [
  {
    num: "01",
    eyebrow: "Operating Suites",
    title: "World-class operating rooms",
    desc: "Three ISO 7 / Class C operating rooms equipped with cutting-edge technology for medium and low complexity procedures, with predictable turnover.",
    bullets: [
      "Stryker & Karl Storz equipment",
      "Cold LED surgical lighting",
      "Electric operating tables",
      "Continuous multiparameter monitoring",
    ],
    floats: [
      { label: "Classification", value: "ISO 7 · Class C", x: "60%", y: "10%", delay: 0 },
      { label: "Active ORs", value: "3", x: "5%", y: "55%", delay: 0.12 },
      { label: "Thermal control", value: "±0.5 °C", x: "62%", y: "73%", delay: 0.22 },
    ],
    visualKey: "or",
  },
  {
    num: "02",
    eyebrow: "PACU Recovery",
    title: "Monitored recovery",
    desc: "Post-anesthesia care unit with 1:2 nurse/patient ratio, continuous ECG monitoring and safe early discharge protocols.",
    bullets: [
      "Continuous ECG + SpO₂ monitoring",
      "1:2 nurse / patient ratio",
      "Average early discharge ≤ 4 h",
      "Direct communication with the physician",
    ],
    floats: [
      { label: "Satisfaction", value: "≥ 98%", x: "58%", y: "8%", delay: 0 },
      { label: "Average discharge", value: "< 4 hours", x: "6%", y: "60%", delay: 0.14 },
      { label: "Monitoring", value: "24 / 7", x: "60%", y: "74%", delay: 0.24 },
    ],
    visualKey: "rec",
  },
  {
    num: "03",
    eyebrow: "Sterilization",
    title: "Certified sterilization",
    desc: "Closed-loop centralized sterilization with full lot traceability, biological indicators, and ARCSA certification.",
    bullets: [
      "Class B autoclave with validated cycles",
      "Biological indicators per cycle",
      "Full lot traceability",
      "ISO 13485 & INEN standard",
    ],
    floats: [
      { label: "Cycle duration", value: "< 30 min", x: "56%", y: "9%", delay: 0 },
      { label: "Traceability", value: "100%", x: "6%", y: "58%", delay: 0.15 },
      { label: "Standard", value: "ISO 13485", x: "58%", y: "73%", delay: 0.25 },
    ],
    visualKey: "steril",
  },
  {
    num: "04",
    eyebrow: "Equipment",
    title: "Advanced medical technology",
    desc: "World-leading surgical equipment available for all specialists with zero upfront investment.",
    bullets: [
      "4K Karl Storz laparoscopic towers",
      "C-arm fluoroscopy",
      "Advanced bipolar electrosurgery",
      "Intraoperative ultrasound",
    ],
    floats: [
      { label: "Leading brand", value: "Karl Storz · Stryker", x: "48%", y: "8%", delay: 0 },
      { label: "Tech support", value: "24 / 7", x: "5%", y: "58%", delay: 0.14 },
      { label: "Upfront cost", value: "$ 0", x: "60%", y: "74%", delay: 0.22 },
    ],
    visualKey: "equip",
  },
];

/* ─── Abstract SVG Visuals ─────────────────────────────────────── */
function VisualOR() {
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
      {[80,160,240,320,400,480].map(x => <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="rgba(43,122,140,0.06)" strokeWidth="1"/>)}
      {[70,140,210,280,350,420].map(y => <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(43,122,140,0.06)" strokeWidth="1"/>)}
      {/* Surgical lamp overhead */}
      <circle cx="260" cy="175" r="130" stroke="rgba(43,122,140,0.1)" strokeWidth="1" fill="url(#or-lamp)" />
      <circle cx="260" cy="175" r="100" stroke="rgba(43,122,140,0.14)" strokeWidth="1.5" fill="none" />
      <circle cx="260" cy="175" r="72" stroke="rgba(43,122,140,0.18)" strokeWidth="1.5" fill="none" />
      <circle cx="260" cy="175" r="44" stroke="rgba(43,122,140,0.22)" strokeWidth="2" fill="none" />
      <circle cx="260" cy="175" r="18" fill="rgba(43,122,140,0.28)" stroke="rgba(43,122,140,0.5)" strokeWidth="1.5" />
      <circle cx="260" cy="175" r="6" fill="#2B7A8C" />
      {/* Cross-hair lines */}
      <line x1="260" y1="20" x2="260" y2="115" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      <line x1="260" y1="235" x2="260" y2="380" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      <line x1="30" y1="175" x2="145" y2="175" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      <line x1="375" y1="175" x2="490" y2="175" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      {/* 45-degree indicators */}
      {[45,135,225,315].map(deg => {
        const rad = (deg * Math.PI) / 180;
        return <line key={deg} x1={260 + 110*Math.cos(rad)} y1={175 + 110*Math.sin(rad)}
          x2={260 + 135*Math.cos(rad)} y2={175 + 135*Math.sin(rad)}
          stroke="rgba(43,122,140,0.15)" strokeWidth="1" />;
      })}
      {/* Tick marks on outer circle */}
      {Array.from({length:24}).map((_,i) => {
        const a = (i * 15 * Math.PI) / 180;
        const inner = i % 6 === 0 ? 118 : 125;
        return <line key={i} x1={260 + inner*Math.cos(a)} y1={175 + inner*Math.sin(a)}
          x2={260 + 132*Math.cos(a)} y2={175 + 132*Math.sin(a)}
          stroke="rgba(43,122,140,0.15)" strokeWidth={i % 6 === 0 ? 1.5 : 0.75} />;
      })}
      {/* Operating table */}
      <rect x="195" y="305" width="130" height="52" rx="8" fill="none" stroke="rgba(43,122,140,0.2)" strokeWidth="1.5" />
      <rect x="202" y="313" width="116" height="36" rx="6" fill="rgba(43,122,140,0.04)" />
      <line x1="260" y1="305" x2="260" y2="357" stroke="rgba(43,122,140,0.12)" strokeWidth="1" />
      {/* Equipment silhouettes */}
      <rect x="42" y="270" width="40" height="90" rx="6" fill="none" stroke="rgba(43,122,140,0.12)" strokeWidth="1" />
      <circle cx="62" cy="280" r="10" fill="none" stroke="rgba(43,122,140,0.12)" strokeWidth="1" />
      <rect x="438" y="270" width="40" height="90" rx="6" fill="none" stroke="rgba(43,122,140,0.12)" strokeWidth="1" />
      <line x1="458" y1="290" x2="458" y2="340" stroke="rgba(43,122,140,0.1)" strokeWidth="6" strokeLinecap="round" />
      {/* Corner brackets */}
      {([[28,28],[492,28],[28,392],[492,392]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={i%2===0?cx+16:cx-16} y2={cy} stroke="rgba(43,122,140,0.2)" strokeWidth="1.5"/>
          <line x1={cx} y1={cy} x2={cx} y2={i<2?cy+16:cy-16} stroke="rgba(43,122,140,0.2)" strokeWidth="1.5"/>
        </g>
      ))}
    </svg>
  );
}

function VisualRecovery() {
  const w = 520, h = 420, mid = h / 2;
  const pts: [number,number][] = [];
  for (let x = 0; x <= w; x += 6) {
    const phase = (x / w) * Math.PI * 4;
    const amp = x > 80 && x < 440 ? 38 * Math.sin(phase) * Math.exp(-Math.pow((x-260)/180,2)) : 0;
    pts.push([x, mid - amp]);
  }
  const pathD = pts.map((p,i) => (i===0?`M${p[0]},${p[1]}`:`L${p[0]},${p[1]}`)).join(" ");
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
      {[52,104,156,208,260,312,364,416,468].map(x => <line key={x} x1={x} y1="0" x2={x} y2="420" stroke="rgba(43,122,140,0.05)" strokeWidth="1"/>)}
      {[70,140,210,280,350,420].map(y => <line key={y} x1="0" y1={y} x2="520" y2={y} stroke="rgba(43,122,140,0.05)" strokeWidth="1"/>)}
      {/* Horizontal baseline */}
      <line x1="30" y1={mid} x2="490" y2={mid} stroke="rgba(43,122,140,0.12)" strokeWidth="1" strokeDasharray="4 4" />
      {/* ECG wave */}
      <path d={pathD} stroke="url(#ecg-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Glowing dots on peaks */}
      {pts.filter((_,i) => i%16===8).map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="5" fill="rgba(43,122,140,0.15)" />
          <circle cx={x} cy={y} r="2.5" fill="#2B7A8C" />
        </g>
      ))}
      {/* Monitor display frame */}
      <rect x="158" y="52" width="204" height="120" rx="10" fill="rgba(255,255,255,0.6)" stroke="rgba(43,122,140,0.14)" strokeWidth="1.5" />
      <rect x="166" y="60" width="188" height="104" rx="7" fill="rgba(43,122,140,0.04)" />
      {/* Monitor readout lines */}
      {[75,92,109,126,143].map(y => <line key={y} x1="174" y1={y} x2="346" y2={y} stroke="rgba(43,122,140,0.08)" strokeWidth="1"/>)}
      <text x="174" y="82" fill="#2B7A8C" fontSize="9" fontFamily="monospace" opacity="0.7">SpO₂  98%</text>
      <text x="174" y="100" fill="#3D4E60" fontSize="9" fontFamily="monospace" opacity="0.6">HR    72 bpm</text>
      <text x="174" y="118" fill="#3D4E60" fontSize="9" fontFamily="monospace" opacity="0.5">NIBP  120/80</text>
      <text x="174" y="136" fill="#3D4E60" fontSize="9" fontFamily="monospace" opacity="0.4">Temp  36.7 °C</text>
      {/* Bed outline */}
      <rect x="148" y="310" width="224" height="68" rx="10" fill="none" stroke="rgba(43,122,140,0.14)" strokeWidth="1.5" />
      <ellipse cx="192" cy="310" rx="30" ry="18" fill="rgba(43,122,140,0.06)" stroke="rgba(43,122,140,0.12)" strokeWidth="1" />
      <rect x="155" y="318" width="210" height="52" rx="8" fill="rgba(43,122,140,0.04)" />
      {/* IV stand */}
      <line x1="420" y1="270" x2="420" y2="380" stroke="rgba(43,122,140,0.18)" strokeWidth="2" />
      <line x1="400" y1="370" x2="440" y2="370" stroke="rgba(43,122,140,0.18)" strokeWidth="2" />
      <ellipse cx="420" cy="275" rx="14" ry="22" fill="none" stroke="rgba(43,122,140,0.18)" strokeWidth="1.5" />
      {/* Corner brackets */}
      {([[28,28],[492,28],[28,392],[492,392]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={i%2===0?cx+16:cx-16} y2={cy} stroke="rgba(43,122,140,0.15)" strokeWidth="1.5"/>
          <line x1={cx} y1={cy} x2={cx} y2={i<2?cy+16:cy-16} stroke="rgba(43,122,140,0.15)" strokeWidth="1.5"/>
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
  function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startDeg));
    const y1 = cy + r * Math.sin(toRad(startDeg));
    const x2 = cx + r * Math.cos(toRad(endDeg));
    const y2 = cy + r * Math.sin(toRad(endDeg));
    const lg = endDeg - startDeg > 180 ? 1 : 0;
    return `M${x1},${y1} A${r},${r} 0 ${lg},1 ${x2},${y2}`;
  }
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="steril-bg" cx="50%" cy="48%" r="58%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="420" fill="url(#steril-bg)" />
      {/* Grid dots */}
      {Array.from({length:8}).map((_,r) => Array.from({length:11}).map((_,c) => (
        <circle key={`${r}-${c}`} cx={c*52+14} cy={r*58+20} r="1.2" fill="rgba(43,122,140,0.08)" />
      )))}
      {/* Rotating arcs */}
      {arcs.map((arc,i) => (
        <g key={i}>
          <path d={describeArc(260, 200, arc.r, arc.offset, arc.offset + arc.sweep)}
            stroke={arc.color} strokeWidth="2" strokeLinecap="round" />
          {/* Arrow head at end */}
          <circle
            cx={260 + arc.r * Math.cos(((arc.offset + arc.sweep) * Math.PI) / 180)}
            cy={200 + arc.r * Math.sin(((arc.offset + arc.sweep) * Math.PI) / 180)}
            r="4" fill={arc.color.replace("0.","0.6")} />
        </g>
      ))}
      {/* Center autoclave icon */}
      <rect x="228" y="168" width="64" height="64" rx="10" fill="rgba(43,122,140,0.08)" stroke="rgba(43,122,140,0.22)" strokeWidth="1.5" />
      <rect x="238" y="178" width="44" height="44" rx="7" fill="rgba(43,122,140,0.06)" />
      <circle cx="260" cy="200" r="12" fill="rgba(43,122,140,0.15)" stroke="rgba(43,122,140,0.3)" strokeWidth="1.5" />
      <text x="260" y="205" textAnchor="middle" fill="#2B7A8C" fontSize="12" fontWeight="600">✓</text>
      {/* Temperature gauge bottom */}
      <path d="M 192 340 A 68 68 0 0 1 328 340" stroke="rgba(43,122,140,0.14)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M 192 340 A 68 68 0 0 1 280 276" stroke="rgba(43,122,140,0.55)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="260" cy="340" r="10" fill="#2B7A8C" />
      <line x1="260" y1="340" x2="260" y2="290" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="260" y="365" textAnchor="middle" fill="rgba(43,122,140,0.6)" fontSize="10" fontWeight="600">134 °C</text>
      {/* Tick marks around gauge */}
      {Array.from({length:7}).map((_,i) => {
        const a = (180 + i * 30) * Math.PI / 180;
        return <line key={i} x1={260+60*Math.cos(a)} y1={340+60*Math.sin(a)}
          x2={260+70*Math.cos(a)} y2={340+70*Math.sin(a)}
          stroke="rgba(43,122,140,0.2)" strokeWidth="1.5" />;
      })}
      {/* Outer ring marks */}
      {Array.from({length:16}).map((_,i) => {
        const a = (i*22.5 * Math.PI)/180;
        return <line key={i} x1={260+125*Math.cos(a)} y1={200+125*Math.sin(a)}
          x2={260+132*Math.cos(a)} y2={200+132*Math.sin(a)}
          stroke="rgba(43,122,140,0.1)" strokeWidth="1" />;
      })}
      {/* Corner brackets */}
      {([[28,28],[492,28],[28,392],[492,392]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={i%2===0?cx+16:cx-16} y2={cy} stroke="rgba(43,122,140,0.18)" strokeWidth="1.5"/>
          <line x1={cx} y1={cy} x2={cx} y2={i<2?cy+16:cy-16} stroke="rgba(43,122,140,0.18)" strokeWidth="1.5"/>
        </g>
      ))}
    </svg>
  );
}

function VisualEquipment() {
  const nodes: [number,number][] = [
    [260,190],[150,120],[370,120],[120,270],[400,270],[200,340],[320,340],[260,80]
  ];
  const edges: [number,number][] = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[1,7],[2,7],[1,3],[2,4]];
  return (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="eq-bg" cx="50%" cy="46%" r="62%">
          <stop offset="0%" stopColor="#2B7A8C" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#F2F6F9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="520" height="420" fill="url(#eq-bg)" />
      {/* Fine grid */}
      {Array.from({length:11}).map((_,i) => <line key={`v${i}`} x1={i*52} y1="0" x2={i*52} y2="420" stroke="rgba(43,122,140,0.05)" strokeWidth="1"/>)}
      {Array.from({length:9}).map((_,i) => <line key={`h${i}`} x1="0" y1={i*52} x2="520" y2={i*52} stroke="rgba(43,122,140,0.05)" strokeWidth="1"/>)}
      {/* Connection edges */}
      {edges.map(([a,b],i) => (
        <line key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="rgba(43,122,140,0.12)" strokeWidth="1.5" strokeDasharray="5 4" />
      ))}
      {/* Laparoscope camera schematic */}
      <rect x="195" y="160" width="130" height="58" rx="10" fill="rgba(255,255,255,0.55)" stroke="rgba(43,122,140,0.2)" strokeWidth="1.5" />
      <circle cx="218" cy="189" r="16" fill="rgba(43,122,140,0.1)" stroke="rgba(43,122,140,0.25)" strokeWidth="1.5" />
      <circle cx="218" cy="189" r="8" fill="rgba(43,122,140,0.2)" />
      <circle cx="218" cy="189" r="3" fill="#2B7A8C" />
      <line x1="234" y1="180" x2="315" y2="180" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      <line x1="234" y1="198" x2="315" y2="198" stroke="rgba(43,122,140,0.2)" strokeWidth="1" />
      <text x="242" y="186" fill="rgba(43,122,140,0.7)" fontSize="8" fontWeight="500">4K · 60fps</text>
      <text x="242" y="197" fill="rgba(43,122,140,0.5)" fontSize="7">Karl Storz</text>
      {/* Node dots */}
      {nodes.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i===0?14:9} fill="rgba(43,122,140,0.08)" stroke="rgba(43,122,140,0.22)" strokeWidth="1.5" />
          <circle cx={x} cy={y} r={i===0?6:4} fill="#2B7A8C" opacity={i===0?0.8:0.5} />
        </g>
      ))}
      {/* C-arm silhouette */}
      <path d="M 60 340 Q 60 270 100 250 Q 140 230 140 170 Q 140 140 160 130"
        stroke="rgba(43,122,140,0.2)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <rect x="45" y="335" width="30" height="18" rx="4" fill="none" stroke="rgba(43,122,140,0.18)" strokeWidth="1.5" />
      <rect x="148" y="120" width="28" height="20" rx="4" fill="none" stroke="rgba(43,122,140,0.18)" strokeWidth="1.5" />
      {/* Electrosurgery unit */}
      <rect x="360" y="300" width="96" height="68" rx="8" fill="rgba(255,255,255,0.45)" stroke="rgba(43,122,140,0.15)" strokeWidth="1.5" />
      {[316,326,336,346,356].map(y => <line key={y} x1="372" y1={y} x2="444" y2={y} stroke="rgba(43,122,140,0.08)" strokeWidth="1"/>)}
      <text x="408" y="320" textAnchor="middle" fill="rgba(43,122,140,0.6)" fontSize="8" fontWeight="600">ESU · 300W</text>
      <circle cx="390" cy="350" r="8" fill="rgba(43,122,140,0.12)" stroke="rgba(43,122,140,0.25)" strokeWidth="1.5" />
      <circle cx="426" cy="350" r="8" fill="rgba(43,122,140,0.12)" stroke="rgba(43,122,140,0.25)" strokeWidth="1.5" />
      {/* Corner brackets */}
      {([[28,28],[492,28],[28,392],[492,392]] as [number,number][]).map(([cx,cy],i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={i%2===0?cx+16:cx-16} y2={cy} stroke="rgba(43,122,140,0.18)" strokeWidth="1.5"/>
          <line x1={cx} y1={cy} x2={cx} y2={i<2?cy+16:cy-16} stroke="rgba(43,122,140,0.18)" strokeWidth="1.5"/>
        </g>
      ))}
    </svg>
  );
}

const VISUALS: Record<string, () => JSX.Element> = {
  or: VisualOR,
  rec: VisualRecovery,
  steril: VisualSteril,
  equip: VisualEquipment,
};

/* ─── Floating Glass Card ──────────────────────────────────────── */
function FloatCard({ card }: { card: FloatCard }) {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 60, damping: 12 });
  useEffect(() => {
    let frame: number;
    const t0 = Date.now() + card.delay * 1000;
    const tick = () => {
      const t = (Date.now() - t0) / 1000;
      y.set(Math.sin(t * 0.9) * 5);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [card.delay, y]);

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: card.x, top: card.y, y: springY }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.55, delay: card.delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(16px) saturate(1.6)",
        WebkitBackdropFilter: "blur(16px) saturate(1.6)",
        border: "1px solid rgba(43,122,140,0.14)",
        borderRadius: "12px",
        padding: "8px 14px",
        boxShadow: "0 4px 20px rgba(43,122,140,0.1), 0 1px 3px rgba(0,0,0,0.06)",
        whiteSpace: "nowrap",
      }}>
        <p style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(43,122,140,0.7)", marginBottom: 2 }}>
          {card.label}
        </p>
        <p style={{ fontSize: "13px", fontWeight: 700, color: "#0B0E12", lineHeight: 1.2 }}>
          {card.value}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main component ───────────────────────────────────────────── */
export function InfraStorySection() {
  const { language } = useLanguage();
  const stories = language === "es" ? STORIES_ES : STORIES_EN;
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const VisualComponent = VISUALS[stories[active].visualKey];

  useEffect(() => {
    const observers = blockRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i); },
        { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, [stories]);

  return (
    <section style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)" }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-40">

        {/* Section header */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Infraestructura" : "Infrastructure"}
          </span>
          <h2 className="t-display mt-5 mx-auto" style={{ maxWidth: 640 }}>
            {language === "es"
              ? "Infraestructura pensada para tu práctica"
              : "Infrastructure built for your practice"}
          </h2>
          <p className="t-lead mt-5 mx-auto" style={{ maxWidth: 520 }}>
            {language === "es"
              ? "Cada área diseñada con precisión para simplificar tu jornada quirúrgica."
              : "Every area designed with precision to simplify your surgical day."}
          </p>
        </motion.div>

        {/* 3-col storytelling layout */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0 lg:items-start">

          {/* ── Left: sticky numbered timeline ── */}
          <div className="hidden lg:flex flex-col items-center lg:sticky lg:top-28 lg:self-start lg:w-[72px] shrink-0 pt-2">
            <div className="flex flex-col items-center gap-0">
              {stories.map((s, i) => (
                <button
                  key={s.num}
                  onClick={() => {
                    blockRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="flex flex-col items-center gap-0 cursor-pointer"
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  {/* Number */}
                  <motion.span
                    animate={{
                      color: active === i ? "#2B7A8C" : "rgba(0,34,63,0.2)",
                      scale: active === i ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold tabular-nums"
                    style={{ fontSize: "15px", letterSpacing: "0.04em", lineHeight: 1 }}
                  >
                    {s.num}
                  </motion.span>
                  {/* Connector line segment */}
                  {i < stories.length - 1 && (
                    <div style={{ width: 1, height: 96, position: "relative", margin: "10px 0" }}>
                      <div style={{ position: "absolute", inset: 0, background: "rgba(0,34,63,0.08)" }} />
                      <motion.div
                        style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#2B7A8C", transformOrigin: "top" }}
                        animate={{ scaleY: active > i ? 1 : 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: horizontal dots */}
          <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
            {stories.map((s, i) => (
              <button
                key={s.num}
                onClick={() => blockRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="flex items-center gap-2"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <motion.span
                  animate={{ color: active === i ? "#2B7A8C" : "rgba(0,34,63,0.25)", fontWeight: active === i ? 700 : 500 }}
                  className="text-sm font-display tabular-nums"
                >
                  {s.num}
                </motion.span>
                {i < stories.length - 1 && <span style={{ width: 24, height: 1, background: "rgba(0,34,63,0.1)", display: "block" }} />}
              </button>
            ))}
          </div>

          {/* ── Center: sticky visual panel ── */}
          <div className="hidden lg:flex lg:sticky lg:top-20 lg:self-start shrink-0" style={{ width: 480, marginLeft: 32, marginRight: 56 }}>
            <div style={{ width: "100%", position: "relative" }}>
              {/* Visual frame */}
              <div style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid var(--op-border)",
                boxShadow: "0 20px 60px rgba(43,122,140,0.1), 0 4px 16px rgba(0,0,0,0.05)",
                background: "var(--op-canvas)",
                aspectRatio: "520/420",
                position: "relative",
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stories[active].visualKey}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <VisualComponent />
                  </motion.div>
                </AnimatePresence>
                {/* Floating cards */}
                <AnimatePresence mode="wait">
                  <motion.div key={`floats-${stories[active].visualKey}`} className="absolute inset-0">
                    {stories[active].floats.map(fc => (
                      <FloatCard key={fc.label} card={fc} />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mt-5">
                {stories.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => blockRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    animate={{ width: active === i ? 28 : 8, background: active === i ? "#2B7A8C" : "rgba(43,122,140,0.18)" }}
                    transition={{ duration: 0.35 }}
                    style={{ height: 4, borderRadius: 99, border: "none", cursor: "pointer", padding: 0 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: scroll content blocks ── */}
          <div className="flex-1 flex flex-col gap-0">
            {stories.map((story, i) => (
              <div
                key={story.num}
                ref={el => { blockRefs.current[i] = el; }}
                className="flex flex-col justify-center"
                style={{ minHeight: "60vh", paddingTop: "4vh", paddingBottom: "4vh" }}
              >
                {/* Mobile: show visual above content */}
                <div className="flex lg:hidden mb-8 rounded-2xl overflow-hidden"
                  style={{ border: "1px solid var(--op-border)", boxShadow: "0 8px 32px rgba(43,122,140,0.08)", background: "var(--op-canvas)", aspectRatio: "520/420", position: "relative" }}>
                  {active === i && <VisualComponent />}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Eyebrow */}
                  <span className="t-eyebrow mb-5 inline-flex">{story.eyebrow}</span>

                  {/* Title */}
                  <h3 className="t-headline mt-4 mb-5" style={{ maxWidth: 440 }}>{story.title}</h3>

                  {/* Description */}
                  <p className="t-body mb-8" style={{ maxWidth: 420, lineHeight: 1.75 }}>{story.desc}</p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3 mb-10">
                    {story.bullets.map((b, j) => (
                      <motion.li
                        key={b}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "var(--op-slate)" }}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                        transition={{ duration: 0.5, delay: j * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: "#2B7A8C" }} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {i === stories.length - 1 ? (
                    <Link href="/contacto">
                      <span className="btn btn-amber flex w-fit items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {language === "es" ? "Agendar visita" : "Schedule a visit"}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => blockRefs.current[i + 1]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                      className="btn btn-ghost flex w-fit items-center gap-2"
                    >
                      {language === "es" ? "Siguiente área" : "Next area"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
