
def remove_duplicates(nums):
    position = 0

    for i in range(len(nums)):
        if nums[i] > nums[position]:
            position += 1
            nums[position] = nums[i]


    return position + 1


nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
k = remove_duplicates(nums)

print(k)