import React, { useState, useEffect } from 'react';

type Notification = {
	title: string;
	description: string;
	imageUrl: string;
};

type NotificationsProps = {
	notifications: Notification[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 480);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className="notifications-container rounded bg-white p-4 shadow-custom">
			<div className="header mb-4 flex items-center justify-between">
				<h2 className="text-[16px] font-semibold">Уведомления</h2>
				<button className="box-border h-[28px] rounded-[4px] border border-[#1872C9] px-[20px] text-[14px] font-medium text-[#1872C9]">
					Все уведомления ≫
				</button>
			</div>
			{notifications.map((notification, index) => (
				<div
					key={index}
					className="notification-item relative mb-4 flex justify-between rounded-[8px] bg-[#F5F6F9] p-[16px] shadow-custom"
				>
					<div className="flex max-w-full">
						<img src={notification.imageUrl} alt="notification" className="mr-4 h-10 w-10 rounded-full" />
						<div className="max-w-full">
							<h3 className="w-[150px] text-[16px] font-semibold">{notification.title}</h3>
							<p className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-normal">
								{isMobile ? `${notification.description.slice(0, 35)}...` : notification.description}
							</p>
						</div>
					</div>
					<button className="absolute right-2.5 top-2.5 box-border hidden h-[28px] rounded-[4px] bg-[#1872C9] px-[10px] text-[14px] font-medium text-white md:block md:px-[20px]">
						Посмотреть
					</button>
				</div>
			))}
		</div>
	);
};

export default Notifications;
