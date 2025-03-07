import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";
import './ReachReport.css';

function AnnualReport() {
  const [selectedYear, setSelectedYear] = useState("2025"); // Default to 2025 or the current year
  const [isActive, setIsActive] = useState(false); // To trigger content display after load

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    setIsActive(true); // Activate the content display after the component is mounted
  }, [selectedYear]);

  // Function to handle year change
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Function to open the PDF in a new tab
  const openReportInNewTab = () => {
    if (selectedYear) {
      const reportUrl = `/PDFs/AnnualReport${selectedYear}.pdf`; // PDF file path
      window.open(reportUrl, '_blank'); // Opens the PDF in a new tab
    }
  };

  return (
    <div>
      {/* Report Display */}
      <div className={`report-page ${isActive ? 'active' : ''}`}>
        <h1>🎉 Welcome to the Annual Report Section 🎉</h1>
        <p>Select the session to view the report:</p>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">-- Select Session --</option>
          <option value="2024">2023-24</option>
          <option value="2025">2024-25</option>
        </select>
        <div className="buttonReport">
          <button onClick={openReportInNewTab} disabled={!selectedYear}>View Report</button>
        </div>
      </div>
      <NSSFooter />
    </div>
  );
}

export default AnnualReport;