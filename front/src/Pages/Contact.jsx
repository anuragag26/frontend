import ContactForm from "../Components/contact/ContactForm"

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to plan your stay? Get in touch with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><strong>📍 Location:</strong> Chanderi, Madhya Pradesh, India</p>
            <p><strong>📞 Phone:</strong> +91 90000 00000</p>
            <p><strong>✉️ Email:</strong> info@chanderiecoretreat.com</p>
            <p>
              We usually respond within 24 hours. Feel free to reach out for
              bookings, queries, or collaborations.
            </p>
          </div>

          {/* Contact Form Component */}
          <ContactForm />

        </div>
      </div>
    </section>
  )
}

export default Contact
