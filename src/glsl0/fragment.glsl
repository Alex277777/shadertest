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

	float time = sin(uProgress * 3.14/2.);
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y));
	vec4 masck = vec4( vec3(step((time * 3. - sin(length(vUv.x))*2. ) , mod(-vUv.x * 6., 1.))), 1);
	gl_FragColor = mix(texture2, texture1, masck); 

	gl_FragColor = mix(texture2, texture1, masck); 
}
