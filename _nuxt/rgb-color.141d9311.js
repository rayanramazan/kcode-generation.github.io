import{_ as u}from"./Footer.e36f3b85.js";import{i as p,f as m,o as s,l as o,s as l,t as n,F as f,v,u as e,q as x,x as r,y as U,z as h}from"./entry.1e3ce3f0.js";import{_ as g}from"./Output.7d3af552.js";import"./Icon.69cd4899.js";import"./_plugin-vue_export-helper.a1a6add7.js";const K={class:"w-full mt-26 lg:mx-0 p-4"},b={class:"flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4"},w={class:"flex flex-col gap-6"},y={class:"pb-1 text-lg text-white border-b-1 border-white/10 font-bold"},A={class:"text-white"},S=["onUpdate:modelValue"],F={__name:"rgb-color",setup($){const t=p([{id:1,title:{EN_US:"Red",AR_IQ:"\u0623\u062D\u0645\u0631",KUKA_KU:"\u0633\u0648\u0648\u0631",KUSA_KU:"\u0633\u0648\u0648\u0631"},value:193},{id:2,title:{EN_US:"Green",AR_IQ:"\u0623\u062E\u0636\u0631",KUKA_KU:"\u0633\u06D5\u0648\u0632",KUSA_KU:"\u0633\u06D5\u0648\u0632"},value:71},{id:3,title:{EN_US:"Blue",AR_IQ:"\u0623\u0632\u0631\u0642",KUKA_KU:"\u0634\u06CC\u0646",KUSA_KU:"\u0634\u06CC\u0646"},value:233}]),i=m("locale.setting");return(_,k)=>{const c=u;return s(),o("section",K,[l("div",b,[l("div",w,[l("h1",y,n(_.$t("rgb-options")),1),(s(!0),o(f,null,v(e(t),a=>(s(),o("div",{key:a,class:"w-full md:w-80 flex flex-col gap-2"},[l("span",A,n(a.title[e(i)]),1),U(l("input",{class:"rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full",type:"range",min:"0",max:"255","onUpdate:modelValue":d=>a.value=d},null,8,S),[[h,a.value]])]))),128))]),l("div",null,[l("div",{style:x(`
              background: rgb(${e(t)[0].value}, ${e(t)[1].value}, ${e(t)[2].value})
              `),class:"w-full md:w-96 h-96"},null,4)])]),r(g,{data:`rgb(${e(t)[0].value}, ${e(t)[1].value}, ${e(t)[2].value})`,stylesheet:"background: "},null,8,["data"]),r(c)])}}};export{F as default};
