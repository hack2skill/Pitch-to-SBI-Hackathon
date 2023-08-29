import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const CompanyDetails = () => {
  // State to store the fetched data
  const [searchData, setSearchData] = useState(null);

  const fetchCompanyData = async () => {
    try {
      // Define the request options
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({ cin: 'U72900KA2011PTC060958' }), // Convert the data to JSON format
      };

      // Send the POST request to localhost:4000/company
      const response = await fetch('http://localhost:4000/company', requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the response JSON
      const data = await response.json();

      // Set the fetched data in state
      console.log(data);
      setSearchData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    // Fetch company data when the component mounts
    fetchCompanyData();
  }, []);

  const renderData = (data) => {
    return (
      <table className="company-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>
                {typeof value === 'object' ? (
                  // If the value is an object, render it recursively
                  renderData(value)
                ) : (
                  // Otherwise, display the value as is
                  value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Company Details</h2>
      {searchData ? renderData(searchData) : <h2>Fetching....</h2>}
      <style jsx>{`
        .company-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .company-table th, .company-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .company-table th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default CompanyDetails;
