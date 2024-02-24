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
    <li className="text-start flex items-center min-w-[300px] max-w-[500px] bg-slate-300 p-4 rounded-md">
      <div className="sm:flex gap-8">
        <div>
          <h2 className="text-2xl font-bold w-fit">{name}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="flex gap-3">
            <p className="text-gray-500">city: {city}</p>
            <p className="text-gray-500">stars: {rating}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
