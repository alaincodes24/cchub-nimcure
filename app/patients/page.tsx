"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Navbar from "../components/Navbar"

const patients = [
  {
    id: "1AFHFH093",
    name: "Oluwaseun Aregbesola",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed",
  },
  {
    id: "1AFHFH093",
    name: "Stella Omotaye",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed",
  },
  {
    id: "1AFHFH093",
    name: "Chiryere Okafor",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Paid",
  },
  {
    id: "1AFHFH093",
    name: "Mohammed Danladi",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Unpaid",
  },
  {
    id: "1AFHFH093",
    name: "Michael Aribisala",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Assigned",
  },
  {
    id: "1AFHFH093",
    name: "Donatus Emefiele",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Assigned",
  },
  {
    id: "1AFHFH093",
    name: "Donatus Emefiele",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Completed",
  },
  {
    id: "1AFHFH093",
    name: "Donatus Emefiele",
    phone: "+2347068642920",
    nextDelivery: "12th September 2020",
    location: "VI, Lagos",
    status: "Due & Paid",
  },
]

const Patients = () => {
  const [search, setSearch] = useState("")
  const [sortBy, setSortBy] = useState("hospital-id")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Due & Paid":
        return "bg-orange-100 text-orange-800"
      case "Due & Unpaid":
        return "bg-red-100 text-red-800"
      case "Assigned":
        return "bg-blue-100 text-blue-800"
      case "Paid":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-[1400px] w-[90%] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Patients</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Patient
          </Button>
        </div>

        <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Hospital ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospital-id">Hospital ID</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="relative">
            <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <Input
              placeholder="Search by patient name, id"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full md:w-[300px]"
            />
          </div>
        </div>

        <div className="overflow-hidden border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital ID</TableHead>
                <TableHead>Patient&apos;s Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Next Delivery Date</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.phone}</TableCell>
                  <TableCell>{patient.nextDelivery}</TableCell>
                  <TableCell>{patient.location}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 text-sm ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" className="text-blue-600 rounded-none shadow-none hover:text-blue-700">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 mt-4 md:flex-row">
          <p className="text-sm text-gray-500">You&apos;re viewing 8 out of 87 deliveries</p>
          <Pagination className="justify-end flex-grow w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="px-2 border rounded-full" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="rounded-full">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="px-2 border rounded-full" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  )
}

export default Patients
