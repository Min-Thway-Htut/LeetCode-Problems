import math

class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        count = s.count(letter)
        final_result = (count / len(s)) * 100
        return math.floor(final_result)