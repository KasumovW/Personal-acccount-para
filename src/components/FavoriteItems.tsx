import React from 'react';
import OverlappingImages from './OverlappingImages';

const FavoriteItems: React.FC = () => {
	const images = [
		'https://via.placeholder.com/40',
		'https://via.placeholder.com/40',
		'https://via.placeholder.com/40',
		'https://via.placeholder.com/40'
	];
	const moreCount = 44;

	return (
		<div className="favorite-items-container flex max-w-none items-center justify-between rounded bg-white p-4 shadow-custom md:max-w-[485px]">
			<div className="flex items-center space-x-2">
				<div className="heart-icon rounded-full bg-blue-500 p-2">
					<span role="img" aria-label="favorite">
						❤︎
					</span>
				</div>
				<OverlappingImages images={images} moreCount={moreCount} />
			</div>
			<button className="box-border h-[28px] rounded-[4px] bg-[#1872C9] px-[20px] text-[14px] font-medium text-white">
				Избранные товары ≫
			</button>
		</div>
	);
};

export default FavoriteItems;
