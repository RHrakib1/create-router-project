import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Job({ job }) {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={logo}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{job_title}</h2>
                    <h3 className='font-bold text-xl'>{company_name}</h3>
                    <div className='flex gap-3'>
                        <button className='btn btn-outline btn-neutral'>{remote_or_onsite}</button>
                        <button className='btn btn-outline btn-neutral'>{job_type}</button>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <div className='flex gap-1 items-center'>
                            <IoLocationOutline></IoLocationOutline>
                            <p>{location}</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <BsCurrencyDollar />
                            <p>Sallary: {salary}</p>
                        </div>
                    </div>

                    <div className="card-actions">
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
