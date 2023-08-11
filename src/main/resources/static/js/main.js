/**
 *
 */

// 상점 modal 창 메소드
const modal = $('.modal');
const btnOpenPopup = $('.btn-open-popup');
const btnClosePopup = $('.btn-close-popup');

btnOpenPopup.on('click', () => {
	modal.css('display', 'block');
});

btnClosePopup.on('click', () => {
	modal.css('display','none');
});

// 상점 안에서 구매하기 버튼 누르면 나오는 modal 창 메소드
// ~를 구매하시겠습니까 알림창
const modal_buy_container = $('.modal_buy_container');
// 구매하기 버튼
const buy_btn_open_popup = $('.buy_btn_open_popup');

// 도구 상점에서 구매하기 버튼 누르면 나오는 modal 창
buy_btn_open_popup.on('click', () => {
	modal_buy_container.css('display', 'block');
	btnClosePopup.css('display', 'none');
});
// 알림창 닫기 버튼
const buy_btn_close_popup = $('.buy_btn_close_popup');
// 도구 상점 닫기 버튼
buy_btn_close_popup.on('click', () => {
	modal_buy_container.css('display','none');
});

// 구매하기 > 네 버튼
const check_yes = $('.check_yes');
// 구매하기 > 아니요 버튼
const check_no = $('.check_no');

check_yes.on('click', () =>{
	modal_final_check_container.css('display', 'block');
	modal_final_success.css('display', 'block');
	if(true){
		modal_final_success.text('구매가 완료되었습니다.');
		modal_buy_container.css('display', 'none');
	} else{
		modal_final_success.text('돈이 부족합니다.');
		modal_buy_container.css('display', 'none');
	}
});

check_no.on('click', ()=>{
	modal_buy_container.css('display', 'none');
});

const modal_final_check_container = $('.modal_final_check_container');
const modal_final_check = $('.modal_final_check');
const final_check = $('.final_check');

final_check.on('click', () => {
	modal_final_check_container.css('display', 'none');
});


// modal_final_check.on('click', () => {
//      modal_final_check_container.css('display', 'block');

//  });

const modal_final_success = $('.modal_final_success');


/*
check_yes.on('click', () => {

    // 유저의 소지한 돈 가져오기
    const userMoney = parseInt($('.modal_money').text().replace('소지한 돈 : ', '').replace('원', ''));

    // 클릭한 버튼 요소에 연결된 아이템의 가격 가져오기
    const itemPrice = parseInt($(this).closest('.item_button_container').siblings('.item_price').text().replace('가격 : ', '').replace('원', ''));

    if (userMoney >= itemPrice) {
        // 구매 성공 메시지
        check_text2.text("구매가 완료되었습니다.");
        check_yes.css('display', 'none');
        check_no.text("확인");

        // 유저의 돈에서 아이템 가격 차감
        const updatedMoney = userMoney - itemPrice;
        $('.modal_money').text('소지한 돈 : ' + updatedMoney + '원');

        // 여기에 구매 성공 시 추가로 처리할 로직을 작성할 수 있습니다.

    } else {
        // 구매 실패 메시지
        check_text2.html('돈이 부족하여 구매할 수 없습니다.');
        check_yes.css('display', 'none');
        check_no.text("확인");

        // 여기에 구매 실패 시 추가로 처리할 로직을 작성할 수 있습니다.
    }
});
*/


/*
check_no.on('click', (btn) => {
   // check_text2.innerHTML = '<%=idtod.getItem_name()%>를dddasdasdd 구매하시겠습니까?<br><br> 구매 후 남는 금액 :<%=udto.getMoney()%>';

    check_text2.html('<div><%=idtod.getItem_name()%>를 dddd구매하시겠습니까?<br><br> 구매 후 남는 금액 :<%=udto.getMoney()%></div>');

    console.log('작동');
    modal_buy_btn.css('display', 'none');
    close_btn.css('display', 'block');
    check_yes.css('display', 'block');
});
*/
/*
check_no.on('click', () => {
    // JSP에서 생성한 메시지와 데이터를 받아오는 부분
    const item_name = '<%=idtod.getItem_name()%>';
    const remaining_money = '<%=udto.getMoney()%>';

    // 메시지와 데이터를 JavaScript에서 조합하여 화면에 표시
    const message = item_name + '를 구매하시겠습니까?<br><br>구매 후 남는 금액: ' + remaining_money;

    // 화면에 메시지 표시
    check_text2.html(message);

    modal_buy_btn.css('display', 'none');
    close_btn.css('display', 'block');
    check_yes.css('display', 'block');
});
*/

// 구매하기 버튼 메소드

// buyMethods.on('click', () =>{
// 	const itemData = $(this).data('item');


// }