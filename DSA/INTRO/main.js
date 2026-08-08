
// remove duplicates

const removeDuplicates = (nums) => {
   
    let position = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > nums[position]) {
            position = position + 1;
            nums[position] = nums[i];

        }
    }

    return position + 1;


}

//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));


// remove element = leetcode(27)

var removeElement = function(nums, val) {
    let position = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[position] = nums[i];
            position = position + 1;
        }
    }

    return position;

}


//console.log(removeElement([3, 2, 2, 3], 3));

// reverse a string (leetcode 344)

var reverseString = function(s) {
    let length = s.length;
    let halfLength = Math.floor(length / 2);

    for(let i = 0; i < halfLength; i++) {
        let temp = s[i];
        s[i] = s[length-1-i];
        s[length-1-i] = temp;

    }



}


console.log(reverseString(["h","e","l","l","o"]));