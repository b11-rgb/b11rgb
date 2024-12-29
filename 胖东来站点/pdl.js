document.querySelectorAll('.box').forEach(function (wrapper) {
    wrapper.addEventListener('mousemove', function (e) {
        // 当鼠标在盒子上移动时，计算偏移量，并更新图片位置
        // 获取当前盒子的尺寸和位置
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const img = wrapper.querySelector('img');
        // 根据鼠标位置动态更新图片的平移和缩放效果
        img.style.transform = `rotate(0deg) translate3d(${x * 0.5}px, ${y * 0.5}px,0) scale(1.8)`;
    });
    // 当鼠标离开时，恢复图片原来的旋转和位置
    wrapper.addEventListener('mouseleave', function(){
        const img = wrapper.querySelector('img');
        img.style.transform = `rotate(-45deg) scale(1.5)`;
    }); 
});