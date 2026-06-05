import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export async function fetchWithState(callFn, onSuccess) {
	const result = {
		data: null,
		loading: true,
		errorCode: null,
		ok: false
	};

	try {
		const res = await callFn();
		result.data = res;
		result.ok = Boolean(res && (res.success === true || res.status === 200));
		if (result.ok && typeof onSuccess === 'function') {
			onSuccess(res);
		}
	} catch (err) {
		result.errorCode = err?.status ?? null;
		const message = err?.response?.data?.message || 'Network error';
		//showError(message);
		console.error('fetchWithState error:', err);
	} finally {
		result.loading = false;
	}

	return result;
}

export function mapZodErrors(result) {
	if (result.success) return {};

	const out = {};
	for (const issue of result.error.issues) {
		let target = out;
		const path = issue.path.length ? issue.path : ['_error'];

		path.forEach((p, idx) => {
			if (idx === path.length - 1) {
				target[p] = issue.message;
			} else {
				target[p] = target[p] || {};
				target = target[p];
			}
		});
	}
	return out;
}