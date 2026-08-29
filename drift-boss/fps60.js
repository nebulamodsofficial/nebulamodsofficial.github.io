(() => {
    "use strict";
    const TARGET_FPS = 60;
    const FRAME_TIME = 1000 / TARGET_FPS;
    let lastFrame = 0;
    let pending = null;
    const originalRAF = window.requestAnimationFrame;
    window.requestAnimationFrame = function (callback) {
        return originalRAF.call(window, function (time) {
            if (time - lastFrame >= FRAME_TIME) {
                lastFrame = time;
                callback(time);
            } else {
                pending = originalRAF.call(window, () => {
                    window.requestAnimationFrame(callback);
                });
            }
        });
    };
})();
