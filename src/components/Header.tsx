'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="text-[28px] font-bold text-primary flex items-center gap-2">
Doctor<span className="text-secondary">Nearest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/doctors" className="text-gray-800 font-medium text-[15px] hover:text-primary transition-colors">
              Find a Doctor
            </Link>
            <Link href="/specialties" className="text-gray-800 font-medium text-[15px] hover:text-primary transition-colors">
              Specialties
            </Link>
            <Link href="/video-consultation" className="text-gray-800 font-medium text-[15px] hover:text-primary transition-colors">
              Video Consultation
            </Link>
            <Link href="/learn" className="text-gray-800 font-medium text-[15px] hover:text-primary transition-colors">
              Learn
            </Link>
            <Link href="/about" className="text-gray-800 font-medium text-[15px] hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <span>🌐</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                <option value="en">English</option>
                <option value="tc">繁體中文</option>
                <option value="sc">简体中文</option>
              </select>
            </div>
            <Link
              href="/login"
              className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Log In / Sign Up
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`w-6 h-[3px] bg-gray-800 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-[3px] bg-gray-800 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-[3px] bg-gray-800 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t flex flex-col gap-4">
            <Link href="/doctors" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Find a Doctor
            </Link>
            <Link href="/specialties" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Specialties
            </Link>
            <Link href="/video-consultation" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Video Consultation
            </Link>
            <Link href="/learn" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Learn
            </Link>
            <Link href="/about" className="text-gray-800 font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/login" className="bg-primary text-white px-5 py-2 rounded-lg text-center font-semibold">
              Log In / Sign Up
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
