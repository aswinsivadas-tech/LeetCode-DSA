var debounce = function(fn, t) {
    let timer = null; // stores timeout id

    return function(...args) {
        // cancel previous call
        if (timer !== null) {
            clearTimeout(timer);
        }

        // schedule new call
        timer = setTimeout(() => {
            fn(...args);
        }, t);
    };
};
