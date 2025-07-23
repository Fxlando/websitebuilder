'use client';

import React from 'react';
import InteractiveAvatar from '../InteractiveAvatar';

const AvatarDemoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            3D Interactive Avatar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the classic Xbox 360 avatar style with our interactive 3D character. 
            Hover to wake up, click to interact, and explore the possibilities with Mixamo animations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar Demo */}
          <div className="flex justify-center">
            <div className="relative">
              <InteractiveAvatar 
                width={400} 
                height={400}
                className="rounded-lg overflow-hidden shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                🎮 Interactive
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                How to Use with Mixamo
              </h3>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Get Your Character</h4>
                    <p className="text-sm">Go to Mixamo.com and choose or upload a character</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Add Animations</h4>
                    <p className="text-sm">Select animations like Idle, Walk, Run, Wave, etc.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Download as GLB</h4>
                    <p className="text-sm">Download your character with animations as GLB format</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Add to Your Site</h4>
                    <p className="text-sm">Place the GLB file in your public/models/ folder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Interactive hover and click effects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Multiple animation support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Orbit camera controls</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Professional lighting and shadows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-400">✓</span>
                  <span>Responsive design</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-orange-400 mb-3">
                Code Example
              </h3>
              <pre className="bg-gray-900 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`<InteractiveAvatar 
  modelPath="/models/your-character.glb"
  width={400} 
  height={400}
/>`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarDemoSection; 