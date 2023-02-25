// import libraries
import { Button, Box, Tabs, Tab } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from "react";

// import components and styling
import "./ClaimsDisplayPage.css";
import ClaimTable from "./ClaimTable";
import { Link } from 'react-router-dom';

function ClaimsDisplayPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const fakeClaims = [
    {
      "ClaimID": 2018,
      "InsuranceID": 1011,
      "FirstName": "John",
      "LastName": "Tan",
      "ExpenseDate": "2022-10-10T08:00:00+08:00",
      "Amount": 3000.00,
      "Purpose": "Aircon Repair",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Pending",
      "LastEditedClaimDate": "2022-10-15T17:45:52+08:00"
     },
     {
      "ClaimID": 2019,
      "InsuranceID": 1009,
      "FirstName": "Martin",
      "LastName": "Ong",
      "ExpenseDate": "2022-10-26T08:00:00+08:00",
      "Amount": 100.00,
      "Purpose": "Dentist",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Approved",
      "LastEditedClaimDate": "2022-10-28T13:08:24+08:00"
     },
     {
      "ClaimID": 2021,
      "InsuranceID": 1011,
      "FirstName": "John",
      "LastName": "Tan",
      "ExpenseDate": "2022-12-20T08:00:00+08:00",
      "Amount": 2000.00,
      "Purpose": "Engine Repair",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Approved",
      "LastEditedClaimDate": "2023-01-06T11:24:32+08:00"
     },
     {
      "ClaimID": 2018,
      "InsuranceID": 1011,
      "FirstName": "John",
      "LastName": "Tan",
      "ExpenseDate": "2022-10-10T08:00:00+08:00",
      "Amount": 3000.00,
      "Purpose": "Aircon Repair",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Pending",
      "LastEditedClaimDate": "2022-10-15T17:45:52+08:00"
     },
     {
      "ClaimID": 2024,
      "InsuranceID": 1009,
      "FirstName": "Martin",
      "LastName": "Ong",
      "ExpenseDate": "2023-02-23T08:00:00+08:00",
      "Amount": 100.00,
      "Purpose": "Dentist",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Pending",
      "LastEditedClaimDate": "2023-02-25T17:33:58+08:00"
     },
     {
      "ClaimID": 2015,
      "InsuranceID": 1009,
      "FirstName": "Martin",
      "LastName": "Ong",
      "ExpenseDate": "2022-09-02T08:00:00+08:00",
      "Amount": 100.00,
      "Purpose": "Outpatient Claim",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Rejected",
      "LastEditedClaimDate": "2022-09-03T10:30:00+08:00"
     },
     {
      "ClaimID": 2016,
      "InsuranceID": 1008,
      "FirstName": "John",
      "LastName": "Tan",
      "ExpenseDate": "2022-09-04T08:00:00+08:00",
      "Amount": 100.00,
      "Purpose": "Outpatient Claim",
      "FollowUp": 0,
      "PreviousClaimID": null,
      "Status": "Rejected",
      "LastEditedClaimDate": "2022-09-05T13:25:29+08:00"
     },
  ];

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    console.log(newTabIndex);
  };

  return (
    <div>
      <div className='claim-page__header2-wrapper'>
        <h2>Claims</h2>
      </div>
      <div className='claim-page__create-btn-wrapper'>
        <Button variant="contained" startIcon={<AddCircleIcon />}>
          <Link to="/new-claim">Create New Claim</Link>
        </Button>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "white",}}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="View All"></Tab>
          <Tab label="Pending"></Tab>
          <Tab label="Approved"></Tab>
          <Tab label="Rejected"></Tab>
        </Tabs>
      </Box>
      
      {tabIndex === 0 ? <ClaimTable claims={fakeClaims} /> : undefined}
      {tabIndex === 1 ? <ClaimTable claims={fakeClaims} /> : undefined}
      {tabIndex === 2 ? <ClaimTable claims={fakeClaims} /> : undefined}
      {tabIndex === 3 ? <ClaimTable claims={fakeClaims} /> : undefined}

    </div>
  )
}

export default ClaimsDisplayPage;