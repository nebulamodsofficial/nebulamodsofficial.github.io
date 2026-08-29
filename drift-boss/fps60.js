(() => {
    "use strict";

    const TARGET_FPS = 60;
    const FRAME_TIME = 1000 / TARGET_FPS;

    const originalRAF = window.requestAnimationFrame;
    let lastFrameTime = -Infinity;

    window.requestAnimationFrame = function (callback) {
        return originalRAF.call(window, function (timestamp) {
            if (timestamp - lastFrameTime >= FRAME_TIME) {
                lastFrameTime = timestamp;
                callback(timestamp);
            } else {
                window.requestAnimationFrame(callback);
            }
        });
    };
})();
