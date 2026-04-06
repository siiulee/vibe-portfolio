// 이미지 에러 핸들러 - 로컬 플레이스홀더 이미지 생성
function createPlaceholderImage(text, width = 400, height = 300) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // 배경색
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, width, height);
    
    // 텍스트
    ctx.fillStyle = '#6b7280';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL();
}

// 이미지 에러 처리
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            const alt = this.alt || '이미지';
            const placeholder = createPlaceholderImage(alt, 400, 300);
            this.src = placeholder;
        });
    });
});
