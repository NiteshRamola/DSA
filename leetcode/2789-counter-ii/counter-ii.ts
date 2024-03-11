type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    const val = init;
    return {
        increment: () => {
            return ++init;
        },
        decrement: () => {
            return --init;
        },
        reset: () => {
            init = val;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */