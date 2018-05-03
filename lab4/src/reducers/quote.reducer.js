import { quoteConstants } from '../constants';

export function quote(state = {}, action) {

    switch (action.type) {
        case quoteConstants.QUOTE_REQUEST:
            return {
                ...state
            }
        case quoteConstants.QUOTE_SUCCESS:
            return {
                quote: action.quote
            }
        case quoteConstants.QUOTE_ERROR:
            return {}
        default:
            return {
                ...state
            }
    }

}