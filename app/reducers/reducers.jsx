
export const cellReducer = (state = {}, action) => {
	
	switch (action.type) {
		
		case 'STEP':
			return state;

		case 'SELECT_CELL':
			return state.map((row, rowIndex) => {
				if (rowIndex !== action.cellX) { return row; }	
				
				return row.map((col, colIndex) => {
					if (colIndex === action.cellY) {
						return {
							alive: !state[rowIndex][colIndex].alive /* toggle value */
						};
					}	
					return col;
				});
			});
			
		default:
			return state;	
	}
}