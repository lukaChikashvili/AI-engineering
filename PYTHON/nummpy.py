import numpy as np

# slicing numpy arrays
np1 = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])

print(np1[1:5])  # [2 3 4 5]
print(np1[3:])   # [4 5 6 7 8 9] dont specify the end

#steps
print(np1[1:5:2])   # every other element
print(np1[::2])  # steps to entire array





