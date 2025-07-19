import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import Nav from './Nav'
import { createContext } from 'react'
import Footer from '../Footer/Footer'
import Feture from '../Home/Feture'

export const dataContext = createContext();

export default function NavBar() {

    const fetchData = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('Network response was not ok');

        }
        return res.json();
    }

    const { data: post, error, isPending, isLoading } = useQuery(
        {
            queryKey: ["post"],
            queryFn: fetchData,
        }
    )



    return (
        <div>
            <dataContext.Provider value={{ post, error, isLoading, isPending }}>
                <Nav />
                <Outlet></Outlet>
                <Footer></Footer>
            </dataContext.Provider>
        </div>
    )
}
