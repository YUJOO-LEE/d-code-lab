function Panels(props) {
  const picImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.txt}.jpg)`};
  const rotatePanel = {transform: `rotate(${props.deg * props.num}deg) translateY(-100vh)`};
  
  return (
    <article style={rotatePanel}>
      <div className='inner'>
        <div className='pic' style={picImg}>
          <div className='dot'></div>
        </div>
        <div className='txt'>
          <h2 onClick={clickEvent}>{props.txt}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </article>
  );
}

function clickEvent(e) {
  console.log(e.target.innerText)
}

export default Panels;
