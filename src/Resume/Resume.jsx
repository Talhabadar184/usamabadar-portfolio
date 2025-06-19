import React from "react";

const skills = [
  { name: "International Financial Reporting Standards ", level: "95%" },
  { name: "Financial Statements Preparation ", level: "90%" },
  { name: "Financial Modeling and Forecasting", level: "90%" },
  { name: "Due Diligence and Business Insights", level: "90%" },
  { name: "Financial Auditing and Assurance (IFRS)", level: "90%" },
  { name: "Audit Strategy and Development", level: "90%" },
  { name: "Regulatory Compliance and Reporting", level: "90%" },
  { name: "Journal Entries ", level: "90%" },
  { name: "Data Analytics and Management", level: "90%" },
  { name: "Microsoft Power BI", level: "90%" },
  { name: "Oracle", level: "90%" },
  { name: "Team Leadership & Training", level: "90%" },
  { name: "Effective Communication", level: "90%" },
  { name: "Report writing and presentation skills", level: "85%" },
  { name: "Presentation Skills", level: "85%" },
  { name: "Professional Ethics ", level: "85%" },
];

const Resume = () => {
  return (
    <div id="resume" className="bg-white px-6 py-16 text-gray-800">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-blue-700">My</span> Resume
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Expertise */}
        <div className="border p-6">
          <h3 className="text-xl font-semibold border-b-2 border-blue-700 inline-block mb-4">
            Expercience
          </h3>
          <div>
            <h4 className="text-blue-700 font-semibold">September 2024 - Present</h4>
            <p className="font-medium text-blue-700" > Audit Senior - Nexia International
            </p>
            <p className="text-sm text-gray-600 mt-2">
            • Took overall responsibility for planning, execution, and completion of audit engagements for large and complex clients.
<br />
• Prepared and reviewed complete sets of financial statements, including notes to the accounts, in accordance with IFRS and local regulatory requirements.
<br />
• Reviewed and finalized audit work performed by the team, ensuring compliance with ISA, IFRS, and the firm’s quality control standards.
<br />
• Prepared and presented Business Process Re-engineering (BPR) report including "AS-IS" Business Operations and Gap Analysis report and recommendations on internal controls and financial weaknesses in alignment with industry standards and IFRS/IAS.
<br />
• Managed multiple engagements simultaneously, ensuring adherence to budgets and timelines.
            </p>
            <hr className="my-4" />
          </div>

          <div>
            <h4 className="text-blue-700 font-semibold">August 2023 - September 2024</h4>
            <p className="font-medium text-blue-700">Senior Audit Associate - Nexia International
            </p>
            <p className="text-sm text-gray-600 mt-2">
            • Supervised small audit teams during engagements, reviewing the work performed by audit associates and ensuring quality standards were maintained.
<br />
• Performed risk assessments, designed audit procedures, and executed audit programs independently for assigned sections.
<br />
• Coordinated with tax and advisory teams for multidisciplinary engagements (e.g., audits involving tax exposure or system implementation).
            </p>
            <hr className="my-4" />
          </div>

          <div>
            <h4 className="text-blue-700 font-semibold">December 2021 - August 2023</h4>
            <p className="font-medium text-blue-700">Audit Associate - Nexia International</p>
            <p className="text-sm text-gray-600 mt-2">
            • Assisted in performing external audits of clients in various industries under the direct supervision of seniors and managers.
<br />
• Carried out substantive testing on financial statement items such as cash and bank, receivables, payables, inventory, and fixed assets.
<br />
• Worked on basic tax and regulatory compliance tasks when required, including initial preparation of tax computations.
 <br />
• Served as Internal Auditor, responsible for maintaining Standard Operating Procedures (SOPs) for raw material procurement, conducting gap analysis, and providing recommendations for internal controls in accordance with industry practices.
            </p>
            <hr className="my-4" />
          </div>



          <div className="mb-6">
            <h4 className="text-blue-700 font-semibold">October 2021 - November 2021</h4>
            <p className="font-medium text-blue-700">Accounts Department Intern - Nishat Linen (PVT) Limited</p>
            <p className="text-sm text-gray-600 mt-2">
            •Handled expense booking, journal voucher entries, and bank payment processing—primarily related to rent and advertisement expenses. <br />
            •Conducted stock count observations and ensured accurate recording of financial transactions through double entries on ORACLE. Proficient in both ORACLE and Microsoft Excel for financial data handling and reporting.
            </p>
            <hr className="my-4" />
          </div>

          

          
          
        </div>

        {/* Education */}
        <div className="border p-6">
          <h3 className="text-xl font-semibold border-b-2 border-blue-700 inline-block mb-4">
            Education
          </h3>


          <div>
            <h4 className="text-blue-700 font-semibold"> 2022 -  2025</h4>
           <p className="font-medium text-blue-700">Certified Finance and Accounting Professional (CFAP), CA Finalist</p>
            <p>Institute of Chartered Accountants of Pakistan</p>
            <p className="text-sm text-gray-600 mt-2">
            CA Finalist (since 2022) with three papers remaining for qualification. Currently completing mandatory articleship at Nexia International.            </p>
            <hr className="my-4" />

          </div>

          <div>
            <h4 className="text-blue-700 font-semibold">  2019 -  2021</h4>
            <p className="font-medium text-blue-700">Certificate in Accounting and Finance (CAF), CA Intermediate     </p>
            <p> Institute of Chartered Accountants of Pakistan</p>
            <p className="text-sm text-gray-600 mt-2">
            Completed CA Intermediate, Certificate in Accounting and Finance (CAF) in 2.5 years and started mandatory CA Articleship from Nexia International. 
            </p>
            <hr className="my-4" />

          </div>



          <div>
            <h4 className="text-blue-700 font-semibold"> 2019 - Ongoing</h4>
            <p className="font-medium text-blue-700">ACCA (Part Qualified)            </p>
            <p>Association of Certified Chartered Accountants, Accounting and Finance </p>
            <p className="text-sm text-gray-600 mt-2">
            Granted exemption from 8 papers of ACCA based on qualifications in Chartered Accountancy of Pakistan
            </p>
            <hr className="my-4" />

          </div>

          <div className="mb-6">
            <h4 className="text-blue-700 font-semibold"> 2019 - 2019</h4>
            <p className="font-medium text-blue-700">Assessment of Fundamental Competences  (AFC), CA Foundation</p>
<p> Institute of Chartered Accountants of Pakistan</p>
            <p className="text-sm text-gray-600 mt-2">
            Completed CA foundation, Assessment of Fundamental Competencies (AFC) in 6 months.
            </p>
            <hr className="my-4" />
          </div>

          <div className="mb-6">
            <h4 className="text-blue-700 font-semibold"> 2017 - 2018</h4>
            <p className="font-medium text-blue-700">
            Grade 11 - 12 / Senior High School</p>
<p> 
Punjab Board of Intermediate and Secondary Education</p>
            <p className="text-sm text-gray-600 mt-2">
            Achieved 78% score in 12th grade board examinations while actively participating in extracurricular activities, (table tennis and football) demonstrating consistent academic excellence and a well-rounded skill set.
            </p>
            <hr className="my-4" />
          </div>

          <div className="mb-6">
            <h4 className="text-blue-700 font-semibold"> 2015 - 2016</h4>
            <p className="font-medium text-blue-700">Grade 9 - 10 / High School  </p>
<p> 
Punjab Board of Intermediate and Secondary Education</p>
            <p className="text-sm text-gray-600 mt-2">
            Ranked among the top three students in all classes throughout my schooling, achieving an 85% score in 10th grade board examinations while actively participating in extracurricular activities, demonstrating consistent academic excellence and a well-rounded skill set.
            </p>
            <hr className="my-4" />
          </div>


          
        </div>

        {/* Skills */}
        <div className="border p-6">
          <h3 className="text-xl font-semibold border-b-2 border-blue-700 inline-block mb-4">
            Skills
          </h3>

          <div className="space-y-4 mt-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <p className="text-sm font-medium mb-1">{skill.name}</p>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-blue-700 h-2 rounded"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
