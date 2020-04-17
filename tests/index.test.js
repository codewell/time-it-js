const timeItDev = require("../lib/dev.js");
const timeItProd = require("../lib/prod");

const syncFunc = (val) => val + 1;

const asyncFunc = (val) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(syncFunc(val));
    }, 1000);
  });

const brokenFunc = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(reject(new Error(" :( ")));
    }, 1000);
  });

//
// Test the sync func
//
// Test the sync func
test("Synchronous function (dev):", () => {
  return timeItDev(
    syncFunc,
    "Test 1"
  )(1).then((result) => {
    expect(result).toBe(2);
  });
});

test("Synchronous function (prod):", () => {
  return timeItProd(
    syncFunc,
    "Test 2"
  )(1).then((result) => {
    expect(result).toBe(2);
  });
});

//
// Async functions
//

test("Asynchronous function (dev):", () => {
  return timeItDev(
    asyncFunc,
    "Test 3"
  )(1).then((result) => {
    expect(result).toBe(2);
  });
});

test("Asynchronous function (prod):", () => {
  return timeItProd(
    asyncFunc,
    "Test 4"
  )(1).then((result) => {
    expect(result).toBe(2);
  });
});

//
// Failures
//
test("Throw error (dev)", async () => {
  await expect(timeItDev(brokenFunc, "Test 5")()).rejects.toThrow();
});
test("Throw error (prod", async () => {
  await expect(timeItProd(brokenFunc, "Test 6")()).rejects.toThrow();
});
