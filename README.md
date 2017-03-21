# Node Poxy latency tester

This command line tool helps you to create a proxy that adds adds a latency between two services. This is useful for testing purposes and simulations.

## Installation

via `npm`:

```bash
npm install node-proxy-latency-tester
```

## Usage

```
node-proxy-latency-tester [proxyPort] [servicePort] [latency_ms]
```

Let's say that you have a service running on `localhost:8080` and you can add a latency of 300 ms without changing the service. You can easily accomplish this with:

```bash
node-proxy-latency-tester 8081 8080 300
```

Now you can use your service on port `8081`.
