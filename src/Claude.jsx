// LiceBanishers NYC — Homepage
// Stack: React 18 · Tailwind CSS · DaisyUI · Framer Motion · AOS · React Icons
//
// npm install framer-motion aos react-icons
// tailwind.config.js → plugins: [require("daisyui")]
// main.jsx / index.css → import "aos/dist/aos.css";
// Add to index.html <head>:
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet">

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaPhone, FaCalendarAlt, FaStar, FaCheckCircle,
  FaShieldAlt, FaClock, FaMapMarkerAlt, FaQuoteLeft,
  FaBars, FaTimes, FaLeaf, FaAward, FaHeart,
  FaChevronDown, FaArrowRight,
} from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdVerified, MdChildCare, MdOutlineSchool } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { BsShieldFillCheck, BsStarFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────────────────── */
const C = {
  forest:     "#1B5E4B",
  forestDark: "#0E3D30",
  forestMid:  "#2A7A62",
  forestLt:   "#E4F2ED",
  coral:      "#F26B3A",
  coralLt:    "#FEF0E9",
  coralDk:    "#D4521F",
  cream:      "#FBF7F2",
  creamDk:    "#F3ECE2",
  gold:       "#F0A500",
  dark:       "#1A1A1A",
  mid:        "#4A4A4A",
  light:      "#7A7A7A",
};

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: "🏥", bar: C.forest, lbl: "Most Popular", lColor: C.forest, lBg: C.forestLt,
    title: "In-Clinic Treatment",    price: "From $150",
    desc: "Professional removal at our serene NYC clinic. Safe, thorough, and done in one visit.",
  },
  {
    icon: "🏠", bar: C.coral, lbl: "Convenient", lColor: C.coral, lBg: C.coralLt,
    title: "In-Home Visit",          price: "From $200",
    desc: "We come to you anywhere in NYC — discreet, private, and perfectly comfortable.",
  },
  {
    icon: "🔍", bar: "#D97706", lbl: "Prevention", lColor: "#92400E", lBg: "#FFFBEB",
    title: "Preventive Screening",   price: "From $50",
    desc: "Back-to-school checks, camp clearances, and outbreak screenings for peace of mind.",
  },
  {
    icon: "📜", bar: "#16A34A", lbl: "Guaranteed", lColor: "#15803D", lBg: "#DCFCE7",
    title: "Follow-Up & Certificate", price: "Included",
    desc: "Post-treatment recheck + lice-free school certificate with every service.",
  },
];

const STEPS = [
  { n: "01", icon: "📅", bg: C.forest, title: "Book in 60 Seconds",  desc: "Call or book online — same-day slots available across all 5 boroughs, 7 days a week." },
  { n: "02", icon: "🔬", bg: C.coral,  title: "Expert Head Check",   desc: "A certified specialist inspects thoroughly using clinical-grade magnification tools." },
  { n: "03", icon: "💆", bg: C.forest, title: "Gentle Treatment",    desc: "Non-toxic, pesticide-free solutions — tough on lice, completely safe for kids." },
  { n: "04", icon: "🎉", bg: C.coral,  title: "Leave Lice-Free",     desc: "Walk out with a certified lice-free letter accepted by NYC schools & daycares." },
];

const WHY_US = [
  { icon: <FaLeaf />,            title: "100% Non-Toxic",           desc: "Safe for babies, toddlers & pregnant women. No pesticides, ever." },
  { icon: <BsShieldFillCheck />, title: "Satisfaction Guarantee",   desc: "Lice return within 30 days? We retreat at no charge." },
  { icon: <MdVerified />,        title: "Certified Specialists",    desc: "All technicians hold professional lice-removal certification." },
  { icon: <MdOutlineSchool />,   title: "School Certificates",      desc: "Accepted by NYC schools, daycares, and summer camps." },
  { icon: <FaClock />,           title: "Evenings & Weekends",      desc: "Flexible scheduling built for busy NYC parents." },
  { icon: <FaRegSmileBeam />,    title: "Kid-Friendly Process",     desc: "Calm, patient technicians that make kids feel at ease." },
];

