function Sr(f,me){return me.forEach(function(ye){ye&&typeof ye!="string"&&!Array.isArray(ye)&&Object.keys(ye).forEach(function(he){if(he!=="default"&&!(he in f)){var te=Object.getOwnPropertyDescriptor(ye,he);Object.defineProperty(f,he,te.get?te:{enumerable:!0,get:function(){return ye[he]}})}})}),Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var jn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function br(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var Zn={exports:{}};(function(f,me){var ye=Object.defineProperty,he=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable,Pt=(N,H,O)=>H in N?ye(N,H,{enumerable:!0,configurable:!0,writable:!0,value:O}):N[H]=O,We=(N,H)=>{for(var O in H||(H={}))te.call(H,O)&&Pt(N,O,H[O]);if(he)for(var O of he(H))Mt.call(H,O)&&Pt(N,O,H[O]);return N},Xe=(N,H,O)=>(Pt(N,typeof H!="symbol"?H+"":H,O),O);(function(N,H){H(me)})(jn,function(N){var H={Note:"Note",Rest:"Rest",Octave:"Octave",OctaveShift:"OctaveShift",NoteLength:"NoteLength",NoteVelocity:"NoteVelocity",NoteQuantize:"NoteQuantize",Tempo:"Tempo",InfiniteLoop:"InfiniteLoop",LoopBegin:"LoopBegin",LoopExit:"LoopExit",LoopEnd:"LoopEnd"},O={tempo:120,octave:4,length:4,velocity:100,quantize:75,loopCount:2},ht=function(){function l(a,s){for(var u=0;u<s.length;u++){var h=s[u];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(a,h.key,h)}}return function(a,s,u){return s&&l(a.prototype,s),u&&l(a,u),a}}();function yn(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}var Ge=function(){function l(a){yn(this,l),this.source=a,this.index=0}return ht(l,[{key:"hasNext",value:function(){return this.index<this.source.length}},{key:"peek",value:function(){return this.source.charAt(this.index)||""}},{key:"next",value:function(){return this.source.charAt(this.index++)||""}},{key:"forward",value:function(){for(;this.hasNext()&&this.match(/\s/);)this.index+=1}},{key:"match",value:function(s){return s instanceof RegExp?s.test(this.peek()):this.peek()===s}},{key:"expect",value:function(s){this.match(s)||this.throwUnexpectedToken(),this.index+=1}},{key:"scan",value:function(s){var u=this.source.substr(this.index),h=null;if(s instanceof RegExp){var v=s.exec(u);v&&v.index===0&&(h=v[0])}else u.substr(0,s.length)===s&&(h=s);return h&&(this.index+=h.length),h}},{key:"throwUnexpectedToken",value:function(){var s=this.peek()||"ILLEGAL";throw new SyntaxError("Unexpected token: "+s)}}]),l}(),vn=Ge,Sn=function(){function l(a,s){for(var u=0;u<s.length;u++){var h=s[u];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(a,h.key,h)}}return function(a,s,u){return s&&l(a.prototype,s),u&&l(a,u),a}}();function Qe(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}var Q=H,Ye=vn,Wt={c:0,d:2,e:4,f:5,g:7,a:9,b:11},bn=function(){function l(a){Qe(this,l),this.scanner=new Ye(a)}return Sn(l,[{key:"parse",value:function(){var s=this,u=[];return this._readUntil(";",function(){u=u.concat(s.advance())}),u}},{key:"advance",value:function(){switch(this.scanner.peek()){case"c":case"d":case"e":case"f":case"g":case"a":case"b":return this.readNote();case"[":return this.readChord();case"r":return this.readRest();case"o":return this.readOctave();case">":return this.readOctaveShift(1);case"<":return this.readOctaveShift(-1);case"l":return this.readNoteLength();case"q":return this.readNoteQuantize();case"v":return this.readNoteVelocity();case"t":return this.readTempo();case"$":return this.readInfiniteLoop();case"/":return this.readLoop()}this.scanner.throwUnexpectedToken()}},{key:"readNote",value:function(){return{type:Q.Note,noteNumbers:[this._readNoteNumber(0)],noteLength:this._readLength()}}},{key:"readChord",value:function(){var s=this;this.scanner.expect("[");var u=[],h=0;return this._readUntil("]",function(){switch(s.scanner.peek()){case"c":case"d":case"e":case"f":case"g":case"a":case"b":u.push(s._readNoteNumber(h));break;case">":s.scanner.next(),h+=12;break;case"<":s.scanner.next(),h-=12;break;default:s.scanner.throwUnexpectedToken()}}),this.scanner.expect("]"),{type:Q.Note,noteNumbers:u,noteLength:this._readLength()}}},{key:"readRest",value:function(){return this.scanner.expect("r"),{type:Q.Rest,noteLength:this._readLength()}}},{key:"readOctave",value:function(){return this.scanner.expect("o"),{type:Q.Octave,value:this._readArgument(/\d+/)}}},{key:"readOctaveShift",value:function(s){return this.scanner.expect(/<|>/),{type:Q.OctaveShift,direction:s|0,value:this._readArgument(/\d+/)}}},{key:"readNoteLength",value:function(){return this.scanner.expect("l"),{type:Q.NoteLength,noteLength:this._readLength()}}},{key:"readNoteQuantize",value:function(){return this.scanner.expect("q"),{type:Q.NoteQuantize,value:this._readArgument(/\d+/)}}},{key:"readNoteVelocity",value:function(){return this.scanner.expect("v"),{type:Q.NoteVelocity,value:this._readArgument(/\d+/)}}},{key:"readTempo",value:function(){return this.scanner.expect("t"),{type:Q.Tempo,value:this._readArgument(/\d+(\.\d+)?/)}}},{key:"readInfiniteLoop",value:function(){return this.scanner.expect("$"),{type:Q.InfiniteLoop}}},{key:"readLoop",value:function(){var s=this;this.scanner.expect("/"),this.scanner.expect(":");var u={type:Q.LoopBegin},h={type:Q.LoopEnd},v=[];return v=v.concat(u),this._readUntil(/[|:]/,function(){v=v.concat(s.advance())}),v=v.concat(this._readLoopExit()),this.scanner.expect(":"),this.scanner.expect("/"),u.value=this._readArgument(/\d+/)||null,v=v.concat(h),v}},{key:"_readUntil",value:function(s,u){for(;this.scanner.hasNext()&&(this.scanner.forward(),!(!this.scanner.hasNext()||this.scanner.match(s)));)u()}},{key:"_readArgument",value:function(s){var u=this.scanner.scan(s);return u!==null?+u:null}},{key:"_readNoteNumber",value:function(s){var u=Wt[this.scanner.next()];return u+this._readAccidental()+s}},{key:"_readAccidental",value:function(){return this.scanner.match("+")?1*this.scanner.scan(/\++/).length:this.scanner.match("-")?-1*this.scanner.scan(/\-+/).length:0}},{key:"_readDot",value:function(){for(var s=(this.scanner.scan(/\.+/)||"").length,u=new Array(s),h=0;h<s;h++)u[h]=0;return u}},{key:"_readLength",value:function(){var s=[];s=s.concat(this._readArgument(/\d+/)),s=s.concat(this._readDot());var u=this._readTie();return u&&(s=s.concat(u)),s}},{key:"_readTie",value:function(){return this.scanner.forward(),this.scanner.match("^")?(this.scanner.next(),this._readLength()):null}},{key:"_readLoopExit",value:function(){var s=this,u=[];if(this.scanner.match("|")){this.scanner.next();var h={type:Q.LoopExit};u=u.concat(h),this._readUntil(":",function(){u=u.concat(s.advance())})}return u}}]),l}(),Ce=bn,Y=function(){function l(a,s){for(var u=0;u<s.length;u++){var h=s[u];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(a,h.key,h)}}return function(a,s,u){return s&&l(a.prototype,s),u&&l(a,u),a}}();function Me(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}var k=H,B=O,Xt=Ce,K=typeof Symbol!="undefined"?Symbol.iterator:"@@iterator",$e=function(){function l(a){Me(this,l),this.source=a,this._commands=new Xt(a).parse(),this._commandIndex=0,this._processedTime=0,this._iterator=null,this._octave=B.octave,this._noteLength=[B.length],this._velocity=B.velocity,this._quantize=B.quantize,this._tempo=B.tempo,this._infiniteLoopIndex=-1,this._loopStack=[],this._done=!1}return Y(l,[{key:"hasNext",value:function(){return this._commandIndex<this._commands.length}},{key:"next",value:function(){if(this._done)return{done:!0,value:null};if(this._iterator){var s=this._iterator.next();if(!s.done)return s}var u=this._forward(!0);if(pt(u))this._iterator=this[u.type](u);else return this._done=!0,{done:!1,value:{type:"end",time:this._processedTime}};return this.next()}},{key:K,value:function(){return this}},{key:"_forward",value:function(s){for(;this.hasNext()&&!pt(this._commands[this._commandIndex]);){var u=this._commands[this._commandIndex++];this[u.type](u)}return s&&!this.hasNext()&&this._infiniteLoopIndex!==-1?(this._commandIndex=this._infiniteLoopIndex,this._forward(!1)):this._commands[this._commandIndex++]||{}}},{key:"_calcDuration",value:function(s){var u=this;s[0]===null&&(s=this._noteLength.concat(s.slice(1)));var h=null,v=0;return s=s.map(function(w){switch(w){case null:w=h;break;case 0:w=v*=2;break;default:h=v=w;break}var C=w!==null?w:B.length;return 60/u._tempo*(4/C)}),s.reduce(function(w,C){return w+C},0)}},{key:"_calcNoteNumber",value:function(s){return s+this._octave*12+12}},{key:k.Note,value:function(s){var u=this,h="note",v=this._processedTime,w=this._calcDuration(s.noteLength),C=s.noteNumbers.map(function(F){return u._calcNoteNumber(F)}),x=this._quantize,A=this._velocity;return this._processedTime=this._processedTime+w,Ze(C.map(function(F){return{type:h,time:v,duration:w,noteNumber:F,velocity:A,quantize:x}}))}},{key:k.Rest,value:function(s){var u=this._calcDuration(s.noteLength);this._processedTime=this._processedTime+u}},{key:k.Octave,value:function(s){this._octave=s.value!==null?s.value:B.octave}},{key:k.OctaveShift,value:function(s){var u=s.value!==null?s.value:1;this._octave+=u*s.direction}},{key:k.NoteLength,value:function(s){var u=s.noteLength.map(function(h){return h!==null?h:B.length});this._noteLength=u}},{key:k.NoteVelocity,value:function(s){this._velocity=s.value!==null?s.value:B.velocity}},{key:k.NoteQuantize,value:function(s){this._quantize=s.value!==null?s.value:B.quantize}},{key:k.Tempo,value:function(s){this._tempo=s.value!==null?s.value:B.tempo}},{key:k.InfiniteLoop,value:function(){this._infiniteLoopIndex=this._commandIndex}},{key:k.LoopBegin,value:function(s){var u=s.value!==null?s.value:B.loopCount,h=this._commandIndex,v=-1;this._loopStack.push({loopCount:u,loopTopIndex:h,loopOutIndex:v})}},{key:k.LoopExit,value:function(){var s=this._loopStack[this._loopStack.length-1],u=this._commandIndex;s.loopCount<=1&&s.loopOutIndex!==-1&&(u=s.loopOutIndex),this._commandIndex=u}},{key:k.LoopEnd,value:function(){var s=this._loopStack[this._loopStack.length-1],u=this._commandIndex;s.loopOutIndex===-1&&(s.loopOutIndex=this._commandIndex),s.loopCount-=1,0<s.loopCount?u=s.loopTopIndex:this._loopStack.pop(),this._commandIndex=u}}]),l}();function Ze(l){var a=0;return{next:function(){return a<l.length?{done:!1,value:l[a++]}:{done:!0}}}}function pt(l){return l.type===k.Note||l.type===k.Rest}var ie=$e,Qt=ie,ve={};(function(l){var a=+Math.PI*2,s=16,u=1,h=Math.sin,v=Math.pow,w=Math.abs,C=1e-6,x=window.AudioContext||window.webkitAudioContext;l.SampleRate=0,l.Sec=0,l.SetSampleRate=function(e){l.SampleRate=e|0,l.Sec=e|0},l.SetSampleRate(Ut()),l.Live=function(){var e={};return e._generate=function(i){var o=new G(i,l.DefaultModules),d=bt(o.getSamplesLeft());return o.generate(d),d},e},l.Module={},l.G={};var A=l.stage={PhaseSpeed:0,PhaseSpeedMod:10,Generator:20,SampleMod:30,Volume:40};function F(e,i){return e.stage-i.stage}l.InitDefaultParams=W;function W(e,i){for(var o=0;o<i.length;o+=1){var d=i[o],S=e[d.name]||{};de(d.params,function(b,_){typeof S[_]=="undefined"&&(S[_]=b.D)}),e[d.name]=S}}l.Processor=G;function G(e,i){e=e||{},i=i||l.DefaultModules,typeof e=="function"?e=e():e=JSON.parse(JSON.stringify(e)),this.finished=!1,this.state={SampleRate:e.SampleRate||l.SampleRate},i=i.slice(),i.sort(F),this.modules=i,W(e,i);for(var o=0;o<this.modules.length;o+=1){var d=this.modules[o];this.modules[o].setup(this.state,e[d.name])}}G.prototype={generate:function(e){for(var i=0;i<e.length;i+=1)e[i]=0;if(!this.finished){for(var o=this.state,d=e.length|0,i=0;i<this.modules.length;i+=1){var S=this.modules[i],b=S.process(o,e.subarray(0,d))|0;d=Math.min(d,b)}d<e.length&&(this.finished=!0);for(var i=d;i<e.length;i++)e[i]=0}},getSamplesLeft:function(){for(var e=0,i=0;i<this.state.envelopes.length;i+=1)e+=this.state.envelopes[i].N;return e===0&&(e=3*this.state.SampleRate),e}},l.Module.Frequency={name:"Frequency",params:{Start:{L:30,H:1800,D:440},Min:{L:30,H:1800,D:30},Max:{L:30,H:1800,D:1800},Slide:{L:-1,H:1,D:0},DeltaSlide:{L:-1,H:1,D:0},RepeatSpeed:{L:0,H:3,D:0},ChangeAmount:{L:-12,H:12,D:0},ChangeSpeed:{L:0,H:1,D:0}},stage:A.PhaseSpeed,setup:function(e,i){var o=e.SampleRate;e.phaseParams=i,e.phaseSpeed=i.Start*a/o,e.phaseSpeedMax=i.Max*a/o,e.phaseSpeedMin=i.Min*a/o,e.phaseSpeedMin=Math.min(e.phaseSpeedMin,e.phaseSpeed),e.phaseSpeedMax=Math.max(e.phaseSpeedMax,e.phaseSpeed),e.phaseSlide=1+v(i.Slide,3)*64/o,e.phaseDeltaSlide=v(i.DeltaSlide,3)/(o*1e3),e.repeatTime=0,e.repeatLimit=1/0,i.RepeatSpeed>0&&(e.repeatLimit=i.RepeatSpeed*o),e.arpeggiatorTime=0,e.arpeggiatorLimit=i.ChangeSpeed*o,i.ChangeAmount==0&&(e.arpeggiatorLimit=1/0),e.arpeggiatorMod=1+i.ChangeAmount/12},process:function(e,i){for(var o=+e.phaseSpeed,d=+e.phaseSpeedMin,S=+e.phaseSpeedMax,b=+e.phaseSlide,_=+e.phaseDeltaSlide,I=e.repeatTime,T=e.repeatLimit,V=e.arpeggiatorTime,X=e.arpeggiatorLimit,ce=e.arpeggiatorMod,$=0;$<i.length;$++){if(b+=_,o*=b,o=o<d?d:o>S?S:o,I>T)return this.setup(e,e.phaseParams),$+this.process(e,i.subarray($))-1;I++,V>X&&(o*=ce,V=0,X=1/0),V++,i[$]+=o}return e.repeatTime=I,e.arpeggiatorTime=V,e.arpeggiatorLimit=X,e.phaseSpeed=o,e.phaseSlide=b,i.length}},l.Module.Vibrato={name:"Vibrato",params:{Depth:{L:0,H:1,D:0},DepthSlide:{L:-1,H:1,D:0},Frequency:{L:.01,H:48,D:0},FrequencySlide:{L:-1,H:1,D:0}},stage:A.PhaseSpeedMod,setup:function(e,i){var o=e.SampleRate;e.vibratoPhase=0,e.vibratoDepth=i.Depth,e.vibratoPhaseSpeed=i.Frequency*a/o,e.vibratoPhaseSpeedSlide=1+v(i.FrequencySlide,3)*3/o,e.vibratoDepthSlide=i.DepthSlide/o},process:function(e,i){var o=+e.vibratoPhase,d=+e.vibratoDepth,S=+e.vibratoPhaseSpeed,b=+e.vibratoPhaseSpeedSlide,_=+e.vibratoDepthSlide;if(d==0&&_<=0)return i.length;for(var I=0;I<i.length;I++)o+=S,o>a&&(o-=a),i[I]+=i[I]*h(o)*d,S*=b,d+=_,d=Jt(d);return e.vibratoPhase=o,e.vibratoDepth=d,e.vibratoPhaseSpeed=S,i.length}},l.Module.Generator={name:"Generator",params:{Func:{C:l.G,D:"square"},A:{L:0,H:1,D:0},B:{L:0,H:1,D:0},ASlide:{L:-1,H:1,D:0},BSlide:{L:-1,H:1,D:0}},stage:A.Generator,setup:function(e,i){e.generatorPhase=0,typeof i.Func=="string"?e.generator=l.G[i.Func]:e.generator=i.Func,typeof e.generator=="object"&&(e.generator=e.generator.create()),Fe(typeof e.generator=="function","generator must be a function"),e.generatorA=i.A,e.generatorASlide=i.ASlide,e.generatorB=i.B,e.generatorBSlide=i.BSlide},process:function(e,i){return e.generator(e,i)}};var j=1<<16;l.Module.Guitar={name:"Guitar",params:{A:{L:0,H:1,D:1},B:{L:0,H:1,D:1},C:{L:0,H:1,D:1}},stage:A.Generator,setup:function(e,i){e.guitarA=i.A,e.guitarB=i.B,e.guitarC=i.C,e.guitarBuffer=bt(j),e.guitarHead=0;for(var o=e.guitarBuffer,d=0;d<o.length;d++)o[d]=ft()*2-1},process:function(e,i){for(var o=j,d=o-1,S=+e.guitarA,b=+e.guitarB,_=+e.guitarC,I=S+b+_,T=e.guitarHead,V=e.guitarBuffer,X=0;X<i.length;X++){var ce=a/i[X]|0;ce=ce>o?o:ce;var $=T-ce+o&d;V[T]=(V[$-0+o&d]*S+V[$-1+o&d]*b+V[$-2+o&d]*_)/I,i[X]=V[T],T=T+1&d}return e.guitarHead=T,i.length}},l.Module.Filter={name:"Filter",params:{LP:{L:0,H:1,D:1},LPSlide:{L:-1,H:1,D:0},LPResonance:{L:0,H:1,D:0},HP:{L:0,H:1,D:0},HPSlide:{L:-1,H:1,D:0}},stage:A.SampleMod+0,setup:function(e,i){e.FilterEnabled=i.HP>C||i.LP<1-C,e.LPEnabled=i.LP<1-C,e.LP=v(i.LP,3)/10,e.LPSlide=1+i.LPSlide*100/e.SampleRate,e.LPPos=0,e.LPPosSlide=0,e.LPDamping=5/(1+v(i.LPResonance,2)*20)*(.01+i.LP),e.LPDamping=1-Math.min(e.LPDamping,.8),e.HP=v(i.HP,2)/10,e.HPPos=0,e.HPSlide=1+i.HPSlide*100/e.SampleRate},enabled:function(e){return e.FilterEnabled},process:function(e,i){if(!this.enabled(e))return i.length;for(var o=+e.LP,d=+e.LPPos,S=+e.LPPosSlide,b=+e.LPSlide,_=+e.LPDamping,I=+e.LPEnabled,T=+e.HP,V=+e.HPPos,X=+e.HPSlide,ce=0;ce<i.length;ce++){(T>C||T<-C)&&(T*=X,T=T<C?C:T>.1?.1:T);var $=d;o*=b,o=o<0?o=0:o>.1?.1:o;var Oe=i[ce];I?(S+=(Oe-d)*o,S*=_):(d=Oe,S=0),d+=S,V+=d-$,V*=1-T,i[ce]=V}return e.LPPos=d,e.LPPosSlide=S,e.LP=o,e.HP=T,e.HPPos=V,i.length}};var Re=1<<10;l.Module.Phaser={name:"Phaser",params:{Offset:{L:-1,H:1,D:0},Sweep:{L:-1,H:1,D:0}},stage:A.SampleMod+1,setup:function(e,i){e.phaserBuffer=bt(Re),e.phaserPos=0,e.phaserOffset=v(i.Offset,2)*(Re-4),e.phaserOffsetSlide=v(i.Sweep,3)*4e3/e.SampleRate},enabled:function(e){return w(e.phaserOffsetSlide)>C||w(e.phaserOffset)>C},process:function(e,i){if(!this.enabled(e))return i.length;for(var o=Re,d=o-1,S=e.phaserBuffer,b=e.phaserPos|0,_=+e.phaserOffset,I=+e.phaserOffsetSlide,T=0;T<i.length;T++){_+=I,_<0&&(_=-_,I=-I),_>d&&(_=d,I=0),S[b]=i[T];var V=b-(_|0)+o&d;i[T]+=S[V],b=b+1&d|0}return e.phaserPos=b,e.phaserOffset=_,i.length}},l.Module.Volume={name:"Volume",params:{Master:{L:0,H:1,D:.5},Attack:{L:.001,H:1,D:.01},Sustain:{L:0,H:2,D:.3},Punch:{L:0,H:3,D:1},Decay:{L:.001,H:2,D:1}},stage:A.Volume,setup:function(e,i){var o=e.SampleRate,d=i.Master,S=d*(1+i.Punch);e.envelopes=[{S:0,E:d,N:i.Attack*o|0},{S,E:d,N:i.Sustain*o|0},{S:d,E:0,N:i.Decay*o|0}];for(var b=0;b<e.envelopes.length;b+=1){var _=e.envelopes[b];_.G=(_.E-_.S)/_.N}},process:function(e,i){for(var o=0;e.envelopes.length>0&&o<i.length;){for(var d=e.envelopes[0],S=d.S,b=d.G,_=Math.min(i.length-o,d.N)|0,I=o+_|0;o<I;o+=1)i[o]*=S,S+=b,S=Vt(S,0,10);d.S=S,d.N-=_,d.N<=0&&e.envelopes.shift()}return o}},l.DefaultModules=[l.Module.Frequency,l.Module.Vibrato,l.Module.Generator,l.Module.Filter,l.Module.Phaser,l.Module.Volume],l.DefaultModules.sort(F),l.EmptyParams=ee;function ee(){return de(l.Module,function(){return{}})}l._RemoveEmptyParams=se;function se(e){for(var i in e)Je(e[i]).length==0&&delete e[i]}l.Preset={Reset:function(){return ee()},Coin:function(){var e=ee();return e.Frequency.Start=m(880,660),e.Volume.Sustain=m(.1),e.Volume.Decay=m(.4,.1),e.Volume.Punch=m(.3,.3),m()<.5&&(e.Frequency.ChangeSpeed=m(.15,.1),e.Frequency.ChangeAmount=m(8,4)),se(e),e},Laser:function(){var e=ee();return e.Generator.Func=_e(["square","saw","sine"]),m()<.33?(e.Frequency.Start=m(880,440),e.Frequency.Min=m(.1),e.Frequency.Slide=m(.3,-.8)):(e.Frequency.Start=m(1200,440),e.Frequency.Min=e.Frequency.Start-m(880,440),e.Frequency.Min<110&&(e.Frequency.Min=110),e.Frequency.Slide=m(.3,-1)),m()<.5?(e.Generator.A=m(.5),e.Generator.ASlide=m(.2)):(e.Generator.A=m(.5,.4),e.Generator.ASlide=m(.7)),e.Volume.Sustain=m(.2,.1),e.Volume.Decay=m(.4),m()<.5&&(e.Volume.Punch=m(.3)),m()<.33&&(e.Phaser.Offset=m(.2),e.Phaser.Sweep=m(.2)),m()<.5&&(e.Filter.HP=m(.3)),se(e),e},Explosion:function(){var e=ee();return e.Generator.Func="noise",m()<.5?(e.Frequency.Start=m(440,40),e.Frequency.Slide=m(.4,-.1)):(e.Frequency.Start=m(1600,220),e.Frequency.Slide=m(-.2,-.2)),m()<.2&&(e.Frequency.Slide=0),m()<.3&&(e.Frequency.RepeatSpeed=m(.5,.3)),e.Volume.Sustain=m(.3,.1),e.Volume.Decay=m(.5),e.Volume.Punch=m(.6,.2),m()<.5&&(e.Phaser.Offset=m(.9,-.3),e.Phaser.Sweep=m(-.3)),m()<.33&&(e.Frequency.ChangeSpeed=m(.3,.6),e.Frequency.ChangeAmount=m(24,-12)),se(e),e},Powerup:function(){var e=ee();return m()<.5?e.Generator.Func="saw":e.Generator.A=m(.6),e.Frequency.Start=m(220,440),m()<.5?(e.Frequency.Slide=m(.5,.2),e.Frequency.RepeatSpeed=m(.4,.4)):(e.Frequency.Slide=m(.2,.05),m()<.5&&(e.Vibrato.Depth=m(.6,.1),e.Vibrato.Frequency=m(30,10))),e.Volume.Sustain=m(.4),e.Volume.Decay=m(.4,.1),se(e),e},Hit:function(){var e=ee();return e.Generator.Func=_e(["square","saw","noise"]),e.Generator.A=m(.6),e.Generator.ASlide=m(1,-.5),e.Frequency.Start=m(880,220),e.Frequency.Slide=-m(.4,.3),e.Volume.Sustain=m(.1),e.Volume.Decay=m(.2,.1),m()<.5&&(e.Filter.HP=m(.3)),se(e),e},Jump:function(){var e=ee();return e.Generator.Func="square",e.Generator.A=m(.6),e.Frequency.Start=m(330,330),e.Frequency.Slide=m(.4,.2),e.Volume.Sustain=m(.3,.1),e.Volume.Decay=m(.2,.1),m()<.5&&(e.Filter.HP=m(.3)),m()<.3&&(e.Filter.LP=m(-.6,1)),se(e),e},Select:function(){var e=ee();return e.Generator.Func=_e(["square","saw"]),e.Generator.A=m(.6),e.Frequency.Start=m(660,220),e.Volume.Sustain=m(.1,.1),e.Volume.Decay=m(.2),e.Filter.HP=.2,se(e),e},Lucky:function(){var e=ee();return de(e,function(i,o){var d=l.Module[o].params;de(d,function(S,b){if(S.C){var _=Je(S.C);i[b]=_[_.length*ft()|0]}else i[b]=ft()*(S.H-S.L)+S.L})}),e.Volume.Master=.4,e.Filter={},se(e),e},Synth:function(){var e=ee();return e.Generator.Func=_e(["square","saw"]),e.Frequency.Start=_e([340,240,170]),e.Volume.Attack=m()>.6?m(.5):0,e.Volume.Sustain=m(1),e.Volume.Punch=m(1),e.Volume.Decay=m(.9)+.1,e.Generator.A=m(1),m()<.25&&(e.Filter.HP=m(1)),m()<.25&&(e.Filter.LP=m(1)),se(e),e},Tone:function(){var e=ee();return e.Generator.Func="square",e.Frequency.Start=261.6,e.Volume.Sustain=.6441,se(e),e},Click:function(){var e=m()>.5?l.Preset.Hit():l.Preset.Explosion();return m()<.5&&(e.Frequency.Slide=-.5+m(1)),m()<.5&&(e.Volume.Sustain*=m(.4)+.2,e.Volume.Decay*=m(.4)+.2),e.Frequency.Start=m(1200,440),se(e),e}},l.G.unoise=fe("sample = Math.random();"),l.G.sine=fe("sample = Math.sin(phase);"),l.G.saw=fe("sample = 2*(phase/TAU - ((phase/TAU + 0.5)|0));"),l.G.triangle=fe("sample = Math.abs(4 * ((phase/TAU - 0.25)%1) - 2) - 1;"),l.G.square=fe("var s = Math.sin(phase); sample = s > A ? 1.0 : s < A ? -1.0 : A;"),l.G.synth=fe("sample = Math.sin(phase) + .5*Math.sin(phase/2) + .3*Math.sin(phase/4);"),l.G.noise=fe("if(phase % TAU < 4){__noiseLast = Math.random() * 2 - 1;} sample = __noiseLast;"),l.G.string={create:function(){for(var e=65536,i=e-1,o=bt(e),d=0;d<o.length;d++)o[d]=ft()*2-1;var S=0;return function(b,_){for(var I=Math.PI*2,T=+b.generatorA,V=+b.generatorASlide,X=+b.generatorB,ce=+b.generatorBSlide,$=o,Oe=0;Oe<_.length;Oe++){var dt=_[Oe],wt=I/dt|0;T+=V,X+=ce,T=T<0?0:T>1?1:T,X=X<0?0:X>1?1:X;var Fn=S-wt+e&i,ei=($[Fn-0+e&i]*1+$[Fn-1+e&i]*T+$[Fn-2+e&i]*X)/(1+T+X);$[S]=ei,_[Oe]=$[S],S=S+1&i}return b.generatorA=T,b.generatorB=X,_.length}}};function fe(e){return new Function("$","block",`var TAU = Math.PI * 2;
var sample;
var phase = +$.generatorPhase,
	A = +$.generatorA, ASlide = +$.generatorASlide,
	B = +$.generatorB, BSlide = +$.generatorBSlide;

for(var i = 0; i < block.length; i++){
	var phaseSpeed = block[i];
	phase += phaseSpeed;
	if(phase > TAU){ phase -= TAU };
	A += ASlide; B += BSlide;
   A = A < 0 ? 0 : A > 1 ? 1 : A;
   B = B < 0 ? 0 : B > 1 ? 1 : B;
`+e+`	block[i] = sample;
}

$.generatorPhase = phase;
$.generatorA = A;
$.generatorB = B;
return block.length;
`)}l.CreateAudio=we;function we(e){typeof Float32Array!="undefined"&&Fe(e instanceof Float32Array,"data must be an Float32Array");var i=u*s>>3,o=l.SampleRate*i,d=fn(8+36+e.length*2),S=0;function b(I){for(var T=0;T<I.length;T+=1)d[S]=I.charCodeAt(T),S++}function _(I,T){T<=0||(d[S]=I&255,S++,_(I>>8,T-1))}return b("RIFF"),_(36+e.length*2,4),b("WAVEfmt "),_(16,4),_(1,2),_(u,2),_(l.SampleRate,4),_(o,4),_(i,2),_(s,2),b("data"),_(e.length*2,4),jt(d.subarray(S),e),new Audio("data:audio/wav;base64,"+un(d))}l.DownloadAsFile=function(e){Fe(e instanceof Audio,"input must be an Audio object"),document.location.href=e.src},l.Util={},l.Util.CopyFToU8=jt;function jt(e,i){Fe(e.length/2==i.length,"the target buffer must be twice as large as the iinput");for(var o=0,d=0;d<i.length;d++){var S=+i[d],b=S*32767|0;b=b<-32768?-32768:32767<b?32767:b,b+=b<0?65536:0,e[o]=b&255,o++,e[o]=b>>8,o++}}function un(e){for(var i=32768,o="",d=0;d<e.length;d+=i){var S=Math.min(d+i,e.length);o+=String.fromCharCode.apply(null,e.subarray(d,S))}return btoa(o)}function Ut(){return typeof x!="undefined"?new x().sampleRate:44100}function Fe(e,i){if(!e)throw new Error(i)}function Vt(e,i,o){return e=+e,i=+i,o=+o,e<i?+i:e>o?+o:+e}function Jt(e){return e=+e,e<0?0:e>1?1:+e}function de(e,i){var o={};for(var d in e)e.hasOwnProperty(d)&&(o[d]=i(e[d],d));return o}function m(e,i){var o=ft();return e!==void 0&&(o*=e),i!==void 0&&(o+=i),o}function _e(e){return e[e.length*ft()|0]}function Je(e){var i=[];for(var o in e)i.push(o);return i}l._createFloatArray=bt;function bt(e){if(typeof Float32Array=="undefined")for(var i=new Array(e),o=0;o<i.length;o++)i[o]=0;return new Float32Array(e)}function fn(e){if(typeof Uint8Array=="undefined")for(var i=new Array(e),o=0;o<i.length;o++)i[o]=0;return new Uint8Array(e)}var dn=Math.random;l.setRandomFunc=function(e){dn=e};function ft(){return dn()}})(ve={});let E,z,xt,et,re,Ne=!1;function tt(l=void 0){E=l==null?new(window.AudioContext||window.webkitAudioContext):l,Lt(),nt(),wn()}function Yt(){Ne||(Ne=!0,Zt())}function Lt(l=120){z=l,xt=60/z}function nt(l=8){et=l>0?4/l:void 0}function wn(l=.1){re=l}function $t(l){if(et==null)return l;const a=xt*et;return a>0?Math.ceil(l/a)*a:l}function Zt(){const l=E.createBufferSource();l.start=l.start||l.noteOn,l.start()}function _n(){E.resume()}class Be{constructor(a=null){Xe(this,"x"),Xe(this,"y"),Xe(this,"z"),Xe(this,"w"),this.setSeed(a)}get(a=1,s){return s==null&&(s=a,a=0),this.next()/4294967295*(s-a)+a}getInt(a,s){s==null&&(s=a,a=0);const u=Math.floor(a),h=Math.floor(s);return h===u?u:this.next()%(h-u)+u}getPlusOrMinus(){return this.getInt(2)*2-1}select(a){return a[this.getInt(a.length)]}setSeed(a,s=123456789,u=362436069,h=521288629,v=32){this.w=a!=null?a>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=s>>>0,this.y=u>>>0,this.z=h>>>0;for(let w=0;w<v;w++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const a=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(a^a>>>8))>>>0,this.w}}function Pe(l,a){let s=[];for(let u=0;u<l;u++)s.push(a(u));return s}function en(l){return 440*Math.pow(2,(l-69)/12)}function it(l){let a=0;const s=l.length;for(let u=0;u<s;u++){const h=l.charCodeAt(u);a=(a<<5)-a+h,a|=0}return a}const rt=["coin","laser","explosion","powerUp","hit","jump","select","random","synth","tone","click"],Tn={coin:"Coin",laser:"Laser",explosion:"Explosion",powerUp:"Powerup",hit:"Hit",jump:"Jump",select:"Select",random:"Lucky",synth:"Synth",tone:"Tone",click:"Click"},ze=new Be;let lt,Ot;function tn(){Ot=ve.Live(),lt=[],ve.setRandomFunc(()=>ze.get())}function at(l){qe(l)}function pe(){const l=E.currentTime;lt.forEach(a=>{Z(a,l)})}function R(l=void 0,a=void 0,s=2,u=.5,h=void 0,v=1,w=1){a!=null&&ze.setSeed(a);const C=ve.Preset[Tn[l!=null?l:rt[ze.getInt(8)]]],x=Pe(s,()=>{const A=C();return h!=null&&A.Frequency.Start!=null&&(A.Frequency.Start=h),A.Volume.Attack!=null&&(A.Volume.Attack*=v),A.Volume.Sustain!=null&&(A.Volume.Sustain*=w),A});return Cn(l,x,u)}function Cn(l,a,s){const u=a.map(v=>{const w=Ot._generate(v),C=E.createBuffer(1,w.length,ve.SampleRate);var x=C.getChannelData(0);return x.set(w),C}),h=E.createGain();return h.gain.value=s*re,h.connect(E.destination),{type:l,params:a,volume:s,buffers:u,bufferSourceNodes:void 0,gainNode:h,isPlaying:!1,playedTime:void 0}}function At(l,a,s,u,h){const v=new Be;v.setSeed(s);let w;if(a){let C=v.select(["hit","hit","click","click","explosion"]);u!=null&&(C=u),w=R(C,v.getInt(999999999),C==="explosion"?1:2,h!=null?h:C==="explosion"?.4:.5,v.get(100,200),C==="explosion"?.5:1,C==="explosion"?.2:1)}else{const C=It(l);let x=v.get()<1/C?"select":v.select(["tone","tone","synth"]);u!=null&&(x=u),w=R(x,v.getInt(999999999),x!=="select"?1:2,h!=null?h:x==="tone"?.3:x==="synth"?.4:.25,261.6,x!=="select"?.1:1,x!=="select"?2:1)}return w.isDrum=a,w.seed=s,w}function It(l){if(l==null||l.notes.length===0)return 1;let a=0,s=0;return l.notes.forEach(u=>{const h=u.quantizedEndStep-u.quantizedStartStep;h>0&&(a+=h,s++)}),a/s}function Tt(l){lt.push(l)}function qe(l){l.isPlaying=!0}function Z(l,a){if(!l.isPlaying)return;l.isPlaying=!1;const s=$t(a);(l.playedTime==null||s>l.playedTime)&&(He(l,s),l.playedTime=s)}function He(l,a,s=void 0){l.bufferSourceNodes=[],l.buffers.forEach(u=>{const h=E.createBufferSource();if(h.buffer=u,s!=null&&h.playbackRate!=null){const v=Math.pow(2,.08333333333333333);h.playbackRate.value=Math.pow(v,s)}h.start=h.start||h.noteOn,h.connect(l.gainNode),h.start(a),l.bufferSourceNodes.push(h)})}function nn(l,a=void 0){l.bufferSourceNodes!=null&&(l.bufferSourceNodes.forEach(s=>{a==null?s.stop():s.stop(a)}),l.bufferSourceNodes=void 0)}const Mn=100;function Rn(l){let a=`${l}`,s;rt.forEach(F=>{const W=`@${F}`,G=a.indexOf(W);G>=0&&(s=F,a=`${a.slice(0,G)}${a.slice(G+W.length)}`)});const u="@d",h=a.indexOf(u);let v=!1;h>=0&&(v=!0,a=`${a.slice(0,h)}${a.slice(h+u.length)}`);const w=a.match(/@s\d+/);let C=1;w!=null&&(C=Number.parseInt(w[0].substring(2)),a=a.replace(/@s\d+/,""));const x=a.match(/v\d+/);let A=.5;return x!=null&&(A=Number.parseInt(x[0].substring(1))/Mn,a=a.replace(/v\d+/,"")),{mml:a,args:{isDrum:v,seed:C,type:s,volume:A}}}function Rt(l,a,s,u){return{mml:l,sequence:a,soundEffect:s,noteIndex:0,endStep:-1,visualizer:u}}function kt(l,a,s){const u=a.sequence.notes[a.noteIndex];u!=null&&((a.soundEffect.type==="synth"||a.soundEffect.type==="tone")&&a.endStep===l.notesStepsIndex&&nn(a.soundEffect,s),u.quantizedStartStep===l.notesStepsIndex&&((a.soundEffect.type==="synth"||a.soundEffect.type==="tone")&&nn(a.soundEffect),a.soundEffect.isDrum?He(a.soundEffect,s):He(a.soundEffect,s,u.pitch-69),a.visualizer!=null&&a.visualizer.redraw(u),a.endStep=u.quantizedEndStep,a.endStep>=l.notesStepsCount&&(a.endStep-=l.notesStepsCount),a.noteIndex++,a.noteIndex>=a.sequence.notes.length&&(a.noteIndex=0)))}let ge=[];function Dt(){Gt(),ge=[]}function ot(l,a,s=1){l.forEach(h=>{h.noteIndex=0});const u={parts:l,notesStepsCount:a,notesStepsIndex:void 0,noteInterval:void 0,nextNotesTime:void 0,speedRatio:s,isPlaying:!1,isLooping:!1};return je(u),u}function je(l){const a=xt/4/l.speedRatio;l.notesStepsIndex=0,l.noteInterval=a,l.nextNotesTime=$t(E.currentTime)-a}function ke(l){ge.push(l)}function Ue(l){ge=ge.filter(a=>a!==l)}function Et(){ge.forEach(l=>{Pn(l)})}function gt(l,a=!1){l.isLooping=a,je(l),l.isPlaying=!0}function Ft(l){l.isPlaying=!1,l.parts.forEach(a=>{nn(a.soundEffect)})}function Gt(){ge.forEach(l=>{Ft(l)})}function Pn(l){if(!l.isPlaying)return;const a=E.currentTime;a<l.nextNotesTime||(l.nextNotesTime+=l.noteInterval,l.nextNotesTime<a-xt&&(l.nextNotesTime=$t(a)),l.parts.forEach(s=>{kt(l,s,l.nextNotesTime)}),l.notesStepsIndex++,l.notesStepsIndex>=l.notesStepsCount&&(l.isLooping?l.notesStepsIndex=0:l.isPlaying=!1))}const mt={c:"coin",l:"laser",e:"explosion",p:"powerUp",h:"hit",j:"jump",s:"select",u:"random",r:"random"},P=ze;let yt=1;function rn(l){yt=l}function ln(l,a,s,u,h,v,w){P.setSeed(yt+it(l)),ct(),ae=null;let C=P.select(v);const x=Pe(h,()=>{const A=Math.floor(Math.abs(P.get()+P.get()-1)*3),F=Math.floor((P.get()+P.get()-1)*10),W=Math.abs(P.get()+P.get()-1),G=P.get()<.25;G||(C=P.select(v));const j=P.get()<.5,Re=P.get()<.5,ee=P.get()<.9;return on(s,C,a,.7,A,F,W,G,j,Re,ee,void 0,w)});return Nt(x,.5/u)}function an(l="0",a=!1,s=69-12,u=16,h=.25,v=4,w=1){P.setSeed(yt+it(l)),ct(),ae=null;let C=mt[l[0]];C==null&&(C=rt[P.getInt(8)]);let x=.8;a&&(h/=4,x/=2);const A=Pe(v,()=>{const F=Math.floor(Math.abs(P.get()+P.get()-1)*3),W=Math.floor((P.get()+P.get()-1)*10),G=a?2:Math.abs(P.get()+P.get()-1),j=P.get()<.25,Re=a?!1:P.get()<.5,ee=P.get()<.5,se=a?P.get()<.25:P.get()<.9,fe=P.get(.5);return on(u,C,s,x,F,W,G,j,Re,ee,se,fe,w)});return Nt(A,.5/h)}function Nt(l,a){const s=l.map(u=>{const h=[];return u.notes.forEach((v,w)=>{v!=null&&h.push({pitch:v+69,quantizedStartStep:w*2})}),Rt(void 0,{notes:h},u.soundEffect)});return ot(s,l[0].notes.length*2,a)}let ae;function on(l=32,a,s=60,u=1,h=0,v=0,w=1,C=!1,x=!1,A=!1,F=!1,W=null,G=.1){const j=be(a,en(s),u,G);if(ae!=null&&C)j.noteRatios=ae.noteRatios;else{const Re=W!=null?Bt(l,W):xn(l);j.noteRatios=Dn(Re,x?0:-1,1,w,F)}return j.notes=oe(j.noteRatios,h,v,A),ae=j,j}function xn(l){let a=Pe(l,()=>!1),s=4;for(;s<=l;)a=kn(a,s),s*=2;return a}function kn(l,a){let s=Pe(a,()=>!1);const u=Math.floor(Math.abs(P.get()+P.get()-1)*4);for(let h=0;h<u;h++)s[P.getInt(a-1)]=!0;return l.map((h,v)=>s[v%a]?!h:h)}function Bt(l,a){return Pe(l,()=>P.get()>=a)}const st=[[0,4,7],[0,3,7],[0,4,7,10],[0,4,7,11],[0,3,7,10]],ne=[[[0,0],[7,0],[9,1],[4,1]],[[5,0],[0,0],[5,0],[7,0]],[[5,3],[7,2],[4,4],[9,1]],[[9,1],[2,1],[7,0],[0,0]],[[9,1],[5,0],[7,0],[0,0]]];let Se;function ct(){Se=P.select(ne).map((a,s)=>[P.get()<.7?a[0]:ne[P.getInt(ne.length)][s][0],P.get()<.7?a[1]:P.getInt(st.length)])}function Dn(l,a,s,u,h){let v=P.get(),w=P.get(-.5,.5),x=l.length/Se.length,A=[];return l.forEach((F,W)=>{let G=Math.floor(W/x),j=W%x;if(h&&G===Math.floor(Se.length/2)){A.push(A[j]),A[j]!=null&&(v=A[j]);return}if(!F){A.push(null);return}A.push(v),w+=P.get(-.25,.25),v+=w*u,(P.get()<.2||v<=a||v>=s)&&(v-=w*2,w*=-1)}),A}function oe(l,a,s,u){let v=l.length/Se.length;return l.map((w,C)=>{if(w==null)return null;let x=Math.floor(C/v),A=Se[x][0],F=st[Se[x][1]],W=w;u&&(W=Math.floor(W*2)/2);let G=Math.floor(W),j=Math.floor((W-G)*F.length);for(j+=a+P.getInt(-s,s+1);j>=F.length;)j-=F.length,G++;for(;j<0;)j+=F.length,G--;return A+G*12+F[j]})}function be(l,a,s,u){return{noteRatios:void 0,notes:void 0,soundEffect:R(l,void 0,1,u,a,s,s)}}const J=ze;let De,xe,le;function vt(l="0",a=2,s,u=1){cn(mt[l[0]],{seed:De+it(l),numberOfSounds:a,pitch:s,volume:u})}function St(l="0",a=69-24,s=32,u=.25,h=4,v=["laser","select","hit","hit"],w=1){le=ln(l,a,s,u,h,v,w),ke(le),gt(le,!0)}function sn(){le!=null&&(Ft(le),Ue(le),le=void 0)}function zt(l="0",a=!1,s=69-12,u=16,h=.25,v=4,w=1){const C=`${l}_${a}_${s}_${u}_${h}_${v}_${w}`;if(xe[C]==null){const x=an(l,a,s,u,h,v,w);ke(x),xe[C]=x}gt(xe[C])}function ut(){Gt()}const qt=.125;let Ve,Ee;function En(l,a){const s=We(We({},{volume:1,speed:1,isLooping:!0}),a);let u=0;const h=l.map(w=>Rn(w));h.forEach(w=>{const C=Te(w.mml);C>u&&(u=C)});const v=h.map(w=>{const{mml:C,args:x}=w,A=Le(C,u),F=At(A,x.isDrum,x.seed,x.type,x.volume*s.volume);return Rt(C,A,F)});Ee=ot(v,u,s.speed),ke(Ee),gt(Ee,s.isLooping)}function Ln(){Ee!=null&&(Ft(Ee),Ue(Ee),Ee=void 0)}function cn(l=void 0,a){const s=We(We({},{seed:void 0,numberOfSounds:2,volume:1,pitch:void 0}),a),u=`${l}_${JSON.stringify(s)}`;if(Ve[u]==null){l==null&&(J.setSeed(s.seed),l=rt[J.getInt(8)]);const h=R(l,s.seed==null?De:s.seed,s.numberOfSounds,s.volume,s.pitch==null?void 0:en(s.pitch));Tt(h),Ve[u]=h}at(Ve[u])}function On(){Et(),pe()}function An(l=1,a=void 0){Ie(l),tt(a),Ht()}function Ht(){Dt(),xe={},tn(),Ve={},Ln()}function Ie(l=1){De=l,rn(De)}function Te(l){const a=new Qt(l);for(let s of a)if(s.type==="end")return Math.floor(s.time/qt)}function Le(l,a){const s=[],u=new Qt(l);for(let h of u)if(h.type==="note"){let v=Math.floor((h.time+h.duration)/qt);v>=a&&(v-=a),s.push({pitch:h.noteNumber,quantizedStartStep:Math.floor(h.time/qt),quantizedEndStep:v})}return{notes:s}}N.init=An,N.play=vt,N.playBgm=St,N.playEmpty=Zt,N.playJingle=zt,N.playMml=En,N.playSoundEffect=cn,N.reset=Ht,N.resumeAudioContext=_n,N.setQuantize=nt,N.setSeed=Ie,N.setTempo=Lt,N.setVolume=wn,N.startAudio=Yt,N.stopBgm=sn,N.stopJingles=ut,N.stopMml=Ln,N.update=On,Object.defineProperties(N,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(Zn,Zn.exports);var wr=br(Zn.exports),_r=Sr({__proto__:null,default:wr},[Zn.exports]),si={exports:{}};(function(f,me){var ye=200,he="__lodash_hash_undefined__",te=9007199254740991,Mt="[object Arguments]",Pt="[object Array]",We="[object Boolean]",Xe="[object Date]",N="[object Error]",H="[object Function]",O="[object GeneratorFunction]",ht="[object Map]",yn="[object Number]",Ge="[object Object]",vn="[object Promise]",Sn="[object RegExp]",Qe="[object Set]",Q="[object String]",Ye="[object Symbol]",Wt="[object WeakMap]",bn="[object ArrayBuffer]",Ce="[object DataView]",Y="[object Float32Array]",Me="[object Float64Array]",k="[object Int8Array]",B="[object Int16Array]",Xt="[object Int32Array]",K="[object Uint8Array]",$e="[object Uint8ClampedArray]",Ze="[object Uint16Array]",pt="[object Uint32Array]",ie=/[\\^$.*+?()[\]{}|]/g,Qt=/\w*$/,ve=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,z={};z[Mt]=z[Pt]=z[bn]=z[Ce]=z[We]=z[Xe]=z[Y]=z[Me]=z[k]=z[B]=z[Xt]=z[ht]=z[yn]=z[Ge]=z[Sn]=z[Qe]=z[Q]=z[Ye]=z[K]=z[$e]=z[Ze]=z[pt]=!0,z[N]=z[H]=z[Wt]=!1;var xt=typeof jn=="object"&&jn&&jn.Object===Object&&jn,et=typeof self=="object"&&self&&self.Object===Object&&self,re=xt||et||Function("return this")(),Ne=me&&!me.nodeType&&me,tt=Ne&&!0&&f&&!f.nodeType&&f,Yt=tt&&tt.exports===Ne;function Lt(e,i){return e.set(i[0],i[1]),e}function nt(e,i){return e.add(i),e}function wn(e,i){for(var o=-1,d=e?e.length:0;++o<d&&i(e[o],o,e)!==!1;);return e}function $t(e,i){for(var o=-1,d=i.length,S=e.length;++o<d;)e[S+o]=i[o];return e}function Zt(e,i,o,d){var S=-1,b=e?e.length:0;for(d&&b&&(o=e[++S]);++S<b;)o=i(o,e[S],S,e);return o}function _n(e,i){for(var o=-1,d=Array(e);++o<e;)d[o]=i(o);return d}function Be(e,i){return e==null?void 0:e[i]}function Pe(e){var i=!1;if(e!=null&&typeof e.toString!="function")try{i=!!(e+"")}catch{}return i}function en(e){var i=-1,o=Array(e.size);return e.forEach(function(d,S){o[++i]=[S,d]}),o}function it(e,i){return function(o){return e(i(o))}}function rt(e){var i=-1,o=Array(e.size);return e.forEach(function(d){o[++i]=d}),o}var Tn=Array.prototype,ze=Function.prototype,lt=Object.prototype,Ot=re["__core-js_shared__"],tn=function(){var e=/[^.]+$/.exec(Ot&&Ot.keys&&Ot.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),at=ze.toString,pe=lt.hasOwnProperty,R=lt.toString,Cn=RegExp("^"+at.call(pe).replace(ie,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),At=Yt?re.Buffer:void 0,It=re.Symbol,Tt=re.Uint8Array,qe=it(Object.getPrototypeOf,Object),Z=Object.create,He=lt.propertyIsEnumerable,nn=Tn.splice,Mn=Object.getOwnPropertySymbols,Rn=At?At.isBuffer:void 0,Rt=it(Object.keys,Object),kt=x(re,"DataView"),ge=x(re,"Map"),Dt=x(re,"Promise"),ot=x(re,"Set"),je=x(re,"WeakMap"),ke=x(Object,"create"),Ue=we(kt),Et=we(ge),gt=we(Dt),Ft=we(ot),Gt=we(je),Pn=It?It.prototype:void 0,mt=Pn?Pn.valueOf:void 0;function P(e){var i=-1,o=e?e.length:0;for(this.clear();++i<o;){var d=e[i];this.set(d[0],d[1])}}function yt(){this.__data__=ke?ke(null):{}}function rn(e){return this.has(e)&&delete this.__data__[e]}function ln(e){var i=this.__data__;if(ke){var o=i[e];return o===he?void 0:o}return pe.call(i,e)?i[e]:void 0}function an(e){var i=this.__data__;return ke?i[e]!==void 0:pe.call(i,e)}function Nt(e,i){var o=this.__data__;return o[e]=ke&&i===void 0?he:i,this}P.prototype.clear=yt,P.prototype.delete=rn,P.prototype.get=ln,P.prototype.has=an,P.prototype.set=Nt;function ae(e){var i=-1,o=e?e.length:0;for(this.clear();++i<o;){var d=e[i];this.set(d[0],d[1])}}function on(){this.__data__=[]}function xn(e){var i=this.__data__,o=ut(i,e);if(o<0)return!1;var d=i.length-1;return o==d?i.pop():nn.call(i,o,1),!0}function kn(e){var i=this.__data__,o=ut(i,e);return o<0?void 0:i[o][1]}function Bt(e){return ut(this.__data__,e)>-1}function st(e,i){var o=this.__data__,d=ut(o,e);return d<0?o.push([e,i]):o[d][1]=i,this}ae.prototype.clear=on,ae.prototype.delete=xn,ae.prototype.get=kn,ae.prototype.has=Bt,ae.prototype.set=st;function ne(e){var i=-1,o=e?e.length:0;for(this.clear();++i<o;){var d=e[i];this.set(d[0],d[1])}}function Se(){this.__data__={hash:new P,map:new(ge||ae),string:new P}}function ct(e){return C(this,e).delete(e)}function Dn(e){return C(this,e).get(e)}function oe(e){return C(this,e).has(e)}function be(e,i){return C(this,e).set(e,i),this}ne.prototype.clear=Se,ne.prototype.delete=ct,ne.prototype.get=Dn,ne.prototype.has=oe,ne.prototype.set=be;function J(e){this.__data__=new ae(e)}function De(){this.__data__=new ae}function xe(e){return this.__data__.delete(e)}function le(e){return this.__data__.get(e)}function vt(e){return this.__data__.has(e)}function St(e,i){var o=this.__data__;if(o instanceof ae){var d=o.__data__;if(!ge||d.length<ye-1)return d.push([e,i]),this;o=this.__data__=new ne(d)}return o.set(e,i),this}J.prototype.clear=De,J.prototype.delete=xe,J.prototype.get=le,J.prototype.has=vt,J.prototype.set=St;function sn(e,i){var o=Fe(e)||Ut(e)?_n(e.length,String):[],d=o.length,S=!!d;for(var b in e)(i||pe.call(e,b))&&!(S&&(b=="length"||Re(b,d)))&&o.push(b);return o}function zt(e,i,o){var d=e[i];(!(pe.call(e,i)&&un(d,o))||o===void 0&&!(i in e))&&(e[i]=o)}function ut(e,i){for(var o=e.length;o--;)if(un(e[o][0],i))return o;return-1}function qt(e,i){return e&&h(i,fn(i),e)}function Ve(e,i,o,d,S,b,_){var I;if(d&&(I=b?d(e,S,b,_):d(e)),I!==void 0)return I;if(!Je(e))return e;var T=Fe(e);if(T){if(I=W(e),!i)return u(e,I)}else{var V=F(e),X=V==H||V==O;if(de(e))return An(e,i);if(V==Ge||V==Mt||X&&!b){if(Pe(e))return b?e:{};if(I=G(X?{}:e),!i)return v(e,qt(I,e))}else{if(!z[V])return b?e:{};I=j(e,V,Ve,i)}}_||(_=new J);var ce=_.get(e);if(ce)return ce;if(_.set(e,I),!T)var $=o?w(e):fn(e);return wn($||e,function(Oe,dt){$&&(dt=Oe,Oe=e[dt]),zt(I,dt,Ve(Oe,i,o,d,dt,e,_))}),I}function Ee(e){return Je(e)?Z(e):{}}function En(e,i,o){var d=i(e);return Fe(e)?d:$t(d,o(e))}function Ln(e){return R.call(e)}function cn(e){if(!Je(e)||se(e))return!1;var i=m(e)||Pe(e)?Cn:ve;return i.test(we(e))}function On(e){if(!fe(e))return Rt(e);var i=[];for(var o in Object(e))pe.call(e,o)&&o!="constructor"&&i.push(o);return i}function An(e,i){if(i)return e.slice();var o=new e.constructor(e.length);return e.copy(o),o}function Ht(e){var i=new e.constructor(e.byteLength);return new Tt(i).set(new Tt(e)),i}function Ie(e,i){var o=i?Ht(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.byteLength)}function Te(e,i,o){var d=i?o(en(e),!0):en(e);return Zt(d,Lt,new e.constructor)}function Le(e){var i=new e.constructor(e.source,Qt.exec(e));return i.lastIndex=e.lastIndex,i}function l(e,i,o){var d=i?o(rt(e),!0):rt(e);return Zt(d,nt,new e.constructor)}function a(e){return mt?Object(mt.call(e)):{}}function s(e,i){var o=i?Ht(e.buffer):e.buffer;return new e.constructor(o,e.byteOffset,e.length)}function u(e,i){var o=-1,d=e.length;for(i||(i=Array(d));++o<d;)i[o]=e[o];return i}function h(e,i,o,d){o||(o={});for(var S=-1,b=i.length;++S<b;){var _=i[S],I=d?d(o[_],e[_],_,o,e):void 0;zt(o,_,I===void 0?e[_]:I)}return o}function v(e,i){return h(e,A(e),i)}function w(e){return En(e,fn,A)}function C(e,i){var o=e.__data__;return ee(i)?o[typeof i=="string"?"string":"hash"]:o.map}function x(e,i){var o=Be(e,i);return cn(o)?o:void 0}var A=Mn?it(Mn,Object):dn,F=Ln;(kt&&F(new kt(new ArrayBuffer(1)))!=Ce||ge&&F(new ge)!=ht||Dt&&F(Dt.resolve())!=vn||ot&&F(new ot)!=Qe||je&&F(new je)!=Wt)&&(F=function(e){var i=R.call(e),o=i==Ge?e.constructor:void 0,d=o?we(o):void 0;if(d)switch(d){case Ue:return Ce;case Et:return ht;case gt:return vn;case Ft:return Qe;case Gt:return Wt}return i});function W(e){var i=e.length,o=e.constructor(i);return i&&typeof e[0]=="string"&&pe.call(e,"index")&&(o.index=e.index,o.input=e.input),o}function G(e){return typeof e.constructor=="function"&&!fe(e)?Ee(qe(e)):{}}function j(e,i,o,d){var S=e.constructor;switch(i){case bn:return Ht(e);case We:case Xe:return new S(+e);case Ce:return Ie(e,d);case Y:case Me:case k:case B:case Xt:case K:case $e:case Ze:case pt:return s(e,d);case ht:return Te(e,d,o);case yn:case Q:return new S(e);case Sn:return Le(e);case Qe:return l(e,d,o);case Ye:return a(e)}}function Re(e,i){return i=i==null?te:i,!!i&&(typeof e=="number"||E.test(e))&&e>-1&&e%1==0&&e<i}function ee(e){var i=typeof e;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?e!=="__proto__":e===null}function se(e){return!!tn&&tn in e}function fe(e){var i=e&&e.constructor,o=typeof i=="function"&&i.prototype||lt;return e===o}function we(e){if(e!=null){try{return at.call(e)}catch{}try{return e+""}catch{}}return""}function jt(e){return Ve(e,!0,!0)}function un(e,i){return e===i||e!==e&&i!==i}function Ut(e){return Jt(e)&&pe.call(e,"callee")&&(!He.call(e,"callee")||R.call(e)==Mt)}var Fe=Array.isArray;function Vt(e){return e!=null&&_e(e.length)&&!m(e)}function Jt(e){return bt(e)&&Vt(e)}var de=Rn||ft;function m(e){var i=Je(e)?R.call(e):"";return i==H||i==O}function _e(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=te}function Je(e){var i=typeof e;return!!e&&(i=="object"||i=="function")}function bt(e){return!!e&&typeof e=="object"}function fn(e){return Vt(e)?sn(e):On(e)}function dn(){return[]}function ft(){return!1}f.exports=jt})(si,si.exports);var Cr=si.exports;(function(f){function me(n,t=0,r=1){return Math.max(t,Math.min(n,r))}function ye(n,t,r){const c=r-t,p=n-t;if(p>=0)return p%c+t;{let g=c+p%c+t;return g>=r&&(g-=c),g}}function he(n,t,r){return t<=n&&n<r}function te(n){return[...Array(n).keys()]}function Mt(n,t){return te(n).map(r=>t(r))}function Pt(n,t){let r=[];for(let c=0,p=0;c<n.length;p++)t(n[c],p)?(r.push(n[c]),n.splice(c,1)):c++;return r}function We(n){return[...n].reduce((t,[r,c])=>(t[r]=c,t),{})}function Xe(n){return Object.keys(n).map(t=>[t,n[t]])}function N(n,t){return String.fromCharCode(n.charCodeAt(0)+t)}function H(n){return n.x!=null&&n.y!=null}class O{constructor(t,r){this.x=0,this.y=0,this.set(t,r)}set(t=0,r=0){return H(t)?(this.x=t.x,this.y=t.y,this):(this.x=t,this.y=r,this)}add(t,r){return H(t)?(this.x+=t.x,this.y+=t.y,this):(this.x+=t,this.y+=r,this)}sub(t,r){return H(t)?(this.x-=t.x,this.y-=t.y,this):(this.x-=t,this.y-=r,this)}mul(t){return this.x*=t,this.y*=t,this}div(t){return this.x/=t,this.y/=t,this}clamp(t,r,c,p){return this.x=me(this.x,t,r),this.y=me(this.y,c,p),this}wrap(t,r,c,p){return this.x=ye(this.x,t,r),this.y=ye(this.y,c,p),this}addWithAngle(t,r){return this.x+=Math.cos(t)*r,this.y+=Math.sin(t)*r,this}swapXy(){const t=this.x;return this.x=this.y,this.y=t,this}normalize(){return this.div(this.length),this}rotate(t){if(t===0)return this;const r=this.x;return this.x=r*Math.cos(t)-this.y*Math.sin(t),this.y=r*Math.sin(t)+this.y*Math.cos(t),this}angleTo(t,r){return H(t)?Math.atan2(t.y-this.y,t.x-this.x):Math.atan2(r-this.y,t-this.x)}distanceTo(t,r){let c,p;return H(t)?(c=t.x-this.x,p=t.y-this.y):(c=t-this.x,p=r-this.y),Math.sqrt(c*c+p*p)}isInRect(t,r,c,p){return he(this.x,t,t+c)&&he(this.y,r,r+p)}equals(t){return this.x===t.x&&this.y===t.y}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}get angle(){return Math.atan2(this.y,this.x)}}const ht=["transparent","white","red","green","yellow","blue","purple","cyan","black","light_red","light_green","light_yellow","light_blue","light_purple","light_cyan","light_black"],yn="twrgybpclRGYBPCL";let Ge;const vn=[15658734,15277667,5025616,16761095,4149685,10233776,240116,6381921];function Sn(n){const[t,r,c]=Qe(0,n);if(Ge=We(ht.map((p,g)=>{if(g<1)return[p,{r:0,g:0,b:0,a:0}];if(g<9){const[L,q,U]=Qe(g-1,n);return[p,{r:L,g:q,b:U,a:1}]}const[y,M,D]=Qe(g-9+1,n);return[p,{r:Math.floor(n?y*.5:t-(t-y)*.5),g:Math.floor(n?M*.5:c-(c-M)*.5),b:Math.floor(n?D*.5:r-(r-D)*.5),a:1}]})),n){const p=Ge.blue;Ge.white={r:Math.floor(p.r*.15),g:Math.floor(p.g*.15),b:Math.floor(p.b*.15),a:1}}}function Qe(n,t){t&&(n===0?n=7:n===7&&(n=0));const r=vn[n];return[(r&16711680)>>16,(r&65280)>>8,r&255]}function Q(n,t=1){const r=Ge[n];return Math.floor(r.r*t)<<16|Math.floor(r.g*t)<<8|Math.floor(r.b*t)}function Ye(n,t=1){const r=Ge[n],c=Math.floor(r.r*t),p=Math.floor(r.g*t),g=Math.floor(r.b*t);return r.a<1?`rgba(${c},${p},${g},${r.a})`:`rgb(${c},${p},${g})`}const Wt=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float width;
uniform float height;

float gridValue(vec2 uv, float res) {
  vec2 grid = fract(uv * res);
  return (step(res, grid.x) * step(res, grid.y));
}

void main(void) {
  vec4 color = texture2D(uSampler, vTextureCoord);  
  vec2 grid_uv = vTextureCoord.xy * vec2(width, height);
  float v = gridValue(grid_uv, 0.2);
  gl_FragColor.rgba = color * v;
}
`;function bn(n,t){return new PIXI.Filter(void 0,Wt,{width:n,height:t})}const Ce=new O;let Y,Me,k,B=new O;const Xt=5;document.createElement("img");let K,$e,Ze=1,pt="black",ie,Qt,ve=!1,E,z;function xt(n,t,r,c,p,g,y){Ce.set(n),E=y,pt=r;const M=`
-webkit-touch-callout: none;
-webkit-tap-highlight-color: ${t};
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background: ${t};
color: #888;
`,D=`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`,L=`
image-rendering: -moz-crisp-edges;
image-rendering: -webkit-optimize-contrast;
image-rendering: -o-crisp-edges;
image-rendering: pixelated;
`;if(document.body.style.cssText=M,B.set(Ce),E.isUsingPixi){B.mul(Xt);const U=new PIXI.Application({width:B.x,height:B.y});if(Y=U.view,k=new PIXI.Graphics,k.scale.x=k.scale.y=Xt,PIXI.settings.SCALE_MODE=PIXI.SCALE_MODES.NEAREST,U.stage.addChild(k),k.filters=[],E.name==="crt"&&k.filters.push(z=new PIXI.filters.CRTFilter({vignettingAlpha:.7})),E.name==="pixel"&&k.filters.push(bn(B.x,B.y)),E.name==="pixel"||E.name==="shapeDark"){const ue=new PIXI.filters.AdvancedBloomFilter({threshold:.1,bloomScale:E.name==="pixel"?1.5:1,brightness:E.name==="pixel"?1.5:1,blur:8});k.filters.push(ue)}k.lineStyle(0),Y.style.cssText=D}else Y=document.createElement("canvas"),Y.width=B.x,Y.height=B.y,Me=Y.getContext("2d"),Me.imageSmoothingEnabled=!1,Y.style.cssText=D+L;document.body.appendChild(Y);const q=()=>{const ue=innerWidth/innerHeight,Ke=B.x/B.y,Hn=ue<Ke,Kt=Hn?.95*innerWidth:.95*innerHeight*Ke,Yn=Hn?.95*innerWidth/Ke:.95*innerHeight;Y.style.width=`${Kt}px`,Y.style.height=`${Yn}px`};if(window.addEventListener("resize",q),q(),c){K=document.createElement("canvas");let U;p?(K.width=B.x,K.height=B.y,U=g):(B.x<=B.y*2?(K.width=B.y*2,K.height=B.y):(K.width=B.x,K.height=B.x/2),K.width>400&&(Ze=400/K.width,K.width=400,K.height*=Ze),U=Math.round(400/K.width)),$e=K.getContext("2d"),$e.fillStyle=t,gcc.setOptions({scale:U,capturingFps:60,isSmoothingEnabled:!1})}}function et(){if(E.isUsingPixi){k.clear(),ve=!1,Ne(Q(pt,E.isDarkColor?.15:1)),k.drawRect(0,0,Ce.x,Ce.y),tt(),ve=!1;return}Me.fillStyle=Ye(pt,E.isDarkColor?.15:1),Me.fillRect(0,0,Ce.x,Ce.y),Me.fillStyle=Ye(ie)}function re(n){if(n===ie){E.isUsingPixi&&!ve&&Ne(Q(ie));return}if(ie=n,E.isUsingPixi){ve&&k.endFill(),Ne(Q(ie));return}Me.fillStyle=Ye(n)}function Ne(n){tt(),k.beginFill(n),ve=!0}function tt(){ve&&(k.endFill(),ve=!1)}function Yt(){Qt=ie}function Lt(){re(Qt)}function nt(n,t,r,c){if(E.isUsingPixi){E.name==="shape"||E.name==="shapeDark"?k.drawRoundedRect(n,t,r,c,2):k.drawRect(n,t,r,c);return}Me.fillRect(n,t,r,c)}function wn(n,t,r,c,p){const g=Q(ie);Ne(g),k.drawCircle(n,t,p*.5),k.drawCircle(r,c,p*.5),tt(),k.lineStyle(p,g),k.moveTo(n,t),k.lineTo(r,c),k.lineStyle(0)}function $t(){z.time+=.2}function Zt(){if($e.fillRect(0,0,K.width,K.height),Ze===1)$e.drawImage(Y,(K.width-Y.width)/2,(K.height-Y.height)/2);else{const n=Y.width*Ze,t=Y.height*Ze;$e.drawImage(Y,(K.width-n)/2,(K.height-t)/2,n,t)}gcc.capture(K)}const _n=[`
l
l
l

l
`,`
l l
l l



`,`
 l l
lllll
 l l
lllll
 l l
`,`
 lll
l l
 lll
  l l
 lll
`,`
l   l
l  l
  l
 l  l
l   l
`,`
 l
l l
 ll l
l  l
 ll l
`,`
l
l



`,`
 l
l
l
l
 l
`,`
l
 l
 l
 l
l
`,`
  l
l l l
 lll
l l l
  l
`,`
  l
  l
lllll
  l
  l
`,`



 l
l
`,`


lllll


`,`




l
`,`
    l
   l
  l
 l
l
`,`
 lll
l  ll
l l l
ll  l
 lll
`,`
 ll
l l
  l
  l
lllll
`,`
 lll
l   l
  ll
 l
lllll
`,`
 lll
l   l
  ll
l   l
 lll
`,`
  ll
 l l
l  l
lllll
   l
`,`
lllll
l
llll
    l
llll
`,`
 lll
l
llll
l   l
 lll
`,`
lllll
l   l
   l
  l
 l
`,`
 lll
l   l
 lll
l   l
 lll
`,`
 lll
l   l
 llll
    l
 lll
`,`

l

l

`,`

 l

 l
l
`,`
   ll
 ll
l
 ll
   ll
`,`

lllll

lllll

`,`
ll
  ll
    l
  ll
ll
`,`
 lll
l   l
  ll

  l
`,`
 lll
l   l
l lll
l
 lll
`,`
 lll
l   l
lllll
l   l
l   l
`,`
llll
l   l
llll
l   l
llll
`,`
 lll
l   l
l
l   l
 lll
`,`
llll
l   l
l   l
l   l
llll
`,`
lllll
l
llll
l
lllll
`,`
lllll
l
llll
l
l
`,`
 lll
l
l  ll
l   l
 lll
`,`
l   l
l   l
lllll
l   l
l   l
`,`
lllll
  l
  l
  l
lllll
`,`
  lll
   l
   l
l  l
 ll
`,`
l   l
l  l
lll
l  l
l   l
`,`
l
l
l
l
lllll
`,`
l   l
ll ll
l l l
l   l
l   l
`,`
l   l
ll  l
l l l
l  ll
l   l
`,`
 lll
l   l
l   l
l   l
 lll
`,`
llll
l   l
llll
l
l
`,`
 lll
l   l
l   l
l  ll
 llll
`,`
llll
l   l
llll
l   l
l   l
`,`
 llll
l
 lll
    l
llll
`,`
lllll
  l
  l
  l
  l
`,`
l   l
l   l
l   l
l   l
 lll
`,`
l   l
l   l
l   l
 l l
  l
`,`
l   l
l l l
l l l
l l l
 l l
`,`
l   l
 l l
  l
 l l
l   l
`,`
l   l
 l l
  l
  l
  l
`,`
lllll
   l
  l
 l
lllll
`,`
  ll
  l
  l
  l
  ll
`,`
l
 l
  l
   l
    l
`,`
 ll
  l
  l
  l
 ll
`,`
  l
 l l



`,`




lllll
`,`
 l
  l



`,`

 lll
l  l
l  l
 lll
`,`
l
l
lll
l  l
lll
`,`

 lll
l  
l
 lll
`,`
   l
   l
 lll
l  l
 lll
`,`

 ll
l ll
ll
 ll
`,`
  l
 l 
lll
 l
 l
`,`
 ll
l  l
 lll
   l
 ll
`,`
l
l
ll
l l
l l
`,`

l

l
l
`,`
 l

 l
 l
l
`,`
l
l
l l
ll
l l
`,`
ll
 l
 l
 l
lll
`,`

llll
l l l
l l l
l   l
`,`

lll
l  l
l  l
l  l
`,`

 ll
l  l
l  l
 ll
`,`

lll
l  l
lll
l
`,`

 lll
l  l
 lll
   l
`,`

l ll
ll
l
l
`,`

 lll
ll
  ll
lll
`,`

 l
lll
 l
  l
`,`

l  l
l  l
l  l
 lll
`,`

l  l
l  l
 ll
 ll
`,`

l   l
l l l
l l l
 l l
`,`

l  l
 ll
 ll
l  l
`,`

l  l
 ll
 l
l
`,`

llll
  l
 l
llll
`,`
 ll
 l
l
 l
 ll
`,`
l
l
l
l
l
`,`
ll
 l
  l
 l
ll
`,`

 l
l l l
   l

`];let Be,Pe;function en(){Be=[],Pe=[]}function it(){Be=Be.concat(Pe),Pe=[]}function rt(n){let t={isColliding:{rect:{},text:{},char:{}}};return Be.forEach(r=>{Tn(n,r)&&(t=Object.assign(Object.assign(Object.assign({},t),ze(r.collision.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},t.isColliding.rect),r.collision.isColliding.rect),text:Object.assign(Object.assign({},t.isColliding.text),r.collision.isColliding.text),char:Object.assign(Object.assign({},t.isColliding.char),r.collision.isColliding.char)}}))}),t}function Tn(n,t){const r=t.pos.x-n.pos.x,c=t.pos.y-n.pos.y;return-t.size.x<r&&r<n.size.x&&-t.size.y<c&&c<n.size.y}function ze(n){if(n==null)return{};const t={transparent:"tr",white:"wh",red:"rd",green:"gr",yellow:"yl",blue:"bl",purple:"pr",cyan:"cy",black:"lc"};let r={};return Xe(n).forEach(([c,p])=>{const g=t[c];p&&g!=null&&(r[g]=!0)}),r}function lt(n,t,r,c){return tn(!1,n,t,r,c)}function Ot(n,t,r,c){return tn(!0,n,t,r,c)}function tn(n,t,r,c,p){if(typeof r=="number"){if(typeof c=="number")return Rt(t,r,c,Object.assign({isCharacter:n,isCheckingCollision:!0,color:ie},p));throw"invalid params"}else return Rt(t,r.x,r.y,Object.assign({isCharacter:n,isCheckingCollision:!0,color:ie},c))}const at=6,pe=1,R=at*pe;let Cn,At,It,Tt=!1,qe,Z;const He={color:"black",backgroundColor:"transparent",rotation:0,mirror:{x:1,y:1},scale:{x:1,y:1},isCharacter:!1,isCheckingCollision:!1};function nn(){qe=document.createElement("canvas"),qe.width=qe.height=R,Z=qe.getContext("2d"),Cn=_n.map((n,t)=>Object.assign(Object.assign({},ot(n)),{hitBox:je(String.fromCharCode(33+t),!1)})),At=_n.map((n,t)=>Object.assign(Object.assign({},ot(n)),{hitBox:je(String.fromCharCode(33+t),!0)})),It={}}function Mn(n,t){const r=t.charCodeAt(0)-33;n.forEach((c,p)=>{At[r+p]=Object.assign(Object.assign({},ot(c)),{hitBox:je(String.fromCharCode(33+r+p),!0)})})}function Rn(){Tt=!0}function Rt(n,t,r,c={}){const p=ke(c);t-=R/2*p.scale.x,r-=R/2*p.scale.y;const g=Math.floor(t);let y=n,M=g,D=Math.floor(r),L={isColliding:{rect:{},text:{},char:{}}};for(let q=0;q<y.length;q++){const U=y[q];if(U===`
`){M=g,D+=R*p.scale.y;continue}const ue=kt(U,M,D,p);p.isCheckingCollision&&(L={isColliding:{rect:Object.assign(Object.assign({},L.isColliding.rect),ue.isColliding.rect),text:Object.assign(Object.assign({},L.isColliding.text),ue.isColliding.text),char:Object.assign(Object.assign({},L.isColliding.char),ue.isColliding.char)}}),M+=R*p.scale.x}return L}function kt(n,t,r,c){const p=n.charCodeAt(0);if(p<32||p>126)return{isColliding:{rect:{},text:{},char:{}}};const g=ke(c);if(g.backgroundColor!=="transparent"&&(Yt(),re(g.backgroundColor),nt(t,r,R*g.scale.x,R*g.scale.y),Lt()),p<=32)return{isColliding:{rect:{},text:{},char:{}}};const y=p-33,M=g.isCharacter?At[y]:Cn[y],D=ye(g.rotation,0,4);if(g.color==="black"&&D===0&&g.mirror.x===1&&g.mirror.y===1)return ge(M,t,r,g.scale,g.isCheckingCollision,!0);const L=JSON.stringify({c:n,options:g}),q=It[L];if(q!=null)return ge(q,t,r,g.scale,g.isCheckingCollision,g.color!=="transparent");Z.clearRect(0,0,R,R),D===0&&g.mirror.x===1&&g.mirror.y===1?Z.drawImage(M.image,0,0):(Z.save(),Z.translate(R/2,R/2),Z.rotate(Math.PI/2*D),(g.mirror.x===-1||g.mirror.y===-1)&&Z.scale(g.mirror.x,g.mirror.y),Z.drawImage(M.image,-R/2,-R/2),Z.restore()),g.color!=="black"&&(Z.globalCompositeOperation="source-in",Z.fillStyle=Ye(g.color==="transparent"?"black":g.color),Z.fillRect(0,0,R,R),Z.globalCompositeOperation="source-over");const U=je(n,g.isCharacter);let ue;if(Tt||E.isUsingPixi){const Ke=document.createElement("img");Ke.src=qe.toDataURL(),E.isUsingPixi&&(ue=PIXI.Texture.from(Ke)),Tt&&(It[L]={image:Ke,texture:ue,hitBox:U})}return ge({image:qe,texture:ue,hitBox:U},t,r,g.scale,g.isCheckingCollision,g.color!=="transparent")}function ge(n,t,r,c,p,g){if(g&&(c.x===1&&c.y===1?Dt(n,t,r):Dt(n,t,r,R*c.x,R*c.y)),!p)return;const y={pos:{x:t+n.hitBox.pos.x,y:r+n.hitBox.pos.y},size:{x:n.hitBox.size.x*c.x,y:n.hitBox.size.y*c.y},collision:n.hitBox.collision},M=rt(y);return g&&Be.push(y),M}function Dt(n,t,r,c,p){if(E.isUsingPixi){tt(),k.beginTextureFill({texture:n.texture,matrix:new PIXI.Matrix().translate(t,r)}),k.drawRect(t,r,c==null?R:c,p==null?R:p),Ne(Q(ie));return}c==null?Me.drawImage(n.image,t,r):Me.drawImage(n.image,t,r,c,p)}function ot(n,t=!0){Z.clearRect(0,0,R,R);let r=n.split(`
`);t&&(r=r.slice(1,r.length-1));let c=0;r.forEach(D=>{c=Math.max(D.length,c)});const p=Math.max(Math.ceil((at-c)/2),0),g=r.length,y=Math.max(Math.ceil((at-g)/2),0);r.forEach((D,L)=>{if(!(L+y>=at))for(let q=0;q<at-p;q++){const U=D.charAt(q);let ue=yn.indexOf(U);U!==""&&ue>=1&&(Z.fillStyle=Ye(ht[ue]),Z.fillRect((q+p)*pe,(L+y)*pe,pe,pe))}});const M=document.createElement("img");return M.src=qe.toDataURL(),E.isUsingPixi?{image:M,texture:PIXI.Texture.from(M)}:{image:M}}function je(n,t){const r={pos:new O(R,R),size:new O,collision:{isColliding:{char:{},text:{}}}};t?r.collision.isColliding.char[n]=!0:r.collision.isColliding.text[n]=!0;const c=Z.getImageData(0,0,R,R).data;let p=0;for(let g=0;g<R;g++)for(let y=0;y<R;y++)c[p+3]>0&&(y<r.pos.x&&(r.pos.x=y),g<r.pos.y&&(r.pos.y=g)),p+=4;p=0;for(let g=0;g<R;g++)for(let y=0;y<R;y++)c[p+3]>0&&(y>r.pos.x+r.size.x-1&&(r.size.x=y-r.pos.x+1),g>r.pos.y+r.size.y-1&&(r.size.y=g-r.pos.y+1)),p+=4;return r}function ke(n){let t=Object.assign(Object.assign({},He),n);return n.scale!=null&&(t.scale=Object.assign(Object.assign({},He.scale),n.scale)),n.mirror!=null&&(t.mirror=Object.assign(Object.assign({},He.mirror),n.mirror)),t}let Ue=!1,Et=!1,gt=!1;const Ft=["Escape","Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Minus","Equal","Backspace","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Enter","ControlLeft","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backquote","ShiftLeft","Backslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","NumpadMultiply","AltLeft","Space","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","Pause","ScrollLock","Numpad7","Numpad8","Numpad9","NumpadSubtract","Numpad4","Numpad5","Numpad6","NumpadAdd","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","IntlBackslash","F11","F12","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","IntlYen","Undo","Paste","MediaTrackPrevious","Cut","Copy","MediaTrackNext","NumpadEnter","ControlRight","LaunchMail","AudioVolumeMute","MediaPlayPause","MediaStop","Eject","AudioVolumeDown","AudioVolumeUp","BrowserHome","NumpadDivide","PrintScreen","AltRight","Help","NumLock","Pause","Home","ArrowUp","PageUp","ArrowLeft","ArrowRight","End","ArrowDown","PageDown","Insert","Delete","OSLeft","OSRight","ContextMenu","BrowserSearch","BrowserFavorites","BrowserRefresh","BrowserStop","BrowserForward","BrowserBack"];let Gt;const Pn={onKeyDown:void 0};let mt,P=!1,yt=!1,rn=!1,ln={},an={},Nt={};function ae(n){mt=Object.assign(Object.assign({},Pn),n),Gt=We(Ft.map(t=>[t,{isPressed:!1,isJustPressed:!1,isJustReleased:!1}])),document.addEventListener("keydown",t=>{P=yt=!0,ln[t.code]=an[t.code]=!0,mt.onKeyDown!=null&&mt.onKeyDown(),(t.code==="AltLeft"||t.code==="AltRight"||t.code==="ArrowRight"||t.code==="ArrowDown"||t.code==="ArrowLeft"||t.code==="ArrowUp")&&t.preventDefault()}),document.addEventListener("keyup",t=>{P=!1,rn=!0,ln[t.code]=!1,Nt[t.code]=!0})}function on(){Et=!Ue&&yt,gt=Ue&&rn,yt=rn=!1,Ue=P,Xe(Gt).forEach(([n,t])=>{t.isJustPressed=!t.isPressed&&an[n],t.isJustReleased=t.isPressed&&Nt[n],t.isPressed=!!ln[n]}),an={},Nt={}}function xn(){Et=!1,Ue=!0}var kn=Object.freeze({__proto__:null,get isPressed(){return Ue},get isJustPressed(){return Et},get isJustReleased(){return gt},codes:Ft,get code(){return Gt},init:ae,update:on,clearJustPressed:xn});class Bt{constructor(t=null){this.setSeed(t)}get(t=1,r){return r==null&&(r=t,t=0),this.next()/4294967295*(r-t)+t}getInt(t,r){r==null&&(r=t,t=0);const c=Math.floor(t),p=Math.floor(r);return p===c?c:this.next()%(p-c)+c}getPlusOrMinus(){return this.getInt(2)*2-1}select(t){return t[this.getInt(t.length)]}setSeed(t,r=123456789,c=362436069,p=521288629,g=32){this.w=t!=null?t>>>0:Math.floor(Math.random()*4294967295)>>>0,this.x=r>>>0,this.y=c>>>0,this.z=p>>>0;for(let y=0;y<g;y++)this.next();return this}getState(){return{x:this.x,y:this.y,z:this.z,w:this.w}}next(){const t=this.x^this.x<<11;return this.x=this.y,this.y=this.z,this.z=this.w,this.w=(this.w^this.w>>>19^(t^t>>>8))>>>0,this.w}}const st=new O;let ne=!1,Se=!1,ct=!1,Dn={isDebugMode:!1,anchor:new O,padding:new O,onPointerDownOrUp:void 0},oe,be,J;const De=new Bt,xe=new O,le=new O;let vt=!1,St=new O,sn=!1,zt=!1,ut=!1;function qt(n,t,r){J=Object.assign(Object.assign({},Dn),r),oe=n,be=new O(t.x+J.padding.x*2,t.y+J.padding.y*2),St.set(oe.offsetLeft+oe.clientWidth*(.5-J.anchor.x),oe.offsetTop+oe.clientWidth*(.5-J.anchor.y)),J.isDebugMode&&xe.set(oe.offsetLeft+oe.clientWidth*(.5-J.anchor.x),oe.offsetTop+oe.clientWidth*(.5-J.anchor.y)),document.addEventListener("mousedown",c=>{cn(c.pageX,c.pageY)}),document.addEventListener("touchstart",c=>{cn(c.touches[0].pageX,c.touches[0].pageY)}),document.addEventListener("mousemove",c=>{On(c.pageX,c.pageY)}),document.addEventListener("touchmove",c=>{c.preventDefault(),On(c.touches[0].pageX,c.touches[0].pageY)},{passive:!1}),document.addEventListener("mouseup",c=>{An()}),document.addEventListener("touchend",c=>{c.preventDefault(),c.target.click(),An()},{passive:!1})}function Ve(){En(St.x,St.y,st),J.isDebugMode&&!st.isInRect(0,0,be.x,be.y)?(Ln(),st.set(xe),Se=!ne&&vt,ct=ne&&!vt,ne=vt):(Se=!ne&&zt,ct=ne&&ut,ne=sn),zt=ut=!1}function Ee(){Se=!1,ne=!0}function En(n,t,r){oe!=null&&(r.x=Math.round(((n-oe.offsetLeft)/oe.clientWidth+J.anchor.x)*be.x-J.padding.x),r.y=Math.round(((t-oe.offsetTop)/oe.clientHeight+J.anchor.y)*be.y-J.padding.y))}function Ln(){le.length>0?(xe.add(le),!he(xe.x,-be.x*.1,be.x*1.1)&&xe.x*le.x>0&&(le.x*=-1),!he(xe.y,-be.y*.1,be.y*1.1)&&xe.y*le.y>0&&(le.y*=-1),De.get()<.05&&le.set(0)):De.get()<.1&&(le.set(0),le.addWithAngle(De.get(Math.PI*2),(be.x+be.y)*De.get(.01,.03))),De.get()<.05&&(vt=!vt)}function cn(n,t){St.set(n,t),sn=zt=!0,J.onPointerDownOrUp!=null&&J.onPointerDownOrUp()}function On(n,t){St.set(n,t)}function An(n){sn=!1,ut=!0,J.onPointerDownOrUp!=null&&J.onPointerDownOrUp()}var Ht=Object.freeze({__proto__:null,pos:st,get isPressed(){return ne},get isJustPressed(){return Se},get isJustReleased(){return ct},init:qt,update:Ve,clearJustPressed:Ee});let Ie=new O,Te=!1,Le=!1,l=!1;function a(n){ae({onKeyDown:n}),qt(Y,Ce,{onPointerDownOrUp:n,anchor:new O(.5,.5)})}function s(){on(),Ve(),Ie=st,Te=Ue||ne,Le=Et||Se,l=gt||ct}function u(){xn(),Ee()}function h(n){Ie.set(n.pos),Te=n.isPressed,Le=n.isJustPressed,l=n.isJustReleased}var v=Object.freeze({__proto__:null,get pos(){return Ie},get isPressed(){return Te},get isJustPressed(){return Le},get isJustReleased(){return l},init:a,update:s,clearJustPressed:u,set:h});let w,C;const x=68,A=1e3/x;let F=0;const W={viewSize:{x:126,y:126},bodyBackground:"#111",viewBackground:"black",isUsingVirtualPad:!0,isFourWaysStick:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,isSoundEnabled:!0,captureCanvasScale:1,theme:{name:"simple",isUsingPixi:!1,isDarkColor:!1}};let G,j=10;function Re(n,t,r){w=n,C=t,G=Object.assign(Object.assign({},W),r),Sn(G.theme.isDarkColor),xt(G.viewSize,G.bodyBackground,G.viewBackground,G.isCapturing,G.isCapturingGameCanvasOnly,G.captureCanvasScale,G.theme),a(G.isSoundEnabled?sss.startAudio:()=>{}),nn(),w(),ee()}function ee(){requestAnimationFrame(ee);const n=window.performance.now();n<F-x/12||(F+=A,(F<n||F>n+A*2)&&(F=n+A),G.isSoundEnabled&&sss.update(),s(),C(),G.isCapturing&&Zt(),j--,j===0&&Rn())}class se{constructor(t){this.size=new O,this.size.set(t),this.letterGrid=te(this.size.x).map(()=>te(this.size.y).map(()=>{})),this.colorGrid=te(this.size.x).map(()=>te(this.size.y).map(()=>{})),this.backgroundColorGrid=te(this.size.x).map(()=>te(this.size.y).map(()=>{})),this.rotationGrid=te(this.size.x).map(()=>te(this.size.y).map(()=>{})),this.characterGrid=te(this.size.x).map(()=>te(this.size.y).map(()=>{}))}print(t,r,c,p={}){const g=Object.assign(Object.assign({},He),p);let y=Math.floor(r),M=Math.floor(c);const D=y;for(let L=0;L<t.length;L++){const q=t[L];if(q===`
`){y=D,M++;continue}if(y<0||y>=this.size.x||M<0||M>=this.size.y){y++;continue}this.letterGrid[y][M]=q,this.colorGrid[y][M]=g.color,this.backgroundColorGrid[y][M]=g.backgroundColor,this.rotationGrid[y][M]=g.rotation,this.characterGrid[y][M]=g.isCharacter,y++}}getCharAt(t,r){if(t<0||t>=this.size.x||r<0||r>=this.size.y)return;const c=Math.floor(t),p=Math.floor(r),g=this.letterGrid[c][p],y=this.colorGrid[c][p],M=this.backgroundColorGrid[c][p],D=this.rotationGrid[c][p],L=this.characterGrid[c][p];return{char:g,options:{color:y,backgroundColor:M,rotation:D,isCharacter:L}}}setCharAt(t,r,c,p){if(t<0||t>=this.size.x||r<0||r>=this.size.y)return;const g=Object.assign(Object.assign({},He),p),y=Math.floor(t),M=Math.floor(r);this.letterGrid[y][M]=c,this.colorGrid[y][M]=g.color,this.backgroundColorGrid[y][M]=g.backgroundColor,this.rotationGrid[y][M]=g.rotation,this.characterGrid[y][M]=g.isCharacter}draw(){for(let t=0;t<this.size.x;t++)for(let r=0;r<this.size.y;r++){const c=this.letterGrid[t][r];if(c==null)continue;const p=this.colorGrid[t][r],g=this.backgroundColorGrid[t][r],y=this.rotationGrid[t][r],M=this.characterGrid[t][r];kt(c,t*R,r*R,{color:p,backgroundColor:g,rotation:y,isCharacter:M})}}clear(){for(let t=0;t<this.size.x;t++)for(let r=0;r<this.size.y;r++)this.letterGrid[t][r]=this.colorGrid[t][r]=this.backgroundColorGrid[t][r]=this.rotationGrid[t][r]=this.characterGrid[t][r]=void 0}scrollUp(){for(let r=0;r<this.size.x;r++)for(let c=1;c<this.size.y;c++)this.letterGrid[r][c-1]=this.letterGrid[r][c],this.colorGrid[r][c-1]=this.colorGrid[r][c],this.backgroundColorGrid[r][c-1]=this.backgroundColorGrid[r][c],this.rotationGrid[r][c-1]=this.rotationGrid[r][c],this.characterGrid[r][c-1]=this.characterGrid[r][c];const t=this.size.y-1;for(let r=0;r<this.size.x;r++)this.letterGrid[r][t]=this.colorGrid[r][t]=this.backgroundColorGrid[r][t]=this.rotationGrid[r][t]=this.characterGrid[r][t]=void 0}getState(){return{charGrid:this.letterGrid.map(t=>[].concat(t)),colorGrid:this.colorGrid.map(t=>[].concat(t)),backgroundColorGrid:this.backgroundColorGrid.map(t=>[].concat(t)),rotationGrid:this.rotationGrid.map(t=>[].concat(t)),symbolGrid:this.characterGrid.map(t=>[].concat(t))}}setState(t){this.letterGrid=t.charGrid.map(r=>[].concat(r)),this.colorGrid=t.colorGrid.map(r=>[].concat(r)),this.backgroundColorGrid=t.backgroundColorGrid.map(r=>[].concat(r)),this.rotationGrid=t.rotationGrid.map(r=>[].concat(r)),this.characterGrid=t.symbolGrid.map(r=>[].concat(r))}}let fe;const we=new Bt;function jt(){fe=[]}function un(n,t=16,r=1,c=0,p=Math.PI*2){if(t<1){if(we.get()>t)return;t=1}for(let g=0;g<t;g++){const y=c+we.get(p)-p/2,M={pos:new O(n),vel:new O(r*we.get(.5,1),0).rotate(y),color:ie,ticks:clamp(we.get(10,20)*Math.sqrt(Math.abs(r)),10,60)};fe.push(M)}}function Ut(){Yt(),fe=fe.filter(n=>(n.ticks--,n.ticks<0?!1:(n.pos.add(n.vel),n.vel.mul(.98),re(n.color),nt(Math.floor(n.pos.x),Math.floor(n.pos.y),1,1),!0))),Lt()}function Fe({pos:n,size:t,text:r,isToggle:c=!1,onClick:p=()=>{}}){return{pos:n,size:t,text:r,isToggle:c,onClick:p,isPressed:!1,isSelected:!1,isHovered:!1,toggleGroup:[]}}function Vt(n){const t=vec(input.pos).sub(n.pos);n.isHovered=t.isInRect(0,0,n.size.x,n.size.y),n.isHovered&&Se&&(n.isPressed=!0),n.isPressed&&!n.isHovered&&(n.isPressed=!1),n.isPressed&&ct&&(n.onClick(),n.isPressed=!1,n.isToggle&&(n.toggleGroup.length===0?n.isSelected=!n.isSelected:(n.toggleGroup.forEach(r=>{r.isSelected=!1}),n.isSelected=!0))),Jt(n)}function Jt(n){color(n.isPressed?"blue":"light_blue"),rect(n.pos.x,n.pos.y,n.size.x,n.size.y),n.isToggle&&!n.isSelected&&(color("white"),rect(n.pos.x+1,n.pos.y+1,n.size.x-2,n.size.y-2)),color(n.isHovered?"black":"blue"),text(n.text,n.pos.x+3,n.pos.y+3)}let de,m,_e,Je;function bt(n){de={randomSeed:n,inputs:[]}}function fn(n){de.inputs.push(n)}function dn(){return de!=null}function ft(n){m=0,n.setSeed(de.randomSeed)}function e(){m>=de.inputs.length||(h(de.inputs[m]),m++)}function i(){_e=[]}function o(n,t,r){_e.push({randomState:r.getState(),gameState:cloneDeep(n),baseState:cloneDeep(t)})}function d(n){const t=_e.pop(),r=t.randomState;return n.setSeed(r.w,r.x,r.y,r.z,0),Je={pos:vec(Ie),isPressed:Te,isJustPressed:Le,isJustReleased:l},h(de.inputs.pop()),t}function S(n){const t=_e[_e.length-1],r=t.randomState;return n.setSeed(r.w,r.x,r.y,r.z,0),Je={pos:vec(Ie),isPressed:Te,isJustPressed:Le,isJustReleased:l},h(de.inputs[de.inputs.length-1]),t}function b(){h(Je)}function _(){return _e.length===0}function I(){const n=m-1;if(!(n>=de.inputs.length))return _e[n]}function T(n,t,r,c){return Oe(!1,n,t,r,c)}function V(n,t,r,c){return Oe(!0,n,t,r,c)}function X(n,t,r,c,p=.5,g=.5){typeof n!="number"&&(g=p,p=c,c=r,r=t,t=n.y,n=n.x);const y=new O(r).rotate(p),M=new O(n-y.x*g,t-y.y*g);return dt(M,y,c)}function ce(n,t,r=3,c=3,p=3){const g=new O,y=new O;if(typeof n=="number")if(typeof t=="number")typeof r=="number"?(g.set(n,t),y.set(r,c)):(g.set(n,t),y.set(r),p=c);else throw"invalid params";else if(typeof t=="number")if(typeof r=="number")g.set(n),y.set(t,r),p=c;else throw"invalid params";else if(typeof r=="number")g.set(n),y.set(t),p=r;else throw"invalid params";return dt(g,y.sub(g),p)}function $(n,t,r,c,p,g){let y=new O;typeof n=="number"?y.set(n,t):(y.set(n),g=p,p=c,c=r,r=t),c==null&&(c=3),p==null&&(p=0),g==null&&(g=Math.PI*2);let M,D;if(p>g?(M=g,D=p-g):(M=p,D=g-p),D=me(D,0,Math.PI*2),D<.01)return;const L=me(ceil(D*Math.sqrt(r*.25)),1,36),q=D/L;let U=M,ue=new O(r).rotate(U).add(y),Ke=new O,Hn=new O,Kt={isColliding:{rect:{},text:{},char:{}}};for(let Yn=0;Yn<L;Yn++){U+=q,Ke.set(r).rotate(U).add(y),Hn.set(Ke).sub(ue);const $n=dt(ue,Hn,c,!0);Kt=Object.assign(Object.assign(Object.assign({},Kt),ze($n.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},Kt.isColliding.rect),$n.isColliding.rect),text:Object.assign(Object.assign({},Kt.isColliding.text),$n.isColliding.text),char:Object.assign(Object.assign({},Kt.isColliding.char),$n.isColliding.char)}}),ue.set(Ke)}return it(),Kt}function Oe(n,t,r,c,p){if(typeof t=="number"){if(typeof r=="number")return typeof c=="number"?p==null?wt(n,t,r,c,c):wt(n,t,r,c,p):wt(n,t,r,c.x,c.y);throw"invalid params"}else if(typeof r=="number"){if(c==null)return wt(n,t.x,t.y,r,r);if(typeof c=="number")return wt(n,t.x,t.y,r,c);throw"invalid params"}else return wt(n,t.x,t.y,r.x,r.y)}function dt(n,t,r,c=!1){let p=!0;(E.name==="shape"||E.name==="shapeDark")&&(ie!=="transparent"&&wn(n.x,n.y,n.x+t.x,n.y+t.y,r),p=!1);const g=Math.floor(me(r,3,10)),y=Math.abs(t.x),M=Math.abs(t.y),D=me(Math.ceil(y>M?y/g:M/g)+1,3,99);t.div(D-1);let L={isColliding:{rect:{},text:{},char:{}}};for(let q=0;q<D;q++){const U=wt(!0,n.x,n.y,r,r,!0,p);L=Object.assign(Object.assign(Object.assign({},L),ze(U.isColliding.rect)),{isColliding:{rect:Object.assign(Object.assign({},L.isColliding.rect),U.isColliding.rect),text:Object.assign(Object.assign({},L.isColliding.text),U.isColliding.text),char:Object.assign(Object.assign({},L.isColliding.char),U.isColliding.char)}}),n.add(t)}return c||it(),L}function wt(n,t,r,c,p,g=!1,y=!0){let M=y;(E.name==="shape"||E.name==="shapeDark")&&M&&ie!=="transparent"&&(n?nt(t-c/2,r-p/2,c,p):nt(t,r,c,p),M=!1);let D=n?{x:Math.floor(t-c/2),y:Math.floor(r-p/2)}:{x:Math.floor(t),y:Math.floor(r)};const L={x:Math.trunc(c),y:Math.trunc(p)};if(L.x===0||L.y===0)return{isColliding:{rect:{},text:{},char:{}}};L.x<0&&(D.x+=L.x,L.x*=-1),L.y<0&&(D.y+=L.y,L.y*=-1);const q={pos:D,size:L,collision:{isColliding:{rect:{}}}};q.collision.isColliding.rect[ie]=!0;const U=rt(q);return ie!=="transparent"&&((g?Pe:Be).push(q),M&&nt(D.x,D.y,L.x,L.y)),U}const Fn=Math.PI,ei=Math.abs,wi=Math.sin,_i=Math.cos,Ci=Math.atan2,Mi=Math.sqrt,Pi=Math.pow,xi=Math.floor,Li=Math.round,Oi=Math.ceil;f.ticks=0,f.difficulty=void 0,f.score=0,f.time=void 0,f.isReplaying=!1;function Ai(n=1,t){return _t.get(n,t)}function Ii(n=2,t){return _t.getInt(n,t)}function Ti(n=1,t){return _t.get(n,t)*_t.getPlusOrMinus()}function ti(n="GAME OVER"){Qn=n,In&&(f.time=void 0),mi()}function Ri(n="COMPLETE"){Qn=n,mi()}function ki(n,t,r){if(f.isReplaying||(f.score+=n,t==null))return;const c=`${n>=1?"+":""}${Math.floor(n)}`;let p=new O;typeof t=="number"?p.set(t,r):p.set(t),p.x-=c.length*R/2,p.y-=R/2,Wn.push({str:c,pos:p,vy:-2,ticks:30})}function ci(n){re(n)}function Di(n,t,r,c,p,g){let y=new O;typeof n=="number"?(y.set(n,t),un(y,r,c,p,g)):(y.set(n),un(y,t,r,c,p))}function ui(n,t){return new O(n,t)}function fi(n){!zn&&!mn&&gn&&sss.play(Gi[n])}function Ei(n){if(zn){const t=S(_t),r=t.baseState;return f.score=r.score,f.ticks=r.ticks,cloneDeep(t.gameState)}else if(mn){const t=d(_t),r=t.baseState;return f.score=r.score,f.ticks=r.ticks,t.gameState}else{if(f.isReplaying)return I().gameState;if(hn==="inGame"){const t={score:f.score,ticks:f.ticks};o(n,t,_t)}}return n}function Fi(){mn||(!f.isReplaying&&Kn?Ki():ti())}const Gi={coin:"c",laser:"l",explosion:"e",powerUp:"p",hit:"h",jump:"j",select:"s",lucky:"u",random:"r"},di={isPlayingBgm:!1,isCapturing:!1,isCapturingGameCanvasOnly:!1,captureCanvasScale:1,isShowingScore:!0,isShowingTime:!1,isReplayEnabled:!1,isRewindEnabled:!1,isDrawingParticleFront:!1,isDrawingScoreFront:!1,isMinifying:!1,isSoundEnabled:!0,viewSize:{x:100,y:100},seed:0,theme:"simple"},Ni=new Bt,_t=new Bt;let hn,Bi={title:Ui,inGame:ji,gameOver:Vi,rewind:Wi},Ae,ni=0,Un,Vn=!0,Jn=0,pn,Gn,hi,In,Nn,Kn,Bn,ii,gn,Ct,Wn,zn=!1,mn=!1,qn,Xn,Qn,ri;function zi(n){const t=window;t.update=n.update,t.title=n.title,t.description=n.description,t.characters=n.characters,t.options=n.options,pi()}function pi(){let n;typeof options!="undefined"&&options!=null?n=Object.assign(Object.assign({},di),options):n=di;const t={name:n.theme,isUsingPixi:!1,isDarkColor:!1};n.theme!=="simple"&&n.theme!=="dark"&&(t.isUsingPixi=!0),(n.theme==="pixel"||n.theme==="shapeDark"||n.theme==="crt"||n.theme==="dark")&&(t.isDarkColor=!0),pn={viewSize:{x:100,y:100},bodyBackground:t.isDarkColor?"#101010":"#e0e0e0",viewBackground:t.isDarkColor?"blue":"white",theme:t,isSoundEnabled:n.isSoundEnabled},Jn=n.seed,pn.isCapturing=n.isCapturing,pn.isCapturingGameCanvasOnly=n.isCapturingGameCanvasOnly,pn.captureCanvasScale=n.captureCanvasScale,pn.viewSize=n.viewSize,Gn=n.isPlayingBgm,hi=n.isShowingScore&&!n.isShowingTime,In=n.isShowingTime,Nn=n.isReplayEnabled,Kn=n.isRewindEnabled,Bn=n.isDrawingParticleFront,ii=n.isDrawingScoreFront,gn=n.isSoundEnabled,n.isMinifying&&Yi(),Re(qi,Hi,pn)}function qi(){typeof description!="undefined"&&description!=null&&description.trim().length>0&&(Vn=!1,Jn+=Si(description)),typeof title!="undefined"&&title!=null&&title.trim().length>0&&(Vn=!1,document.title=title,Jn+=Si(title)),typeof characters!="undefined"&&characters!=null&&Mn(characters,"a"),gn&&sss.init(Jn);const n=pn.viewSize;Ct={x:Math.floor(n.x/6),y:Math.floor(n.y/6)},Ae=new se(Ct),re("black"),Vn?(li(),f.ticks=0):gi()}function Hi(){f.df=f.difficulty=f.ticks/3600+1,f.tc=f.ticks;const n=f.score,t=f.time;f.sc=f.score;const r=f.sc;f.inp={p:Ie,ip:Te,ijp:Le,ijr:l},en(),Bi[hn](),E.isUsingPixi&&(tt(),E.name==="crt"&&$t()),f.ticks++,f.isReplaying?(f.score=n,f.time=t):f.sc!==r&&(f.score=f.sc)}function li(){hn="inGame",f.ticks=-1,jt();const n=Math.floor(f.score);n>ni&&(ni=n),In&&f.time!=null&&(Un==null||Un>f.time)&&(Un=f.time),f.score=0,f.time=0,Wn=[],Gn&&gn&&sss.playBgm();const t=Ni.getInt(999999999);_t.setSeed(t),(Nn||Kn)&&(bt(t),i(),f.isReplaying=!1)}function ji(){Ae.clear(),et(),Bn||Ut(),ii||vi(),(Nn||Kn)&&fn({pos:ui(Ie),isPressed:Te,isJustPressed:Le,isJustReleased:l}),update(),Bn&&Ut(),ii&&vi(),ai(),Ae.draw(),In&&f.time!=null&&f.time++}function gi(){hn="title",f.ticks=-1,jt(),Ae.clear(),et(),dn()&&(ft(_t),f.isReplaying=!0)}function Ui(){if(Le){li();return}if(et(),Nn&&dn()&&(e(),f.inp={p:Ie,ip:Te,ijp:Le,ijr:l},Bn||Ut(),update(),Bn&&Ut()),f.ticks===0&&(ai(),typeof title!="undefined"&&title!=null&&Ae.print(title,Math.floor(Ct.x-title.length)/2,Math.ceil(Ct.y*.2))),(f.ticks===30||f.ticks==40)&&typeof description!="undefined"&&description!=null){let n=0;description.split(`
`).forEach(r=>{r.length>n&&(n=r.length)});const t=Math.floor((Ct.x-n)/2);description.split(`
`).forEach((r,c)=>{Ae.print(r,t,Math.floor(Ct.y/2)+c)})}Ae.draw()}function mi(){hn="gameOver",f.isReplaying||u(),f.ticks=-1,Ji(),Gn&&gn&&sss.stopBgm()}function Vi(){(f.isReplaying||f.ticks>20)&&Le?li():f.ticks===(Nn?120:300)&&!Vn&&gi()}function Ji(){f.isReplaying||(Ae.print(Qn,Math.floor((Ct.x-Qn.length)/2),Math.floor(Ct.y/2)),Ae.draw())}function Ki(){hn="rewind",zn=!0,qn=Fe({pos:{x:61,y:11},size:{x:36,y:7},text:"Rewind"}),Xn=Fe({pos:{x:61,y:81},size:{x:36,y:7},text:"GiveUp"}),Gn&&gn&&sss.stopBgm(),E.isUsingPixi&&(Jt(qn),Jt(Xn))}function Wi(){Ae.clear(),et(),update(),ai(),b(),mn?(Jt(qn),(_()||!Te)&&Xi()):(Vt(qn),Vt(Xn),qn.isPressed&&(mn=!0,zn=!1)),Xn.isPressed?(zn=mn=!1,ti()):Ae.draw(),In&&f.time!=null&&f.time++}function Xi(){mn=!1,hn="inGame",jt(),Gn&&gn&&sss.playBgm()}function ai(){if(hi){Ae.print(`${Math.floor(f.score)}`,0,0);const n=`HI ${ni}`;Ae.print(n,Ct.x-n.length,0)}In&&(yi(f.time,0,0),yi(Un,9,0))}function yi(n,t,r){if(n==null)return;let c=Math.floor(n*100/50);c>=10*60*100&&(c=10*60*100-1);const p=oi(Math.floor(c/6e3),1)+"'"+oi(Math.floor(c%6e3/100),2)+'"'+oi(Math.floor(c%100),2);Ae.print(p,t,r)}function oi(n,t){return("0000"+n).slice(-t)}function vi(){Yt(),re("black"),Wn=Wn.filter(n=>(Rt(n.str,n.pos.x,n.pos.y),n.pos.y+=n.vy,n.vy*=.9,n.ticks--,n.ticks>0)),Lt()}function Si(n){let t=0;for(let r=0;r<n.length;r++){const c=n.charCodeAt(r);t=(t<<5)-t+c,t|=0}return t}function Qi(){let n=window.location.search.substring(1);if(n=n.replace(/[^A-Za-z0-9_-]/g,""),n.length===0)return;const t=document.createElement("script");ri=`${n}/main.js`,t.setAttribute("src",ri),document.head.appendChild(t)}function Yi(){fetch(ri).then(n=>n.text()).then(n=>{const t=Terser.minify(n+"update();",{toplevel:!0}).code,r="function(){",c=t.indexOf(r),p="options={",g=t.indexOf(p);let y=t;if(c>=0)y=t.substring(t.indexOf(r)+r.length,t.length-4);else if(g>=0){let M=1,D;for(let L=g+p.length;L<t.length;L++){const q=t.charAt(L);if(q==="{")M++;else if(q==="}"&&(M--,M===0)){D=L+2;break}}M===0&&(y=t.substring(D))}bi.forEach(([M,D])=>{y=y.split(M).join(D)}),console.log(y),console.log(`${y.length} letters`)})}f.inp=void 0;let $i=ci,Zi=fi,er=Mt,tr=Pt;f.tc=void 0,f.df=void 0,f.sc=void 0;const nr="transparent",ir="white",rr="red",lr="green",ar="yellow",or="blue",sr="purple",cr="cyan",ur="black",fr="coin",dr="laser",hr="explosion",pr="powerUp",gr="hit",mr="jump",yr="select",vr="lucky";let bi=[["===","=="],["!==","!="],["input.pos","inp.p"],["input.isPressed","inp.ip"],["input.isJustPressed","inp.ijp"],["input.isJustReleased","inp.ijr"],["color(","clr("],["play(","ply("],["times(","tms("],["remove(","rmv("],["ticks","tc"],["difficulty","df"],["score","sc"],[".isColliding.rect.transparent",".tr"],[".isColliding.rect.white",".wh"],[".isColliding.rect.red",".rd"],[".isColliding.rect.green",".gr"],[".isColliding.rect.yellow",".yl"],[".isColliding.rect.blue",".bl"],[".isColliding.rect.purple",".pr"],[".isColliding.rect.cyan",".cy"],[".isColliding.rect.black",".lc"],['"transparent"',"tr"],['"white"',"wh"],['"red"',"rd"],['"green"',"gr"],['"yellow"',"yl"],['"blue"',"bl"],['"purple"',"pr"],['"cyan"',"cy"],['"black"',"lc"],['"coin"',"cn"],['"laser"',"ls"],['"explosion"',"ex"],['"powerUp"',"pw"],['"hit"',"ht"],['"jump"',"jm"],['"select"',"sl"],['"lucky"',"uc"]];f.PI=Fn,f.abs=ei,f.addGameScript=Qi,f.addScore=ki,f.addWithCharCode=N,f.arc=$,f.atan2=Ci,f.bar=X,f.bl=or,f.box=V,f.ceil=Oi,f.char=Ot,f.clamp=me,f.clr=$i,f.cn=fr,f.color=ci,f.complete=Ri,f.cos=_i,f.cy=cr,f.end=ti,f.ex=hr,f.floor=xi,f.frameState=Ei,f.getButton=Fe,f.gr=lr,f.ht=gr,f.init=zi,f.input=v,f.jm=mr,f.keyboard=kn,f.lc=ur,f.line=ce,f.ls=dr,f.minifyReplaces=bi,f.onLoad=pi,f.particle=Di,f.play=fi,f.ply=Zi,f.pointer=Ht,f.pow=Pi,f.pr=sr,f.pw=pr,f.range=te,f.rd=rr,f.rect=T,f.remove=Pt,f.rewind=Fi,f.rmv=tr,f.rnd=Ai,f.rndi=Ii,f.rnds=Ti,f.round=Li,f.sin=wi,f.sl=yr,f.sqrt=Mi,f.text=lt,f.times=Mt,f.tms=er,f.tr=nr,f.uc=vr,f.updateButton=Vt,f.vec=ui,f.wh=ir,f.wrap=ye,f.yl=ar,Object.defineProperty(f,"__esModule",{value:!0})})(window||{});export{Cr as c,_r as s};
