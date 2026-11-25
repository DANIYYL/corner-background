export const BASE_PREVIEW = ".fx{position:absolute;inset:0;overflow:hidden;pointer-events:none;background:var(--bg)}\n.fx i{position:absolute;display:block}\n@media (prefers-reduced-motion:reduce){.fx *,.fx *::after{animation:none!important}}";
export const BASE_PAGE = "/* remove any body background so the effect shows; change position to absolute to use it inside a section */\n.fx{position:fixed;inset:0;z-index:-1;overflow:hidden;pointer-events:none;background:var(--bg)}\n.fx i{position:absolute;display:block}\n@media (prefers-reduced-motion:reduce){.fx *,.fx *::after{animation:none!important}}";
export const EFFECTS = [
 {
  "id": "orbs",
  "fa": "گوی‌های نوری",
  "en": "Glow Orbs",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-orbs .a{width:210px;height:210px;top:-70px;right:-60px;background:radial-gradient(circle,var(--p),transparent 70%);filter:blur(28px);opacity:.65}",
   ".fx-orbs .b{width:200px;height:200px;bottom:-80px;left:-50px;background:radial-gradient(circle,var(--s),transparent 70%);filter:blur(28px);opacity:.55}"
  ]
 },
 {
  "id": "streak",
  "fa": "کمان نوری",
  "en": "Light Streak",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-streak .a{width:520px;height:520px;top:-400px;right:-170px;border-radius:50%;border-bottom:2px solid var(--p);box-shadow:0 14px 34px -6px var(--p),inset 0 -14px 40px -20px var(--s);transform:rotate(-12deg);opacity:.9}",
   ".fx-streak .b{width:300px;height:300px;top:-150px;right:-60px;background:radial-gradient(circle,var(--p),transparent 70%);filter:blur(36px);opacity:.3}"
  ]
 },
 {
  "id": "part",
  "fa": "ذرات نورانی",
  "en": "Particles",
  "html": "<i class=\"a\"></i><i class=\"b\"></i><i class=\"c\"></i>",
  "css": [
   ".fx-part .a,.fx-part .b,.fx-part .c{inset:0}",
   ".fx-part .a{background:radial-gradient(circle,#fff 0 1px,transparent 1.6px) 0 0/46px 46px;opacity:.5}",
   ".fx-part .b{background:radial-gradient(circle,var(--p) 0 1.5px,transparent 2.4px) 17px 23px/71px 71px;opacity:.8;animation:tw 4s ease-in-out infinite}",
   ".fx-part .c{background:radial-gradient(circle,var(--s) 0 1px,transparent 2px) 31px 9px/37px 59px;opacity:.7;animation:tw 6s ease-in-out infinite reverse}",
   "@keyframes tw{50%{opacity:.2}}"
  ]
 },
 {
  "id": "grd",
  "fa": "شبکه محو",
  "en": "Fading Grid",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-grd .a{inset:0;background:linear-gradient(var(--line) 1px,transparent 1px) 0 0/26px 26px,linear-gradient(90deg,var(--line) 1px,transparent 1px) 0 0/26px 26px;-webkit-mask:radial-gradient(ellipse at center,#000 20%,transparent 75%);mask:radial-gradient(ellipse at center,#000 20%,transparent 75%)}",
   ".fx-grd .b{width:220px;height:220px;top:-90px;right:-40px;background:radial-gradient(circle,var(--p),transparent 70%);filter:blur(30px);opacity:.35}"
  ]
 },
 {
  "id": "noise",
  "fa": "بافت نویز",
  "en": "Noise / Grain",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-noise .a{inset:0;background:radial-gradient(circle at 20% 20%,var(--p),transparent 55%),radial-gradient(circle at 85% 90%,var(--s),transparent 55%);opacity:.55}",
   ".fx-noise .b{inset:0;opacity:.35;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E\")}"
  ]
 },
 {
  "id": "aur",
  "fa": "شفق متحرک",
  "en": "Aurora",
  "html": "<i class=\"a\"></i><i class=\"b\"></i><i class=\"c\"></i>",
  "css": [
   ".fx-aur .a,.fx-aur .b,.fx-aur .c{width:240px;height:120px;border-radius:50%;filter:blur(34px);opacity:.6}",
   ".fx-aur .a{background:var(--p);top:10px;right:-40px;animation:d1 11s ease-in-out infinite alternate}",
   ".fx-aur .b{background:var(--s);top:60px;left:-50px;animation:d2 13s ease-in-out infinite alternate}",
   ".fx-aur .c{background:color-mix(in srgb,var(--p),#22d3ee);bottom:-30px;left:30%;animation:d1 15s ease-in-out infinite alternate-reverse;opacity:.45}",
   "@keyframes d1{to{transform:translate(-70px,40px) scale(1.2)}}",
   "@keyframes d2{to{transform:translate(80px,-30px) scale(.9)}}"
  ]
 },
 {
  "id": "mesh",
  "fa": "گرادیان مش",
  "en": "Mesh Gradient",
  "html": "<i class=\"a\"></i>",
  "css": [
   ".fx-mesh .a{inset:0;background:radial-gradient(at 12% 15%,var(--p) 0,transparent 50%),radial-gradient(at 88% 10%,var(--s) 0,transparent 45%),radial-gradient(at 80% 95%,color-mix(in srgb,var(--p),#22d3ee) 0,transparent 50%),radial-gradient(at 10% 90%,var(--s) 0,transparent 45%);opacity:.7;filter:blur(8px)}"
  ]
 },
 {
  "id": "spot",
  "fa": "نور پروژکتوری",
  "en": "Spotlight",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-spot .a{inset:0;background:conic-gradient(from 180deg at 50% -8%,transparent 154deg,var(--p) 180deg,transparent 206deg);filter:blur(14px);opacity:.75;-webkit-mask:linear-gradient(#000 30%,transparent 95%);mask:linear-gradient(#000 30%,transparent 95%)}",
   ".fx-spot .b{width:160px;height:60px;top:-28px;left:calc(50% - 80px);background:var(--p);filter:blur(26px);opacity:.8}"
  ]
 },
 {
  "id": "dots",
  "fa": "شبکه نقطه‌ای",
  "en": "Dot Grid",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-dots .a{inset:0;background:radial-gradient(circle,var(--p) 1.2px,transparent 1.8px) 0 0/18px 18px;opacity:.6;-webkit-mask:radial-gradient(circle at 80% 20%,#000,transparent 65%);mask:radial-gradient(circle at 80% 20%,#000,transparent 65%)}",
   ".fx-dots .b{width:200px;height:200px;bottom:-90px;left:-40px;background:radial-gradient(circle,var(--s),transparent 70%);filter:blur(30px);opacity:.45}"
  ]
 },
 {
  "id": "wave",
  "fa": "خطوط موجی",
  "en": "Wave Lines",
  "html": "<i class=\"a\"></i><svg viewBox=\"0 0 400 130\" preserveAspectRatio=\"none\" aria-hidden=\"true\"><defs><linearGradient id=\"g\" x1=\"0\" x2=\"1\"><stop offset=\"0\" style=\"stop-color:var(--s)\"/><stop offset=\"1\" style=\"stop-color:var(--p)\"/></linearGradient></defs><g fill=\"none\" stroke=\"url(#g)\" stroke-width=\"1.2\"><path d=\"M0 90 C70 40 130 130 200 80 S330 40 400 80\" opacity=\".9\"/><path d=\"M0 100 C70 55 130 135 200 92 S330 55 400 92\" opacity=\".6\"/><path d=\"M0 110 C70 70 130 140 200 104 S330 70 400 104\" opacity=\".4\"/><path d=\"M0 120 C70 85 130 145 200 116 S330 85 400 116\" opacity=\".25\"/></g></svg>",
  "css": [
   ".fx-wave svg{position:absolute;inset:auto 0 0 0;width:100%;height:130px}",
   ".fx-wave .a{width:260px;height:160px;bottom:-60px;left:30%;background:radial-gradient(circle,var(--p),transparent 70%);filter:blur(30px);opacity:.4}"
  ]
 },
 {
  "id": "rays",
  "fa": "پرتوهای عمودی",
  "en": "Light Rays",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-rays .a{inset:0;background:repeating-linear-gradient(90deg,transparent 0 20px,color-mix(in srgb,var(--p) 40%,transparent) 20px 22px,transparent 22px 52px,color-mix(in srgb,var(--s) 35%,transparent) 52px 53px);-webkit-mask:linear-gradient(#000,transparent 85%);mask:linear-gradient(#000,transparent 85%);opacity:.8}",
   ".fx-rays .b{width:300px;height:100px;top:-50px;left:calc(50% - 150px);background:var(--p);filter:blur(40px);opacity:.45}"
  ]
 },
 {
  "id": "hor",
  "fa": "نور افق",
  "en": "Horizon Glow",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-hor .a{width:130%;height:150px;bottom:-85px;left:-15%;border-radius:50%;background:radial-gradient(ellipse,var(--p),transparent 68%);filter:blur(18px);opacity:.9}",
   ".fx-hor .b{left:10%;right:10%;bottom:36px;height:1px;background:linear-gradient(90deg,transparent,var(--p),var(--s),transparent);box-shadow:0 0 14px var(--p)}"
  ]
 },
 {
  "id": "con",
  "fa": "هاله چرخان",
  "en": "Conic Glow",
  "html": "<i class=\"a\"></i>",
  "css": [
   ".fx-con .a{width:340px;height:340px;top:-70px;left:calc(50% - 170px);border-radius:50%;background:conic-gradient(from 0deg,var(--p),var(--s),#22d3ee,var(--p));filter:blur(46px);opacity:.5;animation:sp 22s linear infinite}",
   "@keyframes sp{to{transform:rotate(360deg)}}"
  ]
 },
 {
  "id": "cur",
  "fa": "نور دنبال‌کننده موس",
  "en": "Cursor Glow",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-cur .a{inset:0;background:radial-gradient(circle 120px at var(--x,50%) var(--y,50%),color-mix(in srgb,var(--p) 65%,transparent),transparent 70%);transition:background .08s}",
   ".fx-cur .b{inset:0;background:linear-gradient(var(--line) 1px,transparent 1px) 0 0/26px 26px,linear-gradient(90deg,var(--line) 1px,transparent 1px) 0 0/26px 26px;opacity:.6}"
  ],
  "js": "window.addEventListener('mousemove',e=>{\n  const el=document.querySelector('.fx-cur');\n  el.style.setProperty('--x',e.clientX+'px');\n  el.style.setProperty('--y',e.clientY+'px');\n});"
 },
 {
  "id": "vig",
  "fa": "حاشیه نورانی",
  "en": "Vignette Glow",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-vig .a{inset:0;background:radial-gradient(ellipse at center,transparent 35%,color-mix(in srgb,var(--p) 55%,transparent) 130%)}",
   ".fx-vig .b{inset:0;box-shadow:inset 0 0 70px 6px color-mix(in srgb,var(--s) 55%,transparent)}"
  ]
 },
 {
  "id": "cr1",
  "fa": "حلقه‌های هم‌مرکز",
  "en": "Corner Rings",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-cr1 .a{width:270px;height:270px;top:-135px;right:-135px;border-radius:50%;background:repeating-radial-gradient(circle,transparent 0 13px,color-mix(in srgb,var(--p) 60%,transparent) 13px 14px);-webkit-mask:radial-gradient(circle,#000 25%,transparent 70%);mask:radial-gradient(circle,#000 25%,transparent 70%)}",
   ".fx-cr1 .b{width:110px;height:110px;top:-55px;right:-55px;background:radial-gradient(circle,var(--s),transparent 70%);filter:blur(14px);opacity:.8}"
  ]
 },
 {
  "id": "cr2",
  "fa": "درخشش ستاره‌ای",
  "en": "Lens Flare",
  "html": "<i class=\"a\"></i><i class=\"b\"></i><i class=\"c\"></i>",
  "css": [
   ".fx-cr2 .a{width:210px;height:2px;top:24px;right:-65px;background:linear-gradient(90deg,transparent,var(--p),#fff,var(--p),transparent);box-shadow:0 0 12px var(--p)}",
   ".fx-cr2 .b{width:2px;height:210px;top:-80px;right:39px;background:linear-gradient(transparent,var(--p),#fff,var(--p),transparent);box-shadow:0 0 12px var(--p)}",
   ".fx-cr2 .c{width:12px;height:12px;top:19px;right:35px;border-radius:50%;background:#fff;box-shadow:0 0 18px 8px var(--p)}"
  ]
 },
 {
  "id": "cr3",
  "fa": "شبکه گوشه‌ای",
  "en": "Corner Grid",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-cr3 .a{inset:0;background:linear-gradient(color-mix(in srgb,var(--p) 40%,transparent) 1px,transparent 1px) 0 0/22px 22px,linear-gradient(90deg,color-mix(in srgb,var(--p) 40%,transparent) 1px,transparent 1px) 0 0/22px 22px;-webkit-mask:radial-gradient(circle at 0 100%,#000,transparent 58%);mask:radial-gradient(circle at 0 100%,#000,transparent 58%)}",
   ".fx-cr3 .b{width:120px;height:120px;bottom:-60px;left:-60px;background:radial-gradient(circle,var(--p),transparent 70%);filter:blur(16px);opacity:.7}"
  ]
 },
 {
  "id": "cr4",
  "fa": "مدار چرخان",
  "en": "Orbit Rings",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-cr4 .a,.fx-cr4 .b{border-radius:50%}",
   ".fx-cr4 .a{width:180px;height:180px;bottom:-90px;left:-90px;border:1px dashed var(--p);animation:sp 24s linear infinite}",
   ".fx-cr4 .b{width:260px;height:260px;bottom:-130px;left:-130px;border:1px dotted var(--s);animation:sp 36s linear infinite reverse}",
   ".fx-cr4 .a::after,.fx-cr4 .b::after{content:\"\";position:absolute;top:-4px;left:calc(50% - 4px);width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 10px 3px var(--p)}",
   ".fx-cr4 .b::after{box-shadow:0 0 10px 3px var(--s)}",
   "@keyframes sp{to{transform:rotate(360deg)}}"
  ]
 },
 {
  "id": "cr5",
  "fa": "لکه زنده",
  "en": "Morph Blob",
  "html": "<i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-cr5 .a{width:150px;height:150px;top:-55px;left:-45px;background:linear-gradient(135deg,var(--p),var(--s));opacity:.75;filter:blur(5px);animation:mo 9s ease-in-out infinite alternate}",
   ".fx-cr5 .b{width:60px;height:60px;top:70px;left:60px;border-radius:50%;background:var(--s);filter:blur(18px);opacity:.5}",
   "@keyframes mo{0%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}100%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%;transform:rotate(40deg) scale(1.1)}}"
  ]
 },
 {
  "id": "cr6",
  "fa": "خطوط مورب",
  "en": "Diagonal Beams",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-cr6 .a{inset:0;background:repeating-linear-gradient(135deg,transparent 0 10px,color-mix(in srgb,var(--p) 55%,transparent) 10px 11px);-webkit-mask:radial-gradient(circle at 100% 0,#000,transparent 55%);mask:radial-gradient(circle at 100% 0,#000,transparent 55%)}",
   ".fx-cr6 .b{width:130px;height:130px;top:-65px;right:-65px;background:radial-gradient(circle,var(--s),transparent 70%);filter:blur(14px);opacity:.8}"
  ]
 },
 {
  "id": "cr7",
  "fa": "هاف‌تون",
  "en": "Halftone Fade",
  "html": "<i class=\"b\"></i><i class=\"a\"></i>",
  "css": [
   ".fx-cr7 .a{inset:0;background:radial-gradient(circle,var(--p) 0 2.4px,transparent 3px) 0 0/13px 13px;-webkit-mask:radial-gradient(circle at 100% 100%,#000,transparent 38%);mask:radial-gradient(circle at 100% 100%,#000,transparent 38%)}",
   ".fx-cr7 .b{inset:0;opacity:.8;background:radial-gradient(circle,var(--s) 0 1.2px,transparent 1.8px) 6px 6px/13px 13px;-webkit-mask:radial-gradient(circle at 100% 100%,#000,transparent 65%);mask:radial-gradient(circle at 100% 100%,#000,transparent 65%)}"
  ]
 },
 {
  "id": "cr8",
  "fa": "منشور شیشه‌ای",
  "en": "Prism Shards",
  "html": "<i class=\"a\"></i><i class=\"b\"></i><i class=\"c\"></i>",
  "css": [
   ".fx-cr8 .a{width:170px;height:170px;top:0;left:0;clip-path:polygon(0 0,100% 0,0 100%);background:linear-gradient(135deg,var(--p),transparent 75%);opacity:.55}",
   ".fx-cr8 .b{width:110px;height:110px;top:0;left:0;clip-path:polygon(0 0,100% 0,0 100%);background:linear-gradient(135deg,var(--s),transparent 80%);opacity:.6}",
   ".fx-cr8 .c{width:240px;height:1px;top:170px;left:0;transform-origin:0 0;transform:rotate(-45deg);background:linear-gradient(90deg,var(--p),transparent);box-shadow:0 0 10px var(--p)}"
  ]
 },
 {
  "id": "cr9",
  "fa": "موج تپنده",
  "en": "Pulse Ripple",
  "html": "<i class=\"a\"></i><i class=\"b\"></i><i class=\"c\"></i><i class=\"d\"></i>",
  "css": [
   ".fx-cr9 .a,.fx-cr9 .b,.fx-cr9 .c{width:240px;height:240px;right:-120px;bottom:-120px;border-radius:50%;border:1px solid var(--p);opacity:.35;animation:rp 4s ease-out infinite}",
   ".fx-cr9 .b{animation-delay:1.3s;border-color:var(--s)}",
   ".fx-cr9 .c{animation-delay:2.6s}",
   ".fx-cr9 .d{width:70px;height:70px;right:-35px;bottom:-35px;background:radial-gradient(circle,#fff,var(--p) 30%,transparent 70%);filter:blur(5px)}",
   "@keyframes rp{0%{transform:scale(.1);opacity:.9}100%{transform:scale(1);opacity:0}}"
  ]
 },
 {
  "id": "cr10",
  "fa": "قاب نئونی",
  "en": "Neon Brackets",
  "html": "<i class=\"c\"></i><i class=\"d\"></i><i class=\"a\"></i><i class=\"b\"></i>",
  "css": [
   ".fx-cr10 .a,.fx-cr10 .b{width:44px;height:44px}",
   ".fx-cr10 .a{top:14px;left:14px;border-top:2px solid var(--p);border-left:2px solid var(--p);border-radius:12px 0 0 0;filter:drop-shadow(0 0 6px var(--p))}",
   ".fx-cr10 .b{bottom:14px;right:14px;border-bottom:2px solid var(--s);border-right:2px solid var(--s);border-radius:0 0 12px 0;filter:drop-shadow(0 0 6px var(--s))}",
   ".fx-cr10 .c,.fx-cr10 .d{width:120px;height:120px;border-radius:50%;filter:blur(18px);opacity:.45}",
   ".fx-cr10 .c{top:-50px;left:-50px;background:radial-gradient(circle,var(--p),transparent 70%)}",
   ".fx-cr10 .d{bottom:-50px;right:-50px;background:radial-gradient(circle,var(--s),transparent 70%)}"
  ]
 }
];
