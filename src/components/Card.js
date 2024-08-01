import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const card = ({ review }) => {
	return (
		<div className="flex flex-col justify-center md:relative ">
			<div className="absolute top-[-7rem] z-10 ">
				<img
					src={review.image}
					alt="PersonImage"
					className="aspect-square rounded-full w-[140px] z-20 "
				/>
				<div className=" bg-violet-400 aspect-square w-[140px] rounded-full absolute top-[-6px] left-[10px] -z-[10] "></div>
			</div>

			<div className="text-center mt-7 ">
				<p className=" font-bold text-2xl capitalize  ">
					{review.name}
				</p>
			</div>

			<div className="text-center mt-1 ">
				<p className=" text-sm uppercase text-violet-300 ">
					{review.job}
				</p>
			</div>

			<div className="flex justify-center text-violet-400 mt-5 ">
				<FaQuoteLeft />
			</div>

			<div className="text-slate-500 text-center mt-4 ">
				{review.text}
			</div>

			<div className="flex justify-center text-violet-400 mt-5 ">
				<FaQuoteRight />
			</div>
		</div>
	);
};

export default card;
