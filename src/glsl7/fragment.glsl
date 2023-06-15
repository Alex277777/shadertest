uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 
uniform float uAmplitude;

float uProgressNew;

uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

float random (vec2 st) {
    return fract( sin(dot(st.xy,  vec2(12.9898 , 78.233)))   * 43758.5453123 + uProgress * 2. );
}



float foo (float uProgress) {
	float uProgressNew = 0.0;
	if (uProgress > uProgressNew + 0.1 ){
		uProgressNew = uProgress;
	}
	return uProgressNew;
}


void main() {
	vec2 uv = vUv;
	vec2 uvNew = vUv;
	vec2 uvNew2 = vUv - 0.5;


    uvNew *= 20.0; 
    vec2 ipos = floor( vec2(uvNew.x + uProgress, uvNew.y) );
    vec2 fpos = fract(uvNew);
    vec4 pixels = vec4( step( 0.5, ( vec3(random( ipos )) )), 1.);

	vec4 contrastPixels = pixels;

	
	vec4 crop = vec4( smoothstep( foo(uProgress) - 0., foo(uProgress), length(uv.x)) );

	vec4 cropNeg = vec4( ( smoothstep( foo(uProgress) - 0.5, foo(uProgress), (length(uv.x)))) );

	vec4 texture1 = texture2D( uTexture1, vec2(uv.x , uv.y  ));
	vec4 texture2 = texture2D( uTexture2, vec2(uv.x , uv.y  ));



	vec4 mask = step( 0.5, (crop + contrastPixels + (1. - cropNeg)));
	vec4 mask2 = vec4(step(foo(uProgress) - 0.2, length(uv.x)));

	gl_FragColor = mix(texture1, texture2, mask * mask2) ;


}
