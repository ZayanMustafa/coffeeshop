

// File: src/app/admin/page.js

'use client'

import DashboardHeader from '@/components/admin/DashboardHeader'
import ReservationDetails from '@/components/admin/ReservationDetails'
import ReservationsTable from '@/components/admin/ReservationTable'
import SeatChart from '@/components/admin/SeatChart'
import SummaryCards from '@/components/admin/SummeryCard'
import Toast from '@/components/admin/Toast'
import { useState } from 'react'

export default function AdminPanel() {
  // Mock data
  const mockReservations = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      date: '2023-06-15',
      time: '19:00',
      guests: 4,
      status: 'pending',
      notes: 'Window seat preferred if available',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1987654321',
      date: '2023-06-15',
      time: '20:30',
      guests: 2,
      status: 'confirmed',
      notes: 'Celebrating anniversary',
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert@example.com',
      phone: '+1122334455',
      date: '2023-06-16',
      time: '18:00',
      guests: 6,
      status: 'pending',
      notes: '',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      phone: '+1555666777',
      date: '2023-06-16',
      time: '19:30',
      guests: 3,
      status: 'rejected',
      notes: 'Allergic to nuts',
    },
    {
      id: 5,
      name: 'Michael Wilson',
      email: 'michael@example.com',
      phone: '+1444333222',
      date: '2023-06-15',
      time: '21:00',
      guests: 5,
      status: 'pending',
      notes: 'Need high chairs for 2 children',
    },
  ]

  const [selectedReservation, setSelectedReservation] = useState(null)
  const [toast, setToast] = useState(null)

  const stats = {
    totalToday: mockReservations.filter(
      (r) => new Date(r.date).toDateString() === new Date().toDateString()
    ).length,
    remainingSeats: 12,
  }

  const seatData = {
    today: {
      confirmed: 38,
      remaining: 12,
    },
    tomorrow: {
      confirmed: 22,
      remaining: 28,
    },
  }

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  return (
    <div className="min-h-screen bg-dark-50 text-gray-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <SummaryCards stats={stats} />
        <SeatChart today={seatData.today} tomorrow={seatData.tomorrow} totalSeats={50} />
        <ReservationsTable
          reservations={mockReservations}
          onViewDetails={setSelectedReservation}
        />
      </main>

      {/* Reservation Details Sidebar */}
      {selectedReservation && (
        <ReservationDetails
          reservation={selectedReservation}
          onClose={() => setSelectedReservation(null)}
          showToast={showToast}
        />
      )}

      {/* Toast Notification */}
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </div>
  )
}
