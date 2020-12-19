const count = document.querySelector('.js-count');
console.log('??????')
console.log(count)


expireDate = new Date  /// 현재의 날짜 객체를 생성합니다. 
expireDate.setMonth(expireDate.getMonth()+6)  /// 현재 월에 6개월을 더합니다. 즉, 쿠키의 유효기간을 현재부터 6개월로 설정합니다. 
	
hitCt = eval(cookieVal("pageHit"))  /// 방문 카운트 변수이며 cookieVal 함수를 실행시킵니다. 
hitCt++  /// 방문 카운트를 1 높입니다. 
	
document.cookie = "pageHit="+hitCt+";expires=" + expireDate.toGMTString() /// 이곳에서 쿠키를 갱신합니다.   
	
function cookieVal(cookieName) {  
   thisCookie = document.cookie.split("; ")  /// 쿠키의 문자열 구조가 '쿠키명=쿠키값; expires=유효기간' 이기 때문에 먼저 세미콜론(;)으로 나눕니다.(split) 
	
   for (i=0; i<thisCookie.length; i++) { /// ; 으로 나눈 만큼 반복문을 실행합니다. 여기서는 2번을 반복합니다.   
        if (cookieName == thisCookie[i].split("=")[0]) {  /// 먼저 thisCookie[i].split("=")[0]은 '쿠키명=쿠키값' 구조에서 =으로 나눈 배열의 첫번째 값을 지칭합니다. 즉, 쿠키명이 되겠습니다. 
			clockTitle.innerText = thisCookie[i].split("=")[1]
             // return thisCookie[i].split("=")[1]  /// thisCookie[i].split("=")[1] 은 =으로 나눈 배열의 두번째 값, 즉, 쿠키값이 됩니다. 
       }   
 }   
 clockTitle.innerText = 0 
}   


function init() {
	cookieVal();
}
init();
