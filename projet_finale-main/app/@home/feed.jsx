"use client"

import { useEffect } from 'react'
import { createClient } from "@/supabase/client"

export default function FeedComponent() {
    const client = createClient()
    let recv;

    useEffect(() => {
        const getProfile = async () => {
            const client = createClient()
            const {data, error} = await client.from("questions").select("*")
            console.log(data[0]);
            recv = data;

            if (error) {
                console.log(error);
            }

            return data;
        } 
        getProfile()
      }, [])

    return (
        <>
        <p>{recv}</p>
        </>
    )
}