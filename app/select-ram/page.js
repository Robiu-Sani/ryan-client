'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RamSelection = () => {
  const [selectedRam, setSelectedRam] = useState('');
  const router = useRouter();

  const ramOptions = [
    { id: 1, name: 'Corsair 8GB DDR4' },
    { id: 2, name: 'Kingston 16GB DDR4' },
    { id: 3, name: 'G.Skill 32GB DDR4' },
    { id: 4, name: 'HyperX 16GB DDR4' },
  ];

  const handleRamSelect = (ram) => {
    setSelectedRam(ram);
    localStorage.setItem('ram', ram);
    // Redirect back to the PC Builder page
    router.push('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your RAM</h1>

      <ul>
        {ramOptions.map((ram) => (
          <li key={ram.id} className="mb-2">
            <button
              onClick={() => handleRamSelect(ram.name)}
              className={`p-2 border rounded ${
                selectedRam === ram.name ? 'bg-green-500 text-white' : ''
              }`}
            >
              {ram.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <button
          onClick={() => router.push('/')}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Go Back to PC Builder
        </button>
      </div>
    </div>
  );
};

export default RamSelection;
