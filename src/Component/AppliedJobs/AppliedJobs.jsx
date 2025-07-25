import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getstorejobapply } from '../Utility/Utility'
import { FaAppStoreIos } from 'react-icons/fa'

export default function AppliedJobs() {
    const [jobappaed, setjobappaed] = useState([])
    const jobs = useLoaderData()
    useEffect(() => {
        const soteid = getstorejobapply();
        if (jobs.length > 0) {
            const jobapplied = jobs.filter(job => soteid.includes(job.id.toString()));

            console.log(jobapplied);
            setjobappaed(jobapplied);
            console.log("Stored IDs:", soteid);
            console.log("All jobs:", jobs);

        }
    }, []);

    return (
        <div>
            <h1>Applied Jobs{jobappaed.length}</h1>
            <ul>
                {
                    jobappaed.map(data => <li data={data}>
                        <span>{data.company_name}  </span>
                        <img src={data.logo } alt="" />
                    </li>)
                }
            </ul>
        </div>
    )
}
