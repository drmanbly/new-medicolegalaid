import { pgTable, serial, text, integer, timestamp, boolean } from "drizzle-orm/pg-core";

// Consultations
export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  doctorId: text("doctor_id").notNull(),
  doctorName: text("doctor_name").notNull(),
  doctorCity: text("doctor_city").notNull(),
  doctorPhone: text("doctor_phone").notNull(),
  doctorEmail: text("doctor_email").notNull(),
  caseDetails: text("case_details").notNull(),
  documentUrl: text("document_url"), // R2 Presigned Object URL
  razorpayOrderId: text("razorpay_order_id").notNull(),
  razorpayPaymentId: text("razorpay_payment_id"),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Webinars
export const webinars = pgTable("webinars", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  topic: text("topic").notNull(),
  webinarDate: timestamp("webinar_date", { withTimezone: true }).notNull(),
  registrationDeadline: timestamp("registration_deadline", { withTimezone: true }).notNull(),
  maxSeats: integer("max_seats").notNull().default(100),
  seatCutoff: integer("seat_cutoff").notNull().default(95),
  priceInPaise: integer("price_in_paise").notNull().default(9900),
  originalPriceInPaise: integer("original_price_in_paise").notNull().default(49900),
  status: text("status").notNull().default("open"),
  joiningLink: text("joining_link"),
  whatsappGroupLink: text("whatsapp_group_link"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Webinar Registrations
export const webinarRegistrations = pgTable("webinar_registrations", {
  id: serial("id").primaryKey(),
  webinarId: integer("webinar_id").references(() => webinars.id).notNull(),
  doctorName: text("doctor_name").notNull(),
  doctorEmail: text("doctor_email").notNull(),
  doctorPhone: text("doctor_phone").notNull(),
  razorpayOrderId: text("razorpay_order_id").notNull(),
  razorpayPaymentId: text("razorpay_payment_id"),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("pending"), // pending, successful, failed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Webinar Waitlist
export const webinarWaitlist = pgTable("webinar_waitlist", {
  id: serial("id").primaryKey(),
  webinarId: integer("webinar_id").references(() => webinars.id).notNull(),
  doctorName: text("doctor_name").notNull(),
  doctorEmail: text("doctor_email").notNull(),
  doctorPhone: text("doctor_phone").notNull(),
  notified: boolean("notified").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Contact Enquiries
export const contactEnquiries = pgTable("contact_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Seminar Enquiries
export const seminarEnquiries = pgTable("seminar_enquiries", {
  id: serial("id").primaryKey(),
  hospitalName: text("hospital_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  city: text("city").notNull(),
  expectedAttendees: integer("expected_attendees").notNull(),
  status: text("status").notNull().default("new"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Course Enrollments (Book + Masterclass)
export const courseEnrollments = pgTable("course_enrollments", {
  id: serial("id").primaryKey(),
  doctorName: text("doctor_name").notNull(),
  doctorEmail: text("doctor_email").notNull(),
  doctorPhone: text("doctor_phone").notNull(),
  shippingAddress: text("shipping_address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  pincode: text("pincode").notNull(),
  razorpayOrderId: text("razorpay_order_id").notNull(),
  razorpayPaymentId: text("razorpay_payment_id"),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// WhatsApp Leads
export const whatsappLeads = pgTable("whatsapp_leads", {
  id: serial("id").primaryKey(),
  phone: text("phone").notNull(),
  source: text("source").notNull(), // e.g., 'homepage_chat', 'webinar_page'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
