uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 
uniform float uAmplitude;


uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;




void main() {
	vec2 uv = vUv;
	vec2 uvNew = vUv ;

	float time = uProgress * 2.;
	float amplitude = uAmplitude ;

	vec4 circle = vec4( smoothstep(time - 0.6, time, vec3(  sin(length(uvNew)) )), 1.);

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x * ( circle.x), vUv.y * (circle.y) ));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x * (1. - circle.x), vUv.y * (1. - circle.y) ));

	gl_FragColor = mix(texture1, texture2, uProgress) ;
}
