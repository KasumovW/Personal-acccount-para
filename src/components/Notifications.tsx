import React from 'react';

type Notification = {
	title: string;
	description: string;
	imageUrl: string;
};

type NotificationsProps = {
	notifications: Notification[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
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
					className="notification-item mb-4 flex rounded-[8px] bg-[#F5F6F9] p-[16px] shadow-custom"
				>
					<img src={notification.imageUrl} alt="notification" className="mr-4 h-10 w-10 rounded-full" />
					<div>
						<h3 className="text-[16px] font-semibold">{notification.title}</h3>
						<p className="text-[13px] font-normal">{notification.description}</p>
					</div>
					<button className="box-border h-[28px] rounded-[4px] bg-[#1872C9] px-[20px] text-[14px] font-medium text-white">
						Посмотреть
					</button>
				</div>
			))}
		</div>
	);
};

export default Notifications;
