import{s as t,r as d,j as r,u as h,a as g,f as b,e as m}from"./index-XLYgegeZ.js";import{D as j}from"./Delete-O1JlOT3K.js";const P=t.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 94%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  background-color: #fff;
  color: #333;

  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.2),
    0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.2),
      0 16px 20px rgba(0, 0, 0, 0.2);
  }
`,y=t.p`
  margin: 0;
  font-size: 22px;
  color: #333;
`,D=t.ul`
  display: flex;
  flex-direction: column;
`,w=t.li`
  font-size: 12px;
  color: #586b77;
`,v=t.li`
  font-size: 14px;
`,S=t.p`
  margin: 6px 0;
`,I=t.ul`
  display: flex;
  flex-direction: column;
`,T=t.li`
  font-size: 12px;
  color: #586b77;
`,k=t.li`
  font-size: 14px;
  color: #000;
`,L=t.p``,U=t.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: transparent;
  border: 2px solid #586b77;
  border-radius: 50%;

  cursor: pointer;
  padding: 0;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: transparent !important;
    border-color: #e1483dff;
    box-shadow: 0 0 5px rgba(118, 168, 67, 0.6);
  }
`,z=t(j)({fontSize:20,color:"#776758ff",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"}),A=d.memo(({product:o,orderId:p,onDelete:i})=>{const{title:l,type:x,guarantee:c,price:s}=o,u=s.filter(e=>e.isDefault===0).reduce((e,n)=>e+n.value,0),a=s.filter(e=>e.isDefault===1).reduce((e,n)=>e+n.value,0),f=()=>{i&&i({orderId:p,productId:o.id})};return r.jsxs(P,{children:[r.jsx(y,{children:l}),r.jsx(S,{children:x}),r.jsxs(D,{children:[r.jsx(w,{children:new Date(c.start).toLocaleDateString("ru-RU",{month:"2-digit",year:"numeric"}).replace(".","/")}),r.jsx(v,{children:new Date(c.end).toLocaleDateString("ru-RU",{day:"2-digit",month:"short",year:"numeric"}).replace(/\./g,"").replace(" г","").replace(/\s+/g,"/")})]}),r.jsxs(I,{children:[r.jsxs(T,{children:[u," $"]}),r.jsxs(k,{children:[a," UAH"]})]}),r.jsx(L,{children:o.orderTitle}),r.jsx(U,{onClick:f,children:r.jsx(z,{})})]})}),C=t.label`
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
`,E=t.select`
  width: 160px;
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,F=t.p`
  margin-top: 16px;
  font-style: italic;
  color: #777;
`,O=t.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=()=>{const[o,p]=d.useState("all"),i=h(),{orders:l,loading:x,error:c}=g(e=>e.orders);d.useEffect(()=>{i(b())},[i]);const s=d.useMemo(()=>l.flatMap(e=>e.products.map(n=>({...n,orderId:e._id,orderTitle:e.title}))),[l]),u=Array.from(new Set(s.map(e=>e.type))),a=d.useMemo(()=>o==="all"?s:s.filter(e=>e.type===o),[s,o]),f=(e,n)=>{i(m({orderId:e,productId:n}))};return x?r.jsx("div",{children:"Loading..."}):c?r.jsxs("div",{children:["Error: ",c]}):l.length===0?r.jsx("div",{children:"No orders available."}):r.jsxs(r.Fragment,{children:[r.jsxs(C,{children:["Тип продукта",r.jsxs(E,{"aria-label":"Тип продукта",value:o,onChange:e=>p(e.target.value),disabled:s.length===0,children:[r.jsx("option",{value:"all",children:"All"}),u.map(e=>r.jsx("option",{value:e,children:e},e))]})]}),a.length===0?r.jsx(F,{children:"No products found."}):r.jsx(O,{children:a.map(e=>r.jsx(A,{orderId:e.orderId,product:e,onDelete:()=>f(e.orderId,e.id)},`${e.orderId}-${e.id}`))})]})},M=t.section``,$=()=>r.jsx(M,{children:r.jsx(H,{})});export{$ as default};
