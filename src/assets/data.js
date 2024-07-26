const faqData = [
    {
        question: "What is the main difference between Axios and Fetch?",
        answer: "The main difference is that Axios is a third-party library with a more feature-rich API, while Fetch is a built-in JavaScript API. Axios automatically transforms JSON data, handles timeouts, and provides easy-to-use methods for making HTTP requests. Fetch, on the other hand, requires more manual handling for these features."
    },
    {
        question: "Which is easier to use for handling requests and responses, Axios or Fetch?",
        answer: "Axios is generally considered easier to use because it handles JSON data automatically, whereas Fetch requires you to manually parse JSON responses. Axios also has simpler syntax for making requests and setting headers, and it provides interceptors to modify requests or responses."
    },
    {
        question: "How do you handle errors in Axios compared to Fetch?",
        answer: "In Axios, error handling is straightforward as it automatically throws errors for HTTP status codes that indicate failure, which you can catch using try-catch blocks or `.catch()` methods. Fetch does not throw errors for HTTP errors by default, so you need to manually check the response status and throw an error if the status indicates a failure."
    },
    {
        question: "Can you use Axios and Fetch in the same project?",
        answer: "Yes, you can use both Axios and Fetch in the same project. However, it is generally better to stick to one to maintain consistency in your codebase. Using one method throughout your project can also make it easier to handle requests, responses, and errors uniformly."
    },
    {
        question: "Is there a performance difference between Axios and Fetch?",
        answer: "Both Axios and Fetch are performant and suitable for most applications. Fetch is built into modern browsers, so it does not require any additional dependencies, which can be an advantage in terms of performance and bundle size. Axios offers additional features that can make development easier, but it comes with the overhead of an external library."
    }
];

export default faqData;
