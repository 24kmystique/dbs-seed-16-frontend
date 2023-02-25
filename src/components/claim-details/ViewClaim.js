import { useState, useEffect } from "react";
import EditClaim from "./EditClaim";
import { Container } from "@mui/system";
import { Button, Card, Grid, IconButton, ListItemText, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useLocation } from "react-router-dom";


function ViewClaim() {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const [claimData, setClaimData] = useState(useLocation().state.claimData);
  const [policyData, setPolicyData] = useState({});

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // setClaimData({
    //   ClaimId: "123",
    //   ExpenseDate: "22 Feb 2023",
    //   Amount: 21,
    //   Purpose: "I want to break free",
    //   FollowUp: false,
    //   PreviousClaimId: 0,
    //   Status: "Pending",
    //   LastEditedClaimDate: "22 Feb 2023",
    // })
    // console.log(routerState)
    // if (useLocation().state.claimData) setClaimData(routerState.claimData);

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

  const RenderEditButton = () => {
    if (claimData.Status === "Accepted") {
      return "";
    } else return (
      <Button size="large" variant="contained" onClick={() => { setShowDialog(true) }}>
        <EditIcon sx={{mr: 2}} /> Edit Claim Details
      </Button>
    );
  }

  const RenderCreateNewButton = () => {
    if (claimData.Status === "Pending" || claimData.Status === "Accepted") {
      return (
        <Button size="large" variant="contained">
          <AddCircleIcon sx={{ mr: 2 }} /> Create Follow Up
        </Button>
      );
    } else return "";
  }

  return (
    <>
    <EditClaim
      showDialog={showDialog}
      setShowDialog={setShowDialog}
      claimData={claimData}
    />
    <Container sx={{mb: 8}}>
      <h1>View Claim Details</h1>
      <hr></hr>

        <Stack
          direction="row"
          justifyContent="end"
          alignItems="center"
          spacing={2}
          sx={{mt: 2}}
        >
          {RenderEditButton()}
          {RenderCreateNewButton()}
        </Stack>

      <Card
        sx={{
          mt: 2,
          p: 4
        }}
      >
        <Typography variant="h5">Claim Details</Typography>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <ListItemText primary="Claim Id" secondary={claimData.ClaimID} />
          </Grid>
          <Grid item xs={6}>
              <ListItemText primary="Expense Date" secondary={new Date(claimData.ExpenseDate).toLocaleDateString(undefined, dateOptions)} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Amount" secondary={"$" + claimData.Amount} />
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
              <ListItemText primary="Last Edited Date" secondary={new Date(claimData.LastEditedClaimDate).toLocaleDateString(undefined, dateOptions)} />
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
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Button variant="contained" color="error" sx={{mr: 4}}>Delete</Button>
          <span>
            Do note that deleting a claim that is a follow up claim will result in the entire chain of claims being deleted.
          </span>
        </Stack>
      </Card>
    </Container>
    </>
  );
}

export default ViewClaim;