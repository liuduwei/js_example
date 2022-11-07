// ! for

for (;;) {
  doSomething();
}

for (; i < count; ) {
  console.log(i);
  i++;
}

// for-in
for (const propName in window) {
  document.write(propName);
} // squence dont.

for (const el of [2, 4, 6, 8]) {
  document.write(el);
}
//es 2018 for-await-of promise

// ! tag
// nest loop
start: for (let i = 0; i < count; i++) {
  console.log(i);
}

// ! with
// not recommand to use
