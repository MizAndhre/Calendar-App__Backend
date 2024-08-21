const { isValid } = require('date-fns');

const isDate = (dateValue) => {
	if (!dateValue) return false;

	const date = isValid(dateValue);

	return date;
};

module.exports = { isDate };
