"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

const BOOKING_URL = "https://webreservation.innfinitcrs.co.in/DataExchange/Index?theme=ashirvadh";
const SECRET_KEY = "InnfinitCRS@Search#2026$Key!XYZ1";

// Month names & weekdays
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// --- Pure JS AES-256-CBC Implementation for InnfinitCRS Compatibility ---
const SBOX = (() => {
  const sbox = new Uint8Array(256);
  let p = 1, q = 1;
  const rotl8 = (x: number, s: number) => ((x << s) | (x >> (8 - s))) & 0xff;
  do {
    p = (p ^ (p << 1) ^ (p & 0x80 ? 0x1b : 0)) & 0xff;
    q ^= q << 1; q ^= q << 2; q ^= q << 4; q &= 0xff;
    if (q & 0x80) q ^= 0x09;
    sbox[p] = q ^ rotl8(q, 1) ^ rotl8(q, 2) ^ rotl8(q, 3) ^ rotl8(q, 4) ^ 0x63;
  } while (p !== 1);
  sbox[0] = 0x63;
  return sbox;
})();

const xtime = (a: number) => ((a << 1) ^ (a & 0x80 ? 0x1b : 0)) & 0xff;

function expandKey(key: Uint8Array): Uint8Array {
  const w = new Uint8Array(240);
  let rcon = 1;
  const t = new Uint8Array(4);
  w.set(key, 0);
  for (let i = 8; i < 60; i++) {
    for (let j = 0; j < 4; j++) t[j] = w[(i - 1) * 4 + j];
    if (i % 8 === 0) {
      const t0 = t[0];
      t[0] = SBOX[t[1]] ^ rcon;
      t[1] = SBOX[t[2]];
      t[2] = SBOX[t[3]];
      t[3] = SBOX[t0];
      rcon = xtime(rcon);
    } else if (i % 8 === 4) {
      for (let j = 0; j < 4; j++) t[j] = SBOX[t[j]];
    }
    for (let j = 0; j < 4; j++) w[i * 4 + j] = w[(i - 8) * 4 + j] ^ t[j];
  }
  return w;
}

function encryptBlock(s: Uint8Array, w: Uint8Array) {
  let r: number, i: number, c: number;
  const t = new Uint8Array(16);
  for (i = 0; i < 16; i++) s[i] ^= w[i];
  for (r = 1; r <= 14; r++) {
    for (i = 0; i < 16; i++) t[i] = SBOX[s[(i + 4 * (i & 3)) & 15]];
    if (r < 14) {
      for (c = 0; c < 16; c += 4) {
        const a0 = t[c], a1 = t[c + 1], a2 = t[c + 2], a3 = t[c + 3];
        s[c] = xtime(a0) ^ xtime(a1) ^ a1 ^ a2 ^ a3;
        s[c + 1] = a0 ^ xtime(a1) ^ xtime(a2) ^ a2 ^ a3;
        s[c + 2] = a0 ^ a1 ^ xtime(a2) ^ xtime(a3) ^ a3;
        s[c + 3] = xtime(a0) ^ a0 ^ a1 ^ a2 ^ xtime(a3);
      }
    } else {
      s.set(t);
    }
    for (i = 0; i < 16; i++) s[i] ^= w[r * 16 + i];
  }
}

