import React from 'react'
import MoreDropdown from './MoreDropdown'
// c:\Users\Nouman Ahmad\Downloads\bell.png 
// c:\Users\Nouman Ahmad\Downloads\Vector.png 
// c:\Users\Nouman Ahmad\Downloads\Cardholder.png
import bellIcon from '../../../assets/icons/bell.png'
import Vector from '../../../assets/icons/Vector.png'
import CardHolder from '../../../assets/icons/CardHolder.png'
import { Link } from 'react-router-dom'


const UserRow = ({ displayData, index }) => {
    const options = [
        {
            'navigationLink': '#',
            'title': 'View Wallet',
            'icon': CardHolder
        },
        {
            'navigationLink': '#',
            'title': 'Notifications',
            'icon': bellIcon
        },
        {
            'navigationLink': '#',
            'title': 'KYC Documents',
            'icon': bellIcon
        },
    ]
    return (
        <tr
            className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}
        >
            <td className="px-4 py-2">
                <div className='flex items-center gap-2'>
                    <input
                        type="checkbox"
                        className="bg-transparent checked:bg-green-700 w-4 h-4 border-2 border-gray-500 rounded-sm focus:ring-2 focus:ring-green-700"
                    />
                    <div className='flex items-center gap-2'>
                        <img src={displayData.img ? displayData.img : `https://randomuser.me/api/portraits/men/4${index}.jpg`} alt="profile" className='h-10 w-10 rounded-full' />
                        {displayData.name}
                    </div>
                </div>
            </td>
            <td className="px-4 py-2">{displayData.email}</td>
            <td className="px-4 py-2">{displayData.phone}</td>
            <td className="px-4 py-2">
                <div className='w-full p-2 pl-4'>
                    <div className={`h-10 w-1 rounded-sm ${displayData.status == 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
            </td>
            <td className="py-2">
                <div className='flex items-center gap-4 w-fit'>
                    <Link to={`/user/management/customer/${displayData.name}/detail`}><button className='bg-[#25AE7A] px-4 rounded-xl py-2 '>Customer Details</button></Link>
                    <Link to={`/user/management/customer/${displayData.name}/transactions`} className='bg-[#084B82] px-4 rounded-xl py-2 '>Transactions</Link>
                </div>
            </td>
            <td>
                <MoreDropdown
                    iconClass="bi bi-three-dots-vertical"
                    menuClass="bg-theme-dark min-w-[300px]"
                >
                    <div className="bg-theme-light p-4 flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            {options.map((item, index) => (
                                <Link to={`/user/management/customer/${displayData.name}/notifications`} key={index}>
                                    <div className="flex items-center text-white gap-4 p-2 rounded-md">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        <h1 className="text-lg ">{item.title}</h1>
                                    </div>
                                </Link>
                            ))}
                            <div className='grid grid-cols-2 gap-2'>
                                <button className='border border-white hover:bg-white hover:text-black  py-2 capitalize rounded-xl text-nowrap'>Block user</button>
                                <button className='border border-white hover:bg-white hover:text-black  py-2 capitalize rounded-xl text-nowrap'>delete user</button>
                            </div>
                        </div>
                    </div>
                </MoreDropdown>
            </td>
        </tr>
    )
}

export default UserRow
