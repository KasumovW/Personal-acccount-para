import React from 'react';

type Props = {
	btnTitle: string;
	title: string;
	subTitle?: string;
	data?: { [key: string]: string };
};

const Section: React.FC<Props> = ({ btnTitle, data, title, subTitle }) => {
	return (
		<div className="shadow-custom max-w-[485px] rounded-[8px] p-[24px]">
			<div className="mb-[16px] flex justify-between">
				<div className="flex items-center gap-[16px]">
					<div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#E0E2E9] text-[40px] font-extrabold text-[#BDBFC7]">
						Z
					</div>
					<div className="flex flex-col gap-[4px]">
						<p className="text-[16px] font-semibold leading-[18px] text-[#0E1528]">{title}</p>
						{subTitle && <p className="text-[13px] font-normal leading-[15px] text-[#898C9B]">{subTitle}</p>}
					</div>
				</div>
				<button className="box-border h-[28px] rounded-[4px] bg-[#1872C9] px-[20px] text-[14px] font-medium text-white">
					{btnTitle}
				</button>
			</div>
			<div>
				{data &&
					Object.entries(data).map(([key, value]) => (
						<div className="flex">
							<p className="mb-[16px] text-[15px] font-normal text-[#898C9B]">{key}:</p>
							<p className="ml-[3px] max-w-[315px] text-[15px] font-normal text-[#0E1528]">{value}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default Section;