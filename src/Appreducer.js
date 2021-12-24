import React from 'react'

export default (state, action) => {
    switch (action.type){
        case 'IS_MOVING':
            return {
                moving: action.payload === true ? true : false
            }
        default:
            return state
    }
}
