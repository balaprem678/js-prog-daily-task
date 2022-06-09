let p;
const prime = [1,2];
n = 300;
for (i = 3;i<n;i=i+2)
{
  p = true;
    for (j=1;j < prime.length;j++)
    {
      if(i % prime[j] == 0)
      {
        p = false;
        break;
      }
    }
    if(p)
    {
      prime[prime.length] = i
    }
}
console.log(prime);