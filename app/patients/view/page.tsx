import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Pen } from "lucide-react";

const Patient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/patients" className="text-blue-600 hover:underline">
              Patients
            </Link>
            <span>/</span>
            <span className="text-gray-600">View Patient</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Patient&apos;s next delivery date is</p>
              <p className="font-medium">14th November 2020, in 2 days</p>
            </div>
            <Button>Assign Package to Patient</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <div className="w-64">
            <Card>
              <div className="py-4 px-0">
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                    Patient
                  </button>
                  <button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 border-r-2 border-blue-700">
                    Rider&apos;s Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                    Delivery History
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Form */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-xl font-semibold">Payment Status</h1>
              <Badge variant="default" className="bg-green-100 text-green-700">
                Paid
              </Badge>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-medium">Patient&apos;s Information</h2>
                  <p className="text-sm text-gray-600">Personal information about Patient.</p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Pen className="w-4 h-4" />
                  Edit Patient&apos;s Information
                </Button>
              </div>

              <Card className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hospital ID
                  </label>
                  <Input value="23AB456789" readOnly className="bg-gray-50" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input value="Oluwaseun" readOnly className="bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input value="Aregbesola" readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <Select defaultValue="male">
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input value="+2348123456789" readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input 
                    value="seunregbesola@gmail.com" 
                    readOnly 
                    className="bg-gray-50" 
                  />
                </div>

                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient;
