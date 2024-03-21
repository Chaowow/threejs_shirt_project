import { proxy } from "valtio";

const state = proxy({
    intro: true, // Are we currently on the home page or not
    color: '#EFBD48', // Shirt and UI color
    isLogoTexture: true, // Are we currently displaying the logo on the shirt
    isFullTexture: false, // Is the texture on the shirt different than default
    logoDecal: './threejs.png', // Initial logo for shirt
    fullDecal: './threejs.png', // Initial full texture shirt decal
});

export default state;