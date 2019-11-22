/* global window */

function stringify(obj) {
	const parts = [];
	Object.keys(obj).forEach((key) => {
		parts.push(`${key}=${obj[key]}`);
	});
	return parts.join(',');
}

function configure(options = {}) {
	const width = options.width || 640;
	const height = options.height || 480;
	return {
		width,
		height,
		left: window.screenX + ((window.outerWidth - width) / 2),
		top: window.screenY + ((window.outerHeight - height) / 2.5),
		...options,
	};
}

export const popup = (url, options = {}) => {
	const str = stringify(configure(options));
	const w = window.open(url, options.name || '', str);

	if (w) {
		w.focus();

		return w;
	}

	return false;
};

export default (url, options = {}) => {
	const str = stringify(options);
	const w = window.open(url, options.name || '', str);

	if (w) {
		w.focus();

		return w;
	}

	return false;
};
