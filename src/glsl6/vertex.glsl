uniform float uTime;

uniform float uProgress;
uniform float uAmplitude;
uniform vec2 u_mouse;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;


	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;
	float amplitude = uAmplitude ;

	uvNew.x = uvNew.x - u_mouse.x ;
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.8, 1., vec3( 1. - atan(length(uvNew)) )), 1.);

    vec3 newPosition = vec3(position.x + circle.x * 0.6 * uvNew.x, position.y + circle.y * 0.6 * uvNew.y, position.z + circle.x * 0.3 );
    // newPosition.y = newPosition.y + (sin(uv.x *10.)) * 20.;


    // MVP
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
	gl_Position = projectedPosition;
}
