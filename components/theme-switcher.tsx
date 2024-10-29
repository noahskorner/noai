'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ICON_SIZE = 16;

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const setTheme = (theme: string) => {
      const link = document.getElementById(
        'hljs-theme'
      ) as HTMLLinkElement | null;
      if (!link) {
        // Create a link element if it doesn’t exist
        const newLink = document.createElement('link') as HTMLLinkElement;
        newLink.id = 'hljs-theme';
        newLink.rel = 'stylesheet';
        newLink.href = theme;
        document.head.appendChild(newLink);
      } else {
        // Update href if link exists
        link.href = theme;
      }
    };

    if (theme === 'dark') {
      setTheme('styles/github-dark.css');
    } else {
      setTheme('styles/github.css');
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={'sm'}>
          {theme === 'light' ? (
            <Sun
              key="light"
              size={ICON_SIZE}
              className={'text-muted-foreground'}
            />
          ) : theme === 'dark' ? (
            <Moon
              key="dark"
              size={ICON_SIZE}
              className={'text-muted-foreground'}
            />
          ) : (
            <Laptop
              key="system"
              size={ICON_SIZE}
              className={'text-muted-foreground'}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem className="flex gap-2" value="light">
            <Sun size={ICON_SIZE} className="text-muted-foreground" />{' '}
            <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="dark">
            <Moon size={ICON_SIZE} className="text-muted-foreground" />{' '}
            <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="system">
            <Laptop size={ICON_SIZE} className="text-muted-foreground" />{' '}
            <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };
