window.basic = {
    "title": "김병선 ♥ 정다정 결혼합니다!",
    "groom": {
        "name": "김병선",
        "first_name": "병선",
        "phone": "01000000000",
        "bank": "카카오뱅크",
        "account": "카카오뱅크 3333-17-2209693",
        "parents": {
            "father": {
                "name": "김용표",
                "phone": "01000000000",
                "bank": "농협",
                "account": "농협 601104-52-154788"
            },
            "mother": {
                "name": "이향희",
                "phone": "01000000000",
                "bank": "농협",
                "account": "농협 601104-56-158848"
            }
        }
    },
    "bride": {
        "name": "정다정",
        "first_name": "다정",
        "phone": "01000000000",
        "bank": "우리",
        "account": "우리 1002-434-605391",
        "parents": {
            "father": {
                "name": "정영기",
                "phone": "01000000000",
                "bank": "우리",
                "account": "우리 123-07-049003"
            },
            "mother": {
                "name": "이애순",
                "phone": "01000000000",
                "bank": "우리",
                "account": "우리 449-07-001762"
            }
        }
    },
    "date": {
        "year": "2026",
        "month": "05",
        "day": "23",
        "hour": "15",
        "minute": "00"
    },
    "honeymoon":{
        "location": "스페인",
        "days": 14
    },
    "location": {
        "name": "JS웨딩컨벤션",
        "address": "광주광역시 서구 상무자유로 27-1",
        "x": "35.15353705",
        "y": "126.83667438"
    },
    "link": "https://kindsunny.github.io/",
    "kakao": {
        "description": "2026.05.23. 토요일 오후 3:00\n광주 JS웨딩컨벤션 단독홀",
        "button": "모바일 청첩장 보기",
        "img": "https://github.com/kindsunny/kindsunny.github.io/blob/main/img/gallery/8.jpeg?raw=true"
    },
    "info": {
        "description":"2026.05.23.(토) 오후 3:00 JS웨딩컨벤션 단독홀",
        "greeting" : "함께 있을 때 가장 나다운 모습이 되고\n함께 있을 때 더 큰 미래를 꿈꾸게 하는 서로를 만나\n인생의 새로운 출발을 하려 합니다.\n저희 두 사람의 새로운 시작을\n축복해주시면 감사하겠습니다.",
        //"greeting": "김병선과 정다정이 만나 결혼을 합니다.\n병선이는 키도 크고 잘 생기고 성격도 착하고\n선견지명도 뛰어나 다정이를 선택했습니다.\n정말 탁월한 선택이죠\n다정이도 키가 크고 예쁘죠\n정말이지, 두 사람의 아이는 190",
        "wedding_date": "2026.05.23 토요일 오후 3:00",
        "wedding_location": "JS웨딩컨벤션 단독홀",
        "wedding_address": "광주광역시 서구 상무자유로 27-1(치평동 886-2)<br>JS웨딩컨벤션"
    }
}
let scrollTop;
const holidays = [5,25];
const numOfImages = 25;
const basicNumbers = 9;
const excludeNumbers = [];
const excludeNumbers2 = [];

