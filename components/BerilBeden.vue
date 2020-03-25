<template>
    <span class="NuxtLogo">
        <span>
            beril beden
        </span>    
    </span>
</template>
<style>
@import '~/static/css/type.css';
@import '~/static/css/globalVariables.css';

.NuxtLogo {
  animation: 1s appear;
  font-family: var(--mainFont);
  font-size: var(--mainFontSize);
  font-weight: var(--mainFontWeight);
  font-style: var(--mainFontStyle);
  display: flex;
  justify-items: center;
  align-items: center;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
