import React from 'react';

const About = () => {
  return (
    <div id='about' className="bg-white  justify-center items-center flex py-12 px-6 md:px-16 text-gray-800">
      <div className="max-w-7xl mx-auto grid justify-center grid-cols-1 md:grid-cols-3 gap-12  border-gray-200 ">
        
        {/* Who Am I */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block">Who am I ?</h2>
          <h3 className="mt-4 text-lg font-medium">Chartered Accountant (Finalist)</h3>
          <p className="mt-2 text-sm text-gray-600">
          As a CA Finalist and Audit Senior at Nexia International (Riaz Ahmad and Co. Chartered Accountants), I bring over four years of extensive experience in external auditing, specializing in conducting financial audits across various industries in compliance with IFRS and forensic audits. My role involves ensuring the accuracy and integrity of financial statements, while providing critical insights to clients on their financial reporting processes. I have had the opportunity to lead audit teams, where I took on the role of Audit Team Lead, effectively managing my team under pressure and ensuring the successful completion of audit engagements with tight deadlines.

I have also served as an Internal Auditor, where I was responsible for preparing in-depth Business Process Re-engineering (BPR), Internal audit reports, conducting gap analyses, and offering recommendations to enhance internal controls and align practices with industry standards.          </p>
<a
  href="/Usama Badar CV.pdf"
  download
  className="mt-4 inline-block px-5 py-2 border border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white transition rounded"
>
  Download My CV
</a>

        </div>

        {/* Personal Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block">Personal Info</h2>
          <ul className="mt-4 text-sm space-y-2">
            <li className='mt-4'><strong>Birth Date:</strong> July 31, 2000            </li>
            <li className='mt-4'><strong>Email:</strong> usamabadar.finance@gmail.com</li>
            <li className='mt-4'><strong>Phone:</strong> +923314052004</li>
            <li className='mt-4'><strong>Address:</strong> Lahore. Punjab. Pakistan</li>
          </ul>
          <div className="mt-4 flex gap-4 text-blue-700 text-xl">
            {/* Icons */}
          </div>
        </div>

        {/* My Expertise */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 border-b-2 border-blue-700 inline-block"> Skills and Expertise</h2>
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
                
              International Financial Reporting Standards

              </h4>
              <p className="text-sm text-gray-600">Financial Statements Preparation, Financial Modeling and Forecasting, Due Diligence and Business Insights.</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
              Financial Auditing and Assurance
              </h4>
              <p className="text-sm text-gray-600">Audit Strategy and Development, Regulatory Compliance and Reporting, Internal Controls Evaluation</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-lg font-medium">
              Data Analytics and Management
              </h4>
              <p className="text-sm text-gray-600">Power BI, MS office, Oracle, Team leadership and Effective Communication.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