const REVIEWS = [
  { ini: "SM", name: "Sarah M.",       loc: "Upper West Side",      when: "2 weeks ago",  text: "Absolute lifesavers! My daughter came home from school and I was panicking. LiceBanishers came same day, were incredibly gentle with my 7-year-old, and she was completely clear in under an hour. Worth every penny!" },
  { ini: "JK", name: "Jennifer K.",    loc: "Park Slope, Brooklyn", when: "1 month ago",  text: "THREE of my kids got lice at the same time. The team was calm, treated all three in under 2 hours. The technicians explained every step and my kids actually enjoyed it — they even asked to come back!" },
  { ini: "MT", name: "Michael T.",     loc: "Astoria, Queens",      when: "3 weeks ago",  text: "Booked online at 10pm, had a morning appointment. Clinic was spotless. My son barely noticed a thing. Got our school clearance certificate on the spot. Highly, highly recommend." },
  { ini: "AR", name: "Amanda R.",      loc: "Tribeca, Manhattan",   when: "1 week ago",   text: "Second time using LiceBanishers and just as great as the first. Clean, fast, thorough. The follow-up check gave us total peace of mind. Staff genuinely cares about the families they help." },
  { ini: "LP", name: "Lisa & David P.",loc: "Forest Hills, Queens", when: "2 months ago", text: "Tried a pharmacy treatment first — big mistake. Called LiceBanishers and they fixed everything. All-natural, no harsh chemicals, twins were completely clear. Warm, patient, and so knowledgeable." },
  { ini: "CL", name: "Christine L.",   loc: "Riverdale, Bronx",     when: "5 days ago",   text: "I was embarrassed to call but they immediately made me feel at ease — zero judgment. Fast appointment, expert treatment, and one very relieved 10-year-old. Call them FIRST, not last like I did!" },
];

const FAQS = [
  { q: "How long does a full treatment take?",            a: "Most sessions run 60–90 minutes depending on hair length and severity. We work methodically to ensure complete clearance in a single visit." },
  { q: "Are your treatments safe for young children?",   a: "Absolutely. We use pesticide-free, clinically tested solutions safe for children of all ages — including newborns, toddlers, and pregnant women." },
  { q: "Do you offer same-day appointments?",            a: "Yes! Same-day and next-day slots are available throughout NYC. Book online or call and we will do everything possible to see you quickly." },
  { q: "What if lice come back after treatment?",        a: "We stand behind our work. If lice return within 30 days due to our treatment, we will re-treat completely free of charge — no questions asked." },
  { q: "Do you provide a school clearance certificate?", a: "Every successful treatment comes with a lice-free certificate accepted by NYC schools, daycares, and summer camps." },
  { q: "Do you serve all NYC boroughs?",                 a: "Yes — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Both in-clinic and in-home visits available across all five boroughs." },
];

/* ─────────────────────────────────────────────────────────────
   SMALL REUSABLE PIECES
───────────────────────────────────────────────────────── */
const Stars = ({ n = 5, sz = 14 }) => (
  <span style={{ display: "inline-flex", gap: 2 }}>
    {Array.from({ length: n }).map((_, i) => (
      <BsStarFill key={i} style={{ color: "#FBBF24", fontSize: sz }} />
    ))}
  </span>
);

