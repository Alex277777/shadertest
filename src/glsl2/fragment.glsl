uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 

uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;


vec4 columnDraw (float start, float end, vec2 uv, float time){
	return vec4((1. - step(time, uv.y)) * smoothstep (start, start, uv.x)) * (vec4((1. - smoothstep(end, end, uv.x))));
}

void main() {
	vec2 uv = vUv;

	float time = uProgress;
	float ease = 1. ;

	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y));

	vec4 lines = vec4( vec3( step(0.986, fract(uv.x * 10.)) ), 1.0);

	vec4 column = columnDraw(0.0, 0.1, uv, time );
	

	if (time * ease > 0.1){
		column = column + columnDraw(0.1, 0.2, uv, time * ease - 0.1);
	}
	if (time * ease > 0.2){
		column = column + columnDraw(0.2, 0.3, uv, time * ease  - 0.2);
	}
	if (time * ease > 0.3){
		column = column + columnDraw(0.3, 0.4, uv, time * ease  - 0.3);
	}
	if (time * ease > 0.4){
		column = column + columnDraw(0.4, 0.5, uv, time * ease  - 0.4);
	}
	if (time * ease > 0.5){
		column = column + columnDraw(0.5, 0.6, uv, time * ease  - 0.5);
	}
	if (time * ease > 0.6){
		column = column + columnDraw(0.6, 0.7, uv, time * ease  - 0.6);
	}
	if (time * ease > 0.7){
		column = column + columnDraw(0.7, 0.8, uv, time * ease  - 0.7);
	}
	if (time * ease > 0.8){
		column = column + columnDraw(0.8, 0.9, uv, time * ease  - 0.8);
	}
	if (time * ease > 0.9){
		column = column + columnDraw(0.9, 1.0, uv, time * ease  - 0.9);
	}

	gl_FragColor = mix(texture1, texture2, column) + lines*0.2; 

	//gl_FragColor = lines; 
}

