const SELECT_OPTION = 'SELECT-OPTION';


let initialState = {
    options: [
        {id: 1, item: 'google'},
        {id: 2, item: 'yandex'},
        {id: 3, item: 'yahoo'}
    ],
    selectedIndex: 1
};


const appReducer = (state = initialState, action) => {
    console.log(state.selectedIndex)
    switch (action.type) {
        case SELECT_OPTION: {
            return {
                ...state,
                selectedIndex: action.selectedIndex
            };
        }
        default:
            return state;
    }
}


export const selectIndex = (selectedIndex) => ({type: SELECT_OPTION, selectedIndex})

export default appReducer;
