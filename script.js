// 获取所有的模态元素
var modal = document.getElementById("modal");
var modalImg = document.getElementById("img01");
var modalVideo = document.getElementById("video01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0]; // 关闭按钮

// 关闭模态的功能
span.onclick = function () {
    modal.style.display = "none";
    modalImg.style.display = "none";
    modalVideo.style.display = "none";
    modalVideo.pause(); // 暂停视频并重置位置
    modalVideo.currentTime = 0;
};

// 显示图片的函数
function showModal(imageSrc) {
    modal.style.display = "block";
    modalImg.style.display = "block";
    modalVideo.style.display = "none";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc;
}

// 显示视频的函数
function showModalVideo(videoSrc) {
    modal.style.display = "block";
    modalImg.style.display = "none";
    modalVideo.style.display = "block";
    modalVideo.src = videoSrc;
    captionText.innerHTML = videoSrc;
    modalVideo.autoplay = true;
}

// 为每个按钮添加事件监听器
document.getElementById('btnNetwork').addEventListener('click', function () {
    showModal('network.png');
    setTimeout(() => showModal('network_traffic.png'), 5000);
    setTimeout(() => showModal('network_simple.png'), 10000);
});

document.getElementById('btnTraffic').addEventListener('click', function () {
    showModalVideo('traffic.mp4');
});

document.getElementById('btnPolicy').addEventListener('click', function () {
    showModal('常规服务已就位');
    setTimeout(() => showModal('应急服务已插入'), 5000);
    setTimeout(() => showModalVideo('DRL.mp4'), 10000);
    setTimeout(() => showModal('深度强化学习已训练'), 85000);
});

document.getElementById('btnPerformance').addEventListener('click', function () {
    showModal('Result_1.png');
    setTimeout(() => showModal('Result_2.png'), 5000);
    setTimeout(() => showModal('Result_3.png'), 10000);
});
