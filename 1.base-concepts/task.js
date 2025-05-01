"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		arr.push(root);
	} else {
		const sqrtD = Math.sqrt(discriminant);
		const root1 = (-b + sqrtD) / (2 * a);
		const root2 = (-b - sqrtD) / (2 * a);
		arr.push(root1, root2);
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = percent / 100 / 12;
	const loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

	const p = monthlyPercent;
	const n = countMonths;
	const monthlyPayment = loanBody * (p + p / ((1 + p) ** n - 1));
	const total = monthlyPayment * n;

	return Number(total.toFixed(2));
}