import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ClaimTable(props) {
  const claimPurpose = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const maxTextInCell = 50;
  const [claims, setClaims] = useState(props.claims);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ]


  function setClaimPurposeCell(text) {
    if (text.length > maxTextInCell) {
      return text.slice(0, maxTextInCell) + "...";
    }
    else return text;
  }

  function handleDeleteClaim(e) {
    e.preventDefault();
  }

  return (
    <div className='claim-table__table-wrapper'>
      <TableContainer className='claim-table__table-container'>
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
            {claims.map((claim) => (
              <TableRow>
                <TableCell>
                  <Link to={"/claims/" + `${claim.ClaimID}`}>{claim.ClaimID}</Link>
                </TableCell>
                <TableCell>{setClaimPurposeCell(claim.Purpose)}</TableCell>
                <TableCell>{claim.Status}</TableCell>
                <TableCell>
                  {claim.Status === "Approved" ?
                    <Button variant="contained" startIcon={<EditIcon />} disabled>Edit</Button>
                    :
                    <Button variant="contained" startIcon={<EditIcon />}>Edit</Button>
                  }
                </TableCell>
                <TableCell>
                  {claim.Status === "Approved" ?
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClaim} disabled>Delete</Button>
                    :
                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteClaim}>Delete</Button>
                  }
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default ClaimTable;