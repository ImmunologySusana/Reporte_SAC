import{d,G as ke,y as Fe,z as Re,J as Oe,K as Te,o as B,c as Q,w as r,b as o,u as t,a,f as W,k as $e,B as ze,t as Y,e as Be,H as f,I as ae}from"./app-f6caa0b8.js";import{s as Z,h as Le}from"./calendar.esm-a9cbb87e.js";import{_ as He}from"./AppLayout-c50c8568.js";import{s as Ge,a as Xe,c as m,d as p,f as _,g as V,b as qe,e as oe}from"./toast.esm-7e3cf0c6.js";import{s as b}from"./button.esm-1a340f37.js";import{s as y}from"./textarea.esm-56b0f05e.js";import{s as Je}from"./chart.esm-f817c050.js";import Ke from"./graficaHM-8033a143.js";import"./index.esm-b3ee4bca.js";const Qe=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Ing. en Tecnología Automotriz ",-1),We={class:"max-w-[99.9%] m-auto p-2"},Ye={id:"contenedorGraficaTabla"},Ze={id:"contenedorGraficas",class:"w-full flex items-center flex-col gap-0.2 mt-15 mb-20"},el={id:"graficas",class:"flex justify-center items-center w-full mb-20"},ll={id:"chartCategorias",class:"w-full"},al={id:"chartEstatus",class:"w-full"},ol={class:"w-full flex gap-5 mt-500"},tl={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},il={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},sl=a("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[a("p",{class:"text-sm font-medium uppercase text-gray-500"}," En Proceso ")],-1),nl={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},ul={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},dl=a("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[a("p",{class:"text-sm font-medium uppercase text-gray-500"}," Concluidos ")],-1),rl={class:"group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8 w-1/3"},cl={class:"text-3xl font-bold text-indigo-600 sm:text-3xl"},pl=a("div",{class:"mt-2 border-t-2 border-gray-100 pt-4"},[a("p",{class:"text-sm font-medium uppercase text-gray-500"}," Cancelados ")],-1),ml={class:"contendorTabla"},vl={class:"cc"},fl={class:"flex flex-wrap align-items-center justify-between gap-4"},hl={class:"text-xl text-900 font-bold"},bl={class:"p-input-icon-left",style:{"margin-right":"10px"}},gl=a("i",{class:"pi pi-search"},null,-1),_l={key:0,id:"miDiv",class:"flex flex-wrap justify-center gap-4 items-center"},Vl={class:"p-input-icon-left"},yl=a("i",{class:"pi pi-search"},null,-1),xl={class:"p-input-icon-left"},wl=a("i",{class:"pi pi-search"},null,-1),Cl={class:"p-input-icon-left"},Ul=a("i",{class:"pi pi-search"},null,-1),Ml={class:"p-input-icon-left"},Il=a("i",{class:"pi pi-search"},null,-1),Pl={class:"p-input-icon-left"},El=a("i",{class:"pi pi-search"},null,-1),Sl={class:"p-input-icon-left"},Al=a("i",{class:"pi pi-search"},null,-1),Nl={class:"p-input-icon-left"},Dl=a("i",{class:"pi pi-search"},null,-1),jl={class:"p-input-icon-left"},kl=a("i",{class:"pi pi-search"},null,-1),Fl={class:"p-input-icon-left"},Rl=a("i",{class:"pi pi-search"},null,-1),Ol={class:"p-input-icon-left"},Tl=a("i",{class:"pi pi-search"},null,-1),$l={class:"p-input-icon-left"},zl=a("i",{class:"pi pi-search"},null,-1),Bl={class:"p-input-icon-left"},Ll=a("i",{class:"pi pi-search"},null,-1),Hl=a("template",null,null,-1),Gl=a("div",{class:"flex justify-center align-middle text-xl"},[a("h2",null,"No se encontraron datos")],-1),Xl=a("label",{for:"carrera",class:"mb-3"},"Programa Educativo",-1),ql=a("label",{for:"minmax"},"Proyecto / Actividad",-1),Jl={class:"mt-7 flex gap-5 justify-center"},Kl={class:"w-full"},Ql={class:"p-float-label"},Wl=a("label",null,"Descripción",-1),Yl={class:"w-full"},Zl={class:"p-float-label"},ea=a("label",null,"Beneficios / Impacto",-1),la={class:"w-full mt-6"},aa={class:"p-float-label"},oa=a("label",null,"Responsable",-1),ta={class:"w-full mt-6"},ia={class:"p-float-label"},sa=a("label",null,"Involucrados",-1),na=a("label",{for:"pdi"},"PDI",-1),ua={class:"flex items-center gap-5 mt-2 justify-center"},da={class:"w-full"},ra=a("label",{for:"fecha_inicio"},"Fecha Inicio",-1),ca={class:"w-full"},pa=a("label",{for:"fecha_fin"},"Fecha Término",-1),ma={class:"flex items-center justify-center gap-4 mt-3 text-center m-auto w-2/3"},va=a("label",{for:"unidad1",class:"mb-3"},"Unidad",-1),fa=a("label",{for:"hombres1"},"H",-1),ha=a("label",{for:"mujeres1"},"M",-1),ba={class:"flex items-center justify-center m-auto gap-4 mt-3 text-center w-2/3"},ga=a("label",{for:"unidad2",class:"mb-3"},"Unidad",-1),_a=a("label",{for:"hombres2"},"H",-1),Va=a("label",{for:"mujeres2"},"M",-1),ya={class:"text-center w-2/6 m-auto mt-3"},xa=a("label",{for:"cantidad"},"Cantidad",-1),wa={class:"flex items-center gap-3 text-center mt-4"},Ca={class:"w-1/2"},Ua=a("label",{for:"estatus",class:"mb-3"},"Estatus",-1),Ma={class:"w-1/2"},Ia=a("label",{for:"categoria",class:"mb-3"},"Categoria",-1),Pa={class:"w-full mt-6"},Ea={class:"p-float-label"},Sa=a("label",null,"Especificar",-1),Aa=a("div",{class:"confirmation-content flex justify-center items-center"},[a("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),a("span",null,"¿Esta seguro de eliminar los registro(s) seleccionado(s)?")],-1),za={__name:"Automotriz",props:{registrosAutomotriz:{type:Array,required:!0},enProcesoCount:{type:Number},concluidoCount:{type:Number},canceladoCount:{type:Number},acreditacionCount:{type:Number},capacitacionCount:{type:Number},CertificaciónCompetenciasCount:{type:Number},eventoCount:{type:Number},investigacionCount:{type:Number},materialEducativoCount:{type:Number},planDeEstudioCount:{type:Number},proyectoCount:{type:Number},otroCount:{type:Number},countEstatus:{type:Array}},setup(E){const v=E,n=d({global:{value:null,matchMode:f.CONTAINS},programa_educativo:{value:null,matchMode:f.CONTAINS},proyecto_actividad:{value:null,matchMode:f.CONTAINS},descripcion:{value:null,matchMode:f.CONTAINS},beneficios_impacto:{value:null,matchMode:f.CONTAINS},responsable:{value:null,matchMode:f.CONTAINS},involucrados:{value:null,matchMode:f.CONTAINS},PDI:{value:null,matchMode:f.CONTAINS},especificar:{value:null,matchMode:f.CONTAINS},categoria:{value:null,matchMode:f.CONTAINS},estatus:{value:null,matchMode:f.CONTAINS},fecha_inicio:{value:null,matchMode:f.CONTAINS},fecha_fin:{value:null,matchMode:f.CONTAINS}}),h=d(),te=d([]),ie=d(),T=d(!1),$=d(!1),L=ke(),me="No se encontraron datos",S=d(null),A=d(null),N=d(null),D=d(null),H=d(!1),G=d(""),X=d(),j=d(null),x=d(),w=d(),k=d(),C=d(0),U=d(0),F=d(),M=d(0),I=d(0),P=d(0),R=d(),O=d(),q=d();d();const se=d([{nombre:"Ing. en Tecnología Automotriz",value:"Ing. en Tecnología Automotriz"}]),J=d([{nombre:"Asignatura",value:"Asignatura"},{nombre:"Convenio",value:"Convenio"},{nombre:"Docentes",value:"Docentes"},{nombre:"Empresas",value:"Empresas"},{nombre:"Estudiantes",value:"Estudiantes"},{nombre:"Programa",value:"Programa"},{nombre:"Proyecto",value:"Proyecto"},{nombre:"Publicaciones",value:"Publicaciones"},{nombre:"Reglamento",value:"Reglamento"},{nombre:"Otro",value:"Otro"},{nombre:"No aplica",value:"No aplica"}]),ne=d([{nombre:"En proceso",value:"En proceso"},{nombre:"Concluido",value:"Concluido"},{nombre:"Cancelado",value:"Cancelado"}]),ue=d([{nombre:"Acreditación",value:"Acreditación"},{nombre:"Capacitación",value:"Capacitación"},{nombre:"Certificación-Competencias",value:"Certificación-Competencias"},{nombre:"Evento",value:"Evento"},{nombre:"Investigación",value:"Investigación"},{nombre:"Material educativo",value:"Material educativo"},{nombre:"Plan de estudio",value:"Plan de estudio"},{nombre:"Proyecto",value:"Proyecto"},{nombre:"Otro",value:"Otro"}]),ve=s=>{s.data},fe=s=>{},he=()=>{T.value=!0},be=()=>{T.value=!1};function ge(){P.value=U.value+C.value+I.value+M.value}Fe([U,C,I,M],()=>{ge()});const _e=()=>{H.value=!0},Ve=()=>{H.value=!1},ye=()=>{$.value=!0},xe=()=>{const s={id:h.value.map(e=>e.id)};ae.Inertia.post("/eliminar-automotriz",s,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{$.value=!1,h.value=null,z.value=K(),L.add({severity:"success",summary:"Exito",detail:"Eliminado exitosamente",life:3e3})}})},we=()=>{if(S.value==null||S.value<0||A.value==null||A.value<0||N.value==null||N.value<0||D.value==null||D.value<0||j.value==null||j.value<0||x.value==null||x.value<0||w.value==null||w.value<0||P.value==null||P.value<0||k.value==null||k.value<0||C.value==null||C.value<0||U.value==null||U.value<0||F.value==null||F.value<0||M.value==null||M.value<0||I.value==null||I.value<0||R.value==null||R.value<0||O.value==null||O.value<0){L.add({severity:"error",summary:"Campos faltantes",detail:"Por favor, llena todos los campos del formulario",life:3e3});return}else{const s={programaEducativo:S.value,proyecto_actividad:A.value,descripcion:N.value,beneficios_impacto:D.value,responsable:G.value,involucrados:X.value,pdi:j.value,fecha_inicio:x.value,fecha_fin:w.value,cantidad:P.value,unidad1:k.value,mujeres1:C.value,hombres1:U.value,unidad2:F.value,mujeres2:M.value,hombres2:I.value,estatusModel:R.value,categoria:O.value,especificar:q.value};ae.Inertia.post("/registro-automotriz",s,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{T.value=!1,S.value=null,A.value=null,N.value=null,D.value=null,j.value=null,x.value=null,w.value=null,k.value=null,C.value=0,U.value=0,F.value=null,M.value=0,I.value=0,P.value=0,R.value=null,O.value=null,q.value=null,G.value=null,X.value=null,z.value=K(),L.add({severity:"success",summary:"Exito",detail:"Registro exitoso",life:3e3})}})}},de=()=>{const s=w.value,e={year:"numeric",month:"2-digit",day:"2-digit"},c=s.toLocaleDateString("es-MX",e);w.value=c},re=()=>{const s=x.value,e={year:"numeric",month:"2-digit",day:"2-digit"},c=s.toLocaleDateString("es-MX",e);x.value=c},Ce=s=>{let{newData:e}=s;const c={id:e.id,programaEducativo:e.programa_educativo,proyecto_actividad:e.proyecto_actividad,descripcion:e.descripcion,beneficios_impacto:e.beneficios_impacto,pdi:e.PDI,fecha_inicio:e.fecha_inicio,fecha_fin:e.fecha_fin,cantidad:e.cantidad,cantidad:e.cantidad,unidad1:e.unidad,hombres1:e.hombres1,mujeres1:e.mujeres1,unidad2:e.unidad2,hombres2:e.hombres2,mujeres2:e.mujeres2,estatusModel:e.estatus,categoria:e.categoria,especificar:e.especificar};ae.Inertia.post(`/editar-automotriz/${e.id}`,c,{preserveState:!0,preserveScroll:!0,onSuccess:()=>{z.value=K(),L.add({severity:"success",summary:"Exito",detail:"Editado correctamente",life:3e3})}})},Ue=()=>{ie.value.exportCSV()},z=d(),ce=d(),K=()=>{const s=getComputedStyle(document.documentElement),e=v.registrosAutomotriz.reduce((l,i)=>l+i.hombres1+i.hombres2,0),c=v.registrosAutomotriz.reduce((l,i)=>l+i.mujeres1+i.mujeres2,0);return{labels:["Cantidad"],datasets:[{label:"Hombres",backgroundColor:s.getPropertyValue("--blue-500"),borderColor:s.getPropertyValue("--blue-500"),data:[e]},{label:"Mujeres",backgroundColor:s.getPropertyValue("--pink-500"),borderColor:s.getPropertyValue("--pink-500"),data:[c]}]}},Me=()=>{const s=getComputedStyle(document.documentElement),e=s.getPropertyValue("--text-color"),c=s.getPropertyValue("--text-color-secondary"),l=s.getPropertyValue("--surface-border");return{indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{fontColor:e}}},scales:{x:{ticks:{color:c,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:c},grid:{color:l,drawBorder:!1}}}}};Re(()=>{z.value=K(),ce.value=Me(),console.log(v.registrosAutomotriz)});const g=d("Título inicial"),pe=()=>{let s;const e=v.countEstatus;return g.value==="Acreditación"?s=[e[0],e[1],e[2]]:g.value==="Capacitación"?s=[e[3],e[4],e[5]]:g.value==="Certificación-Competencias"?s=[e[6],e[7],e[8]]:g.value==="Evento"?s=[e[9],e[10],e[11]]:g.value==="Investigación"?s=[e[12],e[13],e[14]]:g.value==="Material educativo"?s=[e[15],e[16],e[17]]:g.value==="Plan de estudio"?s=[e[18],e[19],e[20]]:g.value==="Proyecto"?s=[e[21],e[22],e[23]]:g.value==="Otro"?s=[e[24],e[25],e[26]]:s=[0,0,0],s},Ie=()=>({chart:{id:"char-estatus",type:"pie"},labels:["En proceso","Concluido","Cancelado"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"top"}}}],colors:["#008FFB","#00E396","#900C3F"],dataLabels:{enabled:!0,dropShadow:{enabled:!1},style:{fontSize:"14px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:"bold",colors:["#fff"]}},chart:{toolbar:{show:!0}},title:{text:g.value,align:"bottom",style:{fontSize:"16px",color:"#666"}}}),Pe={chart:{type:"bar",height:390},plotOptions:{bar:{barHeight:"100%",distributed:!0,horizontal:!0,dataLabels:{position:"bottom"}}},dataLabels:{enabled:!0,textAnchor:"start",style:{colors:["#fff"]},formatter:function(s,e){return e.w.globals.labels[e.dataPointIndex]+":  "+s},offsetX:0,dropShadow:{enabled:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:["Acreditación","Capacitación","Certificación-Competencias","Evento","Investigación","Material educativo","Plan de estudio","Proyecto","Otro"]},yaxis:{labels:{show:!1}},colors:["#008FFB","#00E396","#900C3F","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8","#FF8F00"],title:{text:"Categorias",align:"bottom",style:{fontSize:"16px",color:"#666"}},tooltip:{theme:"dark",x:{show:!1},y:{title:{formatter:function(){return""}}}}},Ee=[{data:[v.acreditacionCount,v.capacitacionCount,v.CertificaciónCompetenciasCount,v.eventoCount,v.investigacionCount,v.materialEducativoCount,v.planDeEstudioCount,v.proyectoCount,v.otroCount]}],Se=()=>{const s=document.createElement("div");s.innerHTML=`
            <div id="heading" class="flex justify-between">
                 <div id="img1">
                     <img  src="images/UPQLOGOREDONDO.png" alt="Logo-UTVT-1"  width="100px !import">
                </div>
                <div id="img2">
                    <img  src="images/RSAC-logos_transparent.png" alt="Logo-UTVT-1"  width="100px">
                </div>
            </div>
                <div>
                    <div>
                        <h3 class="text-xl font-bold text-indigo-600 sm:text-3xl m-5">
                            RSAC - Reporte de Proyectos y Actividades
                        </h3>
                     </div>
                     <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                        <thead class="ltr:text-left rtl:text-right">
                            <tr class='text-left'>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Programa Educativo</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Proyecto/Actividad</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Responsable</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Estatus</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Categoria</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">PDI</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha Inicio</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Fecha Fin</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Unidades</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hombres</th>
                                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mujeres</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            ${h.value.map(c=>`
                                    <tr class="odd:bg-gray-50">
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.programa_educativo}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.proyecto_actividad}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.responsable}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.estatus}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.categoria}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.PDI}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.fecha_inicio}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.fecha_fin}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.unidad+" - "+c.unidad2}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.hombres1+c.hombres2}</td>
                                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">${c.mujeres1+c.mujeres2}</td>
                                    </tr>
                                `).join("")}
                        </tbody>
                    </table>
                </div
            </div>

        `;const e={margin:0,filename:"reporte.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"landscape",format:[14,20]}};Le().from(s).set(e).save()},ee=d(!0),Ae=()=>{ee.value=!ee.value},Ne=()=>{n.value.responsable.value=null,n.value.involucrados.value=null,n.value.PDI.value=null,n.value.programa_educativo.value=null,n.value.beneficios_impacto.value=null,n.value.proyecto_actividad.value=null,n.value.descripcion.value=null,n.value.global.value=null,n.value.fecha_inicio.value=null,n.value.fecha_fin.value=null,n.value.categoria.value=null,n.value.especificar.value=null,n.value.estatus.value=null},le=d(!1);function De(s,e,c){if(c.dataPointIndex!=-1){const l=e.w.globals.labels[c.dataPointIndex];g.value=l,je()}else le.value=!1}function je(){le.value=!0}return Oe(()=>{pe(),window.dispatchEvent(new Event("resize"))}),(s,e)=>{const c=Te("apexchart");return B(),Q(He,{title:"Automotriz",class:"z-10"},{header:r(()=>[Qe,o(t(Ge))]),default:r(()=>[a("div",We,[o(t(Xe),{class:"mb-4"},{start:r(()=>[s.is("Automotriz-registrar || Administrador || SecretarioAcademico")?(B(),Q(t(b),{key:0,label:"Registrar",icon:"pi pi-plus",severity:"success",class:"!mr-3",onClick:he})):W("",!0),s.is("Automotriz-eliminar || Administrador || SecretarioAcademico")?(B(),Q(t(b),{key:1,label:"Eliminar",icon:"pi pi-trash",severity:"danger",onClick:ye,disabled:!h.value||!h.value.length},null,8,["disabled"])):W("",!0),o(t(b),{label:"Grafica",icon:"pi pi-chart-bar",class:"!ml-3",onClick:_e,disabled:!h.value||!h.value.length},null,8,["disabled"]),o(t(b),{label:"PDF",icon:"pi pi-file-excel",class:"!ml-3",onClick:Se,disabled:!h.value||!h.value.length},null,8,["disabled"])]),end:r(()=>[o(t(b),{label:"Excel",icon:"pi pi-upload",severity:"help",onClick:e[0]||(e[0]=l=>Ue(l))})]),_:1}),a("div",Ye,[o(t(Je),{id:"table-content",type:"bar",data:z.value,options:ce.value,class:"h-full"},null,8,["data","options"]),a("div",Ze,[a("div",el,[a("div",ll,[o(c,{type:"bar",height:"430",width:"99%",options:Pe,series:Ee,onClick:De})]),$e(a("div",al,[o(c,{type:"pie",height:"250",options:Ie(),series:pe(),ref:"pieChart"},null,8,["options","series"])],512),[[ze,le.value]])]),a("div",ol,[a("div",tl,[a("div",null,[a("h3",il,Y(E.enProcesoCount),1),sl])]),a("div",nl,[a("div",null,[a("h3",ul,Y(E.concluidoCount),1),dl])]),a("div",rl,[a("div",null,[a("h3",cl,Y(E.canceladoCount),1),pl])])])]),a("div",ml,[o(t(qe),{value:E.registrosAutomotriz,ref_key:"dt",ref:ie,class:"p-datatable-sm",showGridlines:"",stripedRows:"",paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],selection:h.value,"onUpdate:selection":e[14]||(e[14]=l=>h.value=l),onRowSelect:ve,onRowUnselect:fe,filters:n.value,emptyMessage:me,editingRows:te.value,"onUpdate:editingRows":e[15]||(e[15]=l=>te.value=l),editMode:"row",onRowEditSave:Ce},{header:r(()=>[a("div",vl,[a("div",fl,[a("span",hl,[o(t(b),{label:"Filtros",severity:"help",onClick:Ae})]),a("span",bl,[gl,o(t(m),{modelValue:n.value.global.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value.global.value=l),placeholder:"buscador"},null,8,["modelValue"])]),o(t(b),{label:"limpiar",icon:"pi pi-trash",severity:"!ml-3",onClick:Ne}),a("span",null," Total Proyectos Registrados: "+Y(E.registrosAutomotriz.length),1),ee.value?W("",!0):(B(),Be("div",_l,[a("span",Vl,[yl,o(t(m),{modelValue:n.value.programa_educativo.value,"onUpdate:modelValue":e[2]||(e[2]=l=>n.value.programa_educativo.value=l),placeholder:"Programa Educativo"},null,8,["modelValue"])]),a("span",xl,[wl,o(t(m),{modelValue:n.value.proyecto_actividad.value,"onUpdate:modelValue":e[3]||(e[3]=l=>n.value.proyecto_actividad.value=l),placeholder:"Proyecto/Actividad"},null,8,["modelValue"])]),a("span",Cl,[Ul,o(t(m),{modelValue:n.value.descripcion.value,"onUpdate:modelValue":e[4]||(e[4]=l=>n.value.descripcion.value=l),placeholder:"Descripcion"},null,8,["modelValue"])]),a("span",Ml,[Il,o(t(m),{modelValue:n.value.beneficios_impacto.value,"onUpdate:modelValue":e[5]||(e[5]=l=>n.value.beneficios_impacto.value=l),placeholder:"Beneficios/Impacto"},null,8,["modelValue"])]),a("span",Pl,[El,o(t(m),{modelValue:n.value.responsable.value,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value.responsable.value=l),placeholder:"Responsable"},null,8,["modelValue"])]),a("span",Sl,[Al,o(t(m),{modelValue:n.value.involucrados.value,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value.involucrados.value=l),placeholder:"Involucrados"},null,8,["modelValue"])]),a("span",Nl,[Dl,o(t(m),{modelValue:n.value.PDI.value,"onUpdate:modelValue":e[8]||(e[8]=l=>n.value.PDI.value=l),placeholder:"PDI"},null,8,["modelValue"])]),a("span",jl,[kl,o(t(m),{modelValue:n.value.fecha_inicio.value,"onUpdate:modelValue":e[9]||(e[9]=l=>n.value.fecha_inicio.value=l),placeholder:"fecha_inicio"},null,8,["modelValue"])]),a("span",Fl,[Rl,o(t(m),{modelValue:n.value.fecha_fin.value,"onUpdate:modelValue":e[10]||(e[10]=l=>n.value.fecha_fin.value=l),placeholder:"fecha_fin"},null,8,["modelValue"])]),a("span",Ol,[Tl,o(t(m),{modelValue:n.value.categoria.value,"onUpdate:modelValue":e[11]||(e[11]=l=>n.value.categoria.value=l),placeholder:"categoria"},null,8,["modelValue"])]),a("span",$l,[zl,o(t(m),{modelValue:n.value.estatus.value,"onUpdate:modelValue":e[12]||(e[12]=l=>n.value.estatus.value=l),placeholder:"Estatus"},null,8,["modelValue"])]),a("span",Bl,[Ll,o(t(m),{modelValue:n.value.especificar.value,"onUpdate:modelValue":e[13]||(e[13]=l=>n.value.especificar.value=l),placeholder:"Especificar"},null,8,["modelValue"])])])),Hl])])]),empty:r(()=>[Gl]),default:r(()=>[o(t(p),{selectionMode:"multiple",headerStyle:"width: 3rem"}),o(t(p),{field:"id",header:"ID",hidden:""}),o(t(p),{field:"programa_educativo",header:"Programa Educativo",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(_),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,options:se.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(p),{field:"proyecto_actividad",header:"Proyecto/Actividad",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(y),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"descripcion",header:"Descripción",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(y),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"beneficios_impacto",header:"Beneficios/Impacto",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(y),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"responsable",header:"Responsable",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(m),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"involucrados",header:"Involucrados",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(m),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"PDI",header:"PDI",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(y),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"fecha_inicio",header:"Fecha Inicio",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(Z),{id:"fecha_inicio",modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:re},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"fecha_fin",header:"Fecha Fin",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(Z),{id:"fecha_fin",modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:de},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"cantidad",header:"Cantidad",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(V),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"unidad",header:"Unidad",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(_),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,options:J.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(p),{field:"hombres1",header:"Hombres",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(V),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"mujeres1",header:"Mujeres",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(V),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"unidad2",header:"Unidad",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(_),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,options:J.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(p),{field:"hombres2",header:"Hombres",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(V),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"mujeres2",header:"Mujeres",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(V),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(t(p),{field:"estatus",header:"Estatus",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(_),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,options:ne.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(p),{field:"categoria",header:"Categoria",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(_),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,options:ue.value,optionLabel:"nombre",optionValue:"value"},null,8,["modelValue","onUpdate:modelValue","options"])]),_:1}),o(t(p),{field:"especificar",header:"Especificar",filter:!0,filterMatchMode:"in"},{editor:r(({data:l,field:i})=>[o(t(y),{modelValue:l[i],"onUpdate:modelValue":u=>l[i]=u,rows:"5",cols:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),s.is("Automotriz-editar || Administrador || SecretarioAcademico")?(B(),Q(t(p),{key:0,rowEditor:!0,style:{width:"10%","min-width":"8rem"},bodyStyle:"text-align:center"})):W("",!0)]),_:1},8,["value","selection","filters","editingRows"])])]),o(t(oe),{visible:T.value,"onUpdate:visible":e[35]||(e[35]=l=>T.value=l),style:{width:"650px"},header:"Registro nuevo",modal:!0,class:"p-fluid"},{footer:r(()=>[o(t(b),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:be}),o(t(b),{label:"Registrar",icon:"pi pi-check",text:"",onClick:we})]),default:r(()=>[Xl,o(t(_),{id:"carrera",modelValue:S.value,"onUpdate:modelValue":e[16]||(e[16]=l=>S.value=l),options:se.value,optionLabel:"nombre",optionValue:"value",placeholder:"Programa Educativo"},null,8,["modelValue","options"]),ql,o(t(m),{inputId:"proyecto_actividad",modelValue:A.value,"onUpdate:modelValue":e[17]||(e[17]=l=>A.value=l)},null,8,["modelValue"]),a("div",Jl,[a("div",Kl,[a("span",Ql,[o(t(y),{modelValue:N.value,"onUpdate:modelValue":e[18]||(e[18]=l=>N.value=l),rows:"5",cols:"30"},null,8,["modelValue"]),Wl])]),a("div",Yl,[a("span",Zl,[o(t(y),{modelValue:D.value,"onUpdate:modelValue":e[19]||(e[19]=l=>D.value=l),rows:"5",cols:"30"},null,8,["modelValue"]),ea])])]),a("div",la,[a("span",aa,[o(t(y),{modelValue:G.value,"onUpdate:modelValue":e[20]||(e[20]=l=>G.value=l),rows:"5",cols:"30"},null,8,["modelValue"]),oa])]),a("div",ta,[a("span",ia,[o(t(y),{modelValue:X.value,"onUpdate:modelValue":e[21]||(e[21]=l=>X.value=l),rows:"5",cols:"30"},null,8,["modelValue"]),sa])]),na,o(t(m),{inputId:"pdi",modelValue:j.value,"onUpdate:modelValue":e[22]||(e[22]=l=>j.value=l)},null,8,["modelValue"]),a("div",ua,[a("div",da,[ra,o(t(Z),{id:"fecha_inicio",modelValue:x.value,"onUpdate:modelValue":e[23]||(e[23]=l=>x.value=l),dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:re},null,8,["modelValue"])]),a("div",ca,[pa,o(t(Z),{id:"fecha_fin",modelValue:w.value,"onUpdate:modelValue":e[24]||(e[24]=l=>w.value=l),dateFormat:"dd-mm-yy",showIcon:"",onDateSelect:de},null,8,["modelValue"])])]),a("div",ma,[a("div",null,[va,o(t(_),{id:"unidad1",modelValue:k.value,"onUpdate:modelValue":e[25]||(e[25]=l=>k.value=l),options:J.value,optionLabel:"nombre",optionValue:"value",placeholder:"Unidad"},null,8,["modelValue","options"])]),a("div",null,[fa,o(t(V),{inputId:"hombres1",modelValue:U.value,"onUpdate:modelValue":e[26]||(e[26]=l=>U.value=l),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),a("div",null,[ha,o(t(V),{inputId:"mujeres1",modelValue:C.value,"onUpdate:modelValue":e[27]||(e[27]=l=>C.value=l),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])])]),a("div",ba,[a("div",null,[ga,o(t(_),{id:"unidad2",modelValue:F.value,"onUpdate:modelValue":e[28]||(e[28]=l=>F.value=l),options:J.value,optionLabel:"nombre",optionValue:"value",placeholder:"Unidad"},null,8,["modelValue","options"])]),a("div",null,[_a,o(t(V),{inputId:"hombres2",modelValue:I.value,"onUpdate:modelValue":e[29]||(e[29]=l=>I.value=l),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),a("div",null,[Va,o(t(V),{inputId:"mujeres2",modelValue:M.value,"onUpdate:modelValue":e[30]||(e[30]=l=>M.value=l),mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])])]),a("div",ya,[xa,o(t(V),{inputId:"cantidad",modelValue:P.value,"onUpdate:modelValue":e[31]||(e[31]=l=>P.value=l),disabled:"",mode:"decimal",min:0,max:1e4,showButtons:!0},null,8,["modelValue"])]),a("div",wa,[a("div",Ca,[Ua,o(t(_),{modelValue:R.value,"onUpdate:modelValue":e[32]||(e[32]=l=>R.value=l),options:ne.value,optionLabel:"nombre",optionValue:"value",placeholder:"Estatus"},null,8,["modelValue","options"])]),a("div",Ma,[Ia,o(t(_),{modelValue:O.value,"onUpdate:modelValue":e[33]||(e[33]=l=>O.value=l),options:ue.value,optionLabel:"nombre",optionValue:"value",placeholder:"Categoría"},null,8,["modelValue","options"])])]),a("div",Pa,[a("span",Ea,[o(t(y),{modelValue:q.value,"onUpdate:modelValue":e[34]||(e[34]=l=>q.value=l),rows:"5",cols:"30"},null,8,["modelValue"]),Sa])])]),_:1},8,["visible"]),o(t(oe),{visible:$.value,"onUpdate:visible":e[37]||(e[37]=l=>$.value=l),style:{width:"400px"},header:"Confirmar",modal:!0},{footer:r(()=>[o(t(b),{label:"Cancelar",icon:"pi pi-times",text:"",onClick:e[36]||(e[36]=l=>$.value=!1)}),o(t(b),{label:"Eliminar",icon:"pi pi-check",text:"",onClick:xe})]),default:r(()=>[Aa]),_:1},8,["visible"]),o(t(oe),{header:" ",visible:H.value,"onUpdate:visible":e[38]||(e[38]=l=>H.value=l),breakpoints:{"960px":"75vw","75vw":"90vw"},style:{width:"70vw"}},{footer:r(()=>[o(t(b),{label:"Cerrar",icon:"pi pi-check",onClick:Ve,autofocus:""})]),default:r(()=>[o(Ke,{class:"m-auto",datos:h.value},null,8,["datos"])]),_:1},8,["visible"])])]),_:1})}}};export{za as default};