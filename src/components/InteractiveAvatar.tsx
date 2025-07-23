'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface InteractiveAvatarProps {
  modelPath?: string;
  className?: string;
  width?: number;
  height?: number;
}

const InteractiveAvatar: React.FC<InteractiveAvatarProps> = ({
  modelPath,
  className = '',
  width = 400,
  height = 400
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState<string>('idle');
  const [animations, setAnimations] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize the 3D scene
  const initScene = useCallback(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff6b35, 1, 10);
    pointLight.position.set(-2, 2, 2);
    scene.add(pointLight);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x2a2a3e,
      transparent: true,
      opacity: 0.3
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    mountRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      const delta = clockRef.current.getDelta();
      
      if (mixerRef.current) {
        mixerRef.current.update(delta);
      }
      
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
  }, [width, height]);

  // Create demo avatar if no model is loaded
  const createDemoAvatar = useCallback(() => {
    if (!sceneRef.current) return;

    const group = new THREE.Group();
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0xff6b35 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.5;
    head.castShadow = true;
    group.add(head);

    // Body
    const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.3, 0.8, 8);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0xff6b35 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    body.castShadow = true;
    group.add(body);

    // Arms
    const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0xff6b35 });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.6, 0.8, 0);
    leftArm.castShadow = true;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.6, 0.8, 0);
    rightArm.castShadow = true;
    group.add(rightArm);

    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.8, 8);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x2a2a3e });
    
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, -0.2, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, -0.2, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);

    sceneRef.current.add(group);
    modelRef.current = group;
    setIsLoaded(true);
    setAnimations(['idle']);
    setCurrentAnimation('idle');
  }, []);

  // Load 3D model
  const loadModel = useCallback((path: string) => {
    if (!sceneRef.current) return;

    const loader = new GLTFLoader();
    
    loader.load(
      path,
      (gltf: GLTF) => {
        const model = gltf.scene;
        model.scale.setScalar(1);
        model.position.y = 0;
        model.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        sceneRef.current?.add(model);
        modelRef.current = model;

        // Setup animations
        if (gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixerRef.current = mixer;
          
          const animationNames = gltf.animations.map((anim: THREE.AnimationClip) => anim.name);
          setAnimations(animationNames);
          
          // Play first animation
          if (gltf.animations[0]) {
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
            setCurrentAnimation(animationNames[0]);
          }
        }

        setIsLoaded(true);
      },
      (progress: ProgressEvent) => {
        console.log('Loading progress:', (progress.loaded / progress.total) * 100, '%');
      },
      (error: unknown) => {
        console.error('Error loading model:', error);
        createDemoAvatar();
      }
    );
  }, [createDemoAvatar]);

  // Handle hover effects
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (modelRef.current) {
      // Add subtle animation or glow effect
      modelRef.current.scale.setScalar(1.05);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (modelRef.current) {
      modelRef.current.scale.setScalar(1);
    }
  }, []);

  // Play/pause animation
  const toggleAnimation = useCallback(() => {
    if (mixerRef.current) {
      if (isPlaying) {
        mixerRef.current.stopAllAction();
      } else {
        const root = mixerRef.current.getRoot();
        if (root && 'animations' in root && Array.isArray(root.animations) && root.animations.length > 0) {
          const animations = root.animations as THREE.AnimationClip[];
          mixerRef.current.clipAction(animations[0]).play();
        }
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  // Switch animation
  const switchAnimation = useCallback((animationName: string) => {
    if (mixerRef.current) {
      const root = mixerRef.current.getRoot();
      if (root && 'animations' in root && Array.isArray(root.animations)) {
        const animations = root.animations as THREE.AnimationClip[];
        const targetAnimation = animations.find((anim: THREE.AnimationClip) => anim.name === animationName);
        
        if (targetAnimation) {
          mixerRef.current.stopAllAction();
          const action = mixerRef.current.clipAction(targetAnimation);
          action.play();
          setCurrentAnimation(animationName);
        }
      }
    }
  }, []);

  // Initialize scene on mount
  useEffect(() => {
    initScene();
    
    return () => {
      const mount = mountRef.current;
      const renderer = rendererRef.current;
      if (renderer && mount) {
        mount.removeChild(renderer.domElement);
      }
      renderer?.dispose();
    };
  }, [initScene]);

  // Load model when path is provided
  useEffect(() => {
    if (modelPath) {
      loadModel(modelPath);
    } else {
      createDemoAvatar();
    }
  }, [modelPath, loadModel, createDemoAvatar]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mountRef}
        style={{ width, height }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer"
      />
      
      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
        <button
          onClick={toggleAnimation}
          className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition-colors"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        {animations.length > 1 && (
          <select
            value={currentAnimation}
            onChange={(e) => switchAnimation(e.target.value)}
            className="px-3 py-1 bg-gray-700 text-white rounded text-sm border border-gray-600"
          >
            {animations.map((anim) => (
              <option key={anim} value={anim}>
                {anim}
              </option>
            ))}
          </select>
        )}
        
        {isHovered && (
          <div className="px-3 py-1 bg-orange-500 text-white rounded text-sm animate-pulse">
            👋
          </div>
        )}
      </div>
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="text-white text-lg">Loading Avatar...</div>
        </div>
      )}
    </div>
  );
};

export default InteractiveAvatar; 