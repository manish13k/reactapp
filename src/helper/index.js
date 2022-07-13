export const logError = (errorMessage = '', errorObject) => {
    console.error(`\n\n ${errorMessage}`, `\n`, errorObject);
    throw errorObject;
};

export const getUserName = (userData = [], albumId = 0) => {
    const user = userData.find(obj => obj?.id === albumId)?.username;
    return user ? user : 'NA';
}

export const setValue = (getval) => {
    localStorage.setItem('userInfo', JSON.stringify(getval));
    return true
}

export const getValue = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
}

export const getColorCode = () => {
    return  {
        "1": "#fff100",
        "2": "#ff8c00",
        "3": "#e81123",
        "4": "#ec008c",
        "5": "#68217a",
        "6": "#00188f",
        "7": "#00bcf2",
        "8": "#00b294",
        "9": "#009e49",
        "10": "#bad80a"
    }
}


