import { Component } from "react"
import { Redirect, Route } from "react-router-dom"
import { VEHICLE_REGISTRATION } from './VehicleRegistration'
export const ProtectedRoute = ({ component: Component, ...rest }) => {
   

    return (
        <Route
            {...rest}
            render={props => {
                if (VEHICLE_REGISTRATION !== "" ) {
                    localStorage.clear()
                    console.log(VEHICLE_REGISTRATION)
                    return <Component{...props} />
                    
                } else {
                    return <Redirect to ="/vehicleregistration" />
            }
            }}
        />
    )
}