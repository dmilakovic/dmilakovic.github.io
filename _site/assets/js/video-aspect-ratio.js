document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('video');
    const iframe = container.querySelector('iframe');

    const maxHeight = 400; // Set the maximum height (same as in CSS)

    if (video) {
        video.onloadedmetadata = function () {
            const aspectRatio = video.videoWidth / video.videoHeight;
            const containerHeight = Math.min(maxHeight, video.videoHeight); // Max height constraint
            
            // Calculate width based on aspect ratio and maximum height
            const calculatedWidth = containerHeight * aspectRatio;

            // Set styles to maintain aspect ratio
            container.style.width = `${calculatedWidth}px`;
            container.style.height = `${containerHeight}px`;
        };
    } else if (iframe) {
        // For iframes, assume a default aspect ratio (e.g., 16:9)
        const defaultAspectRatio = 4 / 3;

        // Calculate width based on maximum height
        const calculatedWidth = maxHeight * defaultAspectRatio;

        // Set styles to maintain aspect ratio
        // container.style.width = `${calculatedWidth}px`;
        // container.style.height = `${maxHeight}px`;
    }
});
