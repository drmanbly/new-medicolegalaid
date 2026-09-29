import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ConsultForm } from '@/components/consult/consult-form'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Mock the server actions
vi.mock('@/app/actions/upload', () => ({
  getPresignedUrl: vi.fn().mockResolvedValue({ success: true, url: 'http://mock.url', key: 'mock/key' })
}))

vi.mock('@/app/actions/consult', () => ({
  createConsultOrder: vi.fn().mockResolvedValue({ success: true, orderId: 'order_123', amount: 300000, currency: 'INR' })
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

describe('ConsultForm Component', () => {
  it('renders all required fields', () => {
    render(<ConsultForm />)
    
    expect(screen.getByLabelText(/Your Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/WhatsApp Number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Describe Your Legal Issue/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pay ₹3,000 & Secure Slot/i })).toBeInTheDocument()
  })

  it('submits the form successfully and opens Razorpay', async () => {
    render(<ConsultForm />)
    
    fireEvent.change(screen.getByLabelText(/Your Full Name/i), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'TestCity' } })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/WhatsApp Number/i), { target: { value: '9876543210' } })
    fireEvent.change(screen.getByLabelText(/Describe Your Legal Issue/i), { target: { value: 'Mock issue details' } })

    fireEvent.click(screen.getByRole('button', { name: /Pay ₹3,000 & Secure Slot/i }))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Processing.../i })).toBeInTheDocument()
    })
  })
})
