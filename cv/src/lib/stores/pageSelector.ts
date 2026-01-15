import { writable } from 'svelte/store';
export const pageSelector = writable<'home' | 'test'>('home');