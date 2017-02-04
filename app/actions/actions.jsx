export const step = () => {
	return {
		type: 'STEP'
	}
}

export const randomize = () => {
	return {
		type: 'RANDOMIZE'
	}
}

export const selectCell = (cellX, cellY) => {
	return {
		type: 'SELECT_CELL',
		cellX,
		cellY
	}
}