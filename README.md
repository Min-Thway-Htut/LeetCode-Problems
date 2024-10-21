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

### LeetCode 14
- The code finds the longest common prefix among a list of strings. It starts with the first string as the prefix, then iterates through the others, shortening the prefix if needed.
- If no common prefix is found, it returns an empty string; otherwise, it returns the longest common prefix.

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

- The mySqrt function calculates the square root of a non-negative integer x using binary search. It searches between 0 and x, narrowing down the range by comparing the square of the midpoint with x.
-  The loop continues until the closest integer square root is found and returned.
### LeetCode 70
- This code solves the "climbing stairs" problem using dynamic programming.
- It initializes an array dp where each element stores the number of ways to reach that step. The base cases are set for 1 and 2 steps.
- Then, it iterates from the 3rd step, calculating each value based on the previous two steps.
### LeetCode 118
- A simple if-else statement was used to solve this problem.
- However, please note that this solution only works for the numbers between 1 to 30.

### LeetCode 125
- The isPalindrome function checks if a given string s is a palindrome.
- It removes non-alphanumeric characters, converts the string to lowercase, and then compares it to its reversed version.
- It returns true if they match or if the string is a space; otherwise, it returns false.
### LeetCode 182
- Simply Write this command line " SELECT email FROM Person GROUP BY email HAVING COUNT(email) > 1; "
### LeetCode 193
- The command filters lines in file.txt matching phone number formats: XXX-XXX-XXXX and (XXX) XXX-XXXX using regex.
### LeetCode 195
- This command uses sed to print only the 10th line from file.txt. The -n option suppresses automatic printing, while 10p specifies to print the 10th line.
### LeetCode 217
### LeetCode 263
### LeetCode 441
### LeetCode 509
- The fib function calculates the Fibonacci number for a given input num using recursion. It handles base cases for num equal to 0, 1, or 2, returning 0 or 1 accordingly.
- For numbers greater than 2, it returns the sum of the two preceding Fibonacci numbers by recursively calling itself with num - 1 and num 2.
- The function is then tested by logging the Fibonacci values for 5 and 8, which are 5 and 21, respectively.

### LeetCode 511
- Simply write this command line " SELECT player_id, MIN(event_date) AS first_login FROM Activity GROUP BY player_id; "

### LeetCode 577
- Simply write this query statement " SELECT Employee.name, Bonus.bonus FROM Employee LEFT JOIN Bonus ON Employee.empId = Bonus.empId WHERE Bonus.bonus < 1000 OR Bonus.bonus is NULL; "

### LeetCode 584
- Simply write this MySQL query statement " SELECT name FROM Customer WHERE referee_id != 2 OR referee_id IS NULL; "
### LeetCode 596
- Simply write this command line " SELECT class FROM Courses GROUP BY class HAVING COUNT(student) >= 5; "

### LeetCode 620
- Simply write this command line " SELECT id, movie, description, rating FROM Cinema WHERE description != "boring" AND id % 2 != 0 ORDER BY rating DESC; "

### LeetCode 884

### LeetCode 1051
### LeetCode 1068
- Simply write this command line " SELECT Product.product_name, Sales.year, Sales.price FROM Sales INNER JOIN Product ON Sales.product_id = Product.product_id; "
### LeetCode 1075
### LeetCode 1108
### LeetCode 1185

- The problem is solved by Zellers Kongruenz algorithm. To better understand the algorithm, please refer to this resource https://www.geeksforgeeks.org/zellers-congruence-find-day-date/ .

### LeetCode 2278
### LeetCode 2619
### LeetCode 2621
### LeetCode 2667
### LeetCode 2726
### LeetCode 2727
### LeetCode 3136


## Medium

## Hard
