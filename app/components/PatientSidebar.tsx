const PatientSidebar = () => {
  return (
    <aside className="w-64 px-3 py-6 border-r border-gray-200">
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md"
            >
              Patient
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-blue-600 border-r-4 border-blue-700 bg-blue-50"
            >
              Rider&apos;s Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
            >
              Delivery History
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default PatientSidebar;
