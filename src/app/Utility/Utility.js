
export function validateState(state) {

    let error = "";
    const keys = Object.keys(state);
    for(let key of keys) {
        const isSuccess = state[key];
        if (!isSuccess){
            error =  "Please Provide Valid " + key;
            break;
        }
    }
    return error;
}