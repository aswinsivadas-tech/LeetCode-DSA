var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(value => {
                    results[i] = value;   // keep order
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error); // reject immediately on first failure
                });
        }
    });
};
