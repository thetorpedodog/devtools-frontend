import{a,b as s,C as O,E as e,e as d,g as i,i as r,L as t,N as n,s as o,t as l}from"./codemirror.js";
function c(O){return 45==O||46==O||58==O||O>=65&&O<=90||95==O||O>=97&&O<=122||O>=161}let $=null,p=null,k=0;function m(O,e){let t=O.pos+e;if(p==O&&k==t)return $;for(;9==(n=O.peek(e))||10==n||13==n||32==n;)e++;var n;let a="";for(;;){let t=O.peek(e);if(!c(t))break;a+=String.fromCharCode(t),e++}return p=O,k=t,$=a||null}function u(O,e){this.name=O,this.parent=e,this.hash=e?e.hash:0;for(let e=0;e<O.length;e++)this.hash+=(this.hash<<4)+O.charCodeAt(e)+(O.charCodeAt(e)<<8)}const g=new O({start:null,shift:(O,e,t,n)=>1==e?new u(m(n,1)||"",O):O,reduce:(O,e)=>10==e&&O?O.parent:O,reuse(O,e,t,n){let a=e.type.id;return 1==a||12==a?new u(m(n,1)||"",O):O},hash:O=>O?O.hash:0,strict:!1}),f=new e(((O,e)=>{if(60==O.next)if(O.advance(),47==O.next){O.advance();let t=m(O,0);if(!t)return O.acceptToken(5);if(e.context&&t==e.context.name)return O.acceptToken(2);for(let n=e.context;n;n=n.parent)if(n.name==t)return O.acceptToken(3,-2);O.acceptToken(4)}else if(33!=O.next&&63!=O.next)return O.acceptToken(1)}),{contextual:!0});function h(O,t){return new e((e=>{for(let n=0,a=0;;a++){if(e.next<0){a&&e.acceptToken(O);break}if(e.next==t.charCodeAt(n)){if(n++,n==t.length){a>t.length&&e.acceptToken(O,1-t.length);break}}else n=0;e.advance()}}))}const T=h(36,"--\x3e"),P=h(37,"?>"),v=h(38,"?>"),b=t.deserialize({version:13,states:"-OOQOaOOOcObO'#CcOkOdO'#CdOOOP'#Cv'#CvOsOaO'#DTO!XOaOOOOOQ'#Cw'#CwO!aObO,58}OOOP,58},58}OOOS'#Cx'#CxO!iOdO,59OOOOP,59O,59OOOOP-E6t-E6tO!qO`O'#ChO#kOqO'#CfOOOP'#Cf'#CfO#rOaO'#CyQ$TOPOOO$YOaOOOOOQ-E6u-E6uOOOP1G.i1G.iOOOS-E6v-E6vOOOP1G.j1G.jOOOO'#Cz'#CzO$hO`O,59SO$pO!bO,59SO%OOhO'#CqO%WO`O'#CrOOOP'#D]'#D]OOOP'#C}'#C}O%`OqO,59QO%gO`O'#CsOOOP,59Q,59QOOOP,59e,59eOOOP-E6w-E6wO$TOPOOOOOO-E6x-E6xO%oO!bO1G.nO%oO!bO1G.nO%}O`O'#CjO&VO!bO'#C{O&eO!bO1G.nOOOP1G.n1G.nOOOP1G.{1G.{OOOW'#DO'#DOO&pOhO,59]OOOP,59],59]O&xO`O,59^O'QO`O,59^OOOP-E6{-E6{OOOP1G.l1G.lO'YO`O,59_O'bO`O,59_O'jO!bO7+$YO'xO!bO7+$YOOOP7+$Y7+$YOOOP7+$g7+$gO(TO`O,59UO(]O`O,59UO(eO!bO,59gOOOO-E6y-E6yOOOW-E6|-E6|OOOP1G.w1G.wO(sO`O1G.xO(sO`O1G.xOOOP1G.x1G.xO({O`O1G.yO({O`O1G.yOOOP1G.y1G.yO)TO!bO<<GtOOOP<<Gt<<GtOOOP<<HR<<HRO(]O`O1G.pO(]O`O1G.pO)`O#tO'#CmOOOO1G.p1G.pO)nO`O7+$dOOOP7+$d7+$dO)vO`O7+$eOOOP7+$e7+$eOOOPAN=`AN=`OOOPAN=mAN=mO(]O`O7+$[OOOO7+$[7+$[OOOO'#C|'#C|O*OO#tO,59XOOOO,59X,59XOOOP<<HO<<HOOOOP<<HP<<HPOOOO<<Gv<<GvOOOO-E6z-E6zOOOO1G.s1G.s",stateData:"*^~OyPOzRO|QOPwPXwP~OtUOxWO~OuXO{ZO~OyPOzRO|QOPwXXwXswX~OP]OXbO~OtUOxdO~OuXO{fO~O]iOzgO~OP]OQoOSkOTlOblOclOdlOyPO|QO!RjO~ORpO~P!yOyPOzRO|QOPwPswP~OP]O~OyPOzRO|QOPwP~O]uOzgO~OZzO_wOh{OzgO~Ov|O!Q!OO~O]!QOzgO~OR!SO~P!yO]!UOzgO~OZ!XO_wOh!YOzgO~O`![OzgO~OzgOZoX_oXhoX~OZ!XO_wOh!YO~Ov|O!Q!`O~O]!aOzgO~OZ!cOzgO~O]!dOzgO~OZ!fOzgO~OZ!hO_wOh!iOzgO~OZ!hO_wOh!iO~O`!jOzgO~OzgO}!lO~OzgOZoa_oahoa~OZ!oOzgO~OZ!qOzgO~OZ!rO_wOh!sO~Ob!vOc!vO}!xO!O!vO~OZ!yOzgO~OZ!zOzgO~Ob!vOc!vO}!}O!O!vO~O",goto:"&S!QPPPPPPP!R!RP!]P!fP!mPP!vPPP!X!X#QP#W#_#g#m#s#z%S%c%i%oPPPP%uPPPPPPP&OWROS`bTl^nU`TasTl^nZ^T^ans_xiuvy!V!W!gQ!m![S!u!j!kR!{!tQp^R!SnZ_T^ansUSO`bR[SQVPRcVQYQReYSaTsRraQh]jthv!P!T!V!Z!]!b!e!k!n!p!tQviQ!PkQ!ToQ!VuQ!ZwQ!]xQ!b!QQ!e!UQ!k![Q!n!aQ!p!dR!t!jQyiS!WuvU!^y!W!gR!g!VQ!w!lR!|!wQn^R!RnQ}jR!_}QTOQq`RsbTm^n",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Comment ProcessingInst DoctypeDecl Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue EntityReference CharacterReference Text Cdata MismatchedCloseTag CloseTag SelfCloseEndTag SelfClosingTag",maxTerm:49,context:g,nodeProps:[[n.closedBy,1,"SelfCloseEndTag EndTag",12,"CloseTag MissingCloseTag"],[n.openedBy,11,"StartTag StartCloseTag",23,"OpenTag",24,"StartTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"Az~R!WOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs&tsv$kvw'Uw}$k}!O(q!O!P$k!P!Q*n!Q![$k![!]+z!]!^$k!^!_/s!_!`=i!`!a>U!a!b>q!b!c$k!c!}+z!}#P$k#P#Q?}#Q#R$k#R#S+z#S#T$k#T#o+z#o%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U$k4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$kY$rUdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kQ%ZRdQOv%Uw!^%U!_~%UW%iR!OWOr%dsv%dw~%d_%{]dQ!OWzTOX$kXY%rYZ%rZ]$k]^%r^p$kpq%rqr$krs%Usv$kw!^$k!^!_%d!_~$kZ&{R}XdQOv%Uw!^%U!_~%U~'XTOp'hqs'hst(Pt!]'h!^~'h~'kTOp'hqs'ht!]'h!]!^'z!^~'h~(POb~~(SROp(]q!](]!^~(]~(`SOp(]q!](]!]!^(l!^~(]~(qOc~Z(xWdQ!OWOr$krs%Usv$kw}$k}!O)b!O!^$k!^!_%d!_~$kZ)iWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a*R!a~$kZ*[UxPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k^*uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a+_!a~$k^+hUhSdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_,V}_S]PdQ!OWOr$krs%Usv$kw}$k}!O+z!O!P+z!P!Q$k!Q![+z![!]+z!]!^$k!^!_%d!_!c$k!c!}+z!}#R$k#R#S+z#S#T$k#T#o+z#o$}$k$}%O+z%O%W$k%W%o+z%o%p$k%p&a+z&a&b$k&b1p+z1p4U+z4U4d+z4d4e$k4e$IS+z$IS$I`$k$I`$Ib+z$Ib$Je$k$Je$Jg+z$Jg$Kh$k$Kh%#t+z%#t&/x$k&/x&Et+z&Et&FV$k&FV;'S+z;'S;:j/S;:j?&r$k?&r?Ah+z?Ah?BY$k?BY?Mn+z?Mn~$k_/ZWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_;=`$k;=`<%l+z<%l~$kZ/xU!OWOq%dqr0[sv%dw!a%d!a!b=X!b~%dZ0aZ!OWOr%dsv%dw}%d}!O1S!O!f%d!f!g1x!g!}%d!}#O5s#O#W%d#W#X:k#X~%dZ1XT!OWOr%dsv%dw}%d}!O1h!O~%dZ1oRyR!OWOr%dsv%dw~%dX1}T!OWOr%dsv%dw!q%d!q!r2^!r~%dX2cT!OWOr%dsv%dw!e%d!e!f2r!f~%dX2wT!OWOr%dsv%dw!v%d!v!w3W!w~%dX3]T!OWOr%dsv%dw!{%d!{!|3l!|~%dX3qT!OWOr%dsv%dw!r%d!r!s4Q!s~%dX4VT!OWOr%dsv%dw!g%d!g!h4f!h~%dX4kV!OWOr4frs5Qsv4fvw5Qw!`4f!`!a5c!a~4fP5TRO!`5Q!`!a5^!a~5QP5cOXPX5jRXP!OWOr%dsv%dw~%dY5xV!OWOr%dsv%dw!e%d!e!f6_!f#V%d#V#W8w#W~%dY6dT!OWOr%dsv%dw!f%d!f!g6s!g~%dY6xT!OWOr%dsv%dw!c%d!c!d7X!d~%dY7^T!OWOr%dsv%dw!v%d!v!w7m!w~%dY7rT!OWOr%dsv%dw!c%d!c!d8R!d~%dY8WT!OWOr%dsv%dw!}%d!}#O8g#O~%dY8nR!OW!RQOr%dsv%dw~%dY8|T!OWOr%dsv%dw#W%d#W#X9]#X~%dY9bT!OWOr%dsv%dw#T%d#T#U9q#U~%dY9vT!OWOr%dsv%dw#h%d#h#i:V#i~%dY:[T!OWOr%dsv%dw#T%d#T#U8R#U~%dX:pT!OWOr%dsv%dw#c%d#c#d;P#d~%dX;UT!OWOr%dsv%dw#V%d#V#W;e#W~%dX;jT!OWOr%dsv%dw#h%d#h#i;y#i~%dX<OT!OWOr%dsv%dw#m%d#m#n<_#n~%dX<dT!OWOr%dsv%dw#d%d#d#e<s#e~%dX<xT!OWOr%dsv%dw#X%d#X#Y4f#Y~%dZ=`R|R!OWOr%dsv%dw~%dZ=rU`PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k_>_UZTdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ>xWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!a?b!a~$kZ?kU{PdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$kZ@UWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_#P$k#P#Q@n#Q~$kZ@uWdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_!`$k!`!aA_!a~$kZAhU!QPdQ!OWOr$krs%Usv$kw!^$k!^!_%d!_~$k",tokenizers:[f,T,P,v,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function w(O,e){let t=e&&e.getChild("TagName");return t?O.sliceString(t.from,t.to):""}function C(O,e){let t=e&&e.firstChild;return t&&"OpenTag"==t.name?w(O,t):""}function W(O){for(let e=O&&O.parent;e;e=e.parent)if("Element"==e.name)return e;return null}class Q{constructor(O,e,t){this.attrs=e,this.attrValues=t,this.children=[],this.name=O.name,this.completion=Object.assign(Object.assign({type:"type"},O.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=O.textContent?O.textContent.map((O=>({label:O,type:"text"}))):[]}}const z=/^[:\-\.\w\u00b7-\uffff]*$/;function x(O){return Object.assign(Object.assign({type:"property"},O.completion||{}),{label:O.name})}function _(O){return"string"==typeof O?{label:`"${O}"`,type:"constant"}:/^"/.test(O.label)?O:Object.assign(Object.assign({},O),{label:`"${O.label}"`})}function S(O,e){let t=[],n=[],a=Object.create(null);for(let O of e){let e=x(O);t.push(e),O.global&&n.push(e),O.values&&(a[O.name]=O.values.map(_))}let r=[],s=[],o=Object.create(null);for(let e of O){let O=n,l=a;e.attributes&&(O=O.concat(e.attributes.map((O=>"string"==typeof O?t.find((e=>e.label==O))||{label:O,type:"property"}:(O.values&&(l==a&&(l=Object.create(l)),l[O.name]=O.values.map(_)),x(O))))));let d=new Q(e,O,l);o[d.name]=d,r.push(d),e.top&&s.push(d)}s.length||(s=r);for(let e=0;e<r.length;e++){let t=O[e],n=r[e];if(t.children)for(let O of t.children)o[O]&&n.children.push(o[O]);else n.children=r}return O=>{var e;let{doc:t}=O.state,l=function(O,e){var t;let n=i(O).resolveInner(e,-1),a=null;for(let O=n;!a&&O.parent;O=O.parent)"OpenTag"!=O.name&&"CloseTag"!=O.name&&"SelfClosingTag"!=O.name&&"MismatchedCloseTag"!=O.name||(a=O);if(a&&(a.to>e||a.lastChild.type.isError)){let O=a.parent;if("TagName"==n.name)return"CloseTag"==a.name||"MismatchedCloseTag"==a.name?{type:"closeTag",from:n.from,context:O}:{type:"openTag",from:n.from,context:W(O)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:a};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:a};let t=n==a||"Attribute"==n.name?n.childBefore(e):n;return"StartTag"==(null==t?void 0:t.name)?{type:"openTag",from:e,context:W(O)}:"StartCloseTag"==(null==t?void 0:t.name)&&t.to<=e?{type:"closeTag",from:e,context:O}:"Is"==(null==t?void 0:t.name)?{type:"attrValue",from:e,context:a}:t?{type:"attrName",from:e,context:a}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:e,context:n.parent};for(;n.parent&&n.to==e&&!(null===(t=n.lastChild)||void 0===t?void 0:t.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:e,context:"Element"==n.name?n:W(n)}:null}(O.state,O.pos);if(!l||"tag"==l.type&&!O.explicit)return null;let{type:d,from:c,context:$}=l;if("openTag"==d){let O=s,e=C(t,$);if(e){let t=o[e];O=(null==t?void 0:t.children)||r}return{from:c,options:O.map((O=>O.completion)),span:z}}if("closeTag"==d){let n=C(t,$);return n?{from:c,to:O.pos+(">"==t.sliceString(O.pos,O.pos+1)?1:0),options:[(null===(e=o[n])||void 0===e?void 0:e.closeNameCompletion)||{label:n+">",type:"type"}],span:z}:null}if("attrName"==d){let O=o[w(t,$)];return{from:c,options:(null==O?void 0:O.attrs)||n,span:z}}if("attrValue"==d){let e=function(O,e,t){let n=e&&e.getChildren("Attribute").find((O=>O.from<=t&&O.to>=t)),a=n&&n.getChild("AttributeName");return a?O.sliceString(a.from,a.to):""}(t,$,c);if(!e)return null;let n=o[w(t,$)],r=((null==n?void 0:n.attrValues)||a)[e];return r&&r.length?{from:c,to:O.pos+('"'==t.sliceString(O.pos,O.pos+1)?1:0),options:r,span:/^"[^"]*"?$/}:null}if("tag"==d){let e=C(t,$),n=o[e],a=[],l=$&&$.lastChild;!e||l&&"CloseTag"==l.name&&w(t,l)==e||a.push(n?n.closeCompletion:{label:"</"+e+">",type:"type",boost:2});let d=a.concat(((null==n?void 0:n.children)||($?r:s)).map((O=>O.openCompletion)));if($&&(null==n?void 0:n.text.length)){let e=$.firstChild;e.to>O.pos-20&&!/\S/.test(O.state.sliceDoc(e.to,O.pos))&&(d=d.concat(n.text))}return{from:c,options:d,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}const y=a.define({parser:b.configure({props:[r.add({Element(O){let e=/^\s*<\//.test(O.textAfter);return O.lineIndent(O.node.from)+(e?0:O.unit)},"OpenTag CloseTag SelfClosingTag":O=>O.column(O.node.from)+O.unit}),s.add({Element(O){let e=O.firstChild,t=O.lastChild;return e&&"OpenTag"==e.name?{from:e.to,to:"CloseTag"==t.name?t.from:O.to}:null}}),o({Text:l.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":l.angleBracket,TagName:l.tagName,"MismatchedCloseTag/Tagname":[l.tagName,l.invalid],AttributeName:l.attributeName,AttributeValue:l.attributeValue,Is:l.definitionOperator,"EntityReference CharacterReference":l.character,Comment:l.blockComment,ProcessingInst:l.processingInstruction,DoctypeDecl:l.documentMeta,Cdata:l.special(l.string)})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function U(O={}){return new d(y,y.data.of({autocomplete:S(O.elements||[],O.attributes||[])}))}export{S as completeFromSchema,U as xml,y as xmlLanguage};