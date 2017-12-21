const next = () => {
  console.log('hello world!!!');

  setTimeout(next, 2000);
};

next();
