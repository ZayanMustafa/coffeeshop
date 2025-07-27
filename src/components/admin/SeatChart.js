

// File : src/components/admin/SeatChart.js


export default function SeatChart({ today, tomorrow, totalSeats }) {
  const todayPercentage = (today.confirmed / totalSeats) * 100
  const tomorrowPercentage = (tomorrow.confirmed / totalSeats) * 100

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-50 mb-8">
      <h3 className="text-lg font-semibold text-amber-800 mb-4">Seat Occupancy</h3>
      <div className="space-y-6">
        {/* Today's Status */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-amber-700">Today</span>
            <span className="text-sm text-gray-500">
              {today.confirmed} confirmed • {today.remaining} remaining
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-amber-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${todayPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Tomorrow's Status */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-amber-700">Tomorrow</span>
            <span className="text-sm text-gray-500">
              {tomorrow.confirmed} confirmed • {tomorrow.remaining} available
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-amber-300 h-4 rounded-full transition-all duration-500"
              style={{ width: `${tomorrowPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <span>Today</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-amber-300 rounded-full mr-2"></div>
            <span>Tomorrow</span>
          </div>
        </div>
      </div>
    </div>
  )
}