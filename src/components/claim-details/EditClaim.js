import { useState, useEffect } from "react";
import { Button, Card, Dialog, DialogActions, Divider, Grid, ListItemText, TextField, Typography } from "@mui/material";
import axios from "axios";

function EditClaim(props) {
  const { showDialog, setShowDialog, claimData } = props;
  const [editedClaimData, setEditedClaimData] = useState({})

  useEffect(() => {
    setEditedClaimData({ ...claimData })
  }, [claimData])

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

  const HandleSaveChanges = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
      body: JSON.stringify(editedClaimData),
    };

    axios.post("http://localhost:8000/claim/api/update", requestOptions)
  }

  return (
    <Dialog
      open={showDialog}
      onClose={() => { setShowDialog(false) }}
      fullWidth={true}
      maxWidth="80%"
    >
      <Card
        sx={{
          mt: 4,
          p: 4
        }}
      >
        <Typography variant="h5">Edit Claim Details</Typography>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <ListItemText primary="Claim Id" />
            <TextField value={editedClaimData.ClaimID} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Expense Date" />
            <TextField value={editedClaimData.ExpenseDate} />

          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Amount" />
            <TextField value={editedClaimData.Amount} />

          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Purpose" />
            <TextField value={editedClaimData.Purpose} />

          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Follow Up" secondary={claimData.FollowUp ? "Yes" : "No"} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Previous Claim Id" secondary={claimData.PreviousClaimId ? claimData.PreviousClaimId : "-"} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Status" secondary={claimData.Status} secondaryTypographyProps={{ color: getStatusColour(claimData.Status) }} />
          </Grid>
          <Grid item xs={6}>
            <ListItemText primary="Last Edited Date" secondary={claimData.LastEditedClaimDate} />
          </Grid>
        </Grid>

        <Divider light sx={{ my: 2 }} />
        <DialogActions>
          <Button color="warning" onClick={() => { setShowDialog(false) }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => { HandleSaveChanges() }}>
            Save changes
          </Button>
        </DialogActions>
      </Card>
    </Dialog>
  )
}

export default EditClaim;