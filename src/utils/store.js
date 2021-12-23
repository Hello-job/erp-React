export const defaultState = {
    userInfo: null
}

export function reducer (state = defaultState, action) {
    const { type, data } = action
    
    switch (type) {
        case 'userInfo':
            console.log('修改用户信息')
            return {
                userInfo: {
                   ...data
               } 
            }
        case true:
            return true
        default:
            return false
    }
}