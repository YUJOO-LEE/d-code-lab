class Tab{
  constructor(){
    this.init();
    this.bindingEvent();
  }
  
  init() {
    this.main = document.querySelector('main');
    this.btns = this.main.querySelectorAll('nav ul li');
    this.boxes = this.main.querySelectorAll('section article');
    this.speed = this.convertSpeed(this.boxes[0]);
    this.clickable = true;
  }

  bindingEvent(){
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
    
        const isOn = e.currentTarget.classList.contains('on');
        if (isOn || !this.clickable) return;
    
        this.clickable = false;
        this.activation(index, this.btns);
        this.activation(index, this.boxes);
    
        new Anim(this.main, {
          prop: 'height',
          value: this.matchHeight(index),
          duration: this.speed
        })
      })
    })
  }

  matchHeight(index) {
    const ht = getComputedStyle(this.boxes[index]).height;
    return parseInt(ht);
  }
  
  convertSpeed(el) {
    const speed = getComputedStyle(el).transitionDuration;
    return parseFloat(speed) * 1000;
  }
  
  activation(index, arr) {
    for (let el of arr) {
      el.classList.remove('on');
    }
    arr[index].classList.add('on');
  
    setTimeout(()=>{
      this.clickable = true;
    }, this.speed)
  }
  
}

/* 
스타일 값을 가지고 오는 방법

1. getComputedStyle() 메서드
외부파일의 스타일 값

2. Element.style 속성
HTML 자체 지정된 스타일
 */


  /* 
  setTimeout(함수, 시간, 함수로 넘길 파라미터)
  함수를 지정한 시간 이후에 실행
  */

  /*

  객체 리터럴

  let start= {
    data: 20,
    time: 15,
  }

  사용하는 생성자 함수
    class Start{
    }
    new Start();
  */