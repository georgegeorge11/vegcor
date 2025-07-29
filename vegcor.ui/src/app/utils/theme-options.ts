import { Theme } from "../models/theme.model";

export let themes: Theme[] = [
  {
    id: 'light',
    primary: '#FAF9F9',
    displayName: 'Light Theme',
    icon: 'light_mode',
  },
  {
    id: 'dark',
    primary: '#2A2E45',
    displayName: 'Dark Theme',
    icon: 'dark_mode',
  }
];
