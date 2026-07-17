import React from "react";
import { FiCode, FiZap } from "react-icons/fi";
import { MdManageAccounts, MdAssignmentAdd } from "react-icons/md";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { TbReportSearch } from "react-icons/tb";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaUser, FaBrain, FaLightbulb } from "react-icons/fa";
import fb from "../assets/Home/fb.png";
import insta from "../assets/Home/insta.png";
import linkedin from "../assets/Home/linke.png";
import twitter from "../assets/Home/twitter.png";
import mainBg from "../assets/Home/main7.jpg";

// Shared animation variants — defined once, reused everywhere
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/usama.badar.94", src: fb, alt: "Facebook" },
  { href: "https://www.instagram.com/usamabadar.31", src: insta, alt: "Instagram" },
  { href: "https://www.linkedin.com/in/usama-badar", src: linkedin, alt: "LinkedIn" },
  { href: null, src: twitter, alt: "Twitter" },
];

// Unified stats — removed the split into stats/stats1
const STATS = [
  {
    icon: <FaUser />,
    number: "20+",
    label: "Clients within deadlines",
    color: "from-blue-400 to-cyan-500",
    target: "clients",
  },
  {
    icon: <MdAssignmentAdd size={18} />,
    number: "10+",
    label: "Assignments as Team Lead",
    color: "from-blue-400 to-cyan-500",
    target: "clients",
  },
  {
    icon: <FaBrain />,
    number: "4+",
    label: "Years Experience",
    color: "from-purple-400 to-pink-500",
    target: "resume",
  },
  {
    icon: <TfiMicrosoftAlt size={18} />,
    label: "Microsoft Office, Oracle & Power BI",
    color: "from-emerald-400 to-teal-500",
    target: "certificates",
  },
  {
    icon: <FaBrain />,
    label: "Financial Statements & IFRS Expertise",
    color: "from-purple-400 to-pink-500",
    target: "clients",
  },
  {
    icon: <TbReportSearch size={18} />,
    label: "Financial Reporting, Planning & Analysis",
    color: "from-orange-400 to-red-500",
    target: "clients",
  },
  {
    icon: <MdManageAccounts size={18} />,
    label: "External, Internal & Forensic Audits",
    color: "from-emerald-400 to-teal-500",
    target: "clients",
  },
  {
    icon: <FaLightbulb />,
    label: "Audit Strategy & Internal Controls",
    color: "from-orange-400 to-red-500",
    target: "clients",
  },
];

function StatCard({ stat, index }) {
  return (
    <Link to={stat.target} smooth duration={600} offset={-80}>
      <motion.div
        className="cursor-pointer p-3 rounded-2xl border border-white/10
                   flex flex-col items-center text-center
                   hover:bg-white/10 hover:border-white/20"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={index}
        whileHover={{ scale: 1.06, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
        whileTap={{ scale: 0.97 }}
      >
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${stat.color}
                      flex items-center justify-center mb-2 sm:mb-3`}
        >
          {stat.icon}
        </div>
        {stat.number && (
          <div className="text-lg sm:text-2xl font-bold text-white mb-1">
            {stat.number}
          </div>
        )}
        <div className="text-xs sm:text-sm text-white leading-snug">{stat.label}</div>
      </motion.div>
    </Link>
  );
}

function Home() {
  return (
    <div id="home" className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Background */}
      <img
        src={mainBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-[75%_5%] z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-10 pt-24 md:pt-10 pb-10">

        {/* Social Icons */}
        <motion.div
          className="flex space-x-3 mb-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {SOCIAL_LINKS.map(({ href, src, alt }) =>
            href ? (
              <a key={alt} href={href} aria-label={alt}>
                <img src={src} alt={alt} className="w-5 h-5 md:w-6 md:h-6 hover:opacity-80 transition-opacity" />
              </a>
            ) : (
              <img key={alt} src={src} alt={alt} className="w-5 h-5 md:w-6 md:h-6 opacity-60" />
            )
          )}
        </motion.div>

        {/* Heading block */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-serif font-light"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Hello, I am
        </motion.h2>

        <motion.h1
          className="text-4xl md:text-6xl font-serif font-bold italic mt-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          USAMA BADAR
        </motion.h1>

        <motion.p
          className="mt-2 text-lg md:text-2xl font-serif font-bold tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          CA - FINALIST (20/21) | ACCA - PART QUALIFIED
        </motion.p>

        <motion.p
          className="mt-1 text-base md:text-2xl font-serif font-semibold tracking-wide text-white/90"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          SENIOR AUDITOR — CAPITAL PLUS AUDITING OF ACCOUNTS (CPA)
        </motion.p>

        {/* Download Resume */}
        <motion.a
          href="/Usama Badar CV (1).pdf"
          download
          className="mt-6 w-fit bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3
                     rounded-full flex items-center gap-2 shadow-lg transition-colors duration-200"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Download Resume
        </motion.a>

        {/* Unified Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i + 6} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;