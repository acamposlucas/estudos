const transform = (old) => {
	const expected = {};

	Object.keys(old).forEach((key) => {
		for (let i = 0; i < old[key].length; i++) {
			expected[old[key][i].toLowerCase()] = +key;
		}
	});

	return expected;
};

module.exports = transform;
