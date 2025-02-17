const PatientHeader = () => {
  return (
    <header className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-900">
          Patients / View Patient
        </div>
        <div>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Assign Package to Patient
          </button>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Patient&apos;s next delivery date is 14th November 2020, in 2 days
      </div>
    </header>
  );
};

export default PatientHeader;
