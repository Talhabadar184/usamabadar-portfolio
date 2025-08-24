import React from "react";
import services from "../assets/Clients/services.svg"
import services_tyres from "../assets/Clients/services_tyre.svg"
import sefam from "../assets/Clients/sefam.svg"
import Jomo from "../assets/Clients/jomo.svg"
import city from "../assets/Clients/city.svg"
import AT from "../assets/Clients/AT.svg"
import AKI from "../assets/Clients/AKI.svg"
import procon from "../assets/Clients/procon.svg"
import SG from "../assets/Clients/SG.svg"
import Sindh from "../assets/Clients/sindh.svg"
import Gray from "../assets/Clients/gray.svg"
import stylers from "../assets/Clients/stylers.svg"
import NC from "../assets/Clients/NC.svg" 
import Master from "../assets/Clients/Master.svg"
import HND from "../assets/Clients/HND.svg"
import services_foot from "../assets/Clients/services_foot.svg";
import Maple from "../assets/Clients/Maple.svg";
import adam from "../assets/Clients/adam.svg";
import docs from "../assets/Clients/docs.svg";
import { motion } from "framer-motion";
import  { useState,useEffect } from "react";



const categories = ["All", "External Audit", "Internal Audit", "Cost Audit","Demerger", "Forensic Audit", "Business Process Reengineering (BPR)","Liquidation / Agreed Upon Procedures"];

