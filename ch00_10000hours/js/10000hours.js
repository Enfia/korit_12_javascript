const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");

    if(fieldValue.value == "") {
        alert('어떤 오타쿠가 될지 입력하세요.');
        fieldValue.focus();
        return false;
    } else if (timeValue.value== "") {
        alert('하루에 몇 화를 시청할지 입력하세요.');
        timeValue.focus();
        return false;
    } else if (timeValue_int < 10) {
        alert('잘못된 값입니다. 10 이상의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt((600000/(timeValue_int*24)), 10);
    }, 1800);   
}

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);