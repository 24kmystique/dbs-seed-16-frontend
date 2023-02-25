import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Card, Grid, ListItem, ListItemText, Typography } from "@mui/material";

function ViewClaim() {
  const [claimData, setClaimData] = useState({});

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
    <Container>
      <h1>View Claim Details</h1>
      <hr></hr>

      <Card
        sx={{
          mt: 4,
          p: 4
        }}
      >
        <Typography variant="h5">Claim Details</Typography>
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
            <ListItemText primary="Policy Id" secondary={claimData.ClaimId} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default ViewClaim;