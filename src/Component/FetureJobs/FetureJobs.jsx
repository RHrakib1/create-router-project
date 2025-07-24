import React, { useEffect, useState } from 'react'
import Job from '../Job/Job'

export default function FetureJobs() {
    const [feturejobsadd, setfeturejobadd] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setfeturejobadd(data))
    }, [])
    return (
        <div>
            <h1>FetureJobs{feturejobsadd.length}</h1>
            <div className='grid lg:grid-cols-2'>
                {
                    feturejobsadd.map(jobs => <Job job={jobs}></Job>)
                }
            </div>
        </div>
    )
}
