var checkTree = function(root) {
    if(root && root.left && root.right){
        return root.val === root.left.val + root.right.val
    }  

    return false;
};