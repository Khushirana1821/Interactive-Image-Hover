
document.addEventListener('DOMContentLoaded', function() {
   
    const imageContainers = document.querySelectorAll('.image-container');
    
    imageContainers.forEach(container => {
        const originalImage = container.querySelector('.original-image');
        const hoverImage = container.querySelector('.hover-image');
        
        container.addEventListener('mouseover', function() {
            console.log('Hovered over:', originalImage.alt);
        });
        
        container.addEventListener('mouseout', function() {
            console.log('Mouse left:', hoverImage.alt);
        });
    });
});
