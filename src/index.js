// Function that times the execution of another funciton
// Usage timeIt(foo, "Description of execution")(arg1, arg2, ...)
const timeIt = (func, description) => async (...args) => {
  console.time(description);
  try {
    return await func(...args);
  } catch (error) {
    throw error;
  } finally {
    console.timeEnd(description);
  }
};

export default timeIt;
