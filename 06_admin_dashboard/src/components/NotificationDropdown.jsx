import React, { useState } from "react";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const notifications = [
    "New project assigned",
    "Payment received: $200",
    "Profile updated successfully"
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 p-2 rounded hover:bg-gray-300"
      >
        🔔
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded p-2">
          <h4 className="font-bold mb-2">Recent Activity</h4>
          <ul className="space-y-1">
            {notifications.map((note, idx) => (
              <li key={idx} className="text-sm border-b pb-1">{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
