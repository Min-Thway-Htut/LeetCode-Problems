# Solutions to LeetCode Problems
I've been actively solving LeetCode problems and sharing my knowledge and solutions. You can find detailed explanations of my approaches in this repository.
## Easy
### LeetCode 1
- The code efficiently solves the two-sum problem by using a hash map to store elements and their indices.
-  It iterates through the array, calculates complements, and checks if they exist in the hash map.
-  If a match is found, it returns the indices of the two elements.

### LeetCode 9
- The code checks if a number is a palindrome by converting it to a string, reversing the string, and comparing it to the original string.
- If they match, the number is a palindrome.   


### LeetCode 27
- First of all, try to loop over the array and check if the elements in the arrary are equal to the input value or not. 
- If we find that they are equal, remove the duplicate number using splice() method.

### LeetCode 35
- This problem was solved by using for loop and if else statement.
- As a first step, we need to check if the target value is less than the very first value in the array. If it is true, we shift the index of target value to the very first place which is zero. 
- Similary, it the target value is greater than the last item in the array, we shift the idex of target value to the last place in the array. 
- If these two cases are not true, we simply use for loop to check if there were any vlaue in the array matching the target value. If there are matching value, the program would simply return the index of the current value. 
- Finally, if the value of the target is equal to the value of the difference 1 and the the value in the item, 
the final outcome will be current index - 1. The same will be true with increment of one.

### LeetCode 58
- It first removes leading and trailing whitespace, then splits the string into words.
- It then extracts the last word from the array and returns its length.

### LeetCode 66
- The code efficiently adds 1 to a given array of digits representing a number. It starts from the last digit and iteratively adds 1 until it encounters a digit less than 9.
- If all digits are 9, a new digit is added at the beginning.

### LeetCode 69

### LeetCode 70

### LeetCode 118
- A simple if-else statement was used to solve this problem.
- However, please note that this solution only works for the numbers between 1 to 30. 
### LeetCode 217
### LeetCode 441
### LeetCode 509

### LeetCode 1185

- The problem is solved by Zellers Kongruenz algorithm. To better understand the algorithm, please refer to this resource https://www.geeksforgeeks.org/zellers-congruence-find-day-date/ .

### LeetCode 2278


### LeetCode 3136


## Medium

### LeetCode 192

- Simply use this line of code tr -s ' ' '\n' < words.txt | sort | uniq -c | sort -nr | awk '{print $2, $1}' to solve the problem
## Hard
