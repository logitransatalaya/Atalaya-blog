import{s as l,m as h,r as m,j as r,a as n,C as g,W as u,F as f,R as b,b as p}from"./vendor.52756ab6.js";const v=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}};v();const y=l.div`
  width: 100%;
  height: 60%;
  /* border: 1px dashed red; */
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    position: relative;
    width: 75%;
    height: 100%;
    /* border: 1px dashed blue; */
    /* background-color: red; */
    overflow: hidden;

    .btns-slider {
      width: 100%;
      height: 100%;
      /* background-color: green; */
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btn {
        z-index: 1;
        width: 30%;
        height: 90%;
        /* background-color: rgba(255, 255, 255, 0.3); */
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`,w=l(h.div)`
  position: absolute;
  width: 30%;
  height: 100%;
  overflow: hidden;
  border-radius: 10% 10% 0 0;
  /* border: 1px dashed red; */
  top: 0;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    flex: 75%;
  }

  .title {
    width: 100%;
    background: var(--blue);
    flex: 1;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;var k="/assets/trabajaNosotros.1fe3f290.jpg",x="/assets/Mesadetrabajo.70de0889.png",j="/assets/industrial-port-and-container-yard.a3edaec3.jpg",N="/assets/man-reading-newspaper.55ec66b7.jpg",z="/assets/Logo-recepci\xF3n.1f9d73ec.jpg";const c=[{image:k,alt:"Trabaja con nosotros"},{image:x,alt:"Atalaya mobile"},{image:N,alt:"Ultimas noticias"},{image:z,alt:"Nosotros"},{image:j,alt:"Aliados"}],C=()=>{const[o,a]=m.exports.useState(0);return r(y,{children:n("div",{className:"row",children:[n("div",{className:"btns-slider",children:[r("button",{className:"btn",onClick:()=>{o>0&&a(o-1)}}),r("button",{className:"btn",onClick:()=>{o<c.length-1&&a(o+1)}})]}),c.map((e,t)=>n(w,{className:"containerImg",initial:{scale:0,rotation:-180},animate:{rotate:0,left:`${(t-o)*35+35}%`,scale:t===o?1:.8},transition:{type:"keyframes",duration:1},children:[r("img",{src:e.image,alt:e.alt}),r("div",{className:"title",children:r("h2",{children:e.alt.toUpperCase()})})]},e.alt))]})})};var L="/assets/background.c5e8adac.png";const S=l.main`
  height: 100vh;
  width: 100%;
  background-color: var(--blue-opacity);
  background-image: url(${L});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 0 40%;
`,A=()=>n(S,{children:[r("h1",{className:"jmm",children:"Home"}),r(C,{})]}),M=g`
  :root {
    --blue: rgba(15, 33, 111, 1);
    --blue-opacity: rgba(15, 33, 111, 0.8);
    --light-gray: rgba(221, 221, 221, 1);
    --white: rgba(255, 255, 255, 1);
    --dark-orange: rgba(229, 92, 30, 1);
    --orange: rgba(231, 101, 30, 1);
    --light-orange: rgba(243, 166, 28, 1):
  }
`,O=g`
  /* font Sizes */
  :root {
    font-size: 10px;
    --h1: 3.5rem;
    --h2: 2.3rem;
    --h3: 1.875rem;
    --h4: 1.5rem;
    --h5: 1.125rem;
    --s-medium: 1rem;
    --s-normal: 0.875rem;
    --s-small: 0.75rem;
  }
  /* font weights */
  :root {
    --bold: 700;
    --semi: 600;
    --medium: 500;
    --regular: 400;
    --light: 300;
  }

  h1 {
    font-size: var(--h1);
    font-weight: var(--bold);
  }
  h2 {
    font-size: var(--h2);
    font-weight: var(--bold);
  }
  h3 {
    font-size: var(--h3);
    font-weight: var(--semi);
  }
  h4 {
    font-size: var(--h4);
    font-weight: var(--semi);
  }
  h5 {
    font-size: var(--h5);
    font-weight: var(--normal);
  }
`,R=u`
  /* colors variables */
  ${M}

  /* Fonts variables */
  ${O}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
`;function F(){return n(f,{children:[r(R,{}),r(A,{})]})}b.render(r(p.StrictMode,{children:r(F,{})}),document.getElementById("root"));