const projects = [
  {
    title: "Service Global Footwear Limited ",
    subtitle:"Financial Audit - Annual ",
    image: services_foot,
    description: `
      • Led the annual statutory audit of Service Global Footwear Limited, a public listed company engaged in the manufacturing and export of footwear, ensuring compliance with International Financial Reporting Standards (IFRS) and regulatory guidelines of the Securities and Exchange Commission of Pakistan (SECP). \n
      •	Led the audit team throughout the engagement, from planning to completion, ensuring timely execution of audit procedures, effective team coordination, and delivery of quality audit deliverables within reporting deadlines. \n
      •	Prepared the complete set of financial statements, including the Statement of Financial Position, Profit or Loss and Other Comprehensive Income, Statement of Cash Flows, Statement of Changes in Equity, and related notes, ensuring accuracy, consistency, and compliance with IFRS and Companies Act, 2017.\n 
      •	Took ownership of the audit of contingencies and commitments, including legal claims, tax exposures, and guarantees, by reviewing legal correspondence, board meeting minutes, and representations from management. \n
      •	Evaluated management’s assessments and disclosures related to contingent liabilities under IAS 37 – Provisions, Contingent Liabilities, and Contingent Assets, ensuring sufficient audit evidence and appropriate accounting treatment.\n
      •	Collaborated with internal and external legal counsel to assess the likelihood and financial impact of ongoing litigations and regulatory matters.  \n
      •	Prepared the audit report and management letter, summarizing key issues, control observations, and value-adding recommendations. \n
      ` ,
    category: "External Audit",
    link: "https://serviceglobalfootwear.com/",
  },
  {
    title: "Service Industries Limited",
    subtitle:"Demerger and Financial Audit - Annual ",
    image: services,
    description:
      `•	Led the end-to-end statutory audit of Service Industries Limited, a listed entity in the manufacturing and retail sector \n
      •	Prepared the complete set of financial statements, including disclosures for contingent liabilities and other critical notes as per IFRS and applicable regulations. \n
      •	Oversaw the demerger process, resulting in incorporation of Service Tyres (Pvt.) Ltd. and Service Retail (Pvt.) Ltd., ensuring seamless audit coverage and regulatory compliance. \n
      •	Ensured accurate transfer of assets, liabilities, and equity between demerged and resulting entities in accordance with the demerger scheme approved by SECP. \n
      •	Coordinated with legal and finance departments to validate the correctness of balances, ensuring a smooth and compliant transition. \n
      •	Conducted risk assessments and implemented audit procedures tailored to demerger-related complexities, enhancing reliability of financial reporting. \n`,
    category: ["External Audit","Demerger"],
      link: "https://servisgroup.com/",
  },
  {
    title: "Service Tyres (Private) Limited",
    subtitle:"Demerger and Financial Audit - Annual",
    image: services_tyres,
    description:
      `•	Managed the first statutory audit of Service Tyres (Private) Limited, a newly incorporated entity post-demerger from Service Industries Limited. \n
      •	Prepared the inaugural set of financial statements, ensuring accurate incorporation of opening balances as per the approved demerger scheme and certificate. \n
      •	Verified and ensured correct classification and recognition of assets, liabilities, and equity transferred under the demerger, in compliance with Companies Act, 2017 and relevant financial reporting standards. \n
      •	Ensured full regulatory compliance with SECP requirements for newly incorporated entities resulting from corporate restructuring. \n
      •	Collaborated with cross-functional teams to reconcile intercompany balances and disclosures, ensuring completeness and accuracy. \n
      •	Played a key role in establishing initial financial reporting frameworks and control procedures for the new entity. \n`,
    category: ["External Audit","Demerger"],
    link: "https://www.servistyres.com/",
  },
  {
    title: "Service Retail (Private) Limited",
    subtitle:"Demerger and Financial Audit - Annual",
    image: services,
    description:
      `• Led the first statutory audit of Service Retail (Private) Limited, incorporated as a result of the demerger from Service Industries Limited. \n
      •	Prepared the initial complete set of financial statements, ensuring accurate recognition of opening balances in line with the approved demerger certificate and scheme of arrangement. \n
      •	Ensured proper transfer and presentation of assets, liabilities, and equity, maintaining compliance with the Companies Act, 2017 and relevant IFRS/IAS requirements. \n
      •	Verified alignment of financial records with demerger documents and facilitated compliance with SECP regulations for newly formed entities. \n
      •	Coordinated with the finance, legal, and audit teams to resolve demerger-related complexities and establish robust initial reporting controls. \n
      •	Ensured timely and accurate disclosures of related party transactions and transitional adjustments, enhancing financial statement transparency and audit quality. \n`,
    category: ["External Audit","Demerger"],
    link: "https://servis.pk/",
  },
  {
    title: "Stylers International Limited ",
    subtitle:"Financial Audit - Annual",
    image: stylers,
    description:
      `•	Served as Audit Senior on the statutory financial audit of Nishat Chunian Limited for the year ended 2023, a prominent textile manufacturing and export company, ensuring full compliance with International Financial Reporting Standards (IFRS) and local regulatory requirements. \n
      •	Took lead responsibility for the audit of fixed assets, including verification of additions, disposals, depreciation, and compliance with IAS 16 – Property, Plant and Equipment, ensuring accurate asset valuation and presentation in the financial statements. \n
      •	Reviewed the revaluation of fixed assets conducted during the year (at the 9-month mark), ensuring compliance with relevant IFRS and proper treatment of revaluation surplus and reserves in the financial statements. \n
      •	Assessed the methodology and assumptions used by external valuation experts for revaluation, and verified incorporation of revalued figures into the fixed asset register and general ledger. \n
      •	Evaluated the adequacy of disclosures related to revalued assets, revaluation reserves, and fair value hierarchy in the notes to the financial statements, ensuring transparency and compliance with IAS 16 and IFRS 13. \n
      •	Conducted audit procedures on accounts payable, including supplier reconciliations, ageing analysis, cutoff testing, and review of accruals and provisions. \n
      •	Tested the internal controls around procurement, payment cycles, and three-way matching to identify potential control deficiencies. \n
      •	Ensured accurate classification and presentation of trade and other payables, advances from customers, and other liabilities in accordance with IFRS. \n
      •	Prepared and reviewed relevant sections of the financial statements, including the Statement of Financial Position and related note disclosures. \n`,
    category: "External Audit",
    link: "https://www.stylersintl.com/",
  },
  {
    title: "Nishat Chunian Limited",
    subtitle:"Financial Audit – Annual and Special",
    image: NC,
    description:
      `•	Led the annual and interim statutory audits of Nishat Chunian Limited, a listed company and one of Pakistan’s leading textile exporters, ensuring compliance with International Financial Reporting Standards (IFRS) and local corporate laws. \n
      •	Took complete responsibility for planning, execution, and timely completion of the audit engagement in coordination with the audit manager and client’s senior management. \n
      •	Prepared the complete set of financial statements, including the Statement of Financial Position, Profit or Loss and Other Comprehensive Income, Statement of Changes in Equity, Statement of Cash Flows, and detailed notes in compliance with IFRS and Companies Act, 2017.
      \n
      •	Performed detailed audit procedures on long-term and short-term financing arrangements, including:  \n
        \t •	Foreign Exchange (FE-25) loans \n
        \t •		Temporary Economic Refinance Facility (TERF)\n
        •	Running Finance and Short-Term Borrowings \n
        •	Bank Overdrafts and local working capital facilities \n
        •	International finance arrangements such as PSBA (Pre-Shipment Buyer’s Credit Agreement), FTFA (Foreign Trade Financing Agreement), and FSBA (Forward Supplier’s Bank Arrangement) \n
      
•	Verified loan agreements, reviewed compliance with covenants, validated interest and markup calculations, and ensured proper classification and disclosure in the financial statements. \n
•	Confirmed financing balances with banks, ensured accurate presentation of current and non-current portions, and reviewed security and charge documentation. \n
•	Assessed the accounting treatment of finance costs under IFRS and ensured accurate disclosure of related party transactions, if any, under IAS 24. \n
•	Drafted the audit report and management letter, highlighting significant audit findings and recommending improvements where needed. \n`,
    category: "External Audit",
link: "https://www.nishat.net/",
  },
  {
    title: "At Tahur Limited",
    subtitle:"Financial Audit - Interim",
    image: AT,
    description:
      `•	Performed interim audit procedures at At-Tahur Limited, a listed dairy company producing milk, lassi, flavored milk, and other dairy products.  \n
      •	Conducted audit of inventory and stores, covering raw materials, packing materials, WIP, and finished goods. \n
      •	Performed physical verification testing by tracing selected inventory items to store ledgers and physical counts to confirm existence and accuracy. \n
      •	Carried out cut-off testing around period-end to ensure accurate recording of goods issued and received. \n
      •	Verified inventory valuation at lower of cost or NRV as per IAS 2 – Inventories, including review of cost build-up and NRV calculations. \n
      •	Reviewed overhead allocation methodology applied to finished goods and WIP for consistency and fairness. \n
      •	Checked Goods Receipt Notes (GRNs) and goods-in-transit to ensure timely and correct recognition in stores. \n
      •	Performed audit procedures on trade receivables, including aging analysis and subsequent receipts testing for recoverability. \n
      •	Assessed credit risk exposure, ensured adequacy of expected credit loss (ECL) provisioning, and verified compliance with company credit policy. \n
      `,
    category: "External Audit",
      link: "https://www.at-tahur.com/",
  },
  {
    title: "Maple Leaf Capital Limited",
    subtitle: "Financial Audit – Annual",
    image: Maple,
    description:
      `•	Prepared the complete set of financial statements, including notes to the accounts, in accordance with IFRS and relevant regulatory requirements applicable to NBFCs (Non-Banking Finance Companies). \n
      •	Performed detailed audit procedures on the company's investment portfolio, including equities, mutual funds, and other financial instruments. \n
      •	Verified initial recognition, classification, subsequent measurement, and disclosures of financial assets under IFRS 9 – Financial Instruments. \n
      •	Conducted fair value testing of investments by obtaining market data, evaluating valuation methodologies, and comparing with portfolio management system records. \n
      •	Evaluated investment income, including dividend, capital gains, and unrealized gains/losses, ensuring completeness and accurate recognition. \n
      •	Performed existence and ownership testing of investments through third-party confirmations and broker statements. \n
      •	Ensured compliance with regulatory guidelines issued by SECP for asset management companies and adherence to internal investment policies. \n
      •	Assessed adequacy of disclosures related to financial instruments, risk management, and fair value hierarchy in the financial statements. \n`,
    category: "External Audit",
    link: "https://www.mapleleafcapital.org/",
  },
  {
    title: "Adamjee Insurance Company Limited ",
    subtitle: "Financial Audit – Interim",
    image: adam,
    description:
      `•	Acted as Audit Senior during a special audit engagement focused on understanding the entity’s operations and financial reporting framework. \n
      •	Focused on key insurance areas including Gross Written Premium (GWP), Unearned Premium Reserve (UPR), Claims Liabilities, Reinsurance Arrangements. \n
      •	Performed and reviewed substantive procedures, conducted walkthroughs, and applied analytical reviews to assess processes and controls. \n
      •	Addressed key audit assertions of existence, completeness, and accuracy for insurance income and liability balances. \n
      •	Reviewed reinsurance contracts, tested reinsurance recoveries, and verified premium cessions to reinsurers. \n
      •	Ensured compliance with SECP insurance regulations and applicable accounting standards (e.g., IFRS 4 / IFRS 17 awareness). \n
      •	Identified gaps in control environment and provided recommendations to enhance audit readiness and reporting quality. \n`,

    category: "External Audit",
      link: "https://www.adamjeeinsurance.com/",
  },
  {
    title: "Sefam (Private) Limited",
    subtitle: "Business Process Engineering (BPR) and Standard operating procedures (SOPs)",
    image: sefam,
    description:
      `•	Conducted a comprehensive Business Process Engineering (BPR) project for Sefam (Private) Limited, a leading textile and apparel manufacturer, to streamline operations and enhance efficiency. \n
      •	Managed a cross-functional team throughout the engagement lifecycle, including planning, fieldwork, documentation, and final reporting to senior client stakeholders. \n
      •	Conducted extensive “As-Is” process mapping by engaging with department heads and operational staff to document current workflows, identify inefficiencies, and evaluate existing internal control mechanisms. \n
      •	Performed a detailed Gap Analysis, identifying control weaknesses, duplication of efforts, and compliance issues across key business functions. \n
      •	Developed a comprehensive recommendation report, providing actionable solutions to improve operational efficiency, strengthen controls, and align with industry best practices. \n
      •	Designed and developed Standard Operating Procedures (SOPs) from scratch for critical business functions in Finance, HR, and IT, ensuring clear roles, responsibilities, and approval hierarchies. \n
      •	Created a full suite of customized supporting documents and templates including: Purchase Order (PO), Inward Gate Pass (IGP), Sales Reconciliation Report, Leave application form and Asset Requisition Form etc.  \n
      •	Ensured that SOPs and documentation adhered to regulatory compliance standards and were practical for day-to-day implementation. \n
      •	Delivered presentations and conducted walkthroughs with the client’s department heads to train staff on new processes and documentation.  \n
      •	Ensured timely delivery of all milestones within project scope, while maintaining high standards of documentation and client communication. \n

`,
    category: "Business Process Reengineering (BPR)",

    link: "https://sefam.com/",
  },
  {
    title: "Jomo Technologies (Private) Limited",
    subtitle: "Agreed Upon Procedures / Liquidator",
    image: Jomo,
    description:
      `•	Served on secondment at Jomo Technologies (Private) Limited, a non-going concern under the management of Service Industries Limited, to execute agreed-upon procedures during the company’s wind-up phase. \n
      •	Acted as management-appointed liquidator, overseeing the orderly sale of assets and inventory, ensuring maximum recovery value and proper documentation. \n
      •	Led final settlement negotiations and payments with employees, vendors, and suppliers, ensuring timely resolution of outstanding obligations. \n
      •	Managed the company’s liquidity and cash flows, including cash management, bank reconciliation statements, and payment scheduling, to maintain financial discipline during liquidation. \n
      •	Prepared and maintained accurate sales tax reconciliations, ensuring compliance with tax laws throughout the wind-up process. \n
      •	Coordinated with the external audit team of Jomo Technologies and represented the management’s side to facilitate timely finalisation of audited financial statements. \n
      •	Ensured accurate and compliant financial closure by aligning liquidation steps with applicable legal and financial reporting frameworks. \n
      `,
          category: "Liquidation / Agreed Upon Procedures",

    link: "https://pitchbook.com/profiles/company/500577-22",
  },
  {
    title: "The City School",
    subtitle: "Forensic Audit",
    image: city,
    description:
      `•	Conducted a forensic audit at the North Region Office of The City School, overseeing financial and operational activities across 22 branches. \n
      •	Uncovered multiple fraudulent practices in the procurement and supply chain departments, including irregular vendor dealings and unauthorized payments. \n
      •	Performed detailed examination of payment vouchers and cross-verification with bank statements, successfully identifying and reporting instances of financial fraud. \n
      •	Assessed the effectiveness of internal controls and identified critical weaknesses, particularly in procurement processes, documentation flow, and authorization protocols. \n
      •	Delivered targeted recommendations for strengthening internal controls, enhancing transparency, and improving compliance with institutional policies. \n
      •	Conducted a comprehensive HR audit, revealing unethical practices and internal control lapses related to recruitment, payroll, and attendance records. \n
      •	Drafted and presented forensic audit reports to senior management, contributing to strategic decisions on disciplinary actions and internal restructuring. \n`,
        category: "Forensic Audit",

      link: "https://thecityschool.edu.pk/",
  },
  {
    title: "Sindh Bank Limited",
    subtitle: "Compliance Audit",
    image: Sindh,
    description:
      `•	Performed branch audits in accordance with firm methodology and SBP/AML regulatory frameworks, covering operations, compliance, and internal controls. \n
      •	Physically verified branch closing cash balances, ensured dual control over keys, adherence to SBP cash limits, and reviewed surprise cash count processes. \n
      •	Verified account opening and closure processes, ensuring compliance with KYC, customer due diligence, and SBP Prudential Regulations. \n
      •	Reviewed documentation and reactivation process of dormant accounts, ensuring updated KYC and proper approvals. \n
      •	Evaluated AML/CFT implementation including STR/CTR reporting mechanisms, staff training records, and sanctions list screening. \n
      •	Inspected tagging and existence of fixed assets, branch security measures (CCTV, alarm systems), and administrative records. \n
      •	Reviewed outsourced service contracts, cheque book/ATM issuance controls, and ensured compliance with display requirements. \n
      •	Examined system reports (GLs, MIS), tested TDR processes (initiation, renewal, interest), and ensured proper CBS audit trails. \n
      `,
    link: "https://www.sindhbank.com.pk/",
  },
  {
    title: "DOCS Medical Billing, LLC",
    subtitle: "Human Resource and Information Technology Audit",
    image: docs,
    description:
      `
    •	Conducted a comprehensive internal audit at DOCS Medical Billing, covering key operational areas including HR and IT functions. \n
    •	Performed a thorough HR audit, identifying significant internal control weaknesses in attendance tracking, leave management, and the approval process. \n
    •	Assessed the completeness and accuracy of employee records, highlighting gaps in employee file maintenance and documentation compliance. \n
    •	Reviewed and reported on the adequacy of HR policies and procedures, recommending improvements for enhanced governance and accountability. \n
    •	Carried out a detailed IT audit, verifying the physical existence, tagging, and stock count of IT equipment and assets. \n
    •	Identified policy gaps and inconsistencies in the issuance and tracking of IT equipment provided to employees, exposing risks of misuse and accountability issues. \n
    •	Proposed structured policy improvements and controls for asset management, enhancing operational efficiency and record accuracy. \n
    `,
    category: "Internal Audit",
    
    link: "https://docsmedicalbilling.com/",
  },
  {
    title: "Masters Textile Mills Limited",
    subtitle: "Internal Audit and Process Improvement",
    image: Master,
    description:
      `•	Initiated a dedicated receipt room assignment, ensuring that a third-party physically verifies goods entering the premises and records them based on actual quantities received. \n
      •	Oversaw implementation of a verification mechanism that improved the accuracy of inventory records and strengthened control over inbound materials. \n
      •	Identified key weaknesses in internal controls within the procurement department, including gaps in documentation, approval hierarchy, and material handling. \n
      •	Streamlined the entire procurement process — from purchase order creation and approval to receipt and storage of goods — ensuring process transparency and accountability.  \n
      •	Improved alignment between procurement, stores, and accounts departments, ensuring real-time updates and accurate GRN (Goods Receipt Note) generation. \n
      •	Enhanced control environment by recommending procedural changes, tightening roles and responsibilities, and ensuring segregation of duties. \n
      •	Contributed to improved inventory accuracy, reduced discrepancies, and stronger audit trail for material receipts and vendor performance tracking. \n`,
        category: ["Internal Audit","Cost Audit"],

      link: "https://mastertex.com/",
  },

  {
    title: "Procon Engineering (Private) Limited",
    subtitle: "Internal Audit and Process Improvement",
    image: procon,
    description:
      `•	Initiated a dedicated receipt room assignment, ensuring that a third-party physically verifies goods entering the premises and records them based on actual quantities received. \n
      •	Oversaw implementation of a verification mechanism that improved the accuracy of inventory records and strengthened control over inbound materials. \n    
      •	Identified key weaknesses in internal controls within the procurement department, including gaps in documentation, approval hierarchy, and material handling. \n      
      •	Streamlined the entire procurement process — from purchase order creation and approval to receipt and storage of goods — ensuring process transparency and accountability. \n
      •	Improved alignment between procurement, stores, and accounts departments, ensuring real-time updates and accurate GRN (Goods Receipt Note) generation.\n
      •	Enhanced control environment by recommending procedural changes, tightening roles and responsibilities, and ensuring segregation of duties. \n
      •	Contributed to improved inventory accuracy, reduced discrepancies, and stronger audit trail for material receipts and vendor performance tracking. \n`,
        category: "Internal Audit",

      link: "https://procon.com.pk/",
  },{
    title: "H. Nizam Din & Sons (Private) Limited",
    subtitle: "Internal audit - Procurement",
    image: HND,
    description:
      `•	Conducted a review of the procurement cycle, identifying gaps and inefficiencies in purchase order creation, approval, and goods receipt processes. \n
      •	Streamlined the end-to-end procurement process, from initiation of purchase orders to preparation of Goods Receipt Notes (GRNs) and physical verification of received goods. \n
      •	Identified significant weaknesses in internal controls, particularly related to unapproved or incomplete purchase orders and inconsistent record-keeping. \n
      •	Implemented standardized procedures to improve documentation, approval hierarchy, and coordination between procurement, stores, and finance departments. \n
      •	Introduced control measures to ensure physical verification of goods at the time of receipt, improving accuracy and accountability in inventory records. \n
      •	Strengthened the audit trail for procurement transactions and ensured better compliance with internal policies.`,
        category: ["Internal Audit","Cost Audit"],

      link: "https://nizamgroup.com/",
  },
];


