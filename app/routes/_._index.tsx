import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import { queryHotels } from "./queries/queries";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const hotels = await queryHotels(context);

  return json({ hotels });
  // console.log(context);
  // return null;
};

export default function Index() {
  const hotels = useLoaderData<typeof loader>();
  console.log(hotels);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
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
    </div>
  );
}
