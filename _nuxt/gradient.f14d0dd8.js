import{_ as v}from"./Footer.e36f3b85.js";import{i as r,w,f as x,o as b,l as y,s as e,t as d,u as t,y as p,z as f,J as _,q as U,x as m}from"./entry.1e3ce3f0.js";import{_ as $}from"./Output.7d3af552.js";import"./Icon.69cd4899.js";import"./_plugin-vue_export-helper.a1a6add7.js";const k={class:"w-full mt-26 lg:mx-0 p-4"},S={class:"flex flex-col md:flex-row justify-between px-0 py-2 md:p-6 gap-4"},E={class:"flex flex-col gap-6"},K={class:"pb-1 text-lg text-white border-b-1 border-white/10 font-bold"},V={class:"w-full md:w-80 flex flex-col gap-2"},B={class:"text-white"},j={class:"w-full flex justify-between bg-dark-100 rounded h-10"},A={class:"rounded",for:"color-border"},C={class:"text-white self-center px-2"},D={class:"w-full flex justify-between bg-dark-100 rounded h-10"},I={class:"rounded",for:"color-border"},N={class:"text-white self-center px-2"},Q={__name:"gradient",setup(z){const o=r("#C147E9"),i=r(null),s=r("#4E1F5B"),u=r(null);w(o,s,(c,l)=>{i.value?i.value.value=c:u.value&&(u.value.value=l)});const a=r({id:1,title:{EN_US:"Degree",AR_IQ:"\u062F\u0631\u062C\u0629",KUKA_KU:"\u067E\u0644\u06D5",KUSA_KU:"\u067E\u0644\u06D5"},value:90}),g=x("locale.setting");return(c,l)=>{const h=v;return b(),y("section",k,[e("div",S,[e("div",E,[e("h1",K,d(c.$t("gradient-options")),1),e("div",V,[e("span",B,d(t(a).title[t(g)]),1),p(e("input",{class:"rounded-lg overflow-hidden appearance-none bg-dark-100 h-3 w-full",type:"range",min:"0",max:"360","onUpdate:modelValue":l[0]||(l[0]=n=>t(a).value=n)},null,512),[[f,t(a).value]])]),e("div",j,[e("label",A,[p(e("input",{"onUpdate:modelValue":l[1]||(l[1]=n=>_(o)?o.value=n:null),ref:t(i),class:"form-input w-24 h-full rounded bg-transparent",type:"color"},null,512),[[f,t(o)]])]),e("span",C,d(t(o)),1)]),e("div",D,[e("label",I,[p(e("input",{"onUpdate:modelValue":l[2]||(l[2]=n=>_(s)?s.value=n:null),ref:t(u),class:"form-input w-24 h-full rounded bg-transparent",type:"color"},null,512),[[f,t(s)]])]),e("span",N,d(t(s)),1)])]),e("div",null,[e("div",{style:U(`
              background: linear-gradient(${t(a).value}deg,${t(o)} 0%,${t(s)} 100%)
              `),class:"w-full md:w-96 h-96 bg-primary"},null,4)])]),m($,{data:`linear-gradient(${t(a).value}deg,${t(o)} 0%,${t(s)} 100%);`,stylesheet:"background:"},null,8,["data"]),m(h)])}}};export{Q as default};
