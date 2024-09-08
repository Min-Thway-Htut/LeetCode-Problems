function mySqrt(x) {
    if (x < 2) {
        return x;
    }

    let left = 0;
    let right = x;  // 8   0,1,2,3,4,5,6,7,8
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);  // mid === 4
        // mid * mid === 16
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}