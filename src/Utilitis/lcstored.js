
const getStored = () => {
    const getDataLc = localStorage.getItem('data')
    if(getDataLc){
        return JSON.parse(getDataLc)
    }
    return []
};

const saveDataLs = card => {
    const dataStringify = JSON.stringify(card)
    localStorage.setItem('data', dataStringify)
}

const setStoredData = id => {
    const card = getStored();
    card.push(id)

    saveDataLs(card);
}

export {setStoredData, getStored}
