import * as actionTypes from './actionTypes'

const initialState = {
    data: [],
    loading: false,
    message:'',
    contactId: null,
    phoneNumber: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.UPLOAD_FILE_START):
            return {
                ...state,
                loading:true
            }
        case (actionTypes.UPLOAD_FILE_SUCCESS):
            return {
                ...state,
                data: action.data,
                loading:false
            }
        case (actionTypes.UPLOAD_FILE_FAIL):
            return {
                ...state,
                loading:false
            }
        case (actionTypes.CONTACT_ID):
            return {
                ...state,
                contactId:action.id
            }
        case (actionTypes.PHONE_NUMBER):
            return {
                ...state,
                phoneNumber: action.num
            }
        case (actionTypes.SEND_MESSAGE_START):
            return {
                ...state,
                loading: true
            }
        case (actionTypes.SEND_MESSAGE_SUCCESS):
            const data = [...state.data]
            for (var i in data) {
                if (+data[i].id === +state.contactId) {
                    data[i].otp = action.otp;
                    break;
                }
            }
            return {
                ...state,
                data: data,
                loading: false
            }
        case (actionTypes.SEND_MESSAGE_FAIL):
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reducer