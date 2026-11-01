import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderLowongan() {
  return (
    <section className="bg-white border-b border-slate-200 py-6 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
              <Link to="/" className="hover:text-[#16B3A3] transition-colors">Beranda</Link>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
              <span className="text-slate-600 font-semibold">Katalog Lowongan</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#00193F] tracking-tight">
              Daftar Lowongan Kerja Terbaru
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Temukan karir impian Anda, bandingkan rentang gaji kompetitif, dan lamar posisi favorit secara langsung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
