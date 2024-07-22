import React from 'react';

type OverlappingImagesProps = {
	images: string[];
	moreCount: number;
};

const OverlappingImages: React.FC<OverlappingImagesProps> = ({ images, moreCount }) => {
	return (
		<div className="flex items-center">
			<div className="flex -space-x-4">
				{images.map((src, index) => (
					<img
						key={index}
						src={src}
						alt={`item ${index}`}
						className="h-10 w-10 rounded-full border-2 border-white"
						style={{ zIndex: images.length - index }}
					/>
				))}
				<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gray-200">
					+{moreCount}
				</div>
			</div>
		</div>
	);
};

export default OverlappingImages;
