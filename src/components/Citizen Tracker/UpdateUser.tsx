import { useForm, Path, SubmitHandler, UseFormRegister } from "react-hook-form"
import { useState } from "react"
import { Citizen, UpdateCitizen } from "./Types.ts"
import { Countries } from "./Countries.ts"
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
  refetchTable: () => void,
  updateCitizen : (updatedCitizen : UpdateCitizen) => void
}

type InputProps = {
  label: Path<IFormInput>
  register: UseFormRegister<IFormInput>
  required: boolean
}


function Input({ label, register, required }: InputProps) {
  return (
    <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", columnGap: "20px", rowGap: "10%", margin: "5px"}}>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </div>
  )
}

function UpdateUser({ refetchTable, updateCitizen }: IProps) {


  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => updateCurCitizen(data)

  const updateCurCitizen = async (citizenInput: IFormInput) => {

    //console.log(citizenInput)

    // convert input to correct type
    // ID is required and always included
    const newCitizen: UpdateCitizen = {
      idNumber: +citizenInput.ID,
    };

    // only add fields if they are not empty
    if (citizenInput["First Name"].trim() !== "") {
      newCitizen.firstName = citizenInput["First Name"];
    }

    if (citizenInput["Last Name"].trim() !== "") {
      newCitizen.lastName = citizenInput["Last Name"];
    }

    if (citizenInput.Country !== "Select Country" && citizenInput.Country.trim() !== "") {
      newCitizen.country = citizenInput.Country;
    }

    if (citizenInput["Can Travel"].trim() !== "") {
      newCitizen.canTravel = citizenInput["Can Travel"] === "Yes";
    }

    try {
     // const { data } = await axios.patch('http://localhost:3000/citizens',
       // { ...newCitizen })

       updateCitizen(newCitizen)
       
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      <p>Update Existing Citizen</p>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSubmit)}>
        <Input label="ID" register={register} required />
        <Input label="First Name" register={register} required={false} />
        <Input label="Last Name" register={register} required={false} />
        <CountrySelect label="Country" {...register("Country")} required={false} />
        <TravelSelect label="Can Travel"{...register("Can Travel")} required={false} />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  )
}


export default UpdateUser;