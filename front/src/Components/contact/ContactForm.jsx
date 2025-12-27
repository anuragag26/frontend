import { useState } from "react"
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSuccess("")

    if (!name || !email || !message) {
      alert("All fields are required")
      return
    }

    try {
      setLoading(true)

      await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message
      })

      setSuccess("Thank you! Your message has been sent.")
      setName("")
      setEmail("")
      setMessage("")

    } catch (error) {
      console.error(error)
      alert("Failed to send message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-green-700">
        Contact Us
      </h2>

      {success && (
        <p className="text-green-600 font-medium">{success}</p>
      )}

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 rounded-md"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded-md"
      />

      <textarea
        placeholder="Your Message"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border px-4 py-2 rounded-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm
