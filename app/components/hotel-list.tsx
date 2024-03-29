import HotelListItem from "./hotel-list-item";

interface HotelsInterface {
  hotels: {
    name: string | null;
    description: string | null;
    id: string | null;
    createdAt: string | null;
    image: string | null;
    hotelUrl: string | null;
    stars: number | null;
    province: string | null;
    userId: string | null;
  }[];
}

export default function HotelList({ hotels }: HotelsInterface) {
  return (
    <ul className="w-full space-y-5 flex flex-col justify-center items-center">
      {hotels.map((hotel) => (
        <HotelListItem
          key={hotel.id}
          name={hotel.name || ""}
          description={hotel.description || ""}
          rating={hotel.stars || 0}
          city={hotel.province || ""}
        />
      ))}
    </ul>
  );
}
