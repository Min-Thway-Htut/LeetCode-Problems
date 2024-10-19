function uncommonFromSentences(s1: string, s2: string): string[] {
    // Split the sentences into arrays of words
    let words1: string[] = s1.split(' ');
    let words2: string[] = s2.split(' ');
    
    // Combine the two word arrays
    let combinedWords: string[] = [...words1, ...words2];
    
    // Create a frequency map to count occurrences of each word
    let wordCount: { [key: string]: number } = {};
    
    combinedWords.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    // Find the words that appear exactly once
    let uncommonWords: string[] = [];
    
    for (let word in wordCount) {
        if (wordCount[word] === 1) {
            uncommonWords.push(word);
        }
    }
    
    return uncommonWords;
}