export default function getListStudentIds(my_list){
	if (Array.isArray(my_list)) {
		return my_list.map((obj) => obj.id);
	}

	return [];
}
