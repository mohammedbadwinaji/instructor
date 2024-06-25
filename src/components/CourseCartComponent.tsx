import {
	PlusCircleIcon,
	ShoppingCartIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { FaCertificate } from "react-icons/fa6";
import courseImage from "../assets/images/course2.jpg";
import { CourseCartComponentType } from "../Types/CourseCartComponentType";
import { router } from "../router";
import RateComponent from "./RateComponent";




export default function CourseCartComponent({
	course,
	className = "",
}: CourseCartComponentType) {
	const addToWishist = () => {
		console.log("Added To Wishest");
	};

	function onClick() {
		router.navigate(`/courses/course/${course.id}`);
	}

	return (
		<div className={`roudned-lg shadow-xl relative ${className}`}>
			<button
				onClick={addToWishist}
				type="button"
				className="absolute right-2 top-2 p-1 rounded-button"
			>
				{}
				<BiBookmarkAltPlus className="size-6  cursor-pointer" />
			</button>
			{!course.courseImage && (
				<div
					className="w-full bg-white cursor-pointer"
					onClick={() => onClick()}
				>
					<img
						src={courseImage}
						alt="Not Provided With Image"
						className="min-w-full max-w-full h-[200px]"
					/>
				</div>
			)}
			{course.courseImage && (
				<div
					className="w-full bg-white cursor-pointer"
					onClick={() => onClick()}
				>
					<img
						src={course.courseImage}
						alt="Not Provided With Image"
						className="min-w-full max-w-full h-[200px]"
					/>
				</div>
			)}

			<div className="p-2">
				<div className="flex mb-2">
					<RateComponent rate={course.rate} className="" width="100px" />
				</div>
				<h2 className="text-xl capitalize p-2 mb-3"> {course.title} </h2>
				<div className="flex items-center mb-4">
					<span className="flex items-center mr-4">
						<UsersIcon className="size-10 p-2 text-teal-800" />
						{course.studentCount}
					</span>
					<span className="flex items-center">
						<FaCertificate className="size-10 p-2 text-teal-800" />
						{course.rate}
					</span>
				</div>
				<div className="flex items-center mb-4 border-b-2 border-b-gray-500 pb-5">
					{course.instructor.image && (
						<img
							src={course.instructor.image}
							alt=""
							className="rounded-full size-12 p-1 border-2 border-teal-500 mr-3"
						/>
					)}
					{!course.instructor.image && (
						<div className="bg-teal-700 text-bold rounded-full p-2 text-white mr-3">
							{`${course.instructor.firstName.charAt(
								0
							)}${course.instructor.firstName.charAt(0)}`}
						</div>
					)}
					{course.instructor.firstName} {course.instructor.lastName}
				</div>

				<div className="pb-2  flex-col  flex justify-between items-center">
					<div className="mb-3">
						<span className="font-bold inline-block mr-2 text-lg">
							{course.price.value}
						</span>
						<span className="text-teal-800">{course.price.currency}</span>
					</div>
					<div className="flex flex-col sm:flex-row ">
						<button className="py-2 px-4 button mr-0 mb-4 sm:mb-0 sm:mr-4">
							<PlusCircleIcon className="size-6 me-3" />
							Add to Cart
						</button>
						<button className="py-2 px-4 button">
							<ShoppingCartIcon className="size-6 me-3" />
							enrolle
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
