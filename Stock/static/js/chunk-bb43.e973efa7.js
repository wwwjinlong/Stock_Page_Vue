(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bb43"],{"4ext":function(t,e,l){},"9Jwn":function(t,e,l){"use strict";var a=l("t3Un");e.a={clearMoney:function(t){return Object(a.a)({url:"/money/clearMoney",method:"post",data:t})},coverMoney:function(t){return Object(a.a)({url:"/money/coverMoney",method:"post",data:t})},reduceMoney:function(t){return Object(a.a)({url:"/money/reduceMoney",method:"post",data:t})}}},nSbF:function(t,e,l){"use strict";l.r(e);var a=l("P2sY"),s=l.n(a),o=l("xPtj"),r=l("9Jwn"),n={code:"002415",price:100,number:100,secNumber:100,secPrice:"",platformFee:"0.015",makePrice:"",makeProportion:"",tradingArea:0,nameType:0,type:1},i={buyCharge1:"",buyTransferFee1:"",buyCommunications1:"",dealMoney1:"",totalBuyCharge1:"",sellMoney:"",totalSellCharge:"",sellCommunications:"",sellStampDuty:"",sellCharge:"",sellTransferFee:"",totalCharge:"",totalNum:"",totalMoney:"",avgPrice:"",nowOperationPrice:""},c={code:"",name:"",openingPrice:"",yesClosingPrice:"",highestPrice:"",lowestPrice:"",closingPrice:"",nowPrice:"",tradingVolume:"",tradingValue:"",amplitude:"",amplitudeProportion:""},f={data:function(){return{form:n,formResult:i,showDetailDialogVisible:!1,detailInfo:c,url:"5bKz5rO96ZyWLOS9oOWlveWVig=="}},created:function(){this.getStockInfo()},methods:{reset:function(){this.form=s()({},n),this.formResult=s()({},i),this.detailInfo=s()({},c)},getStockInfo:function(){var t=this;o.a.getInfoNow(this.form.code).then(function(e){t.form.price=e.data.nowPrice,t.form.secPrice=e.data.nowPrice+1,t.form.makePrice=e.data.nowPrice+.5})},calcMakePrice:function(){this.form.type=1,this.calcAndShowResult()},calcMakeProportion:function(){this.form.type=2,this.calcAndShowResult()},calcAndShowResult:function(){var t=this;r.a.reduceMoney(this.form).then(function(e){var l=e.data.calcBuyMoneyVoList;t.formResult.buyCharge1=l[0].buyCharge,t.formResult.buyTransferFee1=l[0].buyTransferFee,t.formResult.buyCommunications1=l[0].buyCommunications,t.formResult.dealMoney1=l[0].dealMoney,t.formResult.totalBuyCharge1=l[0].totalBuyCharge;var a=e.data.calcSellMoneyVoList;t.formResult.sellMoney=a[0].sellMoney,t.formResult.totalSellCharge=a[0].totalSellCharge,t.formResult.sellCommunications=a[0].sellCommunications,t.formResult.sellStampDuty=a[0].sellStampDuty,t.formResult.sellCharge=a[0].sellCharge,t.formResult.sellTransferFee=a[0].sellTransferFee,t.formResult.totalCharge=e.data.totalCharge,t.formResult.totalNum=e.data.totalNum,t.formResult.totalMoney=e.data.totalMoney,t.formResult.avgPrice=e.data.avgPrice,t.formResult.nowOperationPrice=e.data.nowOperationPrice})},showDetail:function(){var t=this;o.a.getInfoNow(this.form.code).then(function(e){t.detailInfo=s()({},e.data),o.a.getStockKline(e.data.fullCode,1).then(function(e){t.url=e.data,t.showDetailDialogVisible=!0})})}}},m=(l("oTZK"),l("KHd+")),u=Object(m.a)(f,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-row",[l("el-col",{attrs:{span:10}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"180px"}},[l("el-form-item",{attrs:{label:"股票代码:"}},[l("el-col",{attrs:{span:12}},[l("el-input",{on:{change:t.getStockInfo},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),l("el-col",{attrs:{span:6,offset:6}},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.showDetail()}}},[t._v("查看走势图")])],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"第一次买入时价位:"}},[l("el-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"第一次买入股票数(整百)"}},[l("el-input-number",{attrs:{step:100,min:100,"step-strictly":""},model:{value:t.form.number,callback:function(e){t.$set(t.form,"number",e)},expression:"form.number"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"证券平台佣金比例(%):"}},[l("el-input",{model:{value:t.form.platformFee,callback:function(e){t.$set(t.form,"platformFee",e)},expression:"form.platformFee"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"第二次卖出股票数(整百)"}},[l("el-input-number",{attrs:{step:100,min:100,"step-strictly":""},model:{value:t.form.secNumber,callback:function(e){t.$set(t.form,"secNumber",e)},expression:"form.secNumber"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"(>=)准备卖出后的价格:"}},[l("el-col",{attrs:{span:12}},[l("el-input",{model:{value:t.form.secPrice,callback:function(e){t.$set(t.form,"secPrice",e)},expression:"form.secPrice"}})],1),t._v(" "),l("el-col",{attrs:{span:6,offset:6}},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.calcMakePrice()}}},[t._v("预计卖出计算")])],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"(>=)填写预期平均后价位:"}},[l("el-col",{attrs:{span:12}},[l("el-input",{model:{value:t.form.makePrice,callback:function(e){t.$set(t.form,"makePrice",e)},expression:"form.makePrice"}})],1),t._v(" "),l("el-col",{attrs:{span:6,offset:6}},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.calcMakeProportion()}}},[t._v("预期持仓计算")])],1)],1),t._v(" "),l("el-form-item"),t._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",size:"middle"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1)]),t._v(" "),l("el-col",{attrs:{span:12}},[l("div",{staticClass:"grid-content bg-purple-light"},[l("el-form",{ref:"formResult",attrs:{model:t.formResult,"label-width":"180px"}},[l("el-form-item",{attrs:{label:""}},[l("el-col",{staticStyle:{"font-size":"18px",color:"deeppink"},attrs:{span:6}},[t._v("手续费信息:")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v("第一次买入:")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("买入手续费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.buyCharge1)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("买入过户费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.buyTransferFee1)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("买入通讯费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.buyCommunications1)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("买入金额:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.dealMoney1)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("总的买入手续费")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.totalBuyCharge1)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v("第二次卖出:")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("卖出手续费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.sellCharge)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("卖出过户费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.sellTransferFee)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("卖出通讯费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.sellCommunications)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("卖出印花费")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.sellStampDuty)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("卖出金额:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.formResult.sellMoney)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("总的卖出手续费")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.totalSellCharge)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("总的交易费用合计:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.totalCharge)+" ")])],1)],1)],1),t._v(" "),l("div",{staticClass:"grid-content bg-purple-light"},[l("el-form",{ref:"formResult",attrs:{model:t.formResult,"label-width":"180px"}},[l("el-form-item",{attrs:{label:""}},[l("el-col",{staticStyle:{"font-size":"18px",color:"deeppink"},attrs:{span:6}},[t._v("操作记录信息:")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("目前数量:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.totalNum)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("目前金额:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.totalMoney)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("本次操作价格:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.nowOperationPrice)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("平均持仓价格:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.formResult.avgPrice)+" ")])],1)],1)],1)]),t._v(" "),l("el-dialog",{attrs:{visible:t.showDetailDialogVisible,title:"查看股票信息和分钟K线图"},on:{"update:visible":function(e){t.showDetailDialogVisible=e}}},[l("el-form",{ref:"dataForm",staticStyle:{width:"800px"},attrs:{model:t.detailInfo}},[l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("代码:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.detailInfo.code)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("名称:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.detailInfo.name)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("开盘价:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.openingPrice)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("昨天收盘价:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.yesClosingPrice)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("最高价格:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.highestPrice)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("最低价格:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.lowestPrice)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("当前的价格:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.closingPrice)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("今天收盘价:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.nowPrice)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("成交量(股):")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.detailInfo.tradingVolume)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("成交量金额:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.detailInfo.tradingValue)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("el-col",{attrs:{span:6}},[t._v("涨跌幅度:")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v(t._s(t.detailInfo.amplitude)+" ")]),t._v(" "),l("el-col",{attrs:{span:6}},[t._v("涨跌幅度百分比:")]),t._v(" "),l("el-col",{staticClass:"focus-info",attrs:{span:6}},[t._v(t._s(t.detailInfo.amplitudeProportion)+" ")])],1),t._v(" "),l("el-form-item",{attrs:{label:""}},[l("img",{attrs:{src:"data:image/png;base64,"+t.url,alt:""}})])],1),t._v(" "),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.showDetailDialogVisible=!1}}},[t._v(" 返回")])],1)],1)],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports},oTZK:function(t,e,l){"use strict";var a=l("4ext");l.n(a).a},xPtj:function(t,e,l){"use strict";var a=l("t3Un");e.a={getInfoNow:function(t){return Object(a.a)({url:"/stockCrawler/getStockInfo",method:"post",data:{code:t}})},getStockKline:function(t,e){return Object(a.a)({url:"/stockCrawler/getStockKline",method:"post",data:{code:t,type:e}})},stockHistoryAsync:function(t){return Object(a.a)({url:"/stockCrawler/stockHistoryAsync",method:"post",data:t})}}}}]);