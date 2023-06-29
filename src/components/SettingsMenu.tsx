'use client';

import * as React from 'react';
import { useSettings } from '../hooks';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './lib';

type Props = {
  children: React.ReactNode;
};

export function SettingsMenu({ children }: Props) {
  const sound = useSettings((state) => state.sound);
  const setSound = useSettings((state) => state.setSound);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuPortal forceMount={true}>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={sound}
              onCheckedChange={setSound}>
              Sound Effects
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
}
