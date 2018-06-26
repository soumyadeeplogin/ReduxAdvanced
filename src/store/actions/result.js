import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    //const updatedResult = res *2
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    console.log("storeResult")
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter
            console.log("Old COunter", oldCounter)
            dispatch(saveResult(res))
        }, 500)
    }
}

export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultElId
    }
}