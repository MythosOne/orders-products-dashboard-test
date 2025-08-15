import{s as o,r as d,j as r,u as h,a as g,f as b,e as m}from"./index-pfnS4xOQ.js";import{D as j}from"./Delete-CxAUNDer.js";const P=o.li`
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
`,y=o.p`
  margin: 0;
  font-size: 22px;
  color: #333;
`,D=o.ul`
  display: flex;
  flex-direction: column;
`,w=o.li`
  font-size: 12px;
  color: #586b77;
`,v=o.li`
  font-size: 14px;
  color: #000;
`,S=o.p`
  margin: 6px 0;
`,I=o.ul`
  display: flex;
  flex-direction: column;
`,T=o.li`
  font-size: 12px;
  color: #586b77;
`,k=o.li`
  font-size: 14px;
  color: #000;
`,L=o.p``,U=o.button`
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
`,z=o(j)({fontSize:20,color:"#776758ff",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"}),A=d.memo(({product:t,orderId:p,onDelete:l})=>{const{title:i,type:x,guarantee:c,price:s}=t,u=s.filter(e=>e.isDefault===0).reduce((e,n)=>e+n.value,0),a=s.filter(e=>e.isDefault===1).reduce((e,n)=>e+n.value,0),f=()=>{l&&l({orderId:p,productId:t.id})};return r.jsxs(P,{children:[r.jsx(y,{children:i}),r.jsx(S,{children:x}),r.jsxs(D,{children:[r.jsx(w,{children:new Date(c.start).toLocaleDateString("ru-RU",{month:"2-digit",year:"numeric"}).replace(".","/")}),r.jsx(v,{children:new Date(c.end).toLocaleDateString("ru-RU",{day:"2-digit",month:"short",year:"numeric"}).replace(/\./g,"").replace(" г","").replace(/\s+/g,"/")})]}),r.jsxs(I,{children:[r.jsxs(T,{children:[u," $"]}),r.jsxs(k,{children:[a," UAH"]})]}),r.jsx(L,{children:t.orderTitle}),r.jsx(U,{onClick:f,children:r.jsx(z,{})})]})}),C=o.label`
  font-weight: 500;
  margin-bottom: 12px;
  display: block;
  color: #000;
`,E=o.select`
  width: 160px;
  margin-left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`,F=o.p`
  margin-top: 16px;
  font-style: italic;
  color: #777;
`,O=o.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,H=()=>{const[t,p]=d.useState("all"),l=h(),{orders:i,loading:x,error:c}=g(e=>e.orders);d.useEffect(()=>{l(b())},[l]);const s=d.useMemo(()=>i.flatMap(e=>e.products.map(n=>({...n,orderId:e._id,orderTitle:e.title}))),[i]),u=Array.from(new Set(s.map(e=>e.type))),a=d.useMemo(()=>t==="all"?s:s.filter(e=>e.type===t),[s,t]),f=(e,n)=>{l(m({orderId:e,productId:n}))};return x?r.jsx("div",{children:"Loading..."}):c?r.jsxs("div",{children:["Error: ",c]}):i.length===0?r.jsx("div",{children:"No orders available."}):r.jsxs(r.Fragment,{children:[r.jsxs(C,{children:["Тип продукта",r.jsxs(E,{"aria-label":"Тип продукта",value:t,onChange:e=>p(e.target.value),disabled:s.length===0,children:[r.jsx("option",{value:"all",children:"All"}),u.map(e=>r.jsx("option",{value:e,children:e},e))]})]}),a.length===0?r.jsx(F,{children:"No products found."}):r.jsx(O,{children:a.map(e=>r.jsx(A,{orderId:e.orderId,product:e,onDelete:()=>f(e.orderId,e.id)},`${e.orderId}-${e.id}`))})]})},M=o.section``,$=()=>r.jsx(M,{children:r.jsx(H,{})});export{$ as default};
