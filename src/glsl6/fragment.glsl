uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 
uniform float uAmplitude;

uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;
uniform vec2 u_mouse;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;




void main() {
	vec2 uv = vUv;
	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;
	float amplitude = uAmplitude ;

	uvNew.x = uvNew.x - u_mouse.x ;
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.8, 1., vec3( 1. - atan(length(uvNew)) )), 1.);

	vec4 displacment = texture2D( uDisplacment, vec2(uvNew.x*2.9 + 0.5 , uvNew.y*2.9+ 0.5 ));

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x + (displacment.x * 0.05 * circle.x ), vUv.y + (displacment.y * 0.05  * circle.y)  ));


	gl_FragColor =  texture1 ;
}
