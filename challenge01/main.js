async function main() {
  const response = await fetch('https://codember.dev/users.txt');
  const data = await response.text();
  const separar = data.split('\n');
  let agrupar = [];
  const result = [];
  separar.forEach((item) => {
    if (item !== '') {
      agrupar.push(item.split(' '));
    } else {
      result.push(agrupar.flat());
      agrupar = [];
    }
  });
  const union = [];
  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    element.forEach((item) => {
      agrupar.push(item.split(':'));
    });
    union.push(Object.fromEntries(agrupar));
    agrupar = [];
  }
  let count = 0;
  const res = union.map((user) => {
    if (user.usr && user.psw && user.eme && user.age && user.loc && user.fll) {
      count++;
      return user;
    }
  });
  console.log(count);
  console.log(res[210]);
}
main();
