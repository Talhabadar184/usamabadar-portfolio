import React from "react";
import certi1 from "../assets/Cerrificates/1.svg"
import certi2 from "../assets/Cerrificates/2.svg"
import certi3 from "../assets/Cerrificates/3.svg"
import certi4 from "../assets/Cerrificates/4.svg"
import certi5 from "../assets/Cerrificates/5.svg"
import certi6 from "../assets/Cerrificates/6.svg"
import certi7 from "../assets/Cerrificates/7.svg"
import certi8 from "../assets/Cerrificates/8.svg"
import certi9 from "../assets/Cerrificates/9.jpg"
import certi10 from "../assets/Cerrificates/10.jpg"
import certi11 from "../assets/Cerrificates/11.jpg"
import certi12 from "../assets/Cerrificates/12.jpg"

const projects = [
  {
    title: "Audit Simulation - PwC",
    image: certi1,
    description: `Key expertise include:\n• Control testing of a client's purchasing process for PwC's Audit team.\n• Compiling data through walkthrough documentation including findings.\n• Outlining the purchase process in a flowchart and risk control matrix.`,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/CA4pBqsy4b4PdyaBP/N9wYyLnaWpizw8Yjy_CA4pBqsy4b4PdyaBP_27odRkja688jCQkjA_1734707244466_completion_certificate.pdf",
  },
  {
    title: "Audit Job Simulation - EY",
    image: certi2,
    description:
    "Key expertise include: \n •Completed a job simulation involving identifying and assessing risks, and control and substantive testing for EY's Audit team.  \n •Put a transaction flow into the correct order, assigned risks of material misstatement to elements of the transaction flow, and identified which significant accounts these issues could impact. \n •Prepared for a conversation with the client about control failures found during control testing and what this means for testing strategy. \n•Reviewed outputs of an accounts analysis tool and summarized which issues to raise with my Senior",   
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Z3pPDqCPapFTSGBgi/d2mpB4NEF4HQBkbhE_Z3pPDqCPapFTSGBgi_27odRkja688jCQkjA_1735067558408_completion_certificate.pdf",
  },
  {
    title: "Career Catalyst: Audit - KPMG",
    image: certi3,
    description:
      "Key expertise include: \n •Conducted a job simulation focused on auditing a hypothetical client, Ashbourne Industries. \n •Determined the materiality of general ledger accounts to plan the audit.•Prepared, sent, and evaluated the results of confirmations sent to third parties. \n •Reviewed the client's order-to-cash (OTC) process.•Communicated the audit findings via a video presentation and reviewed the audit opinion.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/dqdMvpBtAYYtbbNge/G7BF7EPuCNecw3Bb3_dqdMvpBtAYYtbbNge_27odRkja688jCQkjA_1734963521494_completion_certificate.pdf",
  },
  {
    title: "Investment Banking Job Simulation - J.P. Morgan Chase",
    image: certi4,
    description:
      "Key expertise include: \n •Identified an ideal M&A target for a client based on an assessment of their strategic and financial criteria. \n•Constructed a DCF model to calculate the valuation of the M&A target and adjusted the model to account for a competitor bid and supply chain interruption. \n •Created a 2-pager for the client containing a company profile and summary of the auction process.",
    link:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_27odRkja688jCQkjA_1735627582703_completion_certificate.pdf",
  },
  {
    title: "Data Modeling in Power BI - Microsoft ",
    image: certi5,
    description:
      `Key expertise include: \n
      • Data Modeling: Creating and maintaining relationships, and implementing Star Schema designs for efficient data structures.\n
      • DAX Proficiency: Developing calculated columns, measures, and time intelligence functions (YTD, YoY, etc.) for advanced analytics.\n
      • Performance Optimization: Configuring models to enhance efficiency and support robust reporting capabilities.\n`,
    link: "https://www.coursera.org/account/accomplishments/verify/SO9XOX0BZUXH",
  },
  {
    title: "Professional Values, Ethics and Attitudes Course - ICAP",
    image: certi6,
    description:
      `Successfully completed the mandatory ICAP course on Professional Values, Ethics and Attitudes, designed to instill the ethical foundation and professional conduct required of Chartered Accountants. Key learning outcomes included: \n
      •In-depth understanding of ICAP’s Code of Ethics and the IFAC ethical framework.\n
      •Application of professional skepticism and sound judgment in ethical decision-making.\n
      •Identification and resolution of ethical threats and conflicts of interest.\n
      •Promotion of integrity, transparency, and accountability in professional roles.\n
      •Development of the right attitudes and behavior for leadership, public trust, and responsible governance.
`,     link: "/professional.pdf",
  },
  {
    title: "Data Management and Analytics - ICAP",
    image: certi7,
    description:
      `Successfully completed the ICAP course on Data Management and Analytics, designed to equip Chartered Accountancy professionals with essential skills in modern data handling and analysis. Key competencies gained during the course include:\n
      •Hands-on experience with Power BI for data visualization, dashboard creation, and business intelligence reporting.\n
      •Application of DAX (Data Analysis Expressions) for advanced datamodeling and custom calculations.\n
      •Introduction to Python for data extraction, transformation, and basic automation tasks.\n
      •Understanding of data structuring, relational databases, and ETL (Extract, Transform, Load) processes.\n
      •Strengthened ability to analyze trends, derive insights, and support data-driven decision-making.
`,    link: "/DMA.pdf",
  },
  {
    title: "Writing Skills and Presentation  ICAP",
    image: certi8,
    description:
      `Successfully completed the ICAP Writing Skills and Presentation course, aimed at enhancing communication abilities for finance professionals. The course focused on building clarity, accuracy, and confidence in both written and verbal business communication. Key learnings included: \n
      •Techniques for professional, concise, and reader-focused report writing. \n
      •Use of clear structure, tone, and formatting for effective business correspondence.\n
      •Application of creative writing strategies to improve engagement and impact.\n
      •Development of presentation skills, including audience analysis, visual aids, and confident delivery.\n
      •Practice through simulated board-level reports and live presentation exercises.\n`,
    link: "/writing.pdf",
  },
  {
    title: "Certificate in Accounting and Finance (CAF) ",
    image: certi9,
    description:
      "Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2021.",
    link: "/accounting.pdf",
  },
  {
    title: "ACCA (Part Qualified)",
    image: certi10,
    description:
      "Granted exemption from 8 papers of ACCA based on qualifications in Chartered Accountancy of Pakistan.",
    link: "/ACCA.pdf",
  },
  {
    title: "Grade 11-12 / Senior High School",
    image: certi11,
    description:
      "Passed Higher Secondary School (Grade 11-12) from Board of Intermediate and Secondary Education, Lahore with 78% marks.",
    link: "/2nd.pdf",
  },
  {
    title: "Grade 9 - 10 / High School",
    image: certi12,
    description:
      "Passed  Secondary School (Grade 09-10) from Board of Intermediate and Secondary Education, Lahore with 85% marks.",
    link: "/10th.pdf",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-12 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-700">Professional Training <span className="text-gray-700">And Certificates</span></h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white text-black p-6 mt-5 rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-72 h-60 object-fill rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-4">{project.title}</h2>

              <div className="mt-2 overflow-hidden max-h-16 group-hover:max-h-[550px] transition-all duration-500 ease-in-out">
                {project.description.split('\n').map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed text-justify">
                    {line}
                  </p>
                ))}
                 <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-block bg-black text-white py-2 px-4 rounded border border-blue-500 hover:bg-blue-500 transition"
              >
                View
              </a> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
