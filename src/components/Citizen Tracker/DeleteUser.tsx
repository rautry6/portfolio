import { useForm, Path, SubmitHandler, UseFormRegister } from "react-hook-form"
import React from "react"

interface IFormInput {
    ID : number
}

type InputProps = {
label: Path<IFormInput>
register: UseFormRegister<IFormInput>
required: boolean
}


function Input({ label, register, required }: InputProps) {
return (
<>
  <label>{label}</label>
  <input {...register(label, { required })} />
</>
)
}



interface IProps {
    refetchTable : () => void,
    deleteCitizen : (id : number) => void
}

function DeleteUser( { refetchTable, deleteCitizen }: IProps){

 const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => deleteCitizen(data.ID)

  /*const deleteCitizen = async (id : IFormInput) => {
    try{

        const payload = id.ID
       // const {data} = await axios.delete('http://localhost:3000/citizens/' + payload)

        refetchTable()

        //console.log(data)
    }
    catch(error : any){
        console.log(error.response.data)
    }
  } */

    return(
        <div>
             <p>Delete Citizen</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="ID" register={register} required />
                <input type="submit" />
            </form>
        </div>
    )
}


export default DeleteUser;