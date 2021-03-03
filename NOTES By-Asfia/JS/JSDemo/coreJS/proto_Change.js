function Cat(name,color)
{
this.name=name,
this.color=color
}
Cat.prototype.age=4;
var fluffy=new Cat('Fluffy','White');
var muffin=new Cat('Muffin','Grey');
Cat.prototype={age:5};

var snowbell=new Cat('SnowBell','white');
console.log(snowbell.age);
console.log(fluffy.age);
console.log(muffin.age);

