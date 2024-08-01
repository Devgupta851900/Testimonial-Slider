import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = ({ reviews }) => {
	const [reviewIndex, setReviewIndex] = useState(0);

	function leftShiftHandler() {
		setReviewIndex((reviews.length + reviewIndex - 1) % reviews.length);
	}

	function rightShiftHandler() {
		setReviewIndex((reviewIndex + 1) % reviews.length);
	}

	function surpriseMeHandler() {
		setReviewIndex(Math.floor(Math.random() * reviews.length));
	}

	return (
		<div className=" w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 
        transition-all duration-700  hover:shadow-xl rounded-md ">
			<Card review={reviews[reviewIndex]}></Card>
			<div className=" text-3xl mt-5 gap-3 font-bold text-violet-400 ">
				<button
					className=" cursor-pointer hover:text-violet-500 "
					onClick={leftShiftHandler}
				>
					<FiChevronLeft />
				</button>
				<button
					className=" cursor-pointer hover:text-violet-500 "
					onClick={rightShiftHandler}
				>
					<FiChevronRight />
				</button>
			</div>
			<div className="mt-6">
				<button
					onClick={surpriseMeHandler}
					className=" bg-violet-400 hover:bg-violet-500 transition-all duration-200 
                      cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg "
				>
					Surprise Me
				</button>
			</div>
		</div>
	);
};

export default Testimonials;
