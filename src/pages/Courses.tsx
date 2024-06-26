import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import courses from "../data/CourseView.json";
import CourseViewComponent from "../components/CourseViewComponent";

export default function Courses() {
	const searchInput = useRef<HTMLInputElement | null>(null);

	const onKeyDown = (ev: React.KeyboardEvent) => {
		if (ev.key === "Enter") {
			search();
		}
	};

	const search = () => {
		console.log(searchInput.current);
	};
	return (
		<div className="container">
			<h1 className="text-gray-800 text-3xl font-bold p-2 mb-5 capitalize">
				courses
			</h1>
			{/* Search  */}
			<div className="p-2 mb-4">
				<div className="flex items-center justify-center">
					<input
						ref={searchInput}
						className="input w-full md:w-[400px]"
						type="search"
						placeholder="Search By Name"
						onKeyDown={onKeyDown}
						required
					/>
					<button
						onClick={() => search()}
						className="button-icon-inline-flex py-2 px-4 ml-2"
					>
						<BiSearch className="size-5" />
						Search
					</button>
				</div>
			</div>
			{/* view Instructor Courses */}
			<div className="">
				{courses.map((course, ind) => {
					return <CourseViewComponent key={ind} course={course} className="mb-2 w-fit p-2 m-auto"/>
				})}
			</div>
		</div>
	);
}
