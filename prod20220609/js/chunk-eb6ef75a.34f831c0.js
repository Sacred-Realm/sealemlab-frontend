(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb6ef75a"],{"663e":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"nft_page"},[s("div",{staticClass:"content_box"},[s("div",{staticClass:"display_flex menu_box"},t._l(t.navArr,(function(n,e){return s("router-link",{key:e,staticClass:"a_link font18",attrs:{to:n.link}},[s("span",{staticClass:"nav_txt"},[t._v(t._s(t.$t(n.label)))])])})),1),s("div",{staticClass:"main"},[s("router-view")],1)])])},a=[],i=s("5530"),r=(s("9911"),s("e9c4"),s("2f62")),c={data:function(){return{li_index:0,navArr:[{label:"message.nft.txt2",link:"/nft/buy-blind-box/0",src:"".concat(this.$store.state.imgUrl,"nft_nav1.webp"),status:!0},{label:"message.nft.txt3",link:"/nft/blind-box",src:"".concat(this.$store.state.imgUrl,"nft_nav2.webp"),status:!1},{label:"message.nft.txt4",link:"/nft/my-nft",src:"".concat(this.$store.state.imgUrl,"nft_nav3.webp"),status:!1},{label:"message.nft.txt5",link:"/nft/giving",src:"".concat(this.$store.state.imgUrl,"nft_nav4.webp"),status:!1},{label:"message.nft.txt6",link:"/nft/lease",src:"".concat(this.$store.state.imgUrl,"nft_nav5.webp"),status:!1}]}},computed:Object(i["a"])({},Object(r["b"])(["isEnLang","getNoticeNum"])),methods:{liClick:function(t,n){t.status?(this.li_index=n,this.$router.push(t.link)):this.getNoticeNum||(this.$store.commit("setNoticeStatus",JSON.stringify({status:!0,word:"message.tip.txt5"})),this.$store.commit("setNoticeNum",!0))}}},o=c,l=(s("c841"),s("2877")),u=Object(l["a"])(o,e,a,!1,null,"8d6ac5b6",null);n["default"]=u.exports},8477:function(t,n,s){},"857a":function(t,n,s){var e=s("e330"),a=s("1d80"),i=s("577e"),r=/"/g,c=e("".replace);t.exports=function(t,n,s,e){var o=i(a(t)),l="<"+n;return""!==s&&(l+=" "+s+'="'+c(i(e),r,"&quot;")+'"'),l+">"+o+"</"+n+">"}},9911:function(t,n,s){"use strict";var e=s("23e7"),a=s("857a"),i=s("af03");e({target:"String",proto:!0,forced:i("link")},{link:function(t){return a(this,"a","href",t)}})},af03:function(t,n,s){var e=s("d039");t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},c841:function(t,n,s){"use strict";s("8477")}}]);