function fixPackages(packages: string): string {
  const stack: string[] = [];
  let current = '';

  for (const char of packages) {
      if (char === '(') {
          stack.push(current);
          current = '';
      } else if (char === ')') {
          current = current.split('').reverse().join('');
          current = stack.pop() + current;
      } else {
          current += char;
      }
  }

  return current;
}
const string = 'abcd';
const packages = fixPackages(string);
console.log(packages);
