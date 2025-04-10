import { Countries } from "./Countries.ts"

export type Citizen = {
    firstName : string,
    lastName : string,
    idNumber : number,
    country : Countries,
    canTravel : boolean
}

export type UpdateCitizen = {
    firstName? : string,
    lastName? : string,
    idNumber : number,
    country? : Countries,
    canTravel? : boolean
}