export default function returnHowManyArguments(..theArgs) {
	let total = 0;
	for (const args in theArgs){
		total += args;
	}
	return total;
}
