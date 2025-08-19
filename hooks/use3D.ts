import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for managing 3D interactions for GlamCS interactive elements.
 * @returns {object} - Object containing the 3D scene and rendering methods.
 */
export const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        // Initialize scene, camera, and renderer
        sceneRef.current = new THREE.Scene();
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        rendererRef.current = new THREE.WebGLRenderer({ alpha: true });

        // Set renderer size and background color
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);
        rendererRef.current.setClearColor(0xffffff, 0); // Transparent background

        // Create a simple 3D object (e.g., a glamorous lipstick)
        const geometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
        const material = new THREE.MeshStandardMaterial({ color: 0xff6f30 }); // GlamCS Orange
        const lipstick = new THREE.Mesh(geometry, material);
        sceneRef.current.add(lipstick);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        sceneRef.current.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        sceneRef.current.add(pointLight);

        cameraRef.current.position.z = 5;

        // Animation loop
        const animate = () => {
            if (lipstick) {
                lipstick.rotation.y += 0.01; // Rotate lipstick for effect
            }
            rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
            animationFrameId.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
            if (sceneRef.current) {
                sceneRef.current.clear();
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        renderer: rendererRef.current,
        camera: cameraRef.current,
    };
};