$(document).ready(function (){

    setText();

    new WOW().init();

    $('.popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
                // ✅ iOS 제스처 줌 방지
                  document.addEventListener('gesturestart', preventGesture, { passive: false });
                  document.addEventListener('gesturechange', preventGesture, { passive: false });
                  document.addEventListener('gestureend', preventGesture, { passive: false });
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });

    //setGallery('gallery-html');

    setGallery('gallery-html2');

    // let msnry = $('#grid-container').masonry({
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     gutter : 20,
    //     transitionDuration: 0
    // });

    // imagesLoaded( '#grid-container' ).on( 'progress', function() {
    //     $('#grid-container').masonry('layout');
    // });

    lightbox.option({
        'disableScrolling': true,
        'resizeDuration': 1,
        'fadeDuration': 1,
        'fadeDuration': 1,
        'wrapAround': true,
        'alwaysShowNavOnTouchDevices' : true,
        'albumLabel':'%1 / %2',
    })

    // $('.grid-item').magnificPopup({
    //     fixedContentPos: true,
    //     delegate: 'img',
    //     type:'image',
    //     gallery: {
    //         enabled: true,
    //         tCounter: '%curr% / %total%'
    //     },
    //     callbacks: {
    //         beforeOpen: function () {
    //             $('body').css("overflow", "hidden");
    //             $('body').css("touch-action", "none");
    //         },
    //         open: function () {
    //             $('body').css("overflow", "hidden");
    //             $('body').css("touch-action", "none");
    //             //$('figure>img').parent().bind('contextmenu', function(e){ return false; });
    //         },
    //         // imageLoadComplete: function () {
    //         //     $('body').css("overflow", "hidden");
    //         //     $('body').css("touch-action", "none");
    //         // },
    //         close: function() {
    //             $('body').css("overflow", "");
    //             $('body').css("touch-action", "pan-y");
    //         },
    //         elementParse: function(qw) {
    //             qw.src = qw.el.attr('src');
    //         }
    //     }
    // });

    $('#map-popup').magnificPopup({
        items: [
            {
             //   src: './img/map/map.jpg'
            }
        ],
        gallery: {
            enabled: true,
            tCounter: '%curr% / %total%'
        },
        type: 'image',
        callbacks: {
            beforeOpen: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            open: function () {
                $('body').css("overflow", "hidden");
                $('body').css("touch-action", "none");
            },
            close: function() {
                $('body').css("overflow", "");
                $('body').css("touch-action", "pan-y");
            },
        }
    });


    drawCalendar(window.basic.date);
    loadCountdown(window.basic.date,window.basic.honeymoon);

    getKakaoMap(window.basic.location);

});

function setText(){

    $('#txt-title').html(window.basic.title);
    $('.txt-groom').html(window.basic.groom.name);
    $('.txt-groom-first').html(window.basic.groom.first_name);
    $('.txt-groom-father').html(window.basic.groom.parents.father.name);
    $('.txt-groom-mother').html(window.basic.groom.parents.mother.name);
    $('.txt-bride').html(window.basic.bride.name);
    $('.txt-bride-first').html(window.basic.bride.first_name);
    $('.txt-bride-father').html(window.basic.bride.parents.father.name);
    $('.txt-bride-mother').html(window.basic.bride.parents.mother.name);
    $('#txt-greeting').html(window.basic.info.greeting);
    $('.txt-date').html(window.basic.info.wedding_date);
    $('.txt-location').html(window.basic.info.wedding_location);
    $('#txt-address').html(window.basic.info.wedding_address);

    $('.txt-groom-account').html(window.basic.groom.account);
    $('.txt-groom-father-account').html(window.basic.groom.parents.father.account);
    $('.txt-groom-mother-account').html(window.basic.groom.parents.mother.account);
    $('.txt-bride-account').html(window.basic.bride.account);
    $('.txt-bride-father-account').html(window.basic.bride.parents.father.account);
    $('.txt-bride-mother-account').html(window.basic.bride.parents.mother.account);

    let groom_tel = document.getElementById("groom-tel");
    groom_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.phone;
    };
    let groom_sms = document.getElementById("groom-sms");
    groom_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.phone;
    };

    let groom_father_tel = document.getElementById("groom-father-tel");
    groom_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.father.phone;
    };

    let groom_father_sms = document.getElementById("groom-father-sms");
    groom_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.father.phone;
    };

    let groom_mother_tel = document.getElementById("groom-mother-tel");
    groom_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.groom.parents.mother.phone;
    };

    let groom_mother_sms = document.getElementById("groom-mother-sms");
    groom_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.groom.parents.mother.phone;
    };

    let bride_tel = document.getElementById("bride-tel");
    bride_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.phone;
    };
    let bride_sms = document.getElementById("bride-sms");
    bride_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.phone;
    };

    let bride_father_tel = document.getElementById("bride-father-tel");
    bride_father_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.parents.father.phone;
    };

    let bride_father_sms = document.getElementById("bride-father-sms");
    bride_father_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.parents.father.phone;
    };

    let bride_mother_tel = document.getElementById("bride-mother-tel");
    bride_mother_tel.onclick = function() {
        window.location.href = "tel:"+window.basic.bride.parents.mother.phone;
    };

    let bride_mother_sms = document.getElementById("bride-mother-sms");
    bride_mother_sms.onclick = function() {
        window.location.href = "sms:"+window.basic.bride.parents.mother.phone;
    };
}

