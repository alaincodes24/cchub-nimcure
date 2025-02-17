import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PatientForm = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Patient&apos;s Information
        </h2>
        <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">
          Paid
        </span>
      </div>
      <p className="mb-4 text-sm text-gray-500">
        Personal information about Patient.
      </p>
      <Button variant="outline" size="sm" className="mb-4">
        Edit Patient&apos;s Information
      </Button>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="hospitalId"
            className="block text-sm font-medium text-gray-700"
          >
            Hospital ID
          </label>
          <Input
            type="text"
            id="hospitalId"
            className="mt-1"
            defaultValue="23AB456789"
          />
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <Input
            type="text"
            id="firstName"
            className="mt-1"
            defaultValue="Oluwaseun"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input
            type="text"
            id="lastName"
            className="mt-1"
            defaultValue="Aregbesola"
          />
        </div>
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <Input
            type="text"
            id="phoneNumber"
            className="mt-1"
            defaultValue="+2348123456789"
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Gender" defaultValue="Male" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            className="mt-1"
            defaultValue="seunregbesola@gmail.com"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default PatientForm;
