function singleNumber(nums){
    let count = 0;
    for(num in nums){
        count ^= nums;
    }
    return count;
}