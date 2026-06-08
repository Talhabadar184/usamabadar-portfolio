import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "../assets/Clients/services.svg";
import services_tyres from "../assets/Clients/services_tyre.svg";
import sefam from "../assets/Clients/sefam.svg";
import Jomo from "../assets/Clients/jomo.svg";
import city from "../assets/Clients/city.svg";
import AT from "../assets/Clients/AT.svg";
import AKI from "../assets/Clients/AKI.svg";
import procon from "../assets/Clients/procon.svg";
import SG from "../assets/Clients/SG.svg";
import Sindh from "../assets/Clients/sindh.svg";
import Gray from "../assets/Clients/gray.svg";
import stylers from "../assets/Clients/stylers.svg";
import NC from "../assets/Clients/NC.svg";
import Master from "../assets/Clients/Master.svg";
import HND from "../assets/Clients/HND.svg";
import services_foot from "../assets/Clients/services_foot.svg";
import Maple from "../assets/Clients/Maple.svg";
import adam from "../assets/Clients/adam.svg";
import docs from "../assets/Clients/docs.svg";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  "All",
  "Internal Audit",
  "Statutory Audit",
  "Cost Audit",
  "Demerger",
  "Forensic Audit",
  "Business Process Reengineering (BPR)",
  "Liquidation / Agreed Upon Procedures",
];

