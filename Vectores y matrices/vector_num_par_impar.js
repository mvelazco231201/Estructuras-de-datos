var c=0; conID=0, conDI=6;
var vec = new Array(6);
console.clear();

for (var c=0;c<=5;c++)
{
    vec[c]=Math.floor(Math.random()*100)+1;
}

for(var j=0;j<=5;j++)
{
if(vec[j]%2==0)
{
    vec[conID]=vec[j];
    conID++;
}
else
{
vec[conDI]=vec[j];
conDI--;
}
console.log(vec[j]);
}
