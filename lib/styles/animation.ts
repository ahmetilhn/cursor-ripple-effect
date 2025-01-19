export const injectAnimationStyle = () => {
  const styleSheet = document.createElement("style");
  styleSheet.innerHTML = `@keyframes cursorRippleAnimation {
    from {
       width: 0px;
       height: 0px;
       opacity: 0.5;
    }
   }`;
  document.body.appendChild(styleSheet);
};