const CATEGORY_COLORS = {
  "Statutory Audit":                          { pill: "bg-blue-100 text-blue-800",   dot: "bg-blue-500"   },
  "Internal Audit":                           { pill: "bg-purple-100 text-purple-800", dot: "bg-purple-500" },
  "Cost Audit":                               { pill: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  "Forensic Audit":                           { pill: "bg-amber-100 text-amber-800",  dot: "bg-amber-500"  },
  "Business Process Reengineering (BPR)":     { pill: "bg-red-100 text-red-800",     dot: "bg-red-500"    },
  "Liquidation / Agreed Upon Procedures":     { pill: "bg-gray-100 text-gray-700",   dot: "bg-gray-500"   },
  "Demerger":                                 { pill: "bg-cyan-100 text-cyan-800",   dot: "bg-cyan-500"   },
};

const getColor = (cat) =>
  CATEGORY_COLORS[cat] ?? { pill: "bg-gray-100 text-gray-700", dot: "bg-gray-400" };

const projects = [
  {
    title: "Service Global Footwear Limited",
    subtitle: "Statutory Audit – Annual",
    image: services_foot,
    category: "Statutory Audit",
    link: "https://serviceglobalfootwear.com/",
    description: `Led the annual statutory audit of Service Global Footwear Limited, a public listed company engaged in the manufacturing and export of footwear, ensuring compliance with IFRS and SECP regulatory guidelines.`,
    bullets: [
      "Led the audit team from planning to completion, ensuring timely execution and delivery within reporting deadlines.",
      "Prepared the complete set of financial statements including SoFP, P&L, Cash Flows, Changes in Equity, and notes per IFRS and Companies Act, 2017.",
      "Owned the audit of contingencies and commitments — legal claims, tax exposures, and guarantees — reviewing legal correspondence and board minutes.",
      "Evaluated management disclosures under IAS 37 and collaborated with internal and external legal counsel to assess ongoing litigations.",
      "Prepared the audit report and management letter with key findings, control observations, and value-adding recommendations.",
    ],
  },
  {
    title: "Service Industries Limited",
    subtitle: "Demerger and Statutory Audit – Annual",
    image: services,
    category: ["Statutory Audit", "Demerger"],
    link: "https://servisgroup.com/",
    description: "Led the end-to-end statutory audit and oversaw the demerger resulting in Service Tyres (Pvt.) Ltd. and Service Retail (Pvt.) Ltd.",
    bullets: [
      "Prepared complete financial statements with IFRS-compliant disclosures for contingent liabilities and critical notes.",
      "Ensured accurate transfer of assets, liabilities, and equity under the SECP-approved demerger scheme.",
      "Coordinated with legal and finance departments to validate correctness of balances through transition.",
      "Conducted risk assessments and implemented audit procedures tailored to demerger complexities.",
    ],
  },
  {
    title: "Service Tyres (Private) Limited",
    subtitle: "Demerger and Statutory Audit – Annual",
    image: services_tyres,
    category: ["Statutory Audit", "Demerger"],
    link: "https://www.servistyres.com/",
    description: "Managed the inaugural statutory audit of a newly incorporated entity post-demerger from Service Industries Limited.",
    bullets: [
      "Prepared the first set of financial statements with accurate opening balances per the approved demerger scheme.",
      "Verified correct classification and recognition of transferred assets, liabilities, and equity under Companies Act, 2017.",
      "Reconciled intercompany balances and disclosures, ensuring completeness and accuracy.",
      "Played a key role in establishing initial financial reporting frameworks and control procedures.",
    ],
  },
  {
    title: "Service Retail (Private) Limited",
    subtitle: "Demerger and Statutory Audit – Annual",
    image: services,
    category: ["Statutory Audit", "Demerger"],
    link: "https://servis.pk/",
    description: "Led the first statutory audit of Service Retail (Private) Limited, incorporated from the demerger of Service Industries Limited.",
    bullets: [
      "Prepared initial financial statements with opening balances aligned to the approved demerger certificate.",
      "Ensured IFRS/IAS-compliant transfer and presentation of assets, liabilities, and equity.",
      "Verified alignment with SECP regulations and demerger documents.",
      "Ensured timely disclosure of related party transactions and transitional adjustments.",
    ],
  },
  {
    title: "Stylers International Limited",
    subtitle: "Statutory Audit – Annual",
    image: stylers,
    category: "Statutory Audit",
    link: "https://www.stylersintl.com/",
    description: "Served as Audit Senior on the statutory audit, with lead responsibility over fixed assets and accounts payable.",
    bullets: [
      "Took lead on audit of fixed assets — additions, disposals, depreciation, revaluation — per IAS 16.",
      "Reviewed asset revaluation at 9-month mark, verified methodology and revaluation surplus treatment.",
      "Assessed fair value hierarchy disclosures per IAS 16 and IFRS 13.",
      "Conducted accounts payable audit: supplier reconciliations, ageing, cutoff testing, accruals, and three-way matching.",
    ],
  },
  {
    title: "Nishat Chunian Limited",
    subtitle: "Statutory Audit – Annual and Special",
    image: NC,
    category: "Statutory Audit",
    link: "https://www.nishat.net/",
    description: "Led annual and interim statutory audits of one of Pakistan's leading textile exporters, including consolidated financial statements.",
    bullets: [
      "Prepared standalone and consolidated financial statements incorporating three foreign subsidiaries.",
      "Performed detailed procedures on FE-25 loans, TERF, Running Finance, bank overdrafts, PSBA, FTFA, and FSBA arrangements.",
      "Verified loan covenants, interest calculations, and security/charge documentation with bank confirmations.",
      "Drafted audit report and management letter highlighting significant findings and recommended improvements.",
    ],
  },
  {
    title: "At Tahur Limited",
    subtitle: "Statutory Audit – Interim",
    image: AT,
    category: "Statutory Audit",
    link: "https://www.at-tahur.com/",
    description: "Performed interim audit procedures at a listed dairy company covering inventory, stores, and receivables.",
    bullets: [
      "Conducted physical verification of raw materials, packing, WIP, and finished goods with store ledger tracing.",
      "Verified inventory valuation at lower of cost or NRV per IAS 2, including overhead allocation review.",
      "Performed cut-off testing and reviewed GRNs and goods-in-transit for timely recognition.",
      "Assessed ECL provisioning and credit risk exposure on trade receivables.",
    ],
  },
  {
    title: "Maple Leaf Capital Limited",
    subtitle: "Statutory Audit – Annual",
    image: Maple,
    category: "Statutory Audit",
    link: "https://www.mapleleafcapital.org/",
    description: "Prepared complete financial statements and performed detailed procedures on the NBFC's investment portfolio.",
    bullets: [
      "Verified initial recognition, classification, subsequent measurement, and disclosures under IFRS 9.",
      "Conducted fair value testing of equities, mutual funds, and financial instruments via market data and broker statements.",
      "Evaluated investment income — dividends, capital gains, unrealized gains/losses — for completeness.",
      "Ensured SECP regulatory compliance for asset management companies.",
    ],
  },
  {
    title: "Adamjee Insurance Company Limited",
    subtitle: "Statutory Audit – Interim",
    image: adam,
    category: "Statutory Audit",
    link: "https://www.adamjeeinsurance.com/",
    description: "Acted as Audit Senior on a special engagement covering insurance-specific financial reporting areas.",
    bullets: [
      "Focused on GWP, UPR, Claims Liabilities, and Reinsurance Arrangements.",
      "Conducted walkthroughs, substantive procedures, and analytical reviews for insurance income and liability balances.",
      "Reviewed reinsurance contracts, tested recoveries, and verified premium cessions.",
      "Identified control environment gaps and provided recommendations for audit readiness.",
    ],
  },
  {
    title: "Sefam (Private) Limited",
    subtitle: "Business Process Engineering (BPR) and SOPs",
    image: sefam,
    category: "Business Process Reengineering (BPR)",
    link: "https://sefam.com/",
    description: "Led a comprehensive BPR project for a leading textile and apparel manufacturer to streamline operations and enhance efficiency.",
    bullets: [
      "Conducted extensive As-Is process mapping with department heads, identifying inefficiencies and control weaknesses.",
      "Performed Gap Analysis across key business functions, producing a detailed recommendation report.",
      "Designed SOPs from scratch for Finance, HR, and IT including PO, IGP, Leave forms, and Asset Requisition templates.",
      "Delivered 25% faster inventory turnover and 13% cost efficiencies across supply chain and store operations.",
    ],
  },
  {
    title: "Jomo Technologies (Private) Limited",
    subtitle: "Agreed Upon Procedures / Liquidator",
    image: Jomo,
    category: "Liquidation / Agreed Upon Procedures",
    link: "https://pitchbook.com/profiles/company/500577-22",
    description: "Served on secondment as management-appointed liquidator during the company's wind-up phase.",
    bullets: [
      "Oversaw orderly asset and inventory sales, ensuring maximum recovery value and proper documentation.",
      "Led final settlement negotiations with employees, vendors, and suppliers.",
      "Managed cash flows, bank reconciliations, and payment scheduling during liquidation.",
      "Prepared sales tax reconciliations and coordinated with external auditors for financial statement finalization.",
    ],
  },
  {
    title: "The City School",
    subtitle: "Forensic Audit",
    image: city,
    category: "Forensic Audit",
    link: "https://thecityschool.edu.pk/",
    description: "Conducted a forensic audit across 22 branches at the North Region Office, uncovering fraud in procurement and HR.",
    bullets: [
      "Uncovered fraudulent vendor dealings and unauthorized payments in procurement and supply chain.",
      "Cross-verified payment vouchers with bank statements to identify and report financial fraud.",
      "Identified critical weaknesses in authorization protocols, documentation flow, and procurement controls.",
      "Conducted a comprehensive HR audit revealing unethical practices in recruitment, payroll, and attendance.",
    ],
  },
  {
    title: "Sindh Bank Limited",
    subtitle: "Compliance Audit",
    image: Sindh,
    category: "Internal Audit",
    link: "https://www.sindhbank.com.pk/",
    description: "Performed branch audits per SBP/AML regulatory frameworks covering operations, compliance, and internal controls.",
    bullets: [
      "Verified closing cash balances, dual controls, SBP cash limits, and surprise cash count processes.",
      "Reviewed KYC, CDD, and account opening/closure compliance with Prudential Regulations.",
      "Evaluated AML/CFT implementation — STR/CTR reporting, sanctions screening, and staff training.",
      "Examined CBS audit trails, TDR processes, and outsourced service contract controls.",
    ],
  },
  {
    title: "DOCS Medical Billing, LLC",
    subtitle: "HR and IT Audit",
    image: docs,
    category: "Internal Audit",
    link: "https://docsmedicalbilling.com/",
    description: "Conducted a comprehensive internal audit covering HR and IT functions at a US-based medical billing company.",
    bullets: [
      "Identified control weaknesses in attendance tracking, leave management, and approval processes.",
      "Assessed completeness and accuracy of employee records and documentation compliance.",
      "Verified physical existence, tagging, and stock count of IT equipment and assets.",
      "Proposed structured policy improvements for asset management and IT equipment issuance controls.",
    ],
  },
  {
    title: "Masters Textile Mills Limited",
    subtitle: "Internal Audit & Cost Audit – Procurement & Inventory",
    image: Master,
    category: ["Internal Audit", "Cost Audit"],
    link: "https://mastertex.com/",
    description: "Strengthened procurement controls and cost visibility across procurement and inventory functions.",
    bullets: [
      "Initiated dedicated receipt room assignment for third-party physical verification of inbound goods.",
      "Identified weaknesses in documentation, approval hierarchy, and material handling.",
      "Streamlined procurement from PO creation through receipt and storage, improving GRN accuracy.",
      "Verified cost allocation accuracy, analyzed material consumption variances, and enhanced cost statement transparency.",
    ],
  },
  {
    title: "Procon Engineering (Private) Limited",
    subtitle: "Internal Audit and Process Improvement",
    image: procon,
    category: "Internal Audit",
    link: "https://procon.com.pk/",
    description: "Led internal audit and process improvement engagement focused on procurement and inventory controls.",
    bullets: [
      "Implemented third-party goods verification at receipt room, improving inventory record accuracy.",
      "Identified control gaps in procurement documentation, approval hierarchy, and material handling.",
      "Streamlined procurement process from PO approval to storage with real-time GRN generation.",
      "Recommended segregation of duties and procedural changes, reducing discrepancies and strengthening audit trails.",
    ],
  },
  {
    title: "H. Nizam Din & Sons (Private) Limited",
    subtitle: "Internal Audit & Cost Audit – Procurement & Inventory",
    image: HND,
    category: ["Internal Audit", "Cost Audit"],
    link: "https://nizamgroup.com/",
    description: "Combined internal and cost audit engagement to strengthen controls and cost classification accuracy.",
    bullets: [
      "Initiated dedicated receipt room assignment ensuring quantity-based third-party verification.",
      "Identified procurement control weaknesses and streamlined the end-to-end process.",
      "Verified procurement cost allocation, analyzed material consumption variances, and assessed NRV.",
      "Ensured Cost Accounting Records Rules (Textiles) compliance and improved cost statement transparency.",
    ],
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const toArray = (v) => (Array.isArray(v) ? v : [v]);

const matchesFilter = (project, filter) =>
  filter === "All" || toArray(project.category).includes(filter);

// ─── Modal ───────────────────────────────────────────────────────────────────

function DetailModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const cats = toArray(project.category);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header image strip */}
        <div className="h-44 bg-gray-50 flex items-center justify-center border-b border-gray-100 rounded-t-2xl overflow-hidden px-8">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-32 max-w-full object-contain"
          />
        </div>

        {/* Body */}
        <div className="p-7">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cats.map((cat) => (
              <span
                key={cat}
                className={`text-xs font-semibold px-3 py-1 rounded-full ${getColor(cat).pill}`}
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 className="text-xl font-bold text-gray-900 leading-snug">{project.title}</h2>
          <p className="text-sm font-medium text-blue-600 mt-1 mb-4">{project.subtitle}</p>

          <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.description}</p>

          {/* Bullet points */}
          <ul className="space-y-3">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
                {b}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
            >
              Visit Website ↗
            </a>
            <button
              onClick={onClose}
              className="flex-1 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>

        {/* Close ✕ */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 text-gray-700 text-lg leading-none transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────

function ProjectCard({ project, index, onClick }) {
  const cats = toArray(project.category);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm
                 cursor-pointer overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      layout
    >
      {/* Logo area */}
      <div className="h-40 bg-gray-50 flex items-center justify-center border-b border-gray-100 px-6">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-24 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category dots */}
        <div className="flex gap-1.5 mb-3">
          {cats.map((cat) => (
            <span
              key={cat}
              className={`w-2 h-2 rounded-full ${getColor(cat).dot}`}
              title={cat}
            />
          ))}
        </div>

        <h3 className="text-sm font-bold text-gray-900 leading-snug">{project.title}</h3>
        <p className="text-xs text-blue-600 font-medium mt-1">{project.subtitle}</p>

        <p className="text-xs text-gray-500 mt-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {cats.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getColor(cat).pill}`}
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="text-xs font-semibold text-blue-600 group-hover:underline shrink-0">
            Details →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

function Clients() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = projects.filter((p) => matchesFilter(p, selectedCategory));
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <section id="portfolio" className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-700">
            Key Clientele{" "}
            <span className="text-gray-500 font-normal">— Nexia International</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Click any card to explore engagement details.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            const color = getColor(cat);
            return (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white border-blue-600 shadow"
                    : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-sm">
            No engagements found for this category.
          </p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <DetailModal project={activeProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Clients;