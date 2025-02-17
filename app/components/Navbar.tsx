"use client";

import { useState } from "react";
import Image from "next/image";
import {
	ChevronDown,
	Grid,
	Package,
	Users,
	Bike,
	User,
	LogOut,
	Settings,
	Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

const navigation = [
	{
		name: "Overview",
		icon: Grid,
	},
	{
		name: "Deliveries",
		icon: Package,
	},
	{
		name: "Patients",
		icon: Users,
	},
	{
		name: "Dispatch Riders",
		icon: Bike,
	},
	{
		name: "Admin",
		icon: User,
	},
];

const Navbar = () => {
  const router = useRouter();
	const [activeItem, setActiveItem] = useState("Patients");

	const NavItems = ({ isMobile = false, closeSheet = () => {} }) => (
		<>
			{navigation.map((item) => {
				const Icon = item.icon;
				const isActive = item.name === activeItem;

				return (
					<button
						key={item.name}
						onClick={() => {
							setActiveItem(item.name);
							if (isMobile) closeSheet();
						}}
						className={cn(
							"flex items-center gap-2 px-4 py-[22px] text-sm font-medium text-muted-foreground transition-colors hover:text-primary relative group",
							isActive && "text-blue-600",
							isMobile && "w-full justify-start py-4"
						)}
					>
						<div
							className={cn(
								"flex items-center gap-2 relative",
								isMobile && "w-full"
							)}
						>
							<Icon className={cn("h-5 w-5", isActive && "text-blue-600")} />
							<span>{item.name}</span>
							{isActive && !isMobile && (
								<span className="absolute bottom-[-22px] left-0 h-0.5 w-full bg-blue-600" />
							)}
						</div>
					</button>
				);
			})}
		</>
	);

	return (
		<div className="w-full border-b">
			<nav className="flex items-center justify-between h-16 w-[90%] max-w-[1400px] px-4 mx-auto">
				<div>
					<Image
						src="/nimr.png"
						alt="NIMR Logo"
						width={56}
						height={56}
						className="rounded-xl"
					/>
				</div>

				<div className="items-center hidden lg:flex">
					<NavItems />
				</div>

				<div className="flex items-center gap-2 w-[180px] justify-end">
					<div className="items-center hidden lg:flex">
						<DropdownMenu>
							<DropdownMenuTrigger className="flex items-center gap-2">
								<Avatar className="w-8 h-8">
									<Image
										src="/profile.png"
										alt="User Profile"
										width={56}
										height={50}
										className="rounded-xl"
									/>
									<AvatarFallback>EA</AvatarFallback>
								</Avatar>
								<span className="text-sm font-medium whitespace-nowrap">
									Emmanuel Adigwe
								</span>
								<ChevronDown className="w-4 h-4 text-muted-foreground" />
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<User className="w-4 h-4 mr-2" />
									<span>Profile</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className="w-4 h-4 mr-2" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() =>  router.push("/")}>
									<LogOut className="w-4 h-4 mr-2" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="lg:hidden">
								<Menu className="w-5 h-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px]">
							<div className="flex flex-col gap-4 py-4">
								<button className="flex items-center justify-start w-full gap-2 px-4 py-4 text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
									<Avatar className="w-8 h-8 mr-2">
										<Image
											src="/profile.png"
											alt="User Profile"
											width={56}
											height={56}
											className="rounded-xl"
										/>
										<AvatarImage src="/placeholder.svg" />
										<AvatarFallback>EA</AvatarFallback>
									</Avatar>
									Emmanuel Adigwe
								</button>
								<NavItems isMobile closeSheet={() => document.body.click()} />
								<button className="flex items-center justify-start w-full gap-2 px-4 py-4 text-sm font-medium transition-colors text-muted-foreground hover:text-primary">
									<LogOut className="w-5 h-5 mr-2" />
									Log out
								</button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
