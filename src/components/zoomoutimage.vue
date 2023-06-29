<template>
        <img  class="fullscreen-image" src="http://localhost/ethiogift/storage/app/image/dnq1ZUcBcTFO4XgGrbfNIloADKPGseYvYwzKqwkM.jpg" alt="">
</template>

<style>
.fullscreen-image{
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 8;
}
.fullscreen-image.show{
    display: block;
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
