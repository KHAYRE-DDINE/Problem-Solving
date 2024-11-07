/*
    Given an array/list [] of integers , 
    Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
*/

/* Example */
/*
    productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}    
                                Explanation:
    The first element 180 is the product of all array's elements except the first element 10

    The second element 600 is the product of all array's elements except the second element 3

    The Third element 360 is the product of all array's elements except the third element 5

    The Fourth element 300 is the product of all array's elements except the fourth element 6

    Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/

function productArray(numbers) {
    //your code here
    let newArray = []
    let mul = 1;
    for (let index = 0; index < numbers.length; index++) {
        mul *= numbers[index]
        newArray.push(mul)
    }
    for (const iter in numbers) {
        newArray[iter] = mul
    }


    let newProduct = numbers.map((e, i) => {
        return newArray[i] / e
    })
    return console.log(newProduct)
}

productArray([12, 20]) // [20, 12]
productArray([3, 27, 4, 2]) // [216, 24, 162, 324]
productArray([13, 10, 5, 2, 9]) // [900, 1170, 2340, 5850, 1300]