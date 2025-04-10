import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Citizen } from './Types.ts';
import './TableDisplay.css'

interface ITableProps {
    citizenData : Citizen[]
}

function CitizenTable({citizenData} : ITableProps) {
//console.log(citizenData)
  
    const columns = [
        "FIRST NAME",
        "LAST NAME",
        "ID",
        "COUNTRY",
        "CAN TRAVEL",
    ]



    return (

        <TableContainer className ='Table' component={Paper}> 
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((header: string) => (<TableCell className='Header' key={header} align="center">{header}</TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {citizenData.map((person: Citizen) => (
                        <TableRow key={person.idNumber} >
                            <TableCell className='Row' align="center">{person.firstName}</TableCell>
                            <TableCell className='Row' align="center">{person.lastName}</TableCell>
                            <TableCell className='Row' align="center">{person.idNumber}</TableCell>
                            <TableCell className='Row' align="center">{person.country}</TableCell>
                            <TableCell className={person.canTravel ? "CanTravel" : "NoTravel"} align="center">{person.canTravel ? "YES" : "NO"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default CitizenTable;