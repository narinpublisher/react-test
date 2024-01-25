import { Outlet, Link } from "react-router-dom";
import './myStyle.css';

const Layout = () => {
	return (
		<section>
		   <nav>
			<ul id='menu'>
				<li><Link to='/' onClick= { () => go(0) }>홈화면</Link></li>
				<li><Link to='/branch' onClick= { () => go(1) }>가지에</Link></li>
				<li><Link to='/hope' onClick= { () => go(2) }>희망의 말</Link></li>
				<li><Link to='/eng' onClick= { () => go(3) }>새기어 놓고서</Link></li>
			</ul>
		   </nav>
		<Outlet />
		</section>
	);
}
function go ( num ) {	
	console.log ( num );
	let menu = document.querySelectorAll( 'nav li' );
	for ( let i = 0; i < menu.length; i++ ) {
			menu[i].style.border = 'none';
			menu[i].classList.remove ( 'act' );
	}
	let j;
	let txt;
	
	if ( num === 0 ) {
		j = 0; 
		txt = 'transparent'; //첫화면(home.js) 배경색은 투명
	}
	else if ( num === 1 ) {
		j = 1;
		txt = 'gold'; //branch.js 배경색은 살짝 어두운 노랑
	}
	
	else if ( num === 2 ) {		
		 j = 2;
		txt = "yellowgreen"; //hope.js 배경색은 연두
	}
	
	else if ( num === 3 ) {
		j = 3;
		txt = "pink";  //eng.js 배경색은 핑크
	}
	if ( j !== 0 ) {
		menu[j].style.border='2px dashed dodgerblue';  //클릭 이동된 페이지의 메뉴 테두리 디자인
		menu[j].classList.add('act');  //클릭 이동된 페이지의 메뉴 텍스트 디자인 (li의 하위 a에 클래스 추가.)
	}
	document.body.style.backgroundColor= txt; //클릭 이동된 페이지의 배경색 설정
}

export default Layout;