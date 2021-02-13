let sorting = (objArr, propName) => {
    if (Array.isArray(objArr) && Array.isArray(propName)) {
        objArr.sort((left, right) => {
            for (let prop of propName) {
                //Не получиься применить тернарный оператор, потому что
                //отрицанием < является >= а в данном случае = должно обрабатываться отдельно
                //Данный метод итерации по массиву представляется мне наиболее лаконичным, не вижу смысла использовать форич
                if (left[prop] < right[prop])
                    return -1;
                else if (left[prop] > right[prop])
                    return 1;
            }
            return 0;
        });
        return objArr;
    } else {
        throw "non-volatile data";
    }
}