import React, { useState } from 'react'
import BtcIcon from '../../../../../assets/icons/DummyIcon/btc.png'
import MoreDropdown from '../../../../../globalComponents/MoreDropdown'
import kycDetial from '../../../../../assets/icons/kycDetial.png';
import TransactionModal from '../models/TransactionModal';
import successIcon from '../../../../../assets/icons/successIcon.png'

const ReceiveTransactionsRow = ({ displayData = {}, index = 1 }) => {
  const [showDetailModel, setshowDetailModel] = useState(false)
  const transactionDetails = [
    { label: "Token Name", value: "Bitcoin" },
    { label: "Network", value: "Bitcoin" },
    { label: "Amount in BTC", value: "0.00000234 BTC" },
    { label: "Amount in USD", value: "$1,500.23" },
    { label: "Recipient Address", value: "0xdfgjkfkkfn...bkkbm", copyable: true },
    { label: "TX Hash", value: "esfjfgnkkfn...bkkbm", copyable: true },
    { label: "Fees in BTC", value: "0.00000012 BTC" },
    { label: "Fees in USD", value: "$12" },
    { label: "Date", value: "12 - 22 - 24 / 11:22 AM" },
  ];
  return (
    <>
      <tr
        className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""
          }`}
      >
        <td className="px-4 py-2 ">
          <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <div className='flex items-center gap-2'>
              <img
                src={displayData.typeimg ? displayData.typeimg : BtcIcon}
                alt={displayData.type}
                className="w-8 h-8"
              />
              <div className='flex flex-col'>
                <span className='text-sm opacity-50'>{displayData.asset}</span>
                <span>{displayData.network}</span>
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 py-2">{displayData.network}</td>
        <td className="px-4 py-2">{displayData.receivedFrom}</td>
        <td className="px-4 py-2">
          <div className='flex flex-col gap-4'>
            <span>{displayData.amount}</span>
            <span>{displayData.amountUSD}</span>
          </div>
        </td>
        <td className='px-4 py-2'>
          <div className={`w-1 h-10 rounded-lg mx-auto bg-${displayData.status === 'successful' ? 'green-500' : displayData.status === 'processing' ? 'yellow-500' : 'red-500'}`}>
          </div>
        </td>
        <td className="px-4 py-2 flex flex-col gap-4">
          <span>{displayData.date}</span>
          <span>{displayData.time}</span>
        </td>
        <td className='px-4 py-2'>
          <MoreDropdown
            iconClass="bi bi-three-dots-vertical"
            menuClass="bg-theme-dark min-w-[150px]"
          >
            <div className="bg-theme-light p-4 flex flex-col gap-4">
              <div className="flex items-center gap-2" onClick={() => setshowDetailModel(true)}>
                <img src={kycDetial} alt="more" className='h-5 w-5' />
                <span className='p-0 m-0'>View More</span>
              </div>
            </div>
          </MoreDropdown>
        </td>
      </tr>
      {showDetailModel && (<TransactionModal
        status="successful"
        statusName="Transaction Successful"
        options={transactionDetails}
        onClose={() => setshowDetailModel(false)}
      >
        {/* Footer Buttons */}
        <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg flex items-center justify-center gap-2"><i className="bi bi-printer"></i>Print</button>
        <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg">Blockchain</button>
        <button className="w-full border border-green-400 text-green-400 px-4 py-2 rounded-lg">Log</button>
      </TransactionModal>)
      }
    </>
  )
}

export default ReceiveTransactionsRow
