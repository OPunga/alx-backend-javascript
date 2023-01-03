export default function getStudentIdsSum(lt) {
	return lt.reduce((counter, currentobj) => counter + currentobj.id, 0);
}
