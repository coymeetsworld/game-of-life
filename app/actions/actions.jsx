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

export const startSimulation = () => {
	return {
		type: 'START_SIMULATION'
	}
}

export const pauseSimulation = () => {
	return {
		type: 'PAUSE_SIMULATION'
	}
}

export const resumeSimulation = () => {
	return {
		type: 'RESUME_SIMULATION'
	}
}