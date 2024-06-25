import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { RateComponentType } from "../../Types/RateComponentType";


export default function RateComponent({
	rate,
	width,
	className,
}: RateComponentType) {
	const stars = [];
	for (let i = 0; i < rate; i++) {
		stars.push(1);
	}
	for (let i = stars.length; i < 5; i++) {
		stars.push(0);
	}
	return (
		<div className={`flex ${className} w-[${width}] `}>
			{stars.map((star, ind) => {
				if (star) {
					return (
						<StarIconSolid key={ind} className={`text-yellow-500`} />
					);
				} else {
					return (
						<StarIconOutline key={ind} className={`text-yellow-500`} />
					);
				}
			})}
		</div>
	);
}
