import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

const faqs = [
  {
    q: "Where is Chanderi Eco Retreat located?",
    a: "Chanderi Eco Retreat is located near the historic town of Chanderi in Madhya Pradesh, surrounded by nature and heritage sites."
  },
  {
    q: "What types of accommodation are available?",
    a: "We offer Luxury Tents, Heritage Tents, and Family Cottages designed to blend comfort with nature."
  },
  {
    q: "Is the retreat eco-friendly?",
    a: "Yes, we follow eco-friendly practices such as minimal plastic use, natural landscaping, and sustainable living."
  },
  {
    q: "What is the check-in and check-out time?",
    a: "Check-in time is 12:00 PM and check-out time is 11:00 AM."
  },
  {
    q: "Is breakfast included in the stay?",
    a: "Yes, complimentary breakfast is included with all accommodation types."
  },
  {
    q: "Do you allow pets?",
    a: "Currently, pets are not allowed to ensure comfort and safety for all guests."
  },
  {
    q: "Is parking available at the retreat?",
    a: "Yes, free on-site parking is available for all guests."
  },
  {
    q: "Is the retreat suitable for families?",
    a: "Absolutely. We have family-friendly accommodations and open spaces suitable for children."
  },
  {
    q: "Are local sightseeing tours available?",
    a: "Yes, we arrange guided tours to nearby forts, temples, and heritage spots in Chanderi."
  },
  {
    q: "Is Wi-Fi available?",
    a: "Limited Wi-Fi is available. We encourage guests to enjoy a digital detox during their stay."
  },
  {
    q: "Do you offer meals other than breakfast?",
    a: "Yes, lunch and dinner featuring local cuisine can be ordered separately."
  },
  {
    q: "Is the retreat safe for solo travelers?",
    a: "Yes, the retreat is safe and secure with staff available 24/7."
  },
  {
    q: "Can I host events or group bookings?",
    a: "Yes, we accept group bookings and small events. Please contact us for details."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, credit/debit cards, and net banking."
  },
  {
    q: "Is advance booking required?",
    a: "Advance booking is recommended, especially during weekends and holidays."
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations made 48 hours prior to check-in are eligible for a full refund."
  },
  {
    q: "Are bonfire and outdoor activities available?",
    a: "Yes, bonfire evenings and outdoor activities are available on request."
  },
  {
    q: "Is alcohol allowed at the retreat?",
    a: "Alcohol consumption is restricted to designated areas and must follow local regulations."
  },
  {
    q: "How far is the retreat from the railway station?",
    a: "The retreat is approximately 3 km from Chanderi railway station."
  },
  {
    q: "How can I contact the retreat for queries?",
    a: "You can contact us via the Contact page or call us directly using the phone number provided."
  }
]

const FAQAccordion = () => {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full max-w-4xl mx-auto"
    >
      {faqs.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="border-b"
        >
          <Accordion.Header>
            <Accordion.Trigger
              className="group flex w-full items-center justify-between py-4 text-left text-lg font-medium hover:text-green-700 transition"
            >
              {item.q}
              <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="pb-4 text-gray-600">
              {item.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default FAQAccordion
