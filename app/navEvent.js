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
const mumberLoginLink = document.getElementById('mumberLogin');


mumberLoginLink.addEventListener('click', function () {
    addElementEvent(mumberLoginArr,mumberLoginLink);
});
//成為房東
const BecomeALandlordArr = [
    "流程解說",
    "房源提供",
    "房源管理",
    "租賃單",
    "預約管理",
];
const BecomeALandlord = document.getElementById('BecomeALandlord');
// let elementsAdded = false;

BecomeALandlord.addEventListener('click', function () {
    addElementEvent(BecomeALandlordArr,BecomeALandlord);
});

let elementsAdded = false;
function addElementEvent(arr,SuperFa) {
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
            SuperFa.insertAdjacentElement('afterend', newElement);
            setTimeout(() => {
                newElement.style.opacity = 1;
            }, 10 * i);
        }
    }

    elementsAdded = !elementsAdded;
}