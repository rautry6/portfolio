import { useState, useEffect } from 'react'
import CitizenTable from './TableDisplay.tsx'
import './Tracker.css'
import { Citizen, UpdateCitizen } from './Types.ts'
import { Countries } from './Countries.ts'
import MainControls from './MainControls.tsx'
import React from 'react'

import { useLocation } from 'react-router-dom';

type IProps = {
  name: string,
  description: string,
}

function Tracker() {

  const location = useLocation();
  const data = location.state as IProps;
  //console.log(data)

  const fetchTable = async () => {
    try {
      // const { data } = await axios.get("http://localhost:3000/citizens")
      //console.log(data)

      //  setCitizenData(data)
    }
    catch (error: any) {
      console.log(error.response.data);
    }
  }


  const [citizenData, setCitizenData] = useState([{
    firstName: "John",
    lastName: "Doe",
    idNumber: 1234,
    country: Countries.USA,
    canTravel: true,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    idNumber: 2345,
    country: Countries.USA,
    canTravel: false,
  },
  {
    firstName: "Himiko",
    lastName: "Suzuki",
    idNumber: 6789,
    country: Countries.JAPAN,
    canTravel: true,
  },
  {
    firstName: "Thiago",
    lastName: "Oliveira",
    idNumber: 1912,
    country: Countries.BRAZIL,
    canTravel: false,
  },
  {
    firstName: "Wilhelm",
    lastName: "Weber",
    idNumber: 4341,
    country: Countries.GERMANY,
    canTravel: true,
  }])

  const addCitizen = (newCitizen: Citizen) => {
    const citizen = { ...newCitizen }

    // add citizen to list
    setCitizenData([...citizenData, newCitizen]);
  }

  const updateCitizen = (updatedCitizen: UpdateCitizen) => {
    setCitizenData(citizenData.map((person) => {

      if (person.idNumber == updatedCitizen.idNumber) {
        return { ...person, ...updatedCitizen };
      }

      return { ...person }
    }))
  }

  const getCitizen = (id: number) => {
    const data = citizenData.find((citizen) => citizen.idNumber === id)

    // console.log(data)
    return data;
  }

  const deleteCitizen = (id: number) => {
    //const deletedCitizen = this.findByID(id);

    setCitizenData(citizenData.filter((citizen) => citizen.idNumber != id));
  }


  useEffect(() => {
    fetchTable()
  }, [])

  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <h5 style={{ margin: "5%" }}>{data.description}</h5>
        <div style={{margin: "2%"}}>
          <p className="TableHeader">Citizen Information Table</p>
          <CitizenTable citizenData={citizenData} />
        </div>
        <MainControls refetchTable={fetchTable} addCitizen={addCitizen} updateCitizen={updateCitizen} deleteCitizen={deleteCitizen} fetchCitizen={getCitizen} />
      </div>
    </>
  )
}

export default Tracker