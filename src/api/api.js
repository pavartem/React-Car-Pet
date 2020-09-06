let fetchMyCars = async () => {
    const res = await fetch('http://localhost:3002/myCars');
    const data = await res.json();
    if (res.status >= 400) {
        throw new Error('Error with request');
    }
    return data;
}

export {fetchMyCars};
