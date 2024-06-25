import { useFormStateHook } from "../hooks/useFormStateHook";
import EditProfileData from "../data/EditProfileData.json";
import UserImage from "../assets/images/course2.jpg";
import { SocialMediaType } from "../Types/SocialMediaType";
import { useListHook } from "../hooks/UseListHook";
export default function EditProfile() {
	const {
		state: userInfo,
		handleInput,
		setState: setUserInfo,
	} = useFormStateHook(EditProfileData);
	const { list: socialMediaList, updateElement } = useListHook(
		EditProfileData.socialMedia
	);

	const changeInfo = () => {
		console.log(userInfo);
	};
	return (
		<div className="container mt-10  mb-10">
			<form className="flex items-start flex-wrap">
				<div className="w-full md:w-1/2 p-4">
					{/* Start Image Input  */}
					<div className="mb-4">
						<label
							htmlFor="image"
							className="mb-2 block text-sm font-bold capitalize"
						>
							image
						</label>
						<input
							type="file"
							id="image"
							// value={userInfo.image as string}
							onChange={handleInput}
							accept=".jpg, .jpeg, .png"
							name="image"
						/>
						{(userInfo.image as string) && (
							<div>
								<img
									src={userInfo.image as string}
									alt=""
									className="w-[150px] h-[150px] rounded-full mt-2 mb-2 "
								/>
							</div>
						)}
						{(!userInfo.image as boolean) && (
							<div>
								<img
									src={UserImage}
									alt=""
									className="w-[150px] h-[150px] rounded-full mt-2 mb-2 "
								/>
							</div>
						)}
					</div>
					{/* End Image Input  */}
					{/* Start Frist Name Input  */}
					<div className="mb-4">
						<label
							htmlFor="firstName"
							className="mb-2 block text-sm font-bold capitalize"
						>
							first name
						</label>
						<input
							id="firstName"
							type="text"
							className="w-full input block"
							onChange={handleInput}
							value={userInfo.firstName as string}
							name="firstName"
						/>
					</div>
					{/* End Frist Name Input  */}
					{/* Start Last Name Input  */}
					<div className="mb-4">
						<label
							htmlFor="lastName"
							className="mb-2 block text-sm font-bold capitalize"
						>
							last name
						</label>
						<input
							id="lastName"
							type="text"
							className="w-full input block"
							onChange={handleInput}
							value={userInfo.lastName as string}
							name="lastName"
						/>
					</div>
					{/* End Last Name Input  */}
					{/* Start Headline Input */}
					<div className="mb-4">
						<label
							htmlFor="headline"
							className="mb-2 block text-sm font-bold capitalize"
						>
							headline
						</label>
						<input
							id="headline"
							type="text"
							className="w-full input block"
							onChange={handleInput}
							value={userInfo.headline as string}
							name="headline"
						/>
					</div>
					{/* End Headline Input */}
					{/* Start Bio Input */}
					<div>
						<label
							htmlFor="bio"
							className="mb-2 block text-sm font-bold capitalize"
						>
							biography
						</label>
						<input
							id="bio"
							type="text"
							className="w-full input block"
							onChange={handleInput}
							value={userInfo.bio as string}
							name="bio"
						/>
					</div>
					{/* End Bio Input */}
				</div>
				<div className="w-full md:w-1/2 p-4">
					{/* Start Language Input */}
					<div className="mb-4">
						<label
							htmlFor="language"
							className="mb-2 block text-sm font-bold capitalize"
						>
							language
						</label>
						<input
							id="language"
							type="text"
							className="w-full input block"
							onChange={handleInput}
							value={userInfo.language as string}
							name="language"
						/>
					</div>
					{/* End Language Input */}
					{(socialMediaList as SocialMediaType).map((so, index) => {
						return (
							<div key={index} className="mb-4">
								<label
									htmlFor={so.name}
									className="mb-2 block text-sm font-bold capitalize"
								>
									{so.name}
								</label>
								<input
									id={so.name}
									type="text"
									className="w-full input block"
									onChange={(ev) => {
										updateElement(
											{ name: so.name, url: ev.target.value },
											index
										);
										setUserInfo({ ...userInfo, socialMedia: socialMediaList });
									}}
									value={so.url as string}
									name={so.name}
								/>
							</div>
						);
					})}
					<button
						className="button px-4 py-3 mt-8 ml-auto  w-full md:w-1/2"
						type="button"
						onClick={changeInfo}
					>
						Save Changes
					</button>
				</div>
			</form>
		</div>
	);
}
