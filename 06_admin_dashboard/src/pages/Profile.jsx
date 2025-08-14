export default function Profile() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
      <form className="bg-white p-4 rounded shadow space-y-4">
        <input type="text" placeholder="Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <input type="password" placeholder="Password" className="border p-2 w-full" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
