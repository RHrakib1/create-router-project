import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function JobDetails() {
    const storeJOb = useLoaderData()
    console.log("ase", storeJOb);
    const jobid = useParams()
    const idstore = parseInt(jobid.id)
    const findjob = storeJOb.find(data => data.id == idstore)
    console.log(findjob);
    return (
        <div>
            <h1 className='text-5xl font font-extrabold text-center my-5 mb-10'>Job Details</h1>
            <div className='grid grid-cols-3'>
                <div className='col-span-2 space-y-4 p-6'>
                    <p><span className='font-bold'>Job Description: </span>{findjob.job_description}</p>
                    <p><span className='font-bold'>Job Responsibility: </span>{findjob.job_responsibility}</p>
                    <p><span className='font-bold'>Educational Requirements: </span>{findjob.educational_requirements}</p>
                    <p><span className='font-bold'>Experiences: </span>{findjob.experiences}</p>
                </div>
                <div className='bg-gray-200 rounded p-7'>
                    <h2 className='text-center my-8 text-2xl font-extrabold'>Job details</h2>
                    <p><span className='font-bold text-xl'>Sallary:</span>{findjob.salary}</p>
                    <p><span className='font-bold text-xl'>Job Title:</span>{findjob.job_title}</p>
                    <h2 className='text-center my-8 text-2xl font-extrabold'>Contact Information</h2>
                    <div className='space-y-2'>
                        <p><span className='font-bold'>Phone: </span>{findjob.contact_information.phone}</p>
                    <p><span className='font-bold'>Emial: </span>{findjob.contact_information.email}</p>
                    <p><span className='font-bold'>Address: </span>{findjob.contact_information.address}</p>
                    </div>
                    <button className='btn btn-primary'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}
