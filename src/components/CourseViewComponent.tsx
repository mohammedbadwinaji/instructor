import { CourseViewComponentType } from "../Types/CourseViewComponentType";
import courseImage from "../assets/images/course3.jpg";
export default function CourseViewComponent({
	course,
	className = "",
}: CourseViewComponentType) {
	return (
		<div
			className={`${className} justify-center items-start flex bg-gray-200 rounded-sm flex-wrap md:flex-nowrap`}
		>
			<div className="w-[150px] h-[120px] mb-4 md:mb-0">
				{course.image && (
					<img className="w-full h-full" src={course.image} alt="" />
				)}
				{!course.image && (
					<img className="w-full h-full" src={courseImage} alt="" />
				)}
			</div>
			<div className="ml-3 flex flex-col h-full mb-4 md:mb-0 text-center">
				<h2 className=" text-sm sm:text-lg font-bold text-gray-800 mb-5">
					{" "}
					{course.title}
				</h2>
				<span className="capitalize text-xs sm:text-sm">
					{course.published ? "published" : "not published"}
				</span>
			</div>
			<button className="button text-sm sm:text-lg px-4 py-2 ml-4 w-[150px] self-center">
				edit
			</button>
		</div>
	);
}
