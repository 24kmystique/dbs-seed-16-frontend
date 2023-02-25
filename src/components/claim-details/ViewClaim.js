import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Button, Card, Grid, IconButton, ListItemText, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function ViewClaim() {
  const [claimData, setClaimData] = useState({});
  const [policyData, setPolicyData] = useState({});

  useEffect(() => {
    setClaimData({
      ClaimId: "123",
      ExpenseDate: "22 Feb 2023",
      Amount: 21,
      Purpose: "I want to break free",
      FollowUp: false,
      PreviousClaimId: 0,
      Status: "Pending",
      LastEditedClaimDate: "22 Feb 2023",
    })

    setPolicyData({
      InsuranceId: "P123",
      EmployeeId: "E111",
      InsuranceType: "Life Insurance",
      PolicyStartDate: "2 Feb 2022",
      PolicyEndDate: "2 Feb 2032",
      PolicyTerm: "10 years",
      ClaimLimit: 100.00,
      RemainingClaimLimit: 100.00,
    })
  }, [])

  const getStatusColour = (status) => {
    switch (status) {
      case "Pending":
        return "warning.light";
      case "Accepted":
        return "success.main";
      case "Rejected":
        return "error.main";
      default:
        return "warning.light";
    }
  }

  
  return (
    <Container sx={{mb: 8}}>
      <h1>View Claim Details</h1>
      <hr></hr>

      <Card
        sx={{
          mt: 4,
          p: 4
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h5">Claim Details</Typography>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Stack>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <ListItemText primary="Claim Id" secondary={claimData.ClaimId} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Expense Date" secondary={claimData.ExpenseDate} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Amount" secondary={claimData.Amount} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Purpose" secondary={claimData.Purpose} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Follow Up" secondary={claimData.FollowUp ? "Yes" : "No"} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Previous Claim Id" secondary={claimData.PreviousClaimId ? claimData.PreviousClaimId : "-"} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Status" secondary={claimData.Status} secondaryTypographyProps={{ color: getStatusColour(claimData.Status)}} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Last Edited Date" secondary={claimData.LastEditedClaimDate} />
          </Grid>
        </Grid>
      </Card>

      <Card
        sx={{
          mt: 4,
          p: 4
        }}
      >
        <Typography variant="h5">Policy Details</Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <ListItemText primary="Policy Id" secondary={policyData.InsuranceId} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Employee Id" secondary={policyData.EmployeeId} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Insurance Type" secondary={policyData.InsuranceType} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Policy Start Date" secondary={policyData.PolicyStartDate} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Policy End Date" secondary={policyData.PolicyEndDate} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Policy Term" secondary={policyData.PolicyTerm} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Claim Limit" secondary={policyData.ClaimLimit} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Remaining Limit" secondary={policyData.RemainingClaimLimit} />
          </Grid>
        </Grid>
      </Card>

      <Card
        variant="outlined"
        sx={{
          mt: 4,
          p: 4
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Button variant="contained" color="error">Delete</Button>
          </Grid>
          <Grid item xs={8}>
            Do note that deleting a claim that is a follow up claim will result in the entire chain of claims being deleted.
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ViewClaim;