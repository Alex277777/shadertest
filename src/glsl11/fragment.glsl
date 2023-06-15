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



vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(23.1,31.7)),
              dot(st,vec2(29.5,3.3)) );
    return sin(uTime)* 0.2 - 0.3 + sin(uTime)*fract(sin(st)*43758.313  );
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

void main() {
	vec2 uv = vUv;
	vec2 uvNew = vUv - 0.5 ;

	float time = uProgress * 3.;
	float amplitude = uAmplitude ;



    vec2 st = uv - u_mouse;
    st.x *= iResolution.x/iResolution.y;
    vec3 color = vec3(0.0);

    float t = 1.2;
    st += noise(st*1.616)*t; // Animate the coordinate space
    color = vec3(1.) * smoothstep(0.148,0.15,noise(st)); // Big black drops
    color += smoothstep(-0.032,-0.038,noise(st*3.448)); // Black splatter
    color -= smoothstep(.4,.4,noise(st*3.)); 

    vec4 noiceAffect = vec4(1.-color,1.0);


	uvNew.x = uvNew.x - u_mouse.x ;
	uvNew.y = uvNew.y - u_mouse.y ;

	vec4 circle = vec4( smoothstep(0.7, 0.71, vec3( 1. - atan(length(uvNew)) )), 1.);

	vec4 displacment = texture2D( uDisplacment, vec2(uvNew.x , uvNew.y ));

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y )  );
    vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y )  );


	gl_FragColor =  mix(texture1, texture2, clamp( noiceAffect * circle, 0., 1.) )   ;
}
