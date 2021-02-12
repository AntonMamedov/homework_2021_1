function sorting(objArr, propName) {
    for (let i = 0; i < objArr.length; ++i)
        objArr[i] = [objArr[i], i];

    function comparator(a, b) {
        for (let prop of propName) {
            if (a[0][prop] < b[0][prop])
                return -1;
            else if (a[0][prop] > b[0][prop])
                return 1;
        }
        return a[1] - b[1];
    }
    objArr.sort(comparator);

    for (let i = 0; i < objArr.length; ++i)
        objArr[i] = objArr[i][0];
    return objArr;

}