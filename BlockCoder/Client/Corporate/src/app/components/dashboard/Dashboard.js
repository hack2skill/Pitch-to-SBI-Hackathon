'use client'
import React,{useState} from 'react';
import Table from "./Table"
import Scraper from '../Scraper'


const Dashboard = () => {
  
    return (
        <>
            <main className="p-6 sm:p-10 space-y-6">


                <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="flex items-center p-6 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">2</span>
                            <span className="block text-gray-500">Loans Sanctioned</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w0-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">1</span>
                            <span className="block text-gray-500">Running Loans</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                            </svg>
                        </div>
                        <div>
                            <span className="inline-block text-2xl font-bold"></span>
                            <span className="inline-block text-xl text-gray-500 font-semibold">(14%)</span>
                            <span className="block text-gray-500">Penalty</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">3</span>
                            <span className="block text-gray-500">Total Application</span>
                        </div>
                    </div>
                </section>
                <Table></Table>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <form className="w-full md:w-2/3 bg-white rounded-lg shadow-lg p-8 mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Digital Corporate Loan Apply</h2>
                        <p>Connect with MCA to complete application</p>
                        <div className="mb-4 flex flex-col md:flex-row md:space-x-4 mt-6">
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
                                    Company Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="Enter your first name" />
                            </div>
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
                                    Applicant Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Enter your last name" />
                            </div>
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
                                    Organization Size
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Enter your age" />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col md:flex-row md:space-x-4 mt-6">
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
                                    Total Revenue
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first-name" type="text" placeholder="Enter your first name" />
                            </div>
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
                                    Owner Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last-name" type="text" placeholder="Enter your last name" />
                            </div>
                            <div className="flex-1 mb-4 md:mb-0">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
                                    Estimated EBITA
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Enter your age" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                        </div>
                        {/* <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div> */}
                        <Scraper></Scraper>
                    </form>
                    <form className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-xl font-bold mb-4">Have a query</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="8" placeholder="Enter your message"></textarea>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">

                    <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Box1</div>
                        <div className="p-4 flex-grow">
                            <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">25</span>
                            <span className="block text-gray-500">Any metrics</span>
                        </div>
                    </div>
                    <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold">139</span>
                            <span className="block text-gray-500">Any metrics</span>
                        </div>
                    </div>

                    <div className="row-span-3 bg-white shadow rounded-lg">
                        <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                            <span>Box2</span>
                            <button type="button" className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600" id="options-menu" aria-haspopup="true" aria-expanded="true">
                                
                                <svg className="-mr-1 ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
                        </div>
                       
                    </div>
                    <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
                        <div className="px-6 py-5 font-semibold border-b border-gray-100">Box 3</div>
                        <div className="p-4 flex-grow">
                            <div className="flex items-center justify-center h-full px-4 py-24 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">Chart</div>
                        </div>
                    </div>
                </section>
        <Scraper></Scraper>
            </main>

        </>
    );
};

export default Dashboard;