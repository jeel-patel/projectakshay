import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props)
{
    if(!props.isAuthenticated)
    {
        return <Navigate to={"/"}/>
    }

    return props.Component;
}