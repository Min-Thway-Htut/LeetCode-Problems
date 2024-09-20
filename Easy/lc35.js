var searchInsert = function(nums, target) {
    if(target < nums[0]){
     return 0;
    }else if(target > nums[nums.length - 1]){
     return nums.length;
    }else{
     for(let i = 0; i < nums.length; i++){
         if(target === nums[i]){
             return i;
         }else if(nums[i] + 1 === target){
             return i + 1;
         }else if(nums[i] - 1 === target){
             return i;
         }
     }
    }
    }