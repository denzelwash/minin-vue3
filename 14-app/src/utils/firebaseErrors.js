const errors = {
	EMAIL_NOT_FOUND: 'Email не найден',
	INVALID_PASSWORD: 'Неверный пароль'
}

export default function(error) {
	return errors[error] ? errors[error] : 'Неизвестная ошибка'
}