function drawCalendar(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const year = parseInt(date.year);
    const month = parseInt(date.month);
    const day = parseInt(date.day);

    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    const calendarContainer = document.getElementById("calendar");

    let calendarHTML = `
    <div class="mb-2">${monthNames[month - 1]} ${year}</div>
    <div class="week">
        ${["일", "월", "화", "수", "목", "금", "토"].map((day, index) => `<div class="${'day'}">${day}</div>`).join('')}
    </div>`;

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        let line = "";
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                line += "<div class='empty'></div>";
            } else if (dayCount > daysInMonth) {
                break;
            } else {
                let dateClass = "";
                if (holidays.includes(dayCount)) {
                    dateClass = "holiday";
                }
                if (dayCount === day) {
                    dateClass = "highlight";
                }
                line += `<div class='day ${dateClass}'>${dayCount}</div>`;
                dayCount++;
            }
        }
        calendarHTML += "<div class='week'>" + line + "</div>";
        if (dayCount > daysInMonth) {
            break;
        }
    }

    calendarContainer.innerHTML = calendarHTML;
}

function loadCountdown(date,honeymoon){

    const wTime = new Date(date.year,parseInt(date.month)-1,date.day,date.hour, date.minute);
    const wDay = new Date(date.year,parseInt(date.month)-1,parseInt(date.day)+1,date.hour, date.minute);

    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const wDate = wDay;
    wDate.setDate(wDay.getDate() - 1);
    wDate.setHours(0, 0, 0, 0);

    if(currentDate <= wDate) {
        $('#date-countdown').countdown({until: wTime, timezone: +9});//format: 'dHMS', compact: true,
        $('#dday-countdown').countdown({until: wDate, format: 'd', compact: true, layout: '{dn}', timezone: +9});
        $('#countdown-text1').html('결혼식이');
        let wTxt = '남았습니다.';
        if (currentDate.getTime() === wDate.getTime()) {
            wTxt +='<br><br>오셔서 지켜봐 주시고 축하해 주세요!';
        }
        $('#countdown-text2').html(wTxt);

    }else{
        const honeymoonDate = wDate;
        honeymoonDate.setDate(wDate.getDate() + (honeymoon.days));
        honeymoonDate.setHours(0, 0, 0, 0);

        $('#date-countdown').countdown({ since: wTime, timezone: +9 });//format: 'dHMS', compact: true,
        $('#dday-countdown').countdown({ since: wTime, format: 'd', compact: true, layout: '{dn}', timezone: +9 });
        $('#countdown-text1').html('결혼한 지');
        let wTxt = '되었습니다.';

        if(currentDate <= honeymoonDate){
            wTxt +='<br><br>'+honeymoon.location+'에서 행복한 시간을 보내고 있습니다!';
        }
        $('#countdown-text2').html(wTxt);
    }
}

