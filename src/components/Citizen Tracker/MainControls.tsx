import { Grid } from "@mui/material";
import FetchUser from "./FetchUser.tsx";
import AddUser from "./AddUser.tsx";
import UpdateUser from "./UpdateUser.tsx";
import DeleteUser from "./DeleteUser.tsx";
import React from "react";
import { Citizen, UpdateCitizen } from "./Types.ts";

interface IProps {
    refetchTable : () => void,
    addCitizen : (newCitizen : Citizen) => void,
    updateCitizen : (updatedCitizen : UpdateCitizen) => void,
    deleteCitizen : (id : number) => void,
    fetchCitizen : (id : number) => Citizen,
}

function MainControls({refetchTable, addCitizen, updateCitizen, deleteCitizen, fetchCitizen,} : IProps){
    return (
        <Grid container spacing={3}>
            <div style={{width: '100%', display: "flex",  flexDirection:"row", gap: 
                "10%", flexWrap: "wrap"}}>
                <FetchUser fetchCitizen={fetchCitizen}/>
                <AddUser refetchTable ={refetchTable} addCitizen = {addCitizen}/>
                <UpdateUser refetchTable ={refetchTable} updateCitizen={updateCitizen}/>
                <DeleteUser refetchTable={refetchTable} deleteCitizen={deleteCitizen}/>
            </div>
        </Grid>
    )
}


export default MainControls;