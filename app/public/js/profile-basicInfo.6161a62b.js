(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-basicInfo"],{4052:function(e,t,s){},5176:function(e,t,s){e.exports=s("51b6")},ac4c:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"basic-info"},[s("div",{staticClass:"basic-info-head"},[s("div",{staticClass:"head-title"},[e._v("基本信息")]),e.amI?s("div",{staticClass:"head-opt"},[e.isEdit?s("el-button",{attrs:{size:"small"},on:{click:e.cancel}},[e._v("取消")]):e._e(),e.isEdit?s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.saveUserInfo}},[e._v("保存")]):s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.editUserInfo}},[e._v("编辑")])],1):e._e()]),s("div",{staticClass:"basic-info-main"},[s("el-form",{ref:"basicInfoForm",attrs:{model:e.form,rules:e.rules,"label-width":"100px","label-position":"right","hide-required-asterisk":!0}},[e.isEdit?s("div",[s("el-form-item",{attrs:{label:e.meOrHim+"的昵称：",prop:"nickName"}},[s("el-input",{staticClass:"form-input",model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),s("el-form-item",{attrs:{label:"个性签名：",prop:"personSign"}},[s("el-input",{model:{value:e.form.personSign,callback:function(t){e.$set(e.form,"personSign",t)},expression:"form.personSign"}})],1),s("el-form-item",{attrs:{label:e.meOrHim+"的性别："}},[s("a",{class:{"sex-box":!0,male:!0,selected:1===e.form.gender},attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.setGender(1)}}},[s("svg",{staticClass:"icon sex-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-male"}})]),s("span",[e._v("男生")])]),s("a",{class:{"sex-box":!0,female:!0,selected:0===e.form.gender},attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.setGender(0)}}},[s("svg",{staticClass:"icon sex-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-female"}})]),s("span",[e._v("女生")])])]),s("el-form-item",{attrs:{label:e.meOrHim+"的学历："}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.eduLevel,callback:function(t){e.$set(e.form,"eduLevel",t)},expression:"form.eduLevel"}},e._l(e.eduLevelOpt,function(e,t){return s("el-option",{key:t,attrs:{label:e,value:e}})}),1)],1),s("el-form-item",{attrs:{label:"联系方式："}},[s("el-input",{staticClass:"form-input",model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e.form.role<=3?s("el-form-item",{attrs:{label:"身份类型："}},[s("el-radio-group",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",e._n(t))},expression:"form.role"}},[s("el-radio",{attrs:{label:1}},[e._v("毕业生")]),s("el-radio",{attrs:{label:2}},[e._v("在校生")]),s("el-radio",{attrs:{label:3}},[e._v("教师")]),7===e.form.role?s("el-radio",{attrs:{label:4}},[e._v("运营管理员")]):e._e(),7===e.form.role?s("el-radio",{attrs:{label:5}},[e._v("学校管理员")]):e._e(),7===e.form.role?s("el-radio",{attrs:{label:6}},[e._v("企业管理员")]):e._e(),7===e.form.role?s("el-radio",{attrs:{label:7}},[e._v("超级管理员")]):e._e()],1)],1):e._e(),1===e.form.role||2===e.form.role?s("el-form-item",{attrs:{label:e.meOrHim+"的学号："}},[s("el-input",{staticClass:"form-input",model:{value:e.form.stuNum,callback:function(t){e.$set(e.form,"stuNum",e._n(t))},expression:"form.stuNum"}})],1):e._e(),3===e.form.role?s("el-form-item",{attrs:{label:"教师编号："}},[s("el-input",{staticClass:"form-input",model:{value:e.form.teaNum,callback:function(t){e.$set(e.form,"teaNum",e._n(t))},expression:"form.teaNum"}})],1):e._e()],1):s("div",[s("el-form-item",{attrs:{label:e.meOrHim+"的昵称：",prop:"nickName"}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.nickName||"-"))])]),s("el-form-item",{attrs:{label:"个性签名：",prop:"personSign"}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.personSign||"-"))])]),s("el-form-item",{attrs:{label:e.meOrHim+"的性别："}},[s("div",{staticClass:"sex-icon-box"},[1===e.form.gender?s("svg",{staticClass:"icon sex-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-male2"}})]):e._e(),0===e.form.gender?s("svg",{staticClass:"icon sex-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-female2"}})]):e._e()])]),s("el-form-item",{attrs:{label:e.meOrHim+"的学历："}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.eduLevel||"-"))])]),s("el-form-item",{attrs:{label:"联系方式："}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.phone||"-"))])]),e.form.role<=3?s("el-form-item",{attrs:{label:"身份类型："}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.getRoleName(e.form.role)))])]):e._e(),1===e.form.role||2===e.form.role?s("el-form-item",{attrs:{label:e.meOrHim+"的学号："}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.stuNum))])]):e._e(),3===e.form.role?s("el-form-item",{attrs:{label:"教师编号："}},[s("span",{staticClass:"value-show"},[e._v(e._s(e.form.teaNum))])]):e._e()],1)])],1)])},a=[],i=(s("96cf"),s("3b8d")),o=s("5176"),l=s.n(o),n=s("cebc"),m=s("2f62"),c=s("365c"),u={data:function(){return{isEdit:!1,form:{nickName:"",personSign:"",gender:void 0,eduLevel:"",phone:"",role:void 0,stuNum:"",teaNum:""},rules:{nickName:[{required:!0,message:"请输入昵称",trigger:"blur"},{max:20,message:"昵称长度需小于20个字符",trigger:"blur"}],personSign:[{required:!0,message:"请输入昵称",trigger:"blur"},{max:100,message:"个性签名长度需小于100个字符",trigger:"blur"}]},eduLevelOpt:["博士后","博士","硕士","本科"]}},computed:Object(n["a"])({},Object(m["b"])(["pageUser","amI"]),{meOrHim:function(){return this.amI?"我":"他"}}),watch:{$route:function(e,t){"#edit"===e.hash&&(this.isEdit=!0)},pageUser:function(e){this.form=l()({},e)}},created:function(){"#edit"===this.$route.hash&&(this.isEdit=!0),this.form=l()({},this.pageUser)},methods:{getRoleName:function(e){var t={1:"毕业生",2:"在校生",3:"老师",4:"运营管理员",5:"学校管理员",6:"企业管理员",7:"超级管理员"};return t[e]||"毕业生"},setGender:function(e){this.form.gender=e},editUserInfo:function(){this.isEdit=!0},saveUserInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["l"])(this.form);case 2:t=e.sent,0===t.code?(this.$store.commit("setPageUser",t.data),this.$store.commit("setUser",t.data),this.isEdit=!1,this.$message.success("保存成功"),"#edit"===this.$route.hash&&this.$router.push(Object(n["a"])({},this.$route,{hash:""}))):this.$message.error("保存失败，请重试");case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),cancel:function(){this.isEdit=!1,"#edit"===this.$route.hash&&this.$router.push(Object(n["a"])({},this.$route,{hash:""}))}}},f=u,d=(s("b8d4"),s("2877")),p=Object(d["a"])(f,r,a,!1,null,"5054796e",null);t["default"]=p.exports},b8d4:function(e,t,s){"use strict";var r=s("4052"),a=s.n(r);a.a}}]);
//# sourceMappingURL=profile-basicInfo.6161a62b.js.map