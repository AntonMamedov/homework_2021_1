'use strict';
/**
 * Функция принимает на вход массив plain-объектов и массив имён свойств,
 * по которым необходимо отсортировать массив объектов,
 * и реализует устойчивую сортировку этого массива в порядке возрастания
 * (строки сортируются лексикографически, числа — в порядке возрастания).
 *
 * @param {Array} objArr - исходный массив, который сортируется
 * @param {Array} propName - массив имен свойств, по которым проводится сортировка
 * @returns {Array} - возвращает отсортированный массив
 * @throws {TypeError} - выбрасывает ошибку, если на вход приходят не массивы
 */
const sorting = (objArr, propName) => {
    if (!Array.isArray(objArr) || !Array.isArray(propName)) {
        throw new TypeError('Non-volatile data');
    }
    return objArr.sort((left, right) => {
        for (const prop of propName) {
            if (left[prop] < right[prop]) return -1;
            if (left[prop] > right[prop]) return 1;
        }
        return 0;
    });
}