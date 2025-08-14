import React from "react";
import NotificationDropdown from "./NotificationDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Freelance Dashboard</h1>
      <NotificationDropdown />
    </header>
  );
}
