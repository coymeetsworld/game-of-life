export const step = () => {
	return {
		type: 'STEP',
	}
}

export const selectCell = (cellX, cellY) => {
	return {
		type: 'SELECT_CELL',
		cellX,
		cellY
	}
}