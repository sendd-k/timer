let time = process.argv.slice(2);
time = time.filter(num => !isNaN(num))
time = time.filter(num => num >= 0)

time.forEach(time => setTimeout(() => {
  process.stdout.write('\x07');
}, time * 1000));
