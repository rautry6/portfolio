import { useForm, Path, SubmitHandler, UseFormRegister } from "react-hook-form"
import { useState } from "react"
import { Citizen } from "./Types.ts"
import { Countries } from "./Countries.ts"
import { Travel } from "./TravelValues.ts"
import React from "react"
import { IFormInput } from "./Interfaces.ts"


// you can use React.forwardRef to pass the ref too
export const CountrySelect = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormInput>>
>(({ onChange, onBlur, name, label }, ref) => (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: "20px", rowGap: "10%", margin: "5px" }}>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            {Object.values(Countries).map((country) => (
                <option key={country} value={country}>{country}</option>
            ))}
        </select>
    </div>
))

// you can use React.forwardRef to pass the ref too
export const TravelSelect = React.forwardRef<
    HTMLSelectElement,
    { label: string } & ReturnType<UseFormRegister<IFormInput>>
>(({ onChange, onBlur, name, label }, ref) => (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", columnGap: "20px", rowGap: "10%", margin: "5px" }}>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
            {Object.values(Travel).map((travel) => (
                <option key={travel} value={travel}>{travel}</option>
            ))}
        </select>
    </div>
))