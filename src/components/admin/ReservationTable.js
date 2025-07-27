


// File: src/components/admin/DashboardHeader.js

import { FiEye, FiClock, FiCheck, FiX } from 'react-icons/fi'

export default function ReservationsTable({ reservations, onViewDetails }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
            <FiCheck className="mr-1" /> Confirmed
          </span>
        )
      case 'rejected':
        return (
          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full flex items-center">
            <FiX className="mr-1" /> Rejected
          </span>
        )
      default:
        return (
          <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full flex items-center">
            <FiClock className="mr-1" /> Pending
          </span>
        )
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-amber-50 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-amber-100">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                Guests
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                Date & Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-amber-800 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-amber-800 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-amber-100">
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-amber-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-amber-900">{reservation.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-700">{reservation.guests}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-gray-700">
                    {new Date(reservation.date).toLocaleDateString()} •{' '}
                    {reservation.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(reservation.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button
                    onClick={() => onViewDetails(reservation)}
                    className="px-3 py-1 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors flex items-center"
                  >
                    <FiEye className="mr-1" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}