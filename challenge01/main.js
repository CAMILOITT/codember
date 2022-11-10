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
  const res = union.filter(
    (user) =>
      user.usr && user.psw && user.eme && user.age && user.loc && user.fll
  );
  console.log(`submit ${res.length}${res[res.length - 1].usr}`);
}

main();
