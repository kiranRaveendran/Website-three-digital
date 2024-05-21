let slider = document.getElementById('slider');
        let images = document.querySelectorAll('#slider img');
        let currentIndex = 0;

        document.getElementById('prevBtn').addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                slideToIndex(currentIndex);
            }
        });

        document.getElementById('nextBtn').addEventListener('click', function() {
            if (currentIndex < images.length - 25) {
                currentIndex++;
                slideToIndex(currentIndex);
            }
        });

        function slideToIndex(index) {
            let offset = -index * images[0].clientWidth;
            slider.style.marginLeft = offset + 'px';
        }