'use client';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print inline-block bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-colors"
    >
      Save as PDF (Ctrl+P / Cmd+P)
    </button>
  );
}
