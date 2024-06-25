import { InstructorProfileType } from "../Types/InstructorProfileType";
import CourseCartComponent from "../components/CourseCartComponent";
import instructorDetails from "../data/instructorProfile.json";
import image from '../assets/images/course2.jpg'
const instructor = instructorDetails as InstructorProfileType;

export default function Profile() {
	return (
		<div className="flex flex-col md:flex-row items-start">
			<div className="w-full md:w-4/6 m-0 md:mr-4">
				<h2 className="text-2xl capitalize font-bold mb-1">
					{instructor.firstName} {instructor.lastName}
				</h2>
				{instructor.bio && (
					<h3 className="text-lg font-bold capitalize mb-5">
						{" "}
						{instructor.bio}{" "}
					</h3>
				)}
				{!instructor.bio && (
					<h3 className="text-lg font-bold capitalize mb-5 text-gray-400">
						{" "}
						no bio added{" "}
					</h3>
				)}
				<div className="flex">
					<div className="flex flex-col mr-5">
						<span className="mb-2 capitalize text-sm font-bold text-gray-500">
							{" "}
							total student
						</span>
						<span className="text-lg font-bold">
							{" "}
							{instructor.studentCount}
						</span>
					</div>
					<div className="flex flex-col">
						<span className="mb-2 capitalize text-sm font-bold text-gray-500">
							{" "}
							total student
						</span>
						<span className="text-lg font-bold">
							{" "}
							{instructor.reviewsCount}
						</span>
					</div>
				</div>
				<div>
					<h2 className="capitalize font-bold mt-8 mb-5 text-xl">About me</h2>
					{instructor.headline && (
						<p className="text-gray-800 leading-9">{instructor.headline}</p>
					)}
					{!instructor.headline && (
						<p className="flex justify-center items-center w-full">
							No Headline Provided
						</p>
					)}
				</div>
				<div>
					<h2 className="capitalize font-bold mt-10 mb-8 text-xl">
						My Courses
					</h2>
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
						{instructor.courses.map((course, index) => {
							return (
								<CourseCartComponent
									key={index}
									course={course}
									className="bg-gray-200 shadow-lg"
								/>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full md:w-2/6 mt-10 md:m-0">
				<div className="w-[150px] h-[150px] m-auto mb-5">
					{instructor.image && (
						<img
							className="w-full h-full  rounded-full"
							src={instructor.image}
							alt=""
						/>
					)}
					{!instructor.image && (
						<img
							className="w-full h-full  rounded-full"
							src={image}
							alt=""
						/>
					)}
				</div>
				{instructor.socialMedia.length === 0 && (
					<h3 className="text-md font-bold capitalize mb-5 text-gray-400">
						{" "}
						no social Media added
					</h3>
				)}
				{instructor.socialMedia.map((web, index) => {
					return (
						<a
							target="_blank"
							key={index}
							href={web.url}
							className="capitalize block p-3 mb-2 button"
						>
							{" "}
							{web.name}{" "}
						</a>
					);
				})}
			</div>
		</div>
	);
}
