// import libraries
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';


import "./ClaimsDisplayPage.css";

function ClaimsDisplayPage() {
  const claimPurpose = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const maxTextInCell = 50;

  function setClaimPurposeCell(text) {
    if (text.length > maxTextInCell) {
      return text.slice(0, maxTextInCell) + "...";
    }
    else return text;
  }

  return (
    <div>
      <div className='claim-page__header2-wrapper'>
        <h2>Claims</h2>
      </div>
      <div className='claim-page__create-btn-wrapper'>
        <Button variant="contained" startIcon={<AddCircleIcon />}>Create</Button>
      </div>
      
      <div className='claim-page__table-wrapper'>
        <TableContainer className='claim-page__table-container'>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Claim Id</TableCell>
                <TableCell>Purpose</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>123456</TableCell>
                <TableCell>{setClaimPurposeCell(claimPurpose)}</TableCell>
                <TableCell>Approved</TableCell>
                <TableCell>
                  <Button variant="contained" startIcon={<EditIcon />}>Edit</Button>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ClaimsDisplayPage;