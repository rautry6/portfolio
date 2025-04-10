import { useForm, Path, SubmitHandler, UseFormRegister } from "react-hook-form"
import { useState } from "react"
import { Citizen } from "./Types.ts"
import { Countries } from "./Countries.ts"
import { Travel } from "./TravelValues.ts"
import React from "react"

import {CountrySelect, TravelSelect} from "./Selects.tsx"

interface IFormInput {
    "First Name": string,
    "Last Name": string,
    "ID": number,
    "Country": Countries,
    "Can Travel": string,
}

interface IProps {
    refetchTable: Function,
    addCitizen: (newCitizen: Citizen) => void
}

type InputProps = {
    label: Path<IFormInput>
    register: UseFormRegister<IFormInput>
    required: boolean
}


function Input({ label, register, required }: InputProps) {
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: "20px", rowGap: "10%", margin: "5px" }}>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </div>
    )
}

function AddUser({ refetchTable, addCitizen }: IProps) {

    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => addNewCitizen(data)

    const addNewCitizen = async (citizenInput: IFormInput) => {

        //console.log(citizenInput)

        // convert input to correct type
        const newCitizen: Citizen = {
            firstName: citizenInput["First Name"],
            lastName: citizenInput["Last Name"],
            idNumber: +citizenInput.ID,
            country: citizenInput.Country,
            canTravel: citizenInput["Can Travel"] === "Yes" ? true : false
        }

        try {
            // const {data} = await axios.post('http://localhost:3000/citizens',
            // {...newCitizen})

            addCitizen(newCitizen)

            refetchTable();
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <p>Add New Citizen</p>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" register={register} required />
                <Input label="Last Name" register={register} required />
                <Input label="ID" register={register} required />
                <CountrySelect label="Country" {...register("Country")} required />
                <TravelSelect label="Can Travel" {...register("Can Travel")} required />
                <input className="submit-button" type="submit" />
            </form>
        </div>
    )
}


export default AddUser;