


// File: src/components/admin/DashboardHeader.js

import { FiCoffee } from 'react-icons/fi'

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between p-6 bg-amber-50 border-b border-amber-100">
      <div className="flex items-center space-x-3">
        <FiCoffee className="text-amber-600 text-2xl" />
        <h1 className="text-2xl font-bold text-amber-800">Brew Haven Reservations</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors">
          Refresh Data
        </button>
        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-800 font-bold">
          AD
        </div>
      </div>
    </header>
  )
}

