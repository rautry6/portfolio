
import { useForm, Path, SubmitHandler, UseFormRegister } from "react-hook-form"
import { useState } from "react"
//import axios from "axios"
import { Citizen } from "./Types.ts"
import { Countries } from "./Countries.ts"
import React from "react"

interface IFormInput {
    ID: number,
}

interface IProps {
    fetchCitizen : (id : number) => Citizen
}

type InputProps = {
    label: Path<IFormInput>
    register: UseFormRegister<IFormInput>
    required: boolean
  }

function Input ({ label, register, required } : InputProps) {
    return (
        <>
        <label>{label}</label>
        <input {...register(label, { required })} />
      </>
    )
}

function FetchUser({fetchCitizen} : IProps) {
    const { register, handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => fetchPerson(data.ID)

    const citizenDefault : Citizen = ({firstName: "", lastName: "", idNumber: 0, country: Countries.BRAZIL, canTravel: false})

    const [currentCitizen, setCitizen] = useState<Citizen>(citizenDefault)

    const fetchPerson = async (id : number) => {
        try{
           // const {data}  = await axios.get('http://localhost:3000/citizens/' + id )\
            const data = (fetchCitizen(+id))

            if(data === undefined) {return}

           setCitizen(data)

          //  setCitizen(data);

        }catch (error : any){
            console.log(error.response.data)
            setCitizen(citizenDefault)
        }
    }

    return (
        <div>
            <p>Find Specific Citizen</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="ID" register={register} required />
                <input type="submit" />
            </form>

            {currentCitizen.firstName === "" ? (<></>) : (<div>
                <p>First Name: {currentCitizen.firstName}</p>
                <p>Last Name: {currentCitizen.lastName}</p>
                <p>ID:       {currentCitizen.idNumber} </p>
                <p>Country:  {currentCitizen.country}</p>
                <p>Can Travel: {currentCitizen.canTravel ? "Yes" : "No"}</p>
            </div>) }

        </div>
    )
}

export default FetchUser;