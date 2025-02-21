import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.js";
import NSSFooter from "./NSSFooter.js";

function EventReport() {
  const { eventName } = useParams();
  const [selectedYear, setSelectedYear] = useState("2024-25"); // Default to 2025 or the current year

  // Data structure containing event-specific reports for different years
  const reports = {
    "NATIONAL FOUNDATION DAY": {
      "2023-24": {
        type: "pdf",
        url: "/PDFs/NSS-Foundation-Day-2023-Reort1.pdf"
      },
      "2024-25": {
        type: "text",
        url: "/PDFs/Aaramb2024.pdf"
      }
    },
    "REPUBLIC DAY": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/Republic-Day-2025-Report.pdf"
      }
    },
    "SAHYOG": {
      "2023-24": {
        type: "pdf",
        url: "/PDFs/Sahyog-2023-24.pdf"
      },
      "2024-25": {
        type: "text",
        content: "Report Not Available"
      }
    },
    "BLOOD DONATION CAMP": {
      "2023-24": {
        type: "pdf",
        url: "/PDFs/BloodDonation2024.pdf"
      },
      "2024-25": {
        type: "text",
        content: "Report Not Available"
      }
    },
    "INDEPENDENCE DAY": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/IndependenceDay.pdf"
      }
    },
    "AARAMBH FOUNDATION WEEK": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/Aaramb2024.pdf"
      }
    },
    "JUNOON SCHOOL VISIT": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/JunoonSchool.pdf"
      }
    },
    "NATIONAL YOUTH DAY": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/NYDandHT.pdf"
      }
    },
    "HAPPYTHON": {
      "2023-24": {
        type: "text",
        content: "Report Not Available"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/NYDandHT.pdf"
      }
    },
    "CLEANLINESS DRIVE": {
      "2023-24": {
        type: "pdf",
        url: "/PDFs/Swatchanjali-Report1.pdf"
      },
      "2024-25": {
        type: "pdf",
        url: "/PDFs/Aaramb2024.pdf"
      }
    },
  };

  // Available years from all event data (ensuring dropdown consistency)
  const availableYears = ["2023-24", "2024-25"];

  // Function to handle year selection
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Get report data for selected event & year
  const eventReports = reports[eventName] || {};
  const report = eventReports[selectedYear];

  return (
    <div className="event-report-container">
      <div className="content">
        <h1>Event Report for: {eventName}</h1>

        {/* Year Selector */}
        <div className="year-selector">
          <label htmlFor="yearSelect">Choose Session: </label>
          <select id="yearSelect" value={selectedYear} onChange={handleYearChange}>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Report Display */}
        <div className="report-section">
          <h2>Report for {selectedYear}</h2>
          {report ? (
            report.type === "pdf" ? (
              <div className="pdf-container">
                <iframe 
                  src={report.url} 
                  width="100%" 
                  height="600px" 
                  title={`${eventName} Report PDF`}
                />
              </div>
            ) : (
              <p>{report.content}</p>
            )
          ) : (
            <p>No report available for {eventName} in {selectedYear}.</p>
          )}
        </div>
      </div>
      <NSSFooter />
    </div>
  );
}

export default EventReport;