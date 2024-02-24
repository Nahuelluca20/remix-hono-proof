import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { queryHotels } from "./queries/queries";
import { useLoaderData } from "@remix-run/react";
import HotelList from "~/components/hotel-list";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const hotels = await queryHotels(context);

  return json({ hotels });
};

export default function Index() {
  const hotels = useLoaderData<typeof loader>();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="flex w-full px-10 text-center space-y-5 flex-col items-center py-10 justify-center"
    >
      <h1 className="text-3xl font-bold">Remix + Hono + Neon</h1>
      <ul>
        <li>
          <a href="/dashboard" rel="noreferrer">
            Dashbord
          </a>
        </li>
        <li>
          <a href="/dashboard/users" rel="noreferrer">
            Dashbord Users
          </a>
        </li>
      </ul>
      <HotelList hotels={hotels.hotels} />
    </div>
  );
}
