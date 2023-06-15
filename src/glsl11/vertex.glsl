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



    vec3 newPosition = vec3(position.x , position.y , position.z  );
    // newPosition.y = newPosition.y + (sin(uv.x *10.)) * 20.;


    // MVP
    vec4 modelViewPosition = modelViewMatrix * vec4(newPosition, 1.0 );
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
	gl_Position = projectedPosition;
}
