uniform float uTime;

uniform float uProgress;
uniform float uAmplitude;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vPosition = position;
    vNormal = normal;
    vUv = uv;

	vec2 uvNew = vUv - 0.5;
	vec4 cilinder = vec4( smoothstep(0.1 , 0.6, vec3(  atan(length(uvNew)) )), 1.);


    vec3 newPosition = vec3(position.x , position.y , position.z + cilinder.x * 0.1   );
    // newPosition.y = newPosition.y + (sin(uv.x *10.)) * 20.;


    // MVP
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
	gl_Position = projectedPosition;
}
