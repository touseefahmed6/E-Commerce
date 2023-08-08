      let incre=document.getElementById('increment');
      let decre=document.getElementById('decrement');
      let num=document.getElementById('quantity');
      let Total=document.getElementById('sbTotal');
      let save=document.getElementById('saving');
      let delivery=document.getElementById('del');
      let Rs=document.getElementById('rs');
      let TL=document.getElementById('TL');
      incre.addEventListener('click',()=>{
        let currQ=parseInt(num.value);
        currQ++;
        num.value=currQ;
        let sbT=809*num.value;
        Total.innerHTML=sbT;
        let sv=90*num.value;
        save.innerHTML=sv;
        delivery.innerHTML=sbT;
        Rs.innerHTML=sv;
        TL.innerHTML=sbT;
      });
      decre.addEventListener('click',()=>{
        let currQ=parseInt(num.value);
        currQ--;
        currQ=Math.max(currQ,1);
        num.value=currQ;
        let sbT=809*num.value;
        Total.innerHTML=sbT;
        let sv=90*num.value;
        save.innerHTML=sv;
        delivery.innerHTML=sbT;
        Rs.innerHTML=sv;
        TL.innerHTML=sbT;
      });
      incre.addEventListener('click',()=>{

      })

