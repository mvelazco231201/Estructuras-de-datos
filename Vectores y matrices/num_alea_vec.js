var i=0, c=0; n=0, num=0, par=0, numcomp=0;
var vec = new Array(20);
console.clear();

for (vec[c]=0;vec[c]<=20;vec[c]++)
{
    vec[c]=Math.floor(Math.random()*100);
}
/*for (c=0;c<20;c++)
{
    console.log(c.toString()," "+vec[c]);
}*/
if(vec[c]%2==0)
{
    par+=vec[c];
    n++;
}

if(vec[c]>=15 && vec[c]<=33)
{
    numcomp+=vec[c];
    num++;
}
console.log(par/n++);
console.log(numcomp/num++);
