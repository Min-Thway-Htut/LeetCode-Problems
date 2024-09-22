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
- The code defines a function called mySqrt that finds the largest whole number whose square is less than or equal to a given non-negative number 
𝑥
x. If 
𝑥
x is less than 2, it simply returns 
𝑥
x.
- It uses a method that repeatedly narrows down the range of possible answers by checking the middle point of the current range. If the middle point squared is equal to 
𝑥
x, it returns that point.
- If it's too low, it looks higher, and if it's too high, it looks lower. Once it finishes searching, it returns the largest number that meets the condition.

### LeetCode 70

- The code defines a function called climbStairs that calculates the number of ways to reach the top of a staircase with 
𝑛
n steps, where you can take either one or two steps at a time.
- If 
𝑛
n is 1 or 2, it directly returns 
𝑛
n because there are that many ways to climb. It creates an array dp to store the number of ways to reach each step. The first two steps are initialized with 1 and 2 ways, respectively. Then, it uses a loop to fill in the array for steps from 3 to 
𝑛
n by adding the ways to reach the two previous steps.
- Finally, it returns the number of ways to reach the 
𝑛
nth step.

### LeetCode 118
- A simple if-else statement was used to solve this problem.
- However, please note that this solution only works for the numbers between 1 to 30.

### LeetCode 193
- The command filters lines in file.txt matching phone number formats: XXX-XXX-XXXX and (XXX) XXX-XXXX using regex.
### LeetCode 195
- This command uses sed to print only the 10th line from file.txt. The -n option suppresses automatic printing, while 10p specifies to print the 10th line.
### LeetCode 217

- The containsDuplicate function checks if an array nums contains any duplicate numbers. It uses a Set called seen to keep track of numbers encountered.
-  As it iterates through each number in nums, it checks if the number is already in the Set.
-   If it is, the function returns true, indicating a duplicate is found. If not, it adds the number to the Set.
-   If the loop completes without finding duplicates, it returns false.
### LeetCode 441

- The `arrangeCoins` function determines how many complete rows of coins can be formed with a given number \( n \). It initializes a `rows` counter and starts with \( i = 1 \) (the number of coins needed for the first row). In a loop, it checks if there are enough coins left to create a new row.
- If so, it subtracts \( i \) from \( n \), increments the row count, and increases \( i \) for the next row.
- The loop continues until there aren't enough coins to form a new row, and finally, it returns the total number of complete rows.

### LeetCode 509
- The fib function calculates the Fibonacci number for a given input num using recursion. It handles base cases for num equal to 0, 1, or 2, returning 0 or 1 accordingly.
- For numbers greater than 2, it returns the sum of the two preceding Fibonacci numbers by recursively calling itself with num - 1 and num 2.
- The function is then tested by logging the Fibonacci values for 5 and 8, which are 5 and 21, respectively.
### LeetCode 1185

- The problem is solved by Zellers Kongruenz algorithm. To better understand the algorithm, please refer to this resource https://www.geeksforgeeks.org/zellers-congruence-find-day-date/ .

### LeetCode 2235
- The sum function takes two numbers, num1 and num2, as inputs and calculates their sum.
- It stores the result in the variable total and then returns that value.
- The function is typed in TypeScript, specifying that both inputs and the return value are numbers.
### LeetCode 2236


- The problem is simply based on the Binary Search Tree Alogrithm.
- First and foremost, we check if the elements(parent and children) exist. If so, check whether the value of parent is qual to that of the sum of children nodes or not.

### LeetCode 2278

- Count how many times a targeted letter contains in the given word using count() method.
  
### LeetCode 3136

- The isValid method checks if a given string word meets specific criteria. It returns False if the word is shorter than 3 characters. It then initializes two flags, has_vowel and has_consonant, to track the presence of vowels and consonants.
-  The method defines sets for valid characters (letters and digits) and vowels. It iterates through each character in the word, checking if it's in the allowed set. If it is a vowel, it sets has_vowel to True; if it's a consonant (any letter that isn't a vowel), it sets has_consonant to True.
-  If any character is invalid, it returns False. Finally, it returns True only if both flags are True, indicating the word contains at least one vowel and one consonant.
## Medium

## Hard
