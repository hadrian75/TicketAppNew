import { CalendarClock20Filled, Person20Filled, Mail20Filled, History20Filled, Board20Filled, SignOut20Filled, DoorArrowLeft20Filled } from '@fluentui/react-icons'
import { useState } from 'react'
import { Navbar, Footer } from '../'
import { Outlet } from 'react-router-dom'
const AdminPanel = () => {
    const [drop, setDrop] = useState(false)

    return (
        <div>
            <Navbar />
            <div className='flex flex-row'>
                <aside className="w-[300px] pl-2 py-2" aria-label="Sidebar">
                    <div className="overflow-y-auto py-4 px-3 bg-frameColor rounded-lg ">
                        <ul className="space-y-7">
                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white hover:bg-primary">
                                    <Board20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <button type="button" className={`flex items-center p-2 w-full text-[16px] font-normal text-white rounded-lg transition duration-75 group  dark:text-white hover:bg-primary`} onClick={() => setDrop(!drop)} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <CalendarClock20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Events</span>
                                    <svg sidebar-toggle-item="" className="w-8 h-8 cursor pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                <ul id="dropdown-example" className={`py-2 space-y-2 ${drop == false ? "hidden" : "visible"}`}>
                                    <li>
                                        <a href="/admin/addEvent" className=" flex items-center p-2 pl-11 w-full text-[14px] font-normal text-white rounded-lg transition duration-75 group  dark:text-white hover:bg-primary">Add Events</a>
                                    </li>
                                    <li>
                                        <a href="/admin/editEvent" className="flex items-center p-2 pl-11 w-full text-[14px] font-normal text-white rounded-lg transition duration-75 group  dark:text-white hover:bg-primary">Edit Events</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 pl-11 w-full text-[14px] font-normal text-white rounded-lg transition duration-75 group  dark:text-white hover:bg-primary">Invoice</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white  hover:bg-primary">
                                    <History20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Transactions</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white  hover:bg-primary">
                                    <Mail20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white  hover:bg-primary">
                                    <Person20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white  hover:bg-primary">
                                    <DoorArrowLeft20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-[16px] font-normal text-white rounded-lg dark:text-white ">
                                    <SignOut20Filled className='flex-shrink-0 w-8 h-8 cursor pointer text-white transition duration-75  group - hover: text - white dark: group - hover: text - white' />
                                    <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default AdminPanel


