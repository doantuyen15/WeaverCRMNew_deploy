import{g as Q,b as H,E as Z,c as ee,d as te,D as m,L as re,i as K,e as ne,f as D,C as S,h as oe,j as ie,k as se}from"./index-CCV0I59x.js";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new Map,L={activated:!1,tokenObservers:[]},ae={initialized:!1,enabled:!1};function l(e){return v.get(e)||{...L}}function ce(e,t){return v.set(e,t),v.get(e)}function b(){return ae}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F="https://content-firebaseappcheck.googleapis.com/v1",le="exchangeRecaptchaEnterpriseToken",ue="exchangeDebugToken",N={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},de=1440*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,r,n,o,i){if(this.operation=t,this.retryPolicy=r,this.getWaitDuration=n,this.lowerBound=o,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=o,o>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new m,this.pending.promise.catch(r=>{}),await fe(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new m,this.pending.promise.catch(r=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(r){this.retryPolicy(r)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const r=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),r}}}function fe(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},d=new Z("appCheck","AppCheck",pe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e=!1){var t;return e?(t=self.grecaptcha)==null?void 0:t.enterprise:self.grecaptcha}function C(e){if(!l(e).activated)throw d.create("use-before-activation",{appName:e.name})}function z(e){const t=Math.round(e/1e3),r=Math.floor(t/(3600*24)),n=Math.floor((t-r*3600*24)/3600),o=Math.floor((t-r*3600*24-n*3600)/60),i=t-r*3600*24-n*3600-o*60;let s="";return r&&(s+=T(r)+"d:"),n&&(s+=T(n)+"h:"),s+=T(o)+"m:"+T(i)+"s",s}function T(e){return e===0?"00":e>=10?e.toString():"0"+e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R({url:e,body:t},r){const n={"Content-Type":"application/json"},o=r.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&(n["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(t),headers:n};let s;try{s=await fetch(e,i)}catch(h){throw d.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(s.status!==200)throw d.create("fetch-status-error",{httpStatus:s.status});let u;try{u=await s.json()}catch(h){throw d.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=u.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw d.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const a=Number(c[1])*1e3,p=Date.now();return{token:u.token,expireTimeMillis:p+a,issuedAtTimeMillis:p}}function ge(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${F}/projects/${r}/apps/${n}:${le}?key=${o}`,body:{recaptcha_enterprise_token:t}}}function W(e,t){const{projectId:r,appId:n,apiKey:o}=e.options;return{url:`${F}/projects/${r}/apps/${n}:${ue}?key=${o}`,body:{debug_token:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-app-check-database",Te=1,k="firebase-app-check-store",U="debug-token";let E=null;function q(){return E||(E=new Promise((e,t)=>{try{const r=indexedDB.open(ke,Te);r.onsuccess=n=>{e(n.target.result)},r.onerror=n=>{var o;t(d.create("storage-open",{originalErrorMessage:(o=n.target.error)==null?void 0:o.message}))},r.onupgradeneeded=n=>{const o=n.target.result;switch(n.oldVersion){case 0:o.createObjectStore(k,{keyPath:"compositeKey"})}}}catch(r){t(d.create("storage-open",{originalErrorMessage:r==null?void 0:r.message}))}}),E)}function Ee(e){return G(X(e))}function me(e,t){return j(X(e),t)}function we(e){return j(U,e)}function be(){return G(U)}async function j(e,t){const n=(await q()).transaction(k,"readwrite"),i=n.objectStore(k).put({compositeKey:e,value:t});return new Promise((s,u)=>{i.onsuccess=c=>{s()},n.onerror=c=>{var a;u(d.create("storage-set",{originalErrorMessage:(a=c.target.error)==null?void 0:a.message}))}})}async function G(e){const r=(await q()).transaction(k,"readonly"),o=r.objectStore(k).get(e);return new Promise((i,s)=>{o.onsuccess=u=>{const c=u.target.result;i(c?c.value:void 0)},r.onerror=u=>{var c;s(d.create("storage-get",{originalErrorMessage:(c=u.target.error)==null?void 0:c.message}))}})}function X(e){return`${e.options.appId}-${e.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=new re("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e){if(K()){let t;try{t=await Ee(e)}catch(r){f.warn(`Failed to read token from IndexedDB. Error: ${r}`)}return t}}function A(e,t){return K()?me(e,t).catch(r=>{f.warn(`Failed to write token to IndexedDB. Error: ${r}`)}):Promise.resolve()}async function _e(){let e;try{e=await be()}catch{}if(e)return e;{const t=crypto.randomUUID();return we(t).catch(r=>f.warn(`Failed to persist debug token to IndexedDB. Error: ${r}`)),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(){return b().enabled}async function y(){const e=b();if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function ve(){const e=te(),t=b();if(t.initialized=!0,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&e.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;t.enabled=!0;const r=new m;t.token=r,typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?r.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):r.resolve(_e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce={error:"UNKNOWN_ERROR"};function Re(e){return ne.encodeString(JSON.stringify(e),!1)}async function w(e,t=!1,r=!1){const n=e.app;C(n);const o=l(n);let i=o.token,s;if(i&&!g(i)&&(o.token=void 0,i=void 0),!i){const a=await o.cachedTokenPromise;a&&(g(a)?i=a:await A(n,void 0))}if(!t&&i&&g(i))return{token:i.token};let u=!1;if(P())try{const a=await y();o.exchangeTokenPromise||(o.exchangeTokenPromise=R(W(n,a),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),u=!0);const p=await o.exchangeTokenPromise;return await A(n,p),o.token=p,{token:p.token}}catch(a){return a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),_(a)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),u=!0),i=await l(n).exchangeTokenPromise}catch(a){a.code==="appCheck/throttled"||a.code==="appCheck/initial-throttle"?f.warn(a.message):r&&f.error(a),s=a}let c;return i?s?g(i)?c={token:i.token,internalError:s}:c=_(s):(c={token:i.token},o.token=i,await A(n,i)):c=_(s),u&&J(n,c),c}async function Pe(e){const t=e.app;C(t);const{provider:r}=l(t);if(P()){const n=await y(),{token:o}=await R(W(t,n),e.heartbeatServiceProvider);return{token:o}}else{const{token:n}=await r.getToken();return{token:n}}}function Y(e,t,r,n){const{app:o}=e,i=l(o),s={next:r,error:n,type:t};if(i.tokenObservers=[...i.tokenObservers,s],i.token&&g(i.token)){const u=i.token;Promise.resolve().then(()=>{r({token:u.token}),M(e)}).catch(()=>{})}i.cachedTokenPromise.then(()=>M(e))}function V(e,t){const r=l(e),n=r.tokenObservers.filter(o=>o.next!==t);n.length===0&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=n}function M(e){const{app:t}=e,r=l(t);let n=r.tokenRefresher;n||(n=ye(e),r.tokenRefresher=n),!n.isRunning()&&r.isTokenAutoRefreshEnabled&&n.start()}function ye(e){const{app:t}=e;return new he(async()=>{const r=l(t);let n;if(r.token?n=await w(e,!0):n=await w(e),n.error)throw n.error;if(n.internalError)throw n.internalError},()=>!0,()=>{const r=l(t);if(r.token){let n=r.token.issuedAtTimeMillis+(r.token.expireTimeMillis-r.token.issuedAtTimeMillis)*.5+3e5;const o=r.token.expireTimeMillis-300*1e3;return n=Math.min(n,o),Math.max(0,n-Date.now())}else return 0},N.RETRIAL_MIN_WAIT,N.RETRIAL_MAX_WAIT)}function J(e,t){const r=l(e).tokenObservers;for(const n of r)try{n.type==="EXTERNAL"&&t.error!=null?n.error(t.error):n.next(t)}catch{}}function g(e){return e.expireTimeMillis-Date.now()>0}function _(e){return{token:Re(Ce),error:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,r){this.app=t,this.heartbeatServiceProvider=r}_delete(){const{tokenObservers:t}=l(this.app);for(const r of t)V(this.app,r.next);return Promise.resolve()}}function De(e,t){return new Ie(e,t)}function Se(e){return{getToken:t=>w(e,t),getLimitedUseToken:()=>Pe(e),addTokenListener:t=>Y(e,"INTERNAL",t),removeTokenListener:t=>V(e.app,t)}}const Ne="@firebase/app-check",xe="0.11.1",Me="https://www.google.com/recaptcha/enterprise.js";function Oe(e,t){const r=new m,n=l(e);n.reCAPTCHAState={initialized:r};const o=$e(e),i=x(!0);return i?O(e,t,i,o,r):Ke(()=>{const s=x(!0);if(!s)throw new Error("no recaptcha");O(e,t,s,o,r)}),r.promise}function O(e,t,r,n,o){r.ready(()=>{He(e,t,r,n),o.resolve(r)})}function $e(e){const t=`fire_app_check_${e.name}`,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function Be(e){C(e);const r=await l(e).reCAPTCHAState.initialized.promise;return new Promise((n,o)=>{const i=l(e).reCAPTCHAState;r.ready(()=>{n(r.execute(i.widgetId,{action:"fire_app_check"}))})})}function He(e,t,r,n){const o=r.render(n,{sitekey:t,size:"invisible",callback:()=>{l(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{l(e).reCAPTCHAState.succeeded=!1}}),i=l(e);i.reCAPTCHAState={...i.reCAPTCHAState,widgetId:o}}function Ke(e){const t=document.createElement("script");t.src=Me,t.onload=e,document.head.appendChild(t)}class I{constructor(t){this._siteKey=t,this._throttleData=null}async getToken(){var n,o,i;Fe(this._throttleData);const t=await Be(this._app).catch(s=>{throw d.create("recaptcha-error")});if(!((n=l(this._app).reCAPTCHAState)!=null&&n.succeeded))throw d.create("recaptcha-error");let r;try{r=await R(ge(this._app,t),this._heartbeatServiceProvider)}catch(s){throw(o=s.code)!=null&&o.includes("fetch-status-error")?(this._throttleData=Le(Number((i=s.customData)==null?void 0:i.httpStatus),this._throttleData),d.create("initial-throttle",{time:z(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):s}return this._throttleData=null,r}initialize(t){this._app=t,this._heartbeatServiceProvider=H(t,"heartbeat"),Oe(t,this._siteKey).catch(()=>{})}isEqual(t){return t instanceof I?this._siteKey===t._siteKey:!1}}function Le(e,t){if(e===404||e===403)return{backoffCount:1,allowRequestsAfter:Date.now()+de,httpStatus:e};{const r=t?t.backoffCount:0,n=ie(r,1e3,2);return{backoffCount:r+1,allowRequestsAfter:Date.now()+n,httpStatus:e}}}function Fe(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw d.create("throttled",{time:z(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e=ee(),t){e=Q(e);const r=H(e,"app-check");if(b().initialized||ve(),P()&&y().then(o=>console.log(`App Check debug token: ${o}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return o;throw d.create("already-initialized",{appName:e.name})}const n=r.initialize({options:t});return We(e,t.provider,t.isTokenAutoRefreshEnabled),l(e).isTokenAutoRefreshEnabled&&Y(n,"INTERNAL",()=>{}),n}function We(e,t,r=!1){const n=ce(e,{...L});n.activated=!0,n.provider=t,n.cachedTokenPromise=Ae(e).then(o=>(o&&g(o)&&(n.token=o,J(e,{token:o.token})),o)),n.isTokenAutoRefreshEnabled=r&&e.automaticDataCollectionEnabled,!e.automaticDataCollectionEnabled&&r&&f.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),n.provider.initialize(e)}async function Ue(e,t){const r=await w(e,t);if(r.error)throw r.error;if(r.internalError)throw r.internalError;return{token:r.token}}const qe="app-check",$="app-check-internal";function je(){D(new S(qe,e=>{const t=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat");return De(t,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider($).initialize()})),D(new S($,e=>{const t=e.getProvider("app-check").getImmediate();return Se(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),oe(Ne,xe)}je();const Ge="6LcYOxUtAAAAAOzoWDVg-zLGNiNsRKhVqNl6kvep";let B;async function Ye(){return B??(B=ze(se,{provider:new I(Ge),isTokenAutoRefreshEnabled:!0})),(await Ue(B)).token}export{Ye as agentAppCheckToken};
