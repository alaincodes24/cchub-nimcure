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
import Navbar from "@/app/components/Navbar";

const Patient = () => {
	return (
		<>
      <Navbar />
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
								<p className="text-sm text-gray-600">
									Patient&apos;s next delivery date is
								</p>
								<p className="font-medium">14th November 2020, in 2 days</p>
							</div>
							<Button className="bg-blue-600 hover:bg-blue-700">
								Assign Package to Patient
							</Button>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 py-6">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
						<div className="lg:col-span-3">
							<Card className="overflow-hidden mb-6">
								<div className="py-4 px-0">
									<div className="space-y-1">
										<button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 font-medium">
											Patient
										</button>
										<button className="w-full text-left px-4 py-2 bg-blue-50 text-blue-600 border-r-4 border-blue-600 font-medium">
											Rider&apos;s Profile
										</button>
										<button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 font-medium">
											Delivery History
										</button>
									</div>
								</div>
							</Card>

							<div className="flex items-center gap-4 mb-6">
								<h1 className="text-lg font-semibold">Payment Status</h1>
								<Badge
									variant="outline"
									className="bg-green-100 text-green-700 border-green-200 font-normal"
								>
									Paid
								</Badge>
							</div>

							<div className="mb-6">
								<h2 className="text-lg font-medium">
									Patient&apos;s Information
								</h2>
								<p className="text-sm text-gray-600">
									Personal information about Patient.
								</p>
							</div>

							<Button
								variant="outline"
								className="gap-2 text-gray-600 border-gray-300 mb-6"
							>
								<Pen className="w-4 h-4" />
								Edit Patient&apos;s Information
							</Button>
						</div>

						<div className="lg:col-span-9">
							<div className="border-b mb-6">
								<div className="flex">
									<button className="py-3 px-4 text-blue-600 border-b-2 border-blue-600 font-medium">
										Patient Information
									</button>
									<button className="py-3 px-4 text-gray-600 border-b-2 border-transparent hover:text-gray-800 font-medium">
										Delivery Information
									</button>
								</div>
							</div>

							<Card className="p-6 space-y-6 shadow-sm">
								<div>
									<div className="relative">
										<div className="absolute top-1.5 left-3 text-xs text-gray-500">
											Hospital ID
										</div>
										<Input
											value="23AB456789"
											readOnly
											className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="relative">
										<div className="absolute top-1.5 left-3 text-xs text-gray-500">
											First Name
										</div>
										<Input
											value="Oluwaseun"
											readOnly
											className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black"
										/>
									</div>
									<div className="relative">
										<div className="absolute top-1.5 left-3 text-xs text-gray-500">
											Last Name
										</div>
										<Input
											value="Aregbesola"
											readOnly
											className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black"
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="relative">
										<div className="absolute top-1.5 left-3 text-xs text-gray-500 z-10">
											Gender
										</div>
										<Select defaultValue="male">
											<SelectTrigger className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black">
												<SelectValue>Male</SelectValue>
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="male">Male</SelectItem>
												<SelectItem value="female">Female</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="relative">
										<div className="absolute top-1.5 left-3 text-xs text-gray-500">
											Phone Number
										</div>
										<Input
											value="+2348123456789"
											readOnly
											className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black"
										/>
									</div>
								</div>

								<div className="relative">
									<div className="absolute top-1.5 left-3 text-xs text-gray-500">
										Email Address
									</div>
									<Input
										value="seunregbesola@gmail.com"
										readOnly
										className="bg-gray-50 border-gray-200 pt-6 pb-2 h-14 text-xl text-black"
									/>
								</div>

								<div className="flex justify-end">
									<Button
										className="bg-gray-300 text-gray-500 cursor-not-allowed"
										disabled
									>
										Save Changes
									</Button>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Patient;
