import FAQAccordion from "../Components/faq/FAQAccordian"


const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2">
          Everything you need to know before your stay
        </p>
      </div>

      <FAQAccordion />
    </section>
  )
}

export default FAQ