const getCategoryColor = (category) => {
  switch (category) {
    case "External Audit": return "from-blue-400 to-cyan-500";
    case "Internal Audit": return "from-purple-400 to-pink-500" ;
    case "Cost Audit": return "from-emerald-400 to-teal-500";
    case "Forensic Audit": return "from-yellow-400 to-orange-500";
    case "Business Process Reengineering (BPR)": return "from-red-400 to-pink-500";
    case "Liquidation / Agreed Upon Procedures": return "from-gray-400 to-gray-600";
    default: return "from-gray-400 to-gray-600";
  }
};
  

function Clients() {
  
    const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
    setIsVisible(true);
  }, []);

// const filteredProjects = selectedCategory === "All"
//   ? projects
//   : projects.filter(project => project.categories.includes(selectedCategory));

// filtering
// ✅ Normalize category to always be an array
const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter((project) => {
        const categories = Array.isArray(project.category)
          ? project.category
          : [project.category]; // wrap string in array
        return categories.includes(selectedCategory);
      });


  return (
    <section id="portfolio" className="py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-700">Key Clientele <span className="text-gray-800">- Nexia International</span> </h1>
        </div>
        {/* Category Filter
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-black hover:bg-white/20 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div> */}
{/* ✅ Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-black hover:bg-white/20 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 max-w-6xl mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-96 h-52 object-fill rounded-t-lg"
              />
              <h2 className="text-1xl font-bold mt-4">{project.title}</h2>
              <h2 className="text-1xl font-bold  mt-4">{project.subtitle}</h2>
             
              <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[1050px] transition-all duration-500 ease-in-out">
                {project.description.split('\n').map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
               <div className="flex flex-col items-center">
  <div className="flex justify-between space-x-4">
    <span
      className={`px-3 py-1 flex items-center justify-center rounded-full text-xs font-medium 
                  bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}
    >
      {project.category}
    </span>

    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
    >
      View
    </a>
  </div>
</div>

                
              </div>
            </div>
          ))}
        </div> */}

        {/* ✅ Projects Grid */}
        <div className="grid grid-cols-1 max-w-6xl mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-96 h-52 object-fill rounded-t-lg"
              />
              <h2 className="text-1xl font-bold mt-4">{project.title}</h2>
              <h2 className="text-1xl font-bold mt-4">{project.subtitle}</h2>

              {/* ✅ Expandable description */}
              <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[1050px] transition-all duration-500 ease-in-out">
                {project.description.split("\n").map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {line}
                  </p>
                ))}

                {/* ✅ Show multiple categories */}
                <div className="flex flex-col items-center mt-3">
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
  {(Array.isArray(project.category) ? project.category : [project.category]).map(
    (cat, i) => (
      <span
        key={i}
        className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
          cat
        )} text-white`}
      >
        {cat}
      </span>
    )
  )}
</div>


                  {/* View button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
