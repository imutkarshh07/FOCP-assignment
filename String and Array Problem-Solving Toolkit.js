
//Assignment 2: String and Array Problem-Solving Toolkit



// 1. Reverse a string without using reverse()

/*
Approach:
We start from the last character of the string and move towards
the first character using a for loop. Each character is added
to a new string called res. Finally, we return the reversed string.
*/

function reverseString(str) {
    let res = "";

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }

    return res;
}


// 2. Check whether a string is a palindrome

/*
Approach:
First, we reverse the given string using reverseString().
Then, we compare both strings. If they are equal, we return true;
otherwise, we return false.
*/

function isPalindrome(str) {
    let rev = reverseString(str);
    return str === rev;
}


// 3. Count vowels and consonants

/*
Approach:
We first convert the entire string into lowercase to make checking
easier. Then, we visit each character and check whether it is an
alphabet. If it is a vowel, we increase vow; otherwise, we increase con.
Spaces, numbers and special characters are ignored.
*/

function countVC(str) {
    let vow = 0;
    let con = 0;
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch >= "a" && ch <= "z") {
            if ("aeiou".includes(ch)) {
                vow++;
            } else {
                con++;
            }
        }
    }

    return { vow, con };
}


// 4. Find the second-largest distinct number

/*
Approach:
We maintain two variables, max and sec, to store the largest
and second-largest numbers. While traversing the array, if we find
a number greater than max, the previous max becomes sec.
Otherwise, we update sec if the current number is smaller than max
but greater than sec. Duplicate largest values are ignored.
*/

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let max = arr[0];
    let sec = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            sec = max;
            max = arr[i];
        } else if (arr[i] < max) {
            if (sec === null || arr[i] > sec) {
                sec = arr[i];
            }
        }
    }

    return sec;
}


// 5. Remove duplicates without using Set

/*
Approach:
We create an empty array called res to store unique elements.
For every element in the original array, we check whether it
already exists in res using another loop. If it is not found,
we add it to res. Finally, we return the array without duplicates.
*/

function removeDuplicates(arr) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < res.length; j++) {
            if (arr[i] === res[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            res[res.length] = arr[i];
        }
    }

    return res;
}


// 6. Find the sum of all even numbers

/*
Approach:
We initialize sum with zero and traverse the entire array.
For every element, we use the modulus operator (%) to check
whether it is divisible by 2. If the remainder is zero, the
number is even and gets added to sum. Finally, we return sum.
*/

function sumEven(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }

    return sum;
}


// 7. Find the frequency of a given element

/*
Approach:
Frequency means the number of times an element appears in an array.
We initialize count with zero and traverse the array using a loop.
Whenever an element matches the given number, we increase count.
Finally, we return the total count.
*/

function frequency(arr, num) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++;
        }
    }

    return count;
}


// 8. Check whether two strings are anagrams

/*
Approach:
Anagrams are two words that contain the same characters
with the same frequency but in a different order.
First, we convert both strings to lowercase and compare their lengths.
Then, we increase character counts for the first string and decrease
them for the second string. If every count becomes zero,
both strings are anagrams.
*/

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let count = {};

    for (let i = 0; i < str1.length; i++) {
        count[str1[i]] = (count[str1[i]] || 0) + 1;
        count[str2[i]] = (count[str2[i]] || 0) - 1;
    }

    for (let key in count) {
        if (count[key] !== 0) {
            return false;
        }
    }

    return true;
}


// 9. Move all zeros to the end

/*
Approach:
We create an empty array called res and a variable zeros.
While traversing the original array, we store non-zero elements
in res and count the zeros separately. After the loop, we add
all the zeros to the end of res and return the updated array.
*/

function moveZeros(arr) {
    let res = [];
    let zeros = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else {
            res[res.length] = arr[i];
        }
    }

    for (let i = 0; i < zeros; i++) {
        res[res.length] = 0;
    }

    return res;
}


//Calls

console.log(reverseString("hello"));
console.log(isPalindrome("madam"));
console.log(countVC("Hello World"));
console.log(secondLargest([10, 5, 20, 8, 20]));
console.log(removeDuplicates([1, 2, 2, 3, 1]));
console.log(sumEven([1, 2, 3, 4, 6]));
console.log(frequency([1, 2, 2, 3, 2], 2));
console.log(areAnagrams("listen", "silent"));
console.log(moveZeros([0, 1, 0, 3, 12]));
