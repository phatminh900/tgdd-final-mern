import{a as t,P as l,j as a,B as v,e as c,f,g as u,u as P,h as d}from"./index.67122aac.js";import{u as g,r as V,P as F,a as p}from"./product-filter.container.0eded752.js";const m="_list_lwvca_1",L={list:m},E="_laptop_axwuu_1",J="_storage_axwuu_6",U="_reviews_axwuu_15",W="_quantity_axwuu_19",n={laptop:E,storage:J,reviews:U,quantity:W,"configuration-list":"_configuration-list_axwuu_23"},b=({laptop:r})=>{const{currentProduct:A,changeCurrentStorage:i}=g(r,"laptop"),e=A;return t(l,{category:r.category,slug:r.slug,title:r.title,imgCover:r.imgCover,children:a("div",{className:`${n.laptop} flex gap-8px`,children:[t("div",{className:`${n.storage} gap-4px flex`,children:e.storage.map((o,s)=>t(v,{configuration:e.configuration,changeCurrentStorage:i,url:A.otherVersions[s],value:o,className:`${A.configuration.internalMemory===+o?n.active:""}`},o))}),t(c,{price:A.price}),a("div",{className:"flex-vt-ct",children:[t(f,{ratingAverage:A.ratingAverage,ratingQuantity:A.ratingQuantity,className:n.reviews}),t("span",{className:n.quantity,children:A.ratingQuantity})]}),a("ul",{className:n["configuration-list"],children:[a("li",{children:["M\xE0n h\xECnh ",e.configuration.screen.inch,'"",',e.configuration.screen.technology]}),a("li",{children:["CPU ",e.configuration.cpu.type," ",e.configuration.cpu.version]}),a("li",{children:["CPU ",e.configuration.cardScreen.type]}),a("li",{children:["Pin ",e.configuration.battery.capacity," mAh,S\u1EA1c",e.configuration.battery.charge,"W"]})]})]})})},z=({laptops:r})=>t(u,{className:L.list,children:r.map(A=>t(b,{laptop:A},A._id))}),x="_laptop_tk4vr_14",Y={laptop:x},R="/assets/slider-1.b8870523.png",X="/assets/slider-2.c2ae3cd4.png",B="/assets/slider-3.deffe56b.png",y="/assets/slider-4.e912870a.png",Z="data:image/png;base64,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",D="data:image/png;base64,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",M="data:image/png;base64,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",K=()=>{const r=[{id:1,path:"#",slide:R},{id:2,path:"#",slide:X},{id:3,path:"#",slide:B},{id:4,path:"#",slide:y}],e=[{id:1,title:"H\xE3ng",content:[{id:1,"data-firm":"MacBook",content:t("img",{src:Z,alt:"MacbookLOGO"})},{id:2,"data-firm":"Acer",content:t("img",{src:D,alt:"AcerLogo"})},{id:3,"data-firm":"Lenovo",content:t("img",{src:M,alt:"LenovoLogo"})}]},{id:2,title:"Gi\xE1",content:[{id:1,"data-lt":3e7,content:t("p",{children:"D\u01B0\u1EDBi 30 tri\u1EC7u"})},{id:3,"data-gt":3e7,content:t("p",{children:"Tr\xEAn 30 tri\u1EC7u"})}]}],{pathname:o}=P(),s=o.slice(1).toLowerCase();return{headerLinks:r,filterList:e,resource:s}},w=()=>{const r=d(),{headerLinks:A,filterList:i,resource:e}=K();return t(V,{title:"Laptops-TGDD",children:a("section",{className:Y.laptop,children:[t(F,{links:A}),t(p,{resource:e,filterList:i}),t(z,{laptops:r})]})})};export{w as default};
