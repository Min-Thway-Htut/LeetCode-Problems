function arrangeCoins(n: number): number {
    let rows = 0;
    let i = 1;

    while (n >= i) {
        n -= i;  
        rows++;  
        i++;   
    }

    return rows; 
};