import{d as r,z as l,K as s,o as m,e as p,b as P,u as t}from"./app-f6caa0b8.js";const N={id:"chart"},f={__name:"radialTotalsChart",props:{enProcesoAutomotriz:{type:Number},enProcesoCoordinacion:{type:Number},enProcesoLAGE:{type:Number},enProcesoManufactura:{type:Number},enProcesoMecatronica:{type:Number},enProcesoNegocio:{type:Number},enProcesoPosgrado:{type:Number},enProcesoRede:{type:Number},enProcesoSistema:{type:Number},concluidoAutomotriz:{type:Number},concluidoCoordinacion:{type:Number},concluidoLAGE:{type:Number},concluidoManufactura:{type:Number},concluidoMecatronica:{type:Number},concluidoNegocio:{type:Number},concluidoPosgrado:{type:Number},concluidoRede:{type:Number},concluidoSistema:{type:Number},canceladoAutomotriz:{type:Number},canceladoCoordinacion:{type:Number},canceladoLAGE:{type:Number},canceladoManufactura:{type:Number},canceladoMecatronica:{type:Number},canceladoNegocio:{type:Number},canceladoPosgrado:{type:Number},canceladoRede:{type:Number},canceladoSistema:{type:Number}},setup(i){const o=i;let c=r([]),a=r({});return l(()=>{}),c=[o.enProcesoAutomotriz+o.enProcesoCoordinacion+o.enProcesoLAGE+o.enProcesoManufactura+o.enProcesoMecatronica+o.enProcesoNegocio+o.enProcesoPosgrado+o.enProcesoRede+o.enProcesoSistema,o.concluidoAutomotriz+o.concluidoCoordinacion+o.concluidoLAGE+o.concluidoManufactura+o.concluidoMecatronica+o.concluidoNegocio+o.concluidoPosgrado+o.concluidoRede+o.concluidoSistema,o.canceladoAutomotriz+o.canceladoCoordinacion+o.canceladoLAGE+o.canceladoManufactura+o.canceladoMecatronica+o.canceladoNegocio+o.canceladoPosgrado+o.canceladoRede+o.canceladoSistema],a={chart:{height:350,type:"radialBar"},title:{text:"Estatus de Proyectos",align:"center",style:{fontSize:"16px",color:"#666"}},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(u){let n=o.enProcesoAutomotriz+o.enProcesoCoordinacion+o.enProcesoLAGE+o.enProcesoManufactura+o.enProcesoMecatronica+o.enProcesoNegocio+o.enProcesoPosgrado+o.enProcesoRede+o.enProcesoSistema,e=o.concluidoAutomotriz+o.concluidoCoordinacion+o.concluidoLAGE+o.concluidoManufactura+o.concluidoMecatronica+o.concluidoNegocio+o.concluidoPosgrado+o.concluidoRede+o.concluidoSistema,d=o.canceladoAutomotriz+o.canceladoCoordinacion+o.canceladoLAGE+o.canceladoManufactura+o.canceladoMecatronica+o.canceladoNegocio+o.canceladoPosgrado+o.canceladoRede+o.canceladoSistema;return n+e+d}}}}},labels:["En Proceso","Concluido","Cancelado","Total"],colors:["#1ab7ea","#0084ff","#39539E"]},(u,n)=>{const e=s("apexchart");return m(),p("div",N,[P(e,{type:"radialBar",height:"350",options:t(a),series:t(c)},null,8,["options","series"])])}}};export{f as default};