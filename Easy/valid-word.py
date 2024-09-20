class Solution:
    def isValid(self, word: str) -> bool:
        if len(word) < 3:
            return False

        has_vowel = False
        has_consonant = False

        vowels = set('aeiouAEIOU')
        allowed_chars = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')

        for char in word:
            if char in allowed_chars:
                if char in vowels:
                    has_vowel = True
                elif char.isalpha():
                    has_consonant = True
            else:
                return False

        return has_vowel and has_consonant