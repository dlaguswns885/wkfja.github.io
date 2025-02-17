let count = parseInt(localStorage.getItem("clickCount")) || 0;
updateCount();

function incrementCount() {
    count++;
    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

function updateCount() {
    document.getElementById("count").textContent = count;
    localStorage.setItem("clickCount", count);
}

// 웹 페이지 어디든 클릭하면 카운트 증가
document.body.addEventListener("click", incrementCount);

// 초기화 버튼 클릭 시 카운트 초기화
document.getElementById("resetButton").addEventListener("click", resetCount);
