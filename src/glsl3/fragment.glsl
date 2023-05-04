uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 


uniform float uTime;
uniform float uProgress;
uniform float uAmplitude;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

vec2 columnDraw (vec2 uv){
	return vec2( uv.x,  uv.y * smoothstep(0., 1., uv.y) );
}


void main() {
	vec2 uv = vUv;
	

	float time = uProgress;
	float amplitude = uAmplitude ;

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x * (1. - sin(vUv.y * amplitude) / ((1. + vUv.x) * 10.)), vUv.y - uProgress ));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x * (1. - sin(vUv.y * amplitude) / ((1. + vUv.x) * 10.)), vUv.y - uProgress + 1. ));

	float bonds1 = step(0.0, (uv.y - uProgress)) * step(0.0, 1. - (uv.y - uProgress));
	float bonds2 = step(1.0, 1. - (uv.y - uProgress));

	gl_FragColor =  texture1 * bonds1 + texture2 * bonds2;
}
