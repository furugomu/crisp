import{s as n,c}from"./vendor.d640ae40.js";const d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}};d();globalThis.sss=n;globalThis.cloneDeep=c;const u="Roguelike",f=`
[hjkl] Move
`,a=[`
 llll
l    l
l ll l
l llll
l
 llll
`];let s=vec(45,45);function y(){ticks,keyboard.code.KeyH.isJustPressed?s.x-=6:keyboard.code.KeyJ.isJustPressed?s.y+=6:keyboard.code.KeyK.isJustPressed?s.y-=6:keyboard.code.KeyL.isJustPressed&&(s.x+=6),char("a",s)}init({update:y,title:u,description:f,characters:a,options:{theme:"dark",isPlayingBgm:!0}});
