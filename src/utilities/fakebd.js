const addToStorage = breakTime => {
    let time = {};
    let storeTime = localStorage.getItem(`break-time`);
    if (storeTime) {
        time = JSON.parse(storeTime);
    }
    time['break'] = breakTime;
    localStorage.setItem('break-time', JSON.stringify(time));
}
const getFromStorage = () => {
    let time = {};
    let storeTime = localStorage.getItem(`break-time`);
    if (storeTime) {
        time = JSON.parse(storeTime);
    }
    return time;
}

export {
    addToStorage,
    getFromStorage
}