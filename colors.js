function nightdayHandler(self){
    var target=document.querySelector('body');
    if(self.value === 'night'){
        target.style.backgroundColor='black';
        target.style.color='white';
        self.value = 'day';

        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length){
            links[i].style.color = 'powderblue';
            i=i+1;
        }
    } else {
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'night';

        var links = document.querySelectorAll('a');
        var i = 0;
        while(i<links.length){
            links[i].style.color = 'blue';
            i=i+1;
        }
    }
}