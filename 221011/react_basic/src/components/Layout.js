function Header() {
  return (
    <>
      <h1>
        <strong>DCODELAB</strong><br/>
        <span>UI/UX DESIGN & DEVELOPMENT</span>
      </h1>
      <a href="#" className="menu">
        <i className='fas fa-bars'></i>
      </a>
    </>
  );
}
// return은 하나의 요소만 가능하므로 fragment <></> 감싸서 내보내기

export default Header;

/*
첫번째글자 대문자 필수

하나만 내보낼 경우 
export default A;

하나 받을 경우
import A from './components/Layout';


여러개 내보낼 경우 객체로 리턴
export { A, B };

받아올때도 객체로 받아옴
import { A, B } from './components/Layout';

받아온 요소
<A />
 */
