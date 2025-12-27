import AccommodationCard from "./AccommodationCard"

const AccommodationList = ({ accommodations = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {accommodations.map(item => (
        <AccommodationCard
          key={item.id}
          id = {item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default AccommodationList