function getKakaoMap(location){
    const container = document.getElementById('map');

    const xy = new kakao.maps.LatLng(location.x, location.y);
    let options = {
        center: xy,
        //draggable: false,
        level: 6
    };

    let map = new kakao.maps.Map(container, options);

    let marker = new kakao.maps.Marker({
        position: xy,
        map: map
    });

    marker.setPosition(xy);
}
function morePhoto(){
    $('#grid-container2 .hidden-photo').removeClass('visually-hidden');

    $('#more-photo').addClass('visually-hidden');
    $('#hide-photo').removeClass('visually-hidden');


    // 스크롤 위치 저장
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
}
function hidePhoto(){
    $('#grid-container2 .hidden-photo').addClass('visually-hidden');
    // imagesLoaded( '#grid-container' ).on( 'progress', function() {
    //     $('#grid-container').masonry('layout');
    // });
    $('#more-photo').removeClass('visually-hidden');
    $('#hide-photo').addClass('visually-hidden');

    window.scrollTo(0, scrollTop);
}
function setGallery(id){

    let parentElement = document.getElementById(id);

    let randomImageNumbers = [];
    randomImageNumbers = Array.from({length: numOfImages}, (_, index) => index + 1);
    //랜덤 이미지 번호 배열 생성
    // while (randomImageNumbers.length < numOfImages) {
    //     let randomNum = Math.floor(Math.random() * numOfImages) + 1;
    //     if (!randomImageNumbers.includes(randomNum)) {
    //         randomImageNumbers.push(randomNum);
    //     }
    // }

    let cnt = 0;
    // randomImageNumbers.forEach(function(imageNumber) {

    //     if(excludeNumbers.includes(imageNumber)||excludeNumbers2.includes(imageNumber)){
    //         return;
    //     }
    //     let divElement = document.createElement('div');
    //     cnt++;
    //     if(cnt <= basicNumbers){
    //         divElement.className = 'grid-item';
    //     }else{
    //         divElement.className = 'grid-item hidden-photo visually-hidden';
    //     }

    //     let imgElement = document.createElement('img');
    //     imgElement.src = './img/gallery/' + imageNumber + '.jpg';

    //     divElement.appendChild(imgElement);

    //     parentElement.appendChild(divElement);
    // });
    randomImageNumbers.forEach(function(imageNumber) {

        if(excludeNumbers.includes(imageNumber)||excludeNumbers2.includes(imageNumber)){
            return;
        }
        let divElement = document.createElement('a');
        cnt++;
        if(cnt <= basicNumbers){
            divElement.className = 'grid-item example-image-link';
        }else{
            divElement.className = 'grid-item example-image-link hidden-photo visually-hidden';
        }

        divElement.setAttribute('href', './img/gallery/' + imageNumber + '.jpeg');
        divElement.setAttribute('data-lightbox', 'example-set');
        divElement.setAttribute('data-title', '');

        let imgElement = document.createElement('img');
        imgElement.src = './img/gallery/' + imageNumber + '.jpeg';
        imgElement.className = "example-image";

        divElement.appendChild(imgElement);

        parentElement.appendChild(divElement);
    });
}
function kakaoShare() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: window.basic.title,
            description: window.basic.kakao.description,
            imageUrl: window.basic.kakao.img,
            imageHeight: 550,
            link: {
                mobileWebUrl: window.basic.link,
                webUrl: window.basic.link,
            },
        },
        buttons: [
            {
                title: window.basic.kakao.button,
                link: {
                    mobileWebUrl: window.basic.link,
                    webUrl: window.basic.link,
                },
            },
        ],
    });
}
function startNavigation() {
    //https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
    Kakao.Navi.start({
        name: window.basic.location.name,
        x: window.basic.location.x,
        y: window.basic.location.x,
        coordType: 'wgs84',
    });
}
function copyLink(){

    let url = window.document.location.href;
    copyToClipboard(url);
    alert('병선♥다정 청첩장 주소가 복사되었습니다.');
}

function copyAccount(val){

    let account, name, bank;

    switch (val){
        case 'groom':
            account=window.basic.groom.account;
            name=window.basic.groom.name;
            bank=window.basic.groom.bank;
            break;
        case 'groom-father':
            account=window.basic.groom.parents.father.account;
            name=window.basic.groom.parents.father.name;
            bank=window.basic.groom.parents.father.bank;
            break;
        case 'groom-mother':
            account=window.basic.groom.parents.mother.account;
            name=window.basic.groom.parents.mother.name;
            bank=window.basic.groom.parents.mother.bank;
            break;
        case 'bride':
            account=window.basic.bride.account;
            name=window.basic.bride.name;
            bank=window.basic.bride.bank;
            break;
        case 'bride-father':
            account=window.basic.bride.parents.father.account;
            name=window.basic.bride.parents.father.name;
            bank=window.basic.bride.parents.father.bank;
            break;
        case 'bride-mother':
            account=window.basic.bride.parents.mother.account;
            name=window.basic.bride.parents.mother.name;
            bank=window.basic.bride.parents.mother.bank;
            break;
        default : break;
    }
    copyToClipboard(account);
    alert(name+'님의 '+bank+'은행 계좌번호가 복사되었습니다.');
}

function copyToClipboard(val) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}
