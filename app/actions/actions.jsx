export const step = () => {
	return {
		type: 'STEP',
		someState: 'butterfly'
	}
}

export const selectCell = (cellX, cellY) => {
	return {
		type: 'SELECT_CELL',
		cellX,
		cellY
	}
}