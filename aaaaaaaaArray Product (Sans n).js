/*
    Given an array of numbers, your task is to return a new array where each index (new_array[i]) is equal to the product of the original array, except for the number at that index (array[i]).
    Two things to keep in mind:
    Zeroes will be making their way into some of the arrays you are given
    O(n²) solutions will not pass.
    All input arrays will be valid arrays of nonzero length.
*/


/*
    Examples:
        [1, 2, 3, 4]              => [24, 12, 8, 6]
        [2, 3, 4, 5]              => [60, 40, 30, 24]
        [1, 1, 1]                 => [1, 1, 1]
        [9, 0, -2]                => [0, -18, 0]
        [0, -99, 0]               => [0, 0, 0]
        [3, 14, 9, 11, 11]        => [15246, 3267, 5082, 4158, 4158]
        [-8, 1, 5, 13, -1]        => [-65, 520, 104, 40, -520]
        [4, 7, 3, 6, 2, 14, 7, 5] => [123480, 70560, 164640, 82320, 246960, 35280, 70560, 98784]
*/


// the input is an array of Number-s
// the output must be an array of BigInt-s

function productSansN(numbers) {
    // your code

}

productSansN([1, 0])// [0n, 1n];
productSansN([1, 1, 1])// [1n, 1n, 1n];
productSansN([0, -99, 0])// [0n, 0n, 0n];
productSansN([9, 0, -2])// [0n, -18n, 0n];
productSansN([1, 2, 3, 4])// [24n, 12n, 8n, 6n];
productSansN([2, 3, 4, 5])// [60n, 40n, 30n, 24n];
productSansN([-8, 1, 5, 13, -1])// [-65n, 520n, 104n, 40n, -520n];
productSansN([3, 14, 9, 11, 11])// [15246n, 3267n, 5082n, 4158n, 4158n];
productSansN([4, 7, 3, 6, 2, 11, 14, 4, 7, 5])// [5433120n, 3104640n, 7244160n, 3622080n, 10866240n, 1975680n, 1552320n, 5433120n, 3104640n, 4346496n];