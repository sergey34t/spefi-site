const SELECT_OPTION = 'SELECT-OPTION';


let initialState = {
    options: [
        { item: 'GOOGLE', text: 'G'},
        { item: 'YANDEX', text: 'Y'},
        { item: 'YAHOO', text: 'H'}
    ],
    selectedIndex: 0
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
