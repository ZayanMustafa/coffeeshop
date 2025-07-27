

// File: src/components/admin/SummaryCard.js

import { FiUsers, FiClock, FiCalendar } from 'react-icons/fi'

export default function SummaryCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Total Applications Today */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Applications Today</p>
            <h3 className="text-3xl font-bold text-amber-600 mt-2">{stats.totalToday}</h3>
          </div>
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <FiUsers className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Remaining Seats */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Remaining Seats</p>
            <h3 className="text-3xl font-bold text-amber-600 mt-2">{stats.remainingSeats}</h3>
          </div>
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <FiClock className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Seat Status */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500">Seat Status</p>
            <h3 className="text-lg font-semibold text-amber-600 mt-2">Today vs Tomorrow</h3>
          </div>
          <div className="p-3 rounded-full bg-amber-100 text-amber-600">
            <FiCalendar className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}


