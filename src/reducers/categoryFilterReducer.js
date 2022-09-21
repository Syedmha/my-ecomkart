const initialState = {
    categories: {
        electronics: false,
        jewelery: false,
        mens: false,
        womens: false
    }
}

const categoryFilterReducer = (state, action) => {
    switch (action.type) {
        case "ELECTRONICS":
            return {
                categories: {
                    ...state.categories,
                    electronics: !state.categories.electronics,
                }
            }
        case "JEWELERY":
            return {
                categories: {
                    ...state.categories,
                    jewelery: !state.categories.jewelery,
                }
            }
        case "MENS":
            return {
                categories: {
                    ...state.categories,
                    mens: !state.categories.mens,
                }
            }
        case "WOMENS":
            return {
                categories: {
                    ...state.categories,
                    womens: !state.categories.womens,
                }
            }
        case "CLEAR":
            return { ...initialState }
    }
}

export { categoryFilterReducer }