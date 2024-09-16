import styled from "styled-components";

export const SCLoader = styled.div`
/* HTML: <div class="loader"></div> */
.loader {
  font-weight: bold;
  font-family: monospace;
  font-size: 30px;
  display: inline-grid;
}
.loader:before,
.loader:after {
  content:"Loading...";
  grid-area: 1/1;
  -webkit-mask:linear-gradient(90deg,#000 50%,#0000 0) 0 50%/2ch 100%;
  animation: l11 1s infinite cubic-bezier(0.5,220,0.5,-220);
}
.loader:after {
  -webkit-mask-position:1ch 50%;
  --s:-1;
}
@keyframes l11 {100%{transform: translateY(calc(var(--s,1)*0.1%));}}

`