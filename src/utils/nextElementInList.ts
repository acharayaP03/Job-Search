/**
 * Generic function of Type T, if the user passes value, we will grab its types via inference
 * @param list
 * @param value
 */

const nextElementInList = <T>(list: T[], value: T) => {
    const currentValueIndex = list.indexOf(value);
    const nextValueIndex = (currentValueIndex + 1) % list.length;
    const nextValue = list[nextValueIndex];

    return nextValue;
};

export default nextElementInList;