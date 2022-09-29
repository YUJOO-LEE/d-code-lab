const tab = document.querySelector('#tab');
const dts = tab.querySelectorAll('dt');
const dds = tab.querySelectorAll('dd');
const dtsA = tab.querySelectorAll('dt>a');


dtsA.forEach((a, index)=>{
  a.addEventListener('focusin', ()=>{
    // 포커싱 되었을 때(마우스, 키보드)

    activation(index, dts);
    activation(index, dds);
  })
})
dts.forEach((a, index)=>{
  a.addEventListener('click', (e)=>{
    // 포커싱 되었을 때(마우스, 키보드)
    e.preventDefault();


    activation(index, dts);
    activation(index, dds);
  })
})

function activation(index, arr){
  for (let el of arr){
    el.classList.remove('on');
  }
  arr[index].classList.add('on');
}