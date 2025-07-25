import React, { useEffect, useState } from 'react'
import Job from '../Job/Job'

export default function FetureJobs() {
    const [feturejobsadd, setfeturejobadd] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setfeturejobadd(data))
    }, [])

    const [datalength, setdatalenght] = useState(4)
    return (
        <div>
            <h1>FetureJobs{feturejobsadd.length}</h1>
            <div className='grid lg:grid-cols-2'>
                {
                    feturejobsadd.slice(0, datalength).map(jobs => <Job job={jobs}></Job>)
                }
            </div>
            <div className={`${datalength === feturejobsadd.length ?'hidden':''} flex justify-center items-center ` }>
                <button onClick={() => setdatalenght(feturejobsadd.length)} className='btn btn-primary'>See All Jobs</button>
            </div>
        </div>
    )
}
