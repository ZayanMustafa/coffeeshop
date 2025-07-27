

// File: src/components/admin/ReservationDetails.js


import { useState } from 'react'
import { FiX, FiMail, FiPhone, FiUser, FiCalendar, FiClock, FiUsers, FiMessageSquare } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function ReservationDetails({ reservation, onClose, showToast }) {
  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 300)
  }

  const handleSendEmail = () => {
    // API call placeholder
    // await sendConfirmationEmail(reservation.email, reservation.id)
    showToast('success', 'Confirmation email sent successfully!')
  }

  const handleSendWhatsApp = () => {
    // API call placeholder
    // await sendWhatsAppMessage(reservation.phone, reservation.id)
    showToast('success', 'WhatsApp message sent successfully!')
  }

  const handleReject = () => {
    // API call placeholder
    // await rejectReservation(reservation.id)
    showToast('success', 'Reservation rejected and notification sent.')
  }

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isClosing ? 'translate-x-full' : 'translate-x-0'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-amber-100 bg-amber-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-amber-800">Reservation Details</h2>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-amber-200 transition-colors text-amber-600"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Customer Info */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                <FiUser className="mr-2" /> Customer Information
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{reservation.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{reservation.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{reservation.phone}</p>
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                <FiCalendar className="mr-2" /> Reservation Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">
                      {new Date(reservation.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{reservation.time}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Number of Guests</p>
                  <p className="font-medium">{reservation.guests}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium capitalize">{reservation.status}</p>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            {reservation.notes && (
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <FiMessageSquare className="mr-2" /> Special Requests
                </h3>
                <p className="text-gray-700">{reservation.notes}</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="p-6 border-t border-amber-100 bg-amber-50">
          <div className="space-y-3">
            <button
              onClick={handleSendEmail}
              className="w-full flex items-center justify-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              <FiMail className="mr-2" /> Send Confirmation Email
            </button>
            <button
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Send WhatsApp Message
            </button>
            <button
              onClick={handleReject}
              className="w-full flex items-center justify-center px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors"
            >
              <FiX className="mr-2" /> Reject Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}