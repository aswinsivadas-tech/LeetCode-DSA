var numTilings = function(n) {
    const MOD = 1000000007;

    if (n <= 2) return n;

    let a = 1; // dp[i-3]
    let b = 1; // dp[i-2]
    let c = 2; // dp[i-1]

    for (let i = 3; i <= n; i++) {
        let d = (2 * c + a) % MOD;
        a = b;
        b = c;
        c = d;
    }

    return c;
};