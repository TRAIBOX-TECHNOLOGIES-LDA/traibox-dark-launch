import symbol from '@/assets/brand/symbol.asset.json';
import symbolWhite from '@/assets/brand/symbol-white.asset.json';
import wordmark from '@/assets/brand/wordmark-black.asset.json';
import wordmarkWhite from '@/assets/brand/wordmark-white.asset.json';

export function Brand({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return <span className="brandlock">
    <img src={light ? symbolWhite.url : symbol.url} className="brandmark" alt="" />
    <img src={light ? wordmarkWhite.url : wordmark.url} className={compact ? 'sidebrand' : 'brandimg'} alt="TRAIBOX" />
  </span>;
}