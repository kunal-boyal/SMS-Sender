import * as actionTypes from './actionTypes';
import axios from 'axios'


export const uploadFileStart = () => {
    return {
        type: actionTypes.UPLOAD_FILE_START
    }
}


export const uploadFileSuccess = (data) => {
    return {
        type: actionTypes.UPLOAD_FILE_SUCCESS,
        data: data
    }
}

export const uploadFileFail = () => {
    return {
        type: actionTypes.UPLOAD_FILE_FAIL
    }
}

export const uploadFile = (data) => {
    let bodyFormData = new FormData();
    bodyFormData.append('fileName', data.data);
    return dispatch => {
        dispatch(uploadFileStart());
        axios.post('/uploadContacts', bodyFormData)
            .then(response => {
                dispatch(uploadFileSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(uploadFileFail())
                console.log(error.message)
            });
    };
}

export const contactId = (id) => {
    return {
        type: actionTypes.CONTACT_ID,
        id: id
    }
}

export const sendMessageStart = () => {
    return {
        type: actionTypes.SEND_MESSAGE_START
    }
}


export const sendMessageSuccess = (data) => {
    return {
        type: actionTypes.SEND_MESSAGE_SUCCESS,
        otp: data
    }
}

export const sendMessageFail = () => {
    return {
        type: actionTypes.SEND_MESSAGE_FAIL
    }
}

export const sendMessage = (data) => {
    return dispatch => {
        dispatch(sendMessageStart());
        axios.post('/sendMessage', data)
            .then(response => {
                dispatch(sendMessageSuccess(response.data.otp));
            })
            .catch(error => {
                dispatch(sendMessageFail())
                console.log(error.message)
            });
    };
}

export const phoneNumber = (data) => {
    return {
        type: actionTypes.PHONE_NUMBER,
        num:data
    }
}