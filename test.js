const CircuitBreaker = require('./circuitBreaker');

const unstableRequest = () => {
	return new Promise((resolve, reject) => {
		if (Math.random() > .6) {
			resolve({
				status: 200,
				data: "success"
			})
		} else {
			reject({
				status: 500,
				data: "failed"
			})
		}
	})
}

const breaker = new CircuitBreaker(unstableRequest);

setInterval(() => {
	breaker
		.fire()
		.then(console.log)
		.catch(console.error)
}, 1000)