const GLogo = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function FaqItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div data-aos="fade-up" data-aos-delay={i * 70}
      style={{ border: "1px solid #E5DDD4", borderRadius: 14, overflow: "hidden", marginBottom: 10 }}>
      <button onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "white", border: "none", cursor: "pointer", fontFamily: "Nunito,sans-serif", fontSize: 15, fontWeight: 700, color: C.dark, textAlign: "left", gap: 12 }}>
        <span>{faq.q}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ flexShrink: 0, color: C.forest }}>
          <FaChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p style={{ margin: 0, padding: "0 22px 20px", fontSize: 14, color: C.mid, lineHeight: 1.75, background: "#FAFAF8", borderTop: "1px solid #f0e8de" }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ReviewCard({ r, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 16px 44px rgba(0,0,0,0.11)" }}
      style={{ background: "white", borderRadius: 20, padding: "24px 22px", border: "1px solid #EEE6DC", display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 4px 18px rgba(0,0,0,0.055)", cursor: "default" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg,${C.forest},${C.forestMid})`, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, fontFamily: "Nunito,sans-serif", flexShrink: 0 }}>{r.ini}</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontWeight: 800, fontSize: 13, color: C.dark }}>{r.name}</span>
              <MdVerified style={{ color: "#2563EB", fontSize: 13 }} />
            </div>
            <span style={{ fontSize: 11, color: C.light }}>{r.loc}</span>
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <Stars n={5} sz={12} />
          <span style={{ fontSize: 10, color: C.light, display: "block", marginTop: 2 }}>{r.when}</span>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: 13, color: C.mid, lineHeight: 1.72, position: "relative" }}>
        <FaQuoteLeft style={{ position: "absolute", top: -2, left: -4, fontSize: 34, color: C.forestLt, zIndex: 0 }} />
        <span style={{ position: "relative", zIndex: 1 }}>{r.text}</span>
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 10, borderTop: "1px solid #F5EDE2" }}>
        <GLogo size={14} />
        <span style={{ fontSize: 11, color: C.light, fontWeight: 600 }}>Google Review</span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────── */
export default function Claude() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY    = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    AOS.init({ duration: 750, once: true, easing: "ease-out-quart", offset: 60 });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const to = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  /* Shared button styles */
  const bPrimary = { display: "inline-flex", alignItems: "center", gap: 8, background: C.coral, color: "white", padding: "15px 30px", borderRadius: 50, fontFamily: "Nunito,sans-serif", fontWeight: 800, fontSize: 15, border: "none", cursor: "pointer", textDecoration: "none", boxShadow: "0 6px 24px rgba(242,107,58,0.42)", transition: "all 0.25s ease", letterSpacing: "0.2px" };
  const bOutlineW = { display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", padding: "15px 30px", borderRadius: 50, fontFamily: "Nunito,sans-serif", fontWeight: 800, fontSize: 15, border: "2px solid rgba(255,255,255,0.45)", cursor: "pointer", textDecoration: "none", transition: "all 0.25s ease" };

  return (
    <div style={{ fontFamily: "Nunito,sans-serif", background: C.cream, color: C.dark, overflowX: "hidden" }}>

      {/* ── GLOBAL STYLES ─────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Nunito:wght@400;500;600;700;800;900&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        .df{font-family:'Fraunces',Georgia,serif!important}

        @keyframes pulseC {
          0%  {box-shadow:0 6px 24px rgba(242,107,58,0.42),0 0 0 0 rgba(242,107,58,0.45)}
          70% {box-shadow:0 6px 24px rgba(242,107,58,0.42),0 0 0 16px rgba(242,107,58,0)}
          100%{box-shadow:0 6px 24px rgba(242,107,58,0.42),0 0 0 0 rgba(242,107,58,0)}
        }
        .pulse{animation:pulseC 2.4s ease-out infinite}

        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        .fa{animation:floatY 3.6s ease-in-out infinite}
        .fb{animation:floatY 4.8s ease-in-out .8s infinite}
        .fc{animation:floatY 4.2s ease-in-out 1.6s infinite}

        @keyframes spinS{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .ss{animation:spinS 20s linear infinite}

        .liftH:hover{transform:translateY(-3px)!important;filter:brightness(1.06)}
        .cardH:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,0,0,0.11)!important}

        /* Layout */
        .si{max-width:1200px;margin:0 auto;padding:0 24px}
        .badge{display:inline-flex;align-items:center;gap:6px;background:${C.forestLt};color:${C.forest};padding:6px 14px;border-radius:50px;font-size:12px;font-weight:800;letter-spacing:.8px;text-transform:uppercase}
        .stitle{font-family:'Fraunces',Georgia,serif;font-size:clamp(28px,3.6vw,44px);font-weight:800;line-height:1.12;margin:0;color:${C.dark}}

        .heroGrid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
        @media(max-width:900px){.heroGrid{grid-template-columns:1fr}.heroR{display:none!important}}

        .srvGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
        @media(max-width:1100px){.srvGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:580px){.srvGrid{grid-template-columns:1fr}}

        .stepGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}
        @media(max-width:900px){.stepGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:540px){.stepGrid{grid-template-columns:1fr}}

        .whyCols{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
        @media(max-width:900px){.whyCols{grid-template-columns:1fr}}

        .whyF{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        @media(max-width:520px){.whyF{grid-template-columns:1fr}}

        .rvGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        @media(max-width:1024px){.rvGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:640px){.rvGrid{grid-template-columns:1fr}}

        .tBar{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        @media(max-width:700px){.tBar{grid-template-columns:repeat(2,1fr)}}

        .ndL{display:flex;gap:28px;align-items:center}
        .ndC{display:flex;gap:10px;align-items:center}
        .nmT{display:none!important}
        @media(max-width:960px){.ndL{display:none}.ndC{display:none}.nmT{display:flex!important}}

        .dotBg{background-image:radial-gradient(circle,rgba(255,255,255,0.18) 1px,transparent 1px);background-size:36px 36px}

        html{scrollbar-width:thin;scrollbar-color:${C.forestMid} ${C.cream}}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-track{background:${C.cream}}
        ::-webkit-scrollbar-thumb{background:${C.forestMid};border-radius:3px}
      `}</style>

      {/* ── TOP BAR ──────────────────────────────────────────────── */}
      <div style={{ background: C.forest, color: "white", textAlign: "center", padding: "9px 16px", fontSize: 13, fontWeight: 600 }}>
        📍 Serving All 5 NYC Boroughs &nbsp;·&nbsp; ⚡ Same-Day Appointments Available &nbsp;·&nbsp;
        <a href="tel:+12125550199" style={{ color: "white", fontWeight: 800, textDecoration: "underline" }}>(212) 555-0199</a>
      </div>

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <motion.nav style={{ position: "sticky", top: 0, zIndex: 100, background: "white", backdropFilter: "blur(12px)", borderBottom: `1px solid ${scrolled ? "#EEE6DC" : "#F3E9DD"}`, boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.09)" : "none", transition: "all .3s ease" }}>
        <div className="si" style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: `linear-gradient(135deg,${C.forest},${C.forestMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>🛡️</div>
            <div>
              <div className="df" style={{ fontSize: 21, fontWeight: 800, color: C.forest, lineHeight: 1.05 }}>LiceBanishers</div>
              <div style={{ fontSize: 10.5, color: C.light, letterSpacing: ".4px" }}>NYC's Trusted Lice Experts</div>
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="ndL">
            {["Services","How It Works","About","Reviews","FAQ","Contact"].map(l => (
              <button key={l} onClick={() => to(l.toLowerCase().replace(/ /g,"-"))}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, color: C.mid, fontFamily: "Nunito,sans-serif", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = C.forest}
                onMouseLeave={e => e.target.style.color = C.mid}
              >{l}</button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="ndC">
            <a href="tel:+12125550199"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "10px 20px", borderRadius: 50, border: `2px solid ${C.forest}`, background: "transparent", color: C.forest, fontWeight: 800, fontSize: 13, fontFamily: "Nunito,sans-serif", textDecoration: "none", cursor: "pointer", transition: "all .2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.forest; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.forest; }}
            ><FaPhone style={{ fontSize: 11 }} /> (212) 555-0199</a>
            <button className="pulse liftH" style={{ ...bPrimary, padding: "10px 22px", fontSize: 13 }}>
              <FaCalendarAlt style={{ fontSize: 12 }} /> Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="nmT" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: C.forest, fontSize: 22, padding: 4, alignItems: "center" }}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              style={{ overflow: "hidden", background: "white", borderTop: "1px solid #EEE6DC" }}>
              <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                {["Services","How It Works","About","Reviews","FAQ","Contact"].map(l => (
                  <button key={l} onClick={() => to(l.toLowerCase().replace(/ /g,"-"))}
                    style={{ background: "none", border: "none", padding: "10px 0", textAlign: "left", fontSize: 15, fontWeight: 700, color: C.dark, cursor: "pointer", borderBottom: "1px solid #F5EDE2", fontFamily: "Nunito,sans-serif" }}
                  >{l}</button>
                ))}
                <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                  <a href="tel:+12125550199" style={{ flex: 1, textAlign: "center", padding: "12px", borderRadius: 50, border: `2px solid ${C.forest}`, color: C.forest, fontWeight: 800, fontSize: 14, textDecoration: "none", fontFamily: "Nunito,sans-serif" }}>📞 Call</a>
                  <button style={{ ...bPrimary, flex: 1, justifyContent: "center", padding: "12px" }}>📅 Book Now</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ══════════════════════ HERO ═════════════════════════════════ */}
      <section ref={heroRef} id="hero"
        style={{ position: "relative", overflow: "hidden", background: `linear-gradient(145deg,${C.forestDark} 0%,${C.forest} 45%,${C.forestMid} 100%)`, minHeight: "92vh", display: "flex", alignItems: "center" }}>
        <div className="dotBg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        {/* Decorative orbs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(242,107,58,0.11) 0%,transparent 70%)", pointerEvents: "none" }} />

        <motion.div style={{ y: heroY, opacity: heroFade, position: "relative", zIndex: 10, width: "100%" }}>
          <div className="si" style={{ paddingTop: 72, paddingBottom: 104 }}>
            <div className="heroGrid">

              {/* LEFT */}
              <div>
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: 20 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.22)", color: "white", padding: "8px 16px", borderRadius: 50, fontSize: 13, fontWeight: 700 }}>
                    <HiSparkles style={{ color: C.gold }} /> NYC's #1 Trusted Lice Treatment Center
                  </span>
                </motion.div>

                <motion.h1 className="df" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}
                  style={{ color: "white", fontSize: "clamp(36px,5.5vw,66px)", fontWeight: 900, lineHeight: 1.08, margin: "0 0 22px" }}>
                  Fast, Safe &amp; Guaranteed<br />
                  <em style={{ color: C.gold }}>Lice Removal</em><br />
                  <span style={{ color: "rgba(255,255,255,0.88)" }}>for NYC Families</span>
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }}
                  style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.75, margin: "0 0 28px", maxWidth: 520 }}>
                  Certified specialists serving Manhattan, Brooklyn, Queens, The Bronx &amp; Staten Island. One visit. 100% lice-free. <strong style={{ color: "white" }}>Guaranteed.</strong>
                </motion.p>

                {/* Trust chips */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
                  style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                  {["✅ Non-Toxic & Safe","⚡ Same-Day Slots","📄 School Certificates","👶 All Ages OK"].map(c => (
                    <span key={c} style={{ background: "rgba(255,255,255,0.13)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.92)", padding: "6px 14px", borderRadius: 50, fontSize: 13, fontWeight: 600 }}>{c}</span>
                  ))}
                </motion.div>

                {/* CTA buttons */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42 }}
                  style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
                  <button className="pulse liftH" style={{ ...bPrimary, fontSize: 16, padding: "17px 36px" }}>
                    <FaCalendarAlt /> Book Now — It's Easy!
                  </button>
                  <a href="tel:+12125550199" className="liftH" style={{ ...bOutlineW, fontSize: 16, padding: "17px 32px" }}>
                    <FaPhone /> (212) 555-0199
                  </a>
                </motion.div>

                {/* Stars row */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Stars n={5} sz={18} />
                  <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 14, margin: 0 }}>
                    <strong style={{ color: "white" }}>4.9 / 5</strong> · 300+ Google Reviews
                  </p>
                </motion.div>
              </div>

              {/* RIGHT – booking card */}
              <div className="heroR" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Spinning dashed ring */}
                <div className="ss" style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", border: "1px dashed rgba(255,255,255,0.15)", pointerEvents: "none" }} />

                <motion.div initial={{ opacity: 0, scale: 0.9, x: 40 }} animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 90 }}
                  style={{ background: "white", borderRadius: 28, padding: "36px 32px", maxWidth: 340, width: "100%", boxShadow: "0 32px 80px rgba(0,0,0,0.3)", position: "relative", zIndex: 2 }}>
                  <div style={{ textAlign: "center", marginBottom: 22 }}>
                    <div style={{ fontSize: 52, marginBottom: 8 }}>🛡️</div>
                    <h3 className="df" style={{ fontSize: 22, fontWeight: 800, color: C.dark, margin: "0 0 4px" }}>Book Your Visit</h3>
                    <p style={{ fontSize: 13, color: C.light, margin: 0 }}>Takes less than 60 seconds</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                    {[
                      { e:"📅", bg:C.forestLt, t:"Same-Day Appointments", s:"Available 7 days a week"  },
                      { e:"🏠", bg:C.coralLt,  t:"In-Home or In-Clinic",  s:"Your choice of location"  },
                      { e:"✅", bg:"#FFFBEB",   t:"100% Guarantee",        s:"We retreat free if needed"},
                    ].map(it => (
                      <div key={it.t} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 14, background: it.bg }}>
                        <span style={{ fontSize: 22 }}>{it.e}</span>
                        <div>
                          <p style={{ fontWeight: 800, fontSize: 13, color: C.dark, margin: 0 }}>{it.t}</p>
                          <p style={{ fontSize: 11, color: C.light, margin: 0 }}>{it.s}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="pulse liftH" style={{ ...bPrimary, width: "100%", justifyContent: "center", fontSize: 15, padding: "15px" }}>
                    <FaCalendarAlt /> Book Appointment
                  </button>
                  <p style={{ textAlign: "center", fontSize: 12, color: C.light, marginTop: 10, marginBottom: 0 }}>
                    Or call <strong>(212) 555-0199</strong> anytime
                  </p>
                </motion.div>

                {/* Float badge – lice free */}
                <motion.div className="fa" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}
                  style={{ position: "absolute", top: -14, right: -10, background: "white", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 28px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 8, zIndex: 3 }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", color: "#16A34A", fontSize: 14 }}>✓</div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 800, color: C.dark, margin: 0 }}>Lice-Free!</p>
                    <p style={{ fontSize: 10, color: C.light, margin: 0 }}>Just treated</p>
                  </div>
                </motion.div>

                {/* Float badge – rating */}
                <motion.div className="fb" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }}
                  style={{ position: "absolute", bottom: -14, left: -10, background: "white", borderRadius: 16, padding: "10px 14px", boxShadow: "0 8px 28px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: 8, zIndex: 3 }}>
                  <BsStarFill style={{ color: "#FBBF24", fontSize: 22 }} />
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 800, color: C.dark, margin: 0 }}>4.9 Rating</p>
                    <p style={{ fontSize: 10, color: C.light, margin: 0 }}>300+ reviews</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 72L60 59C120 46 240 20 360 13C480 6 600 19 720 25C840 31 960 31 1080 27C1200 23 1320 19 1380 17L1440 15V72H0Z" fill={C.cream}/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════ TRUST STATS ══════════════════════════ */}
      <section style={{ background: "white", padding: "42px 0", borderBottom: "1px solid #EEE6DC" }}>
        <div className="si">
          <div className="tBar">
            {[
              { v: "5,000+", l: "Families Treated",       i: <FaHeart />       },
              { v: "100%",   l: "Satisfaction Guarantee", i: <FaShieldAlt />   },
              { v: "15+",    l: "Years of Experience",    i: <FaAward />       },
              { v: "NYC",    l: "All 5 Boroughs Served",  i: <FaMapMarkerAlt />},
            ].map((s, i) => (
              <div key={s.l} data-aos="fade-up" data-aos-delay={i * 90} style={{ textAlign: "center", padding: "8px 0" }}>
                <div className="df" style={{ fontSize: "clamp(30px,4vw,42px)", fontWeight: 800, color: C.forest, lineHeight: 1 }}>{s.v}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginTop: 6, fontSize: 13, color: C.light }}>
                  <span style={{ color: C.coral }}>{s.i}</span> {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SERVICES ═════════════════════════════ */}
      <section id="services" style={{ padding: "88px 0", background: C.cream }}>
        <div className="si">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge" style={{ marginBottom: 14, display: "inline-flex" }}>Our Services</span>
            <h2 className="stitle" style={{ marginBottom: 14 }}>Comprehensive Lice<br /><span style={{ color: C.forest }}>Treatment Solutions</span></h2>
            <p style={{ color: C.light, maxWidth: 500, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>
              From single treatments to whole-family sessions — every solution is safe, effective, and fully guaranteed.
            </p>
          </div>
          <div className="srvGrid">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} data-aos="fade-up" data-aos-delay={i * 90} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}
                style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 18px rgba(0,0,0,0.06)", border: "1px solid #EEE6DC", display: "flex", flexDirection: "column" }}>
                <div style={{ height: 5, background: s.bar }} />
                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 40 }}>{s.icon}</span>
                    <span style={{ fontSize: 11, fontWeight: 800, padding: "4px 10px", borderRadius: 50, background: s.lBg, color: s.lColor }}>{s.lbl}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: C.dark, margin: "0 0 8px" }}>{s.title}</h3>
                  <p style={{ fontSize: 13.5, color: C.light, lineHeight: 1.65, flex: 1, margin: "0 0 16px" }}>{s.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid #F5EDE2" }}>
                    <span style={{ fontWeight: 800, fontSize: 19, color: C.forest }}>{s.price}</span>
                    <button style={{ display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", color: C.coral, fontWeight: 800, fontSize: 13, fontFamily: "Nunito,sans-serif" }}>
                      Book <FaArrowRight style={{ fontSize: 11 }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ HOW IT WORKS ═════════════════════════ */}
      <section id="how-it-works" style={{ padding: "88px 0", background: "white" }}>
        <div className="si">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge" style={{ marginBottom: 14, display: "inline-flex" }}>Simple Process</span>
            <h2 className="stitle" style={{ marginBottom: 14 }}>From Panic to <span style={{ color: C.coral }}>Lice-Free</span><br />in Just 4 Steps</h2>
            <p style={{ color: C.light, maxWidth: 480, margin: "0 auto", fontSize: 16, lineHeight: 1.7 }}>Designed to be as calm and quick as possible for busy NYC families.</p>
          </div>

          <div className="stepGrid">
            {STEPS.map((step, i) => (
              <div key={step.n} data-aos="fade-up" data-aos-delay={i * 110} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
                  <div style={{ width: 68, height: 68, borderRadius: 20, background: `linear-gradient(135deg,${step.bg},${step.bg}cc)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, boxShadow: `0 8px 24px ${step.bg}50` }}>
                    {step.icon}
                  </div>
                  <span style={{ position: "absolute", top: -8, right: -8, width: 26, height: 26, borderRadius: "50%", background: i % 2 === 0 ? C.coral : C.forest, color: "white", fontWeight: 800, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: C.dark, margin: "0 0 8px" }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: C.light, lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Inline CTA strip */}
          <div data-aos="fade-up" style={{ marginTop: 60, background: `linear-gradient(135deg,${C.forestDark},${C.forest})`, borderRadius: 24, padding: "40px 44px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <h3 className="df" style={{ color: "white", fontSize: 26, fontWeight: 800, margin: "0 0 6px" }}>Ready to get started?</h3>
              <p style={{ color: "rgba(255,255,255,0.72)", margin: 0, fontSize: 15 }}>Same-day appointments across all NYC boroughs.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <button className="liftH pulse" style={{ ...bPrimary }}>
                <FaCalendarAlt /> Book Online Now
              </button>
              <a href="tel:+12125550199" className="liftH" style={{ ...bOutlineW }}>
                <FaPhone /> (212) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ WHY CHOOSE US ════════════════════════ */}
      <section id="about" style={{ padding: "88px 0", background: C.cream }}>
        <div className="si">
          <div className="whyCols">
            {/* Left */}
            <div data-aos="fade-right">
              <span className="badge" style={{ marginBottom: 18, display: "inline-flex" }}>Why LiceBanishers</span>
              <h2 className="stitle" style={{ marginBottom: 18 }}>NYC Parents Trust Us<br /><span style={{ color: C.forest }}>Because We Deliver Results</span></h2>
              <p style={{ color: C.mid, fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                Over 15 years serving NYC families with zero judgment and 100% commitment. Every parent who walks through our door — or whose door we knock on — gets our absolute best.
              </p>
              <div className="whyF">
                {WHY_US.map((w, i) => (
                  <div key={w.title} data-aos="fade-up" data-aos-delay={i * 80}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "white", borderRadius: 16, padding: "15px", border: "1px solid #EEE6DC" }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: C.forestLt, display: "flex", alignItems: "center", justifyContent: "center", color: C.forest, fontSize: 16, flexShrink: 0 }}>{w.icon}</div>
                    <div>
                      <p style={{ fontWeight: 800, fontSize: 13.5, color: C.dark, margin: "0 0 3px" }}>{w.title}</p>
                      <p style={{ fontSize: 12.5, color: C.light, margin: 0, lineHeight: 1.55 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div data-aos="fade-left" style={{ position: "relative" }}>
              <div style={{ background: `linear-gradient(135deg,${C.forestLt},#D9F0E9)`, borderRadius: 28, padding: "40px 30px" }}>
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <div className="df" style={{ fontSize: 96, fontWeight: 900, color: C.forest, lineHeight: 1 }}>5K+</div>
                  <p style={{ color: C.mid, fontSize: 18, fontWeight: 700, margin: 0 }}>Families Treated in NYC</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {REVIEWS.slice(0, 2).map(r => (
                    <div key={r.name} style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `linear-gradient(135deg,${C.forest},${C.forestMid})`, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 11 }}>{r.ini}</div>
                        <div>
                          <p style={{ fontSize: 12, fontWeight: 800, color: C.dark, margin: 0 }}>{r.name}</p>
                          <Stars n={5} sz={10} />
                        </div>
                      </div>
                      <p style={{ fontSize: 12, color: C.light, margin: 0, lineHeight: 1.55 }}>&ldquo;{r.text.slice(0, 90)}…&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating guarantee badge */}
              <div className="fc" style={{ position: "absolute", bottom: -20, right: -20, background: "white", borderRadius: 20, padding: "16px 18px", boxShadow: "0 14px 40px rgba(0,0,0,0.14)", textAlign: "center" }}>
                <div style={{ fontSize: 34, marginBottom: 4 }}>🏆</div>
                <p style={{ fontWeight: 800, fontSize: 14, color: C.dark, margin: 0 }}>100%</p>
                <p style={{ fontSize: 11, color: C.light, margin: 0 }}>Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ GOOGLE REVIEWS ═══════════════════════ */}
      <section id="reviews" style={{ padding: "88px 0", background: "white" }}>
        <div className="si">
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="badge" style={{ marginBottom: 14, display: "inline-flex", gap: 7, alignItems: "center" }}>
              <GLogo size={14} /> Google Reviews
            </span>
            <h2 className="stitle" style={{ marginBottom: 16 }}>Real Stories From<br /><span style={{ color: C.forest }}>NYC Families Like Yours</span></h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 10 }}>
              <Stars n={5} sz={22} />
              <span className="df" style={{ fontSize: 30, fontWeight: 800, color: C.dark }}>4.9</span>
              <span style={{ color: "#ddd" }}>·</span>
              <span style={{ color: C.light, fontSize: 15 }}>300+ reviews on Google</span>
            </div>
          </div>

          <div className="rvGrid">
            {REVIEWS.map((r, i) => <ReviewCard key={r.name} r={r} delay={i * 0.08} />)}
          </div>

          <div data-aos="fade-up" style={{ textAlign: "center", marginTop: 36 }}>
            <a href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 26px", borderRadius: 50, border: `2px solid ${C.forest}`, color: C.forest, fontWeight: 800, fontSize: 14, textDecoration: "none", transition: "all .2s", fontFamily: "Nunito,sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background = C.forest; e.currentTarget.style.color = "white"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = C.forest; }}>
              <GLogo size={15} /> See All Reviews on Google <FaArrowRight style={{ fontSize: 12 }} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ═══════════════════════════════════ */}
      <section id="faq" style={{ padding: "88px 0", background: C.cream }}>
        <div className="si" style={{ maxWidth: 780 }}>
          <div data-aos="fade-up" style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="badge" style={{ marginBottom: 14, display: "inline-flex" }}>FAQs</span>
            <h2 className="stitle" style={{ marginBottom: 12 }}>Frequently Asked <span style={{ color: C.forest }}>Questions</span></h2>
            <p style={{ color: C.light, margin: 0, fontSize: 15 }}>Everything you need to know before your first visit.</p>
          </div>
          {FAQS.map((faq, i) => <FaqItem key={faq.q} faq={faq} i={i} />)}
        </div>
      </section>

      {/* ══════════════════════ FINAL CTA ════════════════════════════ */}
      <section id="contact" style={{ padding: "60px 0 88px", background: C.creamDk }}>
        <div className="si">
          <motion.div data-aos="fade-up"
            style={{ background: `linear-gradient(135deg,${C.forestDark} 0%,${C.forest} 55%,${C.forestMid} 100%)`, borderRadius: 32, padding: "64px 44px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div className="dotBg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 5 }}>
              <div style={{ fontSize: 52, marginBottom: 16 }}>🛡️</div>
              <h2 className="df" style={{ color: "white", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, margin: "0 0 14px", lineHeight: 1.1 }}>
                Don't Wait — Lice Spread Fast.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 17, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
                Book today and be lice-free by tonight. Same-day appointments available across all NYC boroughs.
              </p>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
                <button className="liftH pulse" style={{ ...bPrimary, fontSize: 17, padding: "18px 40px" }}>
                  <FaCalendarAlt /> Book an Appointment
                </button>
                <a href="tel:+12125550199" className="liftH" style={{ ...bOutlineW, fontSize: 17, padding: "18px 36px" }}>
                  <FaPhone /> Call Now: (212) 555-0199
                </a>
              </div>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 13, marginTop: 24, marginBottom: 0 }}>
                100% Satisfaction Guarantee · Non-Toxic Treatments · Serving NYC Since 2009
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ FOOTER ════════════════════════════════ */}
      <footer style={{ background: "#0B1E18", color: "rgba(255,255,255,0.62)", padding: "56px 0 32px" }}>
        <div className="si">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 36, marginBottom: 40 }}>
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg,${C.forest},${C.forestMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🛡️</div>
                <div className="df" style={{ fontSize: 20, fontWeight: 800, color: "white" }}>LiceBanishers</div>
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.7, margin: "0 0 14px", maxWidth: 280 }}>
                NYC's most trusted lice removal experts. Helping families stay lice-free since 2009 with safe, effective, and guaranteed treatments.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {[...Array(5)].map((_, i) => <BsStarFill key={i} style={{ color: "#FBBF24", fontSize: 13 }} />)}
                <span style={{ fontSize: 12, marginLeft: 5 }}>4.9 · 300+ Reviews</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <p style={{ color: "white", fontWeight: 800, fontSize: 14, marginBottom: 14 }}>Services</p>
              {["In-Clinic Treatment","In-Home Visit","Preventive Screening","School Checks","Follow-Up Care"].map(s => (
                <a key={s} href="#" style={{ display: "block", color: "rgba(255,255,255,0.56)", fontSize: 13, marginBottom: 9, textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.56)"}>{s}</a>
              ))}
            </div>

            {/* Areas */}
            <div>
              <p style={{ color: "white", fontWeight: 800, fontSize: 14, marginBottom: 14 }}>Service Areas</p>
              {["Manhattan","Brooklyn","Queens","The Bronx","Staten Island"].map(a => (
                <a key={a} href="#" style={{ display: "block", color: "rgba(255,255,255,0.56)", fontSize: 13, marginBottom: 9, textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.56)"}>{a}</a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p style={{ color: "white", fontWeight: 800, fontSize: 14, marginBottom: 14 }}>Contact</p>
              {[
                { icon: <FaPhone />,                   text: "(212) 555-0199"              },
                { icon: <FaMapMarkerAlt />,             text: "All 5 NYC Boroughs"         },
                { icon: <FaClock />,                   text: "Mon–Sun 8am–9pm"            },
                { icon: <RiCustomerService2Line />,    text: "hello@licebanishers.com"    },
              ].map(c => (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontSize: 13 }}>
                  <span style={{ color: C.forestMid }}>{c.icon}</span> {c.text}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "rgba(255,255,255,0.32)" }}>
            <span>© 2025 LiceBanishers NYC. All rights reserved.</span>
            <div style={{ display: "flex", gap: 18 }}>
              {["Privacy Policy","Terms of Service","Sitemap"].map(l => (
                <a key={l} href="#" style={{ color: "rgba(255,255,255,0.32)", textDecoration: "none" }}
                  onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.32)"}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}