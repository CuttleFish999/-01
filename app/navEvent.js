// 會員
const mumberLoginArr = [
    "註冊",
    "登入",
    "忘記密碼",
    "資料修改",
    "加入收藏",
    "瀏覽過的物件",
    "合約查詢",
    "會員認證",
    "討論區",
];

const mumberLoginLinksArr = [
    "registration.html",
    "login.html",
    "forgot_password.html",
    "profile.html",
    "favorites.html",
    "browse_history.html",
    "contract.html",
    "verification.html",
    "forum.html",
];

const mumberLoginLink = document.getElementById('mumberLogin');

mumberLoginLink.addEventListener('click', function () {
    addElementEvent(mumberLoginArr, mumberLoginLink, mumberLoginLinksArr);
});
//成為房東
const BecomeALandlordArr = [
    "流程解說",
    "房源提供",
    "房源管理",
    "租賃單",
    "預約管理",
];

const BecomeALandlordLinksArr = [

];

const BecomeALandlord = document.getElementById('BecomeALandlord');

BecomeALandlord.addEventListener('click', function () {
    addElementEvent(BecomeALandlordArr, BecomeALandlord);
});

//租賃服務
const rentalServicesArr = [
    "預約看房",
    "瀏覽房屋",
    "我的收藏",
    "連絡房東",
    "合約查詢",
];

const rentalServicesLinksArr = [

];

const rentalServices = document.getElementById('rentalServices');

rentalServices.addEventListener('click', function () {
    addElementEvent(rentalServicesArr, rentalServices);
});

// 商城
const shopArr = [
    "家具商城",
    "車位出租",
    "我的收藏",
    "訂單查詢",
];

const shopLinksArr = [

];

const shop = document.getElementById('rentalServices');

rentalServices.addEventListener('click', function () {
    addElementEvent(shop, rentalServices);
});
// 關於我們
const aboutUsArr = [
    "最新消息",
    "品牌故事",
];

const aboutUsLinksArr = [

];

const aboutUs = document.getElementById('rentalServices');

rentalServices.addEventListener('click', function () {
    addElementEvent(shop, rentalServices);
});

// 聯絡我們
const callUsArr = [
    "維修申報",
    "檢舉投訴",
];

const callUsLinksArr = [

];

const callUs = document.getElementById('rentalServices');

rentalServices.addEventListener('click', function () {
    addElementEvent(shop, rentalServices);
});

// 新增元素<a>事件
let elementsAdded = false;
function addElementEvent(arr, SuperFa, linksArr) {
    const existingElements = document.querySelectorAll('.added-element');

    if (elementsAdded) {
        existingElements.forEach((element, index) => {
            element.style.opacity = 0;
            element.addEventListener('transitionend', () => {
                element.remove();
            });
        });
    } else {
        for (let i = arr.length; i >= 0; i--) {
            const newElement = document.createElement('a');
            newElement.textContent = arr[i];
            newElement.classList.add('added-element');
            newElement.href = `/link/${linksArr[i]}`;
            SuperFa.insertAdjacentElement('afterend', newElement);
            setTimeout(() => {
                newElement.style.opacity = 1;
            }, 10 * i);
        }
    }

    elementsAdded = !elementsAdded;
}