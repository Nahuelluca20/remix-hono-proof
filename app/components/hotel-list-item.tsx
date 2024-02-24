interface HotelListItemProps {
  name: string;
  description: string;
  rating: number;
  city: string;
}

export default function HotelListItem({
  name,
  description,
  rating,
  city,
}: HotelListItemProps) {
  return (
    <li className="flex items-center bg-slate-300">
      <div className="flex">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-gray-500">{city}</p>
        <p className="text-gray-500">{rating}</p>
      </div>
    </li>
  );
}
