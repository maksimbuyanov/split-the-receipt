# Приложение учета чеков на компанию

## Проблема
_После похода в заведение компанией на выходе получается чек, за который заплатил кто-то один. 
Было бы удобно иметь сервис, в котором можно поделить чек между людьми._

## Пользовательский путь
Пользователь, "оплативший чек", заходит на страницу и сканирует qr код на чеке.
Приложение автоматически распознает позиции в чеке и выводит их в таблице. 
Дублирующиеся позиции выводятся каждая в отдельной строке. 
Также Пользователь может добавить в чек дополнительные строки в таблицу (например чаевые или групповое такси).

После этого Пользователь генерирует ссылку для своих друзей и отправляет им.
Переходя по ссылке, пользователи видят ту же таблицу, но без возможности редактировать,
они могут только отмечать конкретную строку расходов на 100% или на какую-то часть (в процентах).
Приложение выводит итоговую сумму для пользователей в зависимости от того, что они отметили.

Для Пользователя, "оплатившего чек", в таблице выводится, кто и какую строчку отметил.

## Этапы развития
- Вывод в таблице
- Добавление строк в таблицу в ручном варианте
- Авторизация пользователя (Oauth, telegram)
- Сохранение таблицы в БД и восстановление
- История чеков
- Добавление строк в таблицу через сканирование QR кода
- Генерация ссылки для других пользователей
- Сохранение модификаций таблицы пользователями
