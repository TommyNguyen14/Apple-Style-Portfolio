import * as React from 'react';
import { Button } from '@/components/ui/button';

export function ThemeCardToggle() {
  const setOutlineColor = (colorClass: string) => {
    document.documentElement.classList.remove('theme-red', 'theme-green', 'theme-blue');
    document.documentElement.classList.add(colorClass);
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={() => setOutlineColor('theme-red')} className="bg-red-500">
        <div className="h-4 w-4 rounded-full bg-red-500"></div>
        <span className="sr-only">Red Outline</span>
      </Button>
      <Button onClick={() => setOutlineColor('theme-green')} className="bg-green-500">
        <div className="h-4 w-4 rounded-full bg-green-500"></div>
        <span className="sr-only">Green Outline</span>
      </Button>
      <Button onClick={() => setOutlineColor('theme-blue')} className="bg-blue-500">
        <div className="h-4 w-4 rounded-full bg-blue-500"></div>
        <span className="sr-only">Blue Outline</span>
      </Button>
    </div>
  );
}
