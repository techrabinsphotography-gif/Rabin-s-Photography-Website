import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CanvasLoop = ({
    basePath,
    frameCount,
    className = "",
    children
}) => {
    const canvasRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    // Cache images
    const imagesRef = useRef([]);

    // Loop state
    const loopRef = useRef({
        index: 0,
        lastTime: 0,
        animationId: null
    });

    // Generate image paths
    const getFramePath = (index) => {
        const frameNumber = (index + 1).toString().padStart(3, '0');
        // Ensure basePath ends with something appropriate or we handle it. 
        // Assuming basePath includes up to prefix like "/.../ezgif-frame-"
        return `${basePath}${frameNumber}.jpg`;
    };

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imagePromises = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            imagesRef.current[i] = img;

            const promise = new Promise((resolve) => {
                img.onload = () => {
                    loadedCount++;
                    setLoadProgress(Math.round((loadedCount / frameCount) * 100));
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load frame ${i} at ${getFramePath(i)}`);
                    resolve();
                }
            });
            imagePromises.push(promise);
        }

        Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
        });
    }, [basePath, frameCount]);

    // Canvas Rendering Logic
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });

        const drawFrame = (index) => {
            const safeIndex = Math.max(0, Math.min(frameCount - 1, Math.round(index)));
            const img = imagesRef.current[safeIndex];

            if (!img || !canvas) return;

            const canvasWidth = canvas.width / window.devicePixelRatio;
            const canvasHeight = canvas.height / window.devicePixelRatio;

            const scale = Math.min(canvasWidth / img.width, canvasHeight / img.height);
            const x = (canvasWidth / 2) - (img.width / 2) * scale;
            const y = (canvasHeight / 2) - (img.height / 2) * scale;

            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth * window.devicePixelRatio;
                canvas.height = parent.clientHeight * window.devicePixelRatio;
                canvas.style.width = `${parent.clientWidth}px`;
                canvas.style.height = `${parent.clientHeight}px`;
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

                drawFrame(loopRef.current.index);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const renderLoop = (time) => {
            if (time - loopRef.current.lastTime > 32) {
                loopRef.current.index = (loopRef.current.index + 0.4) % frameCount;
                loopRef.current.lastTime = time;
                drawFrame(loopRef.current.index);
            }
            loopRef.current.animationId = requestAnimationFrame(renderLoop);
        };

        loopRef.current.animationId = requestAnimationFrame(renderLoop);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (loopRef.current.animationId) cancelAnimationFrame(loopRef.current.animationId);
        };
    }, [imagesLoaded, frameCount]);

    if (!imagesLoaded) {
        return (
            <div className={`flex flex-col items-center justify-center bg-[#050505] text-white ${className}`}>
                <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadProgress}%` }}
                    />
                </div>
                <p className="mt-4 font-mono text-sm text-white/60">Loading Assets... {loadProgress}%</p>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 flex items-center justify-center">
                <canvas ref={canvasRef} />
            </div>
            {children}
        </div>
    );
};

export default CanvasLoop;
