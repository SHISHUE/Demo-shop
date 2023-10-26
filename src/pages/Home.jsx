import React, { useState } from 'react'
import { useEffect } from 'react';
import Card from '../component/Card';
import Spinner from '../component/Spinner';
function Home() {

    const [item , setItem] = useState([]);
    const [loading,setLoading] = useState(false);

    const API_URL = `https://fakestoreapi.com/products`;

    async function fetchData () {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
    
            setItem(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div >
        {    
        loading ? (<Spinner />) : item.length > 0 ? (<div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
            {
                item.map((data) => (
                    <Card key={data.id} data={data} />
                ))
            }
        </div>) :  (<div className='flex justify-center items-center'>No Item Found</div>)
        
        }
    </div>
  )
}

export default Home