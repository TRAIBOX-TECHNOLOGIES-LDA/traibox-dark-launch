import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useWebGL() {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const c = document.createElement('canvas');
      setOk(!!(c.getContext('webgl2') || c.getContext('webgl')));
    } catch { setOk(false); }
  }, []);
  return ok;
}

export function useCalm() {
  return !!useReducedMotion();
}

export const HUBS = [
  { id: 'mad', name: 'Madrid', lat: 40.4, lon: -3.7, story: 'A food exporter matches a verified buyer and agrees terms in one shared deal room.' },
  { id: 'ham', name: 'Hamburg', lat: 53.5, lon: 10, story: 'A machinery seller requests funding offers and compares them side by side.' },
  { id: 'dxb', name: 'Dubai', lat: 25.2, lon: 55.3, story: 'A distributor routes a compliance check to a human approver before payment.' },
  { id: 'sin', name: 'Singapore', lat: 1.35, lon: 103.8, story: 'An electronics buyer pays through the rail that fits the corridor.' },
  { id: 'sha', name: 'Shanghai', lat: 31.2, lon: 121.5, story: 'A manufacturer shares verified documents once and reuses them across partners.' },
  { id: 'bom', name: 'Mumbai', lat: 19, lon: 72.8, story: 'A textiles supplier builds trust history that travels with its Trade Passport.' },
  { id: 'gru', name: 'São Paulo', lat: -23.5, lon: -46.6, story: 'A coffee cooperative receives a proof bundle the buyer can verify independently.' },
  { id: 'mex', name: 'Mexico City', lat: 19.4, lon: -99.1, story: 'A parts maker connects its ERP once and every trade reads from it.' },
  { id: 'los', name: 'Lagos', lat: 6.5, lon: 3.4, story: 'A trader discovers new partners through networks of trust.' },
];

export const ARCS: { a: string; b: string; kind: 'info' | 'decision' | 'value' }[] = [
  { a: 'mad', b: 'gru', kind: 'info' }, { a: 'mad', b: 'dxb', kind: 'decision' }, { a: 'ham', b: 'sha', kind: 'value' },
  { a: 'dxb', b: 'bom', kind: 'info' }, { a: 'sin', b: 'sha', kind: 'decision' }, { a: 'mex', b: 'mad', kind: 'value' },
  { a: 'los', b: 'ham', kind: 'info' }, { a: 'bom', b: 'sin', kind: 'value' }, { a: 'gru', b: 'los', kind: 'decision' },
  { a: 'mex', b: 'sha', kind: 'info' },
];

export const KIND_COLOR = { info: '#8fc6e6', decision: '#b9c3cc', value: '#d9bb86' } as const;
