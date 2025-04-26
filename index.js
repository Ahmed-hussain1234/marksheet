function result()
{
    var name = document.getElementById('name').value;
    var sub1 = parseInt(document.getElementById('sub1').value);
    var sub2 = parseInt(document.getElementById('sub2').value);
    var sub3 = parseInt(document.getElementById('sub3').value);
    var totalmark = 300;
    var obtmark = sub1 + sub2 + sub3;
    console.log(obtmark)
}