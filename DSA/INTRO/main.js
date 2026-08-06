
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
