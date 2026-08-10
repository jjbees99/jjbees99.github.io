import { useEffect } from 'react';
export function useScrollLock(locked:boolean){useEffect(()=>{if(!locked)return;const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old}},[locked])}