function bytesToBase64(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

function encryptCRS(text: string): string {
  const enc = new TextEncoder();
  const w = expandKey(enc.encode(SECRET_KEY));
  const data = enc.encode(text);
  const padLen = 16 - (data.length % 16);
  const plain = new Uint8Array(data.length + padLen);
  plain.set(data);
  plain.fill(padLen, data.length);

  const iv = crypto.getRandomValues(new Uint8Array(16));
  const out = new Uint8Array(16 + plain.length);
  out.set(iv, 0);
  let prev = iv;
  for (let off = 0; off < plain.length; off += 16) {
    const block = plain.slice(off, off + 16);
    for (let i = 0; i < 16; i++) block[i] ^= prev[i];
    encryptBlock(block, w);
    out.set(block, 16 + off);
    prev = block;
  }
  return bytesToBase64(out);
}

// Helpers
function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function addDays(d: Date, n: number): Date {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
}

function sameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function toISO(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function toDisplay(d: Date): string {
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>(() => startOfDay(new Date()));
  const [checkOut, setCheckOut] = useState<Date>(() => addDays(startOfDay(new Date()), 1));
  const [nights, setNights] = useState<number>(1);
  const [activeCal, setActiveCal] = useState<"checkIn" | "checkOut" | null>(null);
  const [viewMonth, setViewMonth] = useState<Date>(() => new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveCal(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const today = startOfDay(new Date());

  const handleOpenCal = (which: "checkIn" | "checkOut") => {
    if (activeCal === which) {
      setActiveCal(null);
    } else {
      const base = which === "checkIn" ? checkIn : checkOut;
      setViewMonth(new Date(base.getFullYear(), base.getMonth(), 1));
      setActiveCal(which);
    }
  };

  const handleSelectDate = (date: Date) => {
    if (activeCal === "checkIn") {
      setCheckIn(date);
      if (checkOut <= date) {
        const nextDay = addDays(date, nights > 0 ? nights : 1);
        setCheckOut(nextDay);
      } else {
        const diffNights = Math.round((checkOut.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        setNights(diffNights > 0 ? diffNights : 1);
      }
    } else if (activeCal === "checkOut") {
      setCheckOut(date);
      const diffNights = Math.round((date.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      setNights(diffNights > 0 ? diffNights : 1);
    }
    setActiveCal(null);
  };

  const handleNightsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      setNights(1);
      return;
    }
    const clamped = Math.max(1, Math.min(99, val));
    setNights(clamped);
    setCheckOut(addDays(checkIn, clamped));
  };

  const handleSearch = () => {
    if (!checkIn || !checkOut) return;
    setIsSubmitting(true);

    try {
      const payload = JSON.stringify({
        CheckIn: toISO(checkIn),
        CheckOut: toISO(checkOut),
        Nights: nights,
      });

      const encryptedData = encryptCRS(payload);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = BOOKING_URL;
      form.target = "_blank";

      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "data";
      input.value = encryptedData;
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    } catch (err) {
      console.error("Booking search encryption error:", err);
      window.open(
        `https://webreservation.innfinitcrs.co.in/Home/landingpage?theme=ashirvadh`,
        "_blank"
      );
    } finally {
      setTimeout(() => setIsSubmitting(false), 800);
    }
  };

  const minDate = activeCal === "checkIn" ? today : addDays(checkIn, 1);
  const minMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
  const currentYear = viewMonth.getFullYear();
  const currentMonthIdx = viewMonth.getMonth();

  const startGridDate = addDays(
    new Date(currentYear, currentMonthIdx, 1),
    -new Date(currentYear, currentMonthIdx, 1).getDay()
  );

  const daysGrid = Array.from({ length: 42 }, (_, i) => addDays(startGridDate, i));

  return (
    <section className="w-full relative z-30 py-6 md:py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 bg-white">
      <div 
        ref={containerRef}
        className="max-w-[1170px] mx-auto bg-white border border-[#222222]/20 md:border-[#222222]/30 shadow-[0_4px_20px_rgba(0,0,0,0.06)] relative"
      >
        {/* Main Bar matching InnfinitCRS Search Bar exact layout */}
        <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-[#222222]/20">
          
          {/* Check In Field */}
          <div className="relative flex-1">
            <div 
              onClick={() => handleOpenCal("checkIn")}
              className="h-[46px] md:h-[43px] px-3.5 sm:px-4 flex items-center justify-between cursor-pointer hover:bg-neutral-50 transition-colors select-none"
            >
              <span className="text-[14px] sm:text-[15px] font-normal text-[#111] whitespace-nowrap">
                Check In
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[13.5px] text-[#111] tracking-wide">
                  {toDisplay(checkIn)}
                </span>
                <CalendarIcon className="w-4 h-4 text-[#111] shrink-0" strokeWidth={1.8} />
              </div>
            </div>

            {/* Calendar Popover for Check In */}
            <AnimatePresence>
              {activeCal === "checkIn" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-50 top-[calc(100%+4px)] left-0 w-[290px] max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-[0_8px_28px_rgba(0,0,0,0.18)] border border-neutral-200 p-3.5 select-none"
                >
                  <CalendarPopupBody 
                    viewMonth={viewMonth}
                    setViewMonth={setViewMonth}
                    minMonth={minMonth}
                    minDate={minDate}
                    today={today}
                    currentYear={currentYear}
                    currentMonthIdx={currentMonthIdx}
                    daysGrid={daysGrid}
                    activeCal={activeCal}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    handleSelectDate={handleSelectDate}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Check Out Field */}
          <div className="relative flex-1">
            <div 
              onClick={() => handleOpenCal("checkOut")}
              className="h-[46px] md:h-[43px] px-3.5 sm:px-4 flex items-center justify-between cursor-pointer hover:bg-neutral-50 transition-colors select-none"
            >
              <span className="text-[14px] sm:text-[15px] font-normal text-[#111] whitespace-nowrap">
                Check Out
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[13px] sm:text-[13.5px] text-[#111] tracking-wide">
                  {toDisplay(checkOut)}
                </span>
                <CalendarIcon className="w-4 h-4 text-[#111] shrink-0" strokeWidth={1.8} />
              </div>
            </div>

            {/* Calendar Popover for Check Out */}
            <AnimatePresence>
              {activeCal === "checkOut" && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute z-50 top-[calc(100%+4px)] left-0 w-[290px] max-w-[calc(100vw-32px)] bg-white rounded-lg shadow-[0_8px_28px_rgba(0,0,0,0.18)] border border-neutral-200 p-3.5 select-none"
                >
                  <CalendarPopupBody 
                    viewMonth={viewMonth}
                    setViewMonth={setViewMonth}
                    minMonth={minMonth}
                    minDate={minDate}
                    today={today}
                    currentYear={currentYear}
                    currentMonthIdx={currentMonthIdx}
                    daysGrid={daysGrid}
                    activeCal={activeCal}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    handleSelectDate={handleSelectDate}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* No of Nights Field */}
          <div className="flex-1 h-[46px] md:h-[43px] px-3.5 sm:px-4 flex items-center justify-between bg-white">
            <label htmlFor="crsNightsInput" className="text-[14px] sm:text-[15px] font-normal text-[#111] whitespace-nowrap cursor-pointer">
              No of Nights
            </label>
            <input 
              id="crsNightsInput"
              type="number"
              min={1}
              max={99}
              value={nights}
              onChange={handleNightsChange}
              className="w-14 text-right font-normal text-[13px] sm:text-[14px] text-[#111] bg-transparent outline-none cursor-text [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          {/* SEARCH Button */}
          <button
            type="button"
            onClick={handleSearch}
            disabled={isSubmitting}
            className="flex-1 md:max-w-[210px] h-[46px] md:h-[43px] bg-[#111111] hover:bg-black active:bg-neutral-900 text-white font-normal text-[14px] sm:text-[15px] tracking-[0.08em] uppercase px-6 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75 disabled:cursor-wait"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>SEARCHING...</span>
              </>
            ) : (
              <span>SEARCH</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

interface CalendarPopupBodyProps {
  viewMonth: Date;
  setViewMonth: React.Dispatch<React.SetStateAction<Date>>;
  minMonth: Date;
  minDate: Date;
  today: Date;
  currentYear: number;
  currentMonthIdx: number;
  daysGrid: Date[];
  activeCal: "checkIn" | "checkOut";
  checkIn: Date;
  checkOut: Date;
  handleSelectDate: (d: Date) => void;
}

function CalendarPopupBody({
  viewMonth,
  setViewMonth,
  minMonth,
  minDate,
  today,
  currentYear,
  currentMonthIdx,
  daysGrid,
  activeCal,
  checkIn,
  checkOut,
  handleSelectDate,
}: CalendarPopupBodyProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-neutral-100">
        <button
          type="button"
          disabled={viewMonth <= minMonth}
          onClick={(e) => {
            e.stopPropagation();
            setViewMonth(new Date(currentYear, currentMonthIdx - 1, 1));
          }}
          className="w-7 h-7 rounded flex items-center justify-center text-neutral-700 hover:bg-neutral-100 disabled:opacity-20 transition-colors"
          aria-label="Previous Month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="font-semibold text-[14px] text-[#111]">
          {MONTH_NAMES[currentMonthIdx]} {currentYear}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setViewMonth(new Date(currentYear, currentMonthIdx + 1, 1));
          }}
          className="w-7 h-7 rounded flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Next Month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center mb-1">
        {WEEKDAYS.map((wd) => (
          <span key={wd} className="text-[11px] font-medium text-neutral-500 py-0.5">
            {wd}
          </span>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {daysGrid.map((day, idx) => {
          const isCurrentMonth = day.getMonth() === currentMonthIdx;
          const isDisabled = day < minDate;
          const isSelected = activeCal === "checkIn" ? sameDay(day, checkIn) : sameDay(day, checkOut);
          const isTodayDate = sameDay(day, today);

          return (
            <button
              key={idx}
              type="button"
              disabled={isDisabled}
              onClick={(e) => {
                e.stopPropagation();
                handleSelectDate(day);
              }}
              className={`h-7 w-7 mx-auto rounded text-xs flex items-center justify-center transition-all ${
                isSelected
                  ? "bg-[#111] text-white font-bold"
                  : isDisabled
                  ? "text-neutral-300 cursor-not-allowed"
                  : !isCurrentMonth
                  ? "text-neutral-400 hover:bg-neutral-100"
                  : isTodayDate
                  ? "border border-neutral-400 font-semibold text-[#111] hover:bg-neutral-100"
                  : "text-neutral-800 hover:bg-neutral-100 cursor-pointer"
              }`}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-neutral-100 text-[11px]">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleSelectDate(minDate);
          }}
          className="text-neutral-500 hover:text-black transition-colors"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (today >= minDate) {
              handleSelectDate(today);
            } else {
              setViewMonth(minMonth);
            }
          }}
          className="text-[#111] font-semibold hover:underline"
        >
          Today
        </button>
      </div>
    </>
  );
}
