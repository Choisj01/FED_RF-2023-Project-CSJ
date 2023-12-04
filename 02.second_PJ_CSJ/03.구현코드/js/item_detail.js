// 아이템 상세페이지 클릭시 상세정보 열고 닫기 

// 정보 내용 클릭시 열렸다가 닫히기!
$(()=>{
    const infoBox = $('.info-add-inner>ul>li');
    const delReturnInfo = $('.info-add-inner2>ul');

    infoBox.hide();
    delReturnInfo.hide();

    $('.info-add-ibox1').click(e=>{
        e.preventDefault();
        infoBox.slideToggle(300);
    });

    $('.info-add-ibox2').click(e=>{
        e.preventDefault();
        delReturnInfo.slideToggle(300);
    })
    
});