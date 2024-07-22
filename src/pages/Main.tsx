import React from 'react';
import Section from '../components/Section';
import FavoriteItems from '../components/FavoriteItems';
import Notifications from '../components/Notifications';

type Props = {};

const Main = (props: Props) => {
	const notifications = [
		{
			title: 'Заголовок номер 1',
			description: 'Текст уведомления номер 1 длинного в N символов...',
			imageUrl: 'https://via.placeholder.com/40'
		},
		{
			title: 'Заголовок номер 2',
			description: 'Текст уведомления номер 2 длинного в N символов...',
			imageUrl: 'https://via.placeholder.com/40'
		},
		{
			title: 'Заголовок номер 3',
			description: 'Текст уведомления номер 3 длинного в N символов...',
			imageUrl: 'https://via.placeholder.com/40'
		}
	];

	return (
		<div>
			<h1 className="mb-[32px] text-[30px] font-medium">Профиль</h1>
			<div className="flex w-full gap-[36px]">
				<div className="flex flex-1 flex-col gap-[20px]">
					<Section
						title="Иванов"
						subTitle="Дмитрий"
						btnTitle="Редактировать ✎"
						data={{
							Email: 'dmitriyIvanov228_longemail@domain.zone',
							'Адрес доставки':
								'Республика Карелия, Город Какой то _ там _ город, улица сто _ процентов _ проспект _ Ленина,  дом 23/23, кв. 123 / 23, индекс: 000000 '
						}}
					/>
					<Section title="8239 **** **** 2372" subTitle="Банковская карта" btnTitle="Редактировать ✎" />
					<Section
						title="Моя скидка"
						data={{ Экономия: '200,000 ₽', 'Сумма покупок': '3,727,282 ₽' }}
						btnTitle="Подробнее ≫"
					/>
				</div>
				<div className="flex w-full flex-1 flex-col gap-[20px]">
					<Section
						title="№ 123123123232"
						subTitle="Cобирается на складе"
						data={{ 'Дата заказа': '24.09.23', 'Ближайшая доставка': '24.09.23', 'Товаров в заказе': '3' }}
						btnTitle="Редактировать ✎"
					/>
					<FavoriteItems />
					<Section
						title="Только для вас"
						data={{
							'Персональные скидки до 40% только для вас': ''
						}}
						btnTitle="Редактировать ✎"
					/>
				</div>
				<div className="flex-1">
					<Notifications notifications={notifications} />
				</div>
			</div>
		</div>
	);
};

export default Main;
