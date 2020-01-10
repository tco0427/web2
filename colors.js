var Body={
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links={
  setColor:function(color){
    var alist=document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
       alist[i].style.color=color;
        i=i+1;
    }
  }
}
function nightday(self){
  if(self.value=='Light mode'){
    self.value='Dark mode';
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('black');
  }else{
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value='Light mode';
    Links.setColor('powderblue');
  }
}
