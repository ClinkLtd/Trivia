import{i as q,s as F,p,e as T,a as B,t as n,b,w as A,o as _,r as V,c as E,_ as r,d as O,f as U,g as s,h as x,n as P,S,F as z,j as k,$ as f,k as R,l as w,m as j,y as D,q as L,u as I}from"./index.7d0178c9.js";const M=q`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;
  }

  .intro {
    text-align: center;
    color: ${F};
    font-size: 1rem;
    max-width: 195px;
    margin: 20px auto 0;
  }

  sl-button{
    position: absolute;
    bottom: 60px;
    right: 20px;
    left: 20px;
    display: block;
  }

  .setup-btn::part(base) {
    background-color: ${p};
    color: #fff;
    border: 0;
  }

  .checkbox::part(control) {
    border-radius: 50%;
    border-color: ${p};
    background-color: ${p};
    color: #fff;
  }

  li {
    list-style: none;
    padding: 20px 0;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #F5F5F5;
  }

  li label {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;var H=e=>e.strings===void 0,Y={},N=(e,t=Y)=>e._$AH=t,C=T(class extends B{constructor(e){if(super(e),e.type!==n.PROPERTY&&e.type!==n.ATTRIBUTE&&e.type!==n.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!H(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===b||t===A)return t;const c=e.element,i=e.name;if(e.type===n.PROPERTY){if(t===c[i])return b}else if(e.type===n.BOOLEAN_ATTRIBUTE){if(!!t===c.hasAttribute(i))return b}else if(e.type===n.ATTRIBUTE&&c.getAttribute(i)===t+"")return b;return N(e),t}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W=(e="value")=>(t,c)=>{const i=t.constructor,l=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(a,h,g){var y;const d=i.getPropertyOptions(e),$=typeof d.attribute=="string"?d.attribute:e;if(a===$){const u=d.converter||_,m=(typeof u=="function"?u:(y=u==null?void 0:u.fromAttribute)!=null?y:_.fromAttribute)(g,d.type);this[e]!==m&&(this[c]=m)}l.call(this,a,h,g)}},G=V`
  ${E}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,o=class extends S{constructor(){super(...arguments);this.formSubmitController=new z(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,k(this,"sl-change")}handleBlur(){this.hasFocus=!1,k(this,"sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,k(this,"sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return f`
      <label
        part="base"
        class=${R({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${w(this.name)}
          value=${w(this.value)}
          .indeterminate=${C(this.indeterminate)}
          .checked=${C(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?f`
                <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
          ${!this.checked&&this.indeterminate?f`
                <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
        </span>

        <span part="label" class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};o.styles=G;r([O('input[type="checkbox"]')],o.prototype,"input",2);r([U()],o.prototype,"hasFocus",2);r([s()],o.prototype,"name",2);r([s()],o.prototype,"value",2);r([s({type:Boolean,reflect:!0})],o.prototype,"disabled",2);r([s({type:Boolean,reflect:!0})],o.prototype,"required",2);r([s({type:Boolean,reflect:!0})],o.prototype,"checked",2);r([s({type:Boolean,reflect:!0})],o.prototype,"indeterminate",2);r([s({type:Boolean,reflect:!0})],o.prototype,"invalid",2);r([W("checked")],o.prototype,"defaultChecked",2);r([x("disabled",{waitUntilFirstUpdate:!0})],o.prototype,"handleDisabledChange",1);r([x("checked",{waitUntilFirstUpdate:!0}),x("indeterminate",{waitUntilFirstUpdate:!0})],o.prototype,"handleStateChange",1);o=r([P("sl-checkbox")],o);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,Q=(e,t,c,i)=>{for(var l=i>1?void 0:i?K(t,c):t,a=e.length-1,h;a>=0;a--)(h=e[a])&&(l=(i?h(t,c,l):h(l))||l);return i&&l&&J(t,c,l),l};let v=class extends j{constructor(){super()}render(){return D`
    <div class='container'>
    <h2 class='text-center'>Set Trivia Frequency</h2>
    <ul>
      <li>
        <label for='freq'>
          <span>Daily</span>
          <sl-checkbox name='freq' value='daily' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Weekly
          <sl-checkbox name='freq' value='weekly' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Twice a week
          <sl-checkbox name='freq' value='twice-a-week' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Monthly
          <sl-checkbox name='freq' value='monthly' class='checkbox'></sl-checkbox>
        </label>
      </li>
    </ul>
    </div>
    <sl-button class='setup-btn' variant="default" href='/set-frequency'>
      Continue
    </sl-button>
    `}};v.styles=[L,M];v=Q([I("set-frequency")],v);export{v as SetFrequency};
//# sourceMappingURL=index.0439b474.js.map
