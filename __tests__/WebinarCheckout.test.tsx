import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { WebinarCheckout } from '@/components/webinar/webinar-checkout'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { joinWaitlist } from '@/app/actions/webinar'

// Mock the server actions
vi.mock('@/app/actions/webinar', () => ({
  createWebinarOrder: vi.fn().mockResolvedValue({ success: true, orderId: 'order_123', amount: 9900, currency: 'INR' }),
  joinWaitlist: vi.fn().mockResolvedValue({ success: true })
}))

// Mock next/script
vi.mock('next/script', () => {
  return {
    default: () => null,
  }
})

// Mock Razorpay
const mockRazorpayOpen = vi.fn()
beforeEach(() => {
  ;(window as any).Razorpay = vi.fn().mockImplementation(() => ({
    open: mockRazorpayOpen
  }))
})

const defaultWebinar = {
  id: 1,
  title: 'Test Webinar',
  priceInPaise: 9900,
  originalPriceInPaise: 49900,
  maxSeats: 100,
  seatCutoff: 95
}

describe('WebinarCheckout Component', () => {
  it('shows checkout UI when seats are available', () => {
    render(<WebinarCheckout webinar={defaultWebinar} registrationsCount={50} />)
    
    expect(screen.getByText(/Secure Your Seat/i)).toBeInTheDocument()
    expect(screen.getByText(/45 seats remaining/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pay & Register/i })).toBeInTheDocument()
  })

  it('shows waitlist UI when seats are full', () => {
    render(<WebinarCheckout webinar={defaultWebinar} registrationsCount={95} />)
    
    expect(screen.getByText(/Join the Waitlist/i)).toBeInTheDocument()
    expect(screen.getByText(/notify you if there's any cancellation/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Join Waitlist/i })).toBeInTheDocument()
  })

  it('submits waitlist when seats are full', async () => {
    render(<WebinarCheckout webinar={defaultWebinar} registrationsCount={95} />)
    
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/WhatsApp Number/i), { target: { value: '9876543210' } })

    fireEvent.click(screen.getByRole('button', { name: /Join Waitlist/i }))

    await waitFor(() => {
      expect(joinWaitlist).toHaveBeenCalledWith({
        webinarId: 1,
        doctorName: 'Dr. Test',
        doctorEmail: 'test@example.com',
        doctorPhone: '9876543210'
      })
    })
  })
})
