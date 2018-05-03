import { quoteConstants } from '../constants';
import { quoteService } from '../services';

export const tasksActions = {
    getQuote
}

function getQuote() {

    return dispatch => {
        dispatch(request());

        quoteService.getQuote()
            .then((quote) => {
                dispatch(success(quote));
            })
            .catch((error) => {
                dispatch(error(error))
            });
    }


    function request() {
        return {
            type: quoteConstants.QUOTE_REQUEST,

        }
    }

    function success(data) {
        return {
            type: quoteConstants.QUOTE_SUCCESS,
            quote: data
        }
    }

    function error(error) {
        return {
            type: quoteConstants.QUOTE_ERROR,
            error: error
        }
    }
    
}