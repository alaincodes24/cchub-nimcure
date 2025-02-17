// "use client";

// import Link from "next/link";
// import { PatientSidebar } from "@/app/components/PatientSidebar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Navbar from "@/app/components/Navbar";

// const Patient = () => {
// 	return (
// 		<>
// 			<Navbar />
// 			<div className="min-h-screen bg-white">
// 				<div className="border-b">
// 					<div className="flex items-center justify-between max-w-[1400px] w-[90%] mx-auto h-16">
// 						<div className="flex items-center gap-2 text-sm">
// 							<Link href="/patients" className="text-blue-600 hover:underline">
// 								Patients
// 							</Link>
// 							/<span className="text-gray-500">View Patient</span>
// 						</div>
// 						<div className="flex items-center gap-2">
// 							<span className="text-sm text-gray-600">
// 								Patient&apos;s next delivery date is
// 								<span className="font-medium">
// 									{" "}
// 									14th November 2020, in 2 days
// 								</span>
// 							</span>
// 							<Button className="bg-blue-600 hover:bg-blue-700">
// 								Assign Package to Patient
// 							</Button>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="flex max-w-[1400px] w-[90%] mx-auto mt-8">
// 					<PatientSidebar />

// 					<div className="flex-1 pl-8">
// 						<div className="mb-6">
// 							<span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
// 								Paid
// 							</span>
// 						</div>

// 						<Tabs defaultValue="information" className="w-full">
// 							<TabsList className="justify-start w-full h-auto p-0 bg-transparent border-b rounded-none">
// 								<TabsTrigger
// 									value="information"
// 									className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-500 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
// 								>
// 									Patient Information
// 								</TabsTrigger>
// 								<TabsTrigger
// 									value="delivery"
// 									className="rounded-none border-b-2 border-transparent px-4 py-2 text-gray-500 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none"
// 								>
// 									Delivery Information
// 								</TabsTrigger>
// 							</TabsList>
// 							<TabsContent value="information" className="mt-6">
// 								<div className="max-w-2xl">
// 									<div className="flex items-center justify-between mb-4">
// 										<h2 className="text-lg font-semibold">
// 											Patient&apos;s Information
// 										</h2>
// 										<Button variant="outline" className="text-blue-600">
// 											<span className="mr-2">✎</span>
// 											Edit Patient&apos;s Information
// 										</Button>
// 									</div>
// 									<p className="mb-8 text-sm text-gray-500">
// 										Personal information about Patient.
// 									</p>

// 									<div className="space-y-4">
// 										<div>
// 											<label className="text-sm font-medium mb-1.5 block">
// 												Hospital ID
// 											</label>
// 											<Input
// 												value="23AB456789"
// 												readOnly
// 												className="bg-gray-50"
// 											/>
// 										</div>

// 										<div className="grid grid-cols-2 gap-4">
// 											<div>
// 												<label className="text-sm font-medium mb-1.5 block">
// 													First Name
// 												</label>
// 												<Input
// 													value="Oluwaseun"
// 													readOnly
// 													className="bg-gray-50"
// 												/>
// 											</div>
// 											<div>
// 												<label className="text-sm font-medium mb-1.5 block">
// 													Last Name
// 												</label>
// 												<Input
// 													value="Aregbesola"
// 													readOnly
// 													className="bg-gray-50"
// 												/>
// 											</div>
// 										</div>

// 										<div className="grid grid-cols-2 gap-4">
// 											<div>
// 												<label className="text-sm font-medium mb-1.5 block">
// 													Gender
// 												</label>
// 												<Select defaultValue="male" disabled>
// 													<SelectTrigger className="bg-gray-50">
// 														<SelectValue />
// 													</SelectTrigger>
// 													<SelectContent>
// 														<SelectItem value="male">Male</SelectItem>
// 														<SelectItem value="female">Female</SelectItem>
// 													</SelectContent>
// 												</Select>
// 											</div>
// 											<div>
// 												<label className="text-sm font-medium mb-1.5 block">
// 													Phone Number
// 												</label>
// 												<Input
// 													value="+2348123456789"
// 													readOnly
// 													className="bg-gray-50"
// 												/>
// 											</div>
// 										</div>

// 										<div>
// 											<label className="text-sm font-medium mb-1.5 block">
// 												Email Address
// 											</label>
// 											<Input
// 												value="seunregbesola@gmail.com"
// 												readOnly
// 												className="bg-gray-50"
// 											/>
// 										</div>
// 									</div>

// 									<div className="mt-8">
// 										<Button className="bg-blue-600 hover:bg-blue-700">
// 											Save Changes
// 										</Button>
// 									</div>
// 								</div>
// 							</TabsContent>
// 							<TabsContent value="delivery">
// 								<div className="text-sm text-gray-500">
// 									Delivery information will be displayed here.
// 								</div>
// 							</TabsContent>
// 						</Tabs>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default Patient;


// import PatientHeader from "@/app/components/PatientHeader";
// import PatientForm from "@/app/components/PatientForm";
// import PatientSidebar from "@/app/components/PatientSidebar";

// const Patient = () => {
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <PatientSidebar />

//       <div className="flex flex-col flex-1 overflow-hidden">
//         <PatientHeader />

//         <main className="flex-1 p-4 sm:p-6 lg:p-8">
//           <PatientForm />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Patient;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function PatientView() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Patients / View Patient</h2>
          <p className="text-sm text-gray-500">Patient&apos;s next delivery date is 14th November 2020, in 2 days</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Assign Package to Patient</Button>
      </div>

      <div className="flex gap-6 pb-2 border-b">
        <Button variant="outline" className="text-gray-700">Payment Status <span className="px-2 py-1 ml-2 text-green-700 bg-green-100 rounded">Paid</span></Button>
        <Button className="border-b-2 border-blue-600">Patient Information</Button>
        <Button variant="ghost" className="text-gray-500">Delivery Information</Button>
      </div>

      <div className="p-6 space-y-6 bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Patient&apos;s Information</h3>
          <Button variant="outline">✏️ Edit Patient&apos;s Information</Button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label htmlFor="hospitalId">Hospital ID</Label>
            <Input id="hospitalId" value="23AB456789" readOnly />
          </div>

          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" value="Oluwaseun" readOnly />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value="Aregbesola" readOnly />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger id="gender">Male</SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" value="+2348123456789" readOnly />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value="seunregbesola@gmail.com" readOnly />
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Save Changes</Button>
      </div>
    </div>
  );
}


