"use strict";(self.webpackChunkmiraplay_test_client=self.webpackChunkmiraplay_test_client||[]).push([[413],{7413:(e,n,r)=>{r.r(n),r.d(n,{default:()=>F});var o,i,a,t,s,l,d=r(4270),c=r(5705),m=r(8007),p=r(1933),u=r(7689),x=r(168),g=r(7647);const h=g.Z.div(o||(o=(0,x.Z)(["\nmargin-top: 35px;\nmargin-left: auto;\nmargin-right: auto;\nbackground-color: black;\nwidth: 475px;\nheight: 500px;\nborder: 1px solid black;\nboder-radius: 20px;\nbackground: rgb(8,8,17);\nbackground: linear-gradient(90deg, rgba(8,8,17,1) 0%, rgba(4,8,3,1) 0%, rgba(39,107,39,1) 28%, rgba(29,29,31,1) 100%);\n"]))),b=(0,g.Z)(c.l0)(i||(i=(0,x.Z)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    \n"]))),w=(0,g.Z)(c.gN)(a||(a=(0,x.Z)(["\n    font-size: 16px;\n    width: 300px;\n    height: 30px;\n    margin-bottom: 15px;\n    padding: 5px;\n    border-radius: 5px;\n    outline-color: #34c734;\n    border-color: black;\n    font-weight: 700;\n"]))),f=(0,g.Z)(c.Bc)(t||(t=(0,x.Z)(["\n    display: flex;\n    width: 300px;\n    text-align: center;\n    color: red;\n    margin-bottom: 15px;\n    font-weight: 500;\n    font-size: 16px;      \n"]))),j=g.Z.label(s||(s=(0,x.Z)(["\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 5px;\n    color: white;\n"]))),Z=g.Z.button(l||(l=(0,x.Z)(["\n    width: 150px;\n    height: 40px;\n    background-color: #34c734;\n    border: none;\n    border-radius: 5px;\n    font-size: 16px;\n    font-weight: 700;\n    cursor: pointer;\n    outline-color: #34c734;\n    "])));var y=r(8479),k=r(9434),v=r(3541),_=r(184);const q=m.Ry().shape({name:m.Z_().required(),email:m.Z_().email(""),password:m.Z_().min(6).required()}),z=()=>{const e=(0,p.useQueryClient)(),n=(0,u.s0)(),r=(0,k.I0)(),o=(0,p.useMutation)(y.z2,{onSuccess:async o=>{r((0,v.pV)()),console.log("RegisterForm.jsx - Login successful",o),await e.invalidateQueries("user"),console.log("Navigating to /games..."),n("/games")},onError:e=>{console.error("Registration error",e)}});return(0,_.jsx)(h,{children:(0,_.jsx)(c.J9,{initialValues:{email:"",password:"",name:""},onSubmit:(e,n)=>{let{resetForm:r}=n;o.mutate(e),r()},validationSchema:q,children:(0,_.jsxs)(b,{autoComplete:"off",children:[(0,_.jsx)(j,{htmlFor:"email",children:"E-mail"}),(0,_.jsx)(w,{type:"email",name:"email",placeholder:"Please, enter your E-mail",required:!0}),(0,_.jsx)(f,{name:"email",component:"div"}),(0,_.jsx)(j,{htmlFor:"password",children:"Password"}),(0,_.jsx)(w,{type:"password",name:"password",placeholder:"Please, enter your Password",required:!0}),(0,_.jsx)(f,{name:"password",component:"div"}),(0,_.jsx)(j,{htmlFor:"name",children:"Name"}),(0,_.jsx)(w,{type:"name",name:"name",placeholder:"Please, enter your Name",required:!0}),(0,_.jsx)(f,{name:"name",component:"div"}),(0,_.jsx)(Z,{type:"submit",children:"Register"})]})})})};function F(){return(0,_.jsxs)("div",{children:[(0,_.jsx)(d.q,{children:(0,_.jsx)("title",{children:"Registration"})}),(0,_.jsx)(z,{})]})}}}]);
//# sourceMappingURL=413.49762f8c.chunk.js.map