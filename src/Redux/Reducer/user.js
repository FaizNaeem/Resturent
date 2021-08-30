const intitialState = {
    user: null,
    loader: false,
    menureducer :null,
    catogryreducer :null,
}

export const userReducer = (state = intitialState, action) => {
    switch (action.type) {
        case "LOGIN_PROCESSING":
            return {
                ...state,
                loader: true,
            }
            
            case "MENU_PROCESSED":
                return {
                    ...state,
                    loader: true,
                    menureducer: action.payload
                    
                }
                case "CATOGRY_PROCESSED":
                    return {
                        ...state,
                        loader: true,
                        catogryreducer: action.payload
                        
                    }

            
        case "LOGIN_PROCESSED":
            return {
                ...state,
                loader: false,
                user: action.payload
            }
        case "ERROR":
            return {
                ...state,
                loader: false,
            }
    
        default:
            return state;
    }
}