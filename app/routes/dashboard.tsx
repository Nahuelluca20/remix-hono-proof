import { Outlet } from "@remix-run/react";

export default function Dashboard() {
  return (
    <main>
      <div style={{ padding: "20px", backgroundColor: "red" }}>dashboard</div>
      <Outlet />
    </main>
  );
}
