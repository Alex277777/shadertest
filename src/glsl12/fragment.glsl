uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 
uniform float uAmplitude;

float uProgressNew;


uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;
uniform vec2 u_mouse;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

float PI=3.14159265359;


float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0,
                    .5+b*.5,
                    abs((sin(pos.x*3.1415)+b*2.0))*.5);
}

void main() {
	vec2 uv = vUv;
	vec2 uvNew = vUv - 0.7 ;

	float time = uProgress * 3.;
	float amplitude = uAmplitude ;


	vec4 col = vec4(vec2(step(0.3, mod((vUv.x ) * 10. , 1.))), 0., 1);

    vec4 colorSphere = vec4(col.x + cos (uTime), col.y + sin (uTime), 0.34, 1.0);

    gl_FragColor = colorSphere ;

}
