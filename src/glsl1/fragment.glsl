uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 


uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;





void main() {
	vec2 uv = vUv;
		// слайдер 3
	vec4 displacment = texture2D(uDisplacment, vUv);
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x + displacment.x * uProgress, vUv.y + displacment.x * uProgress));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x + ( displacment.x * (1. - uProgress)) , vUv.y + ( displacment.x * (1. - uProgress)) ));
	gl_FragColor = mix(texture1, texture2, uProgress); 


}
