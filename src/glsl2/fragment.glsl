uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 


uniform float uTime;
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

	float time = uProgress * 4.;
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x , vUv.y));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x , vUv.y));

	vec4 column = columnDraw(0.0, 0.25, uv, time);

	if (time > 1.){
		column += columnDraw(0.25, 0.5, uv, time - 1.);
	}
	if (time > 2.){
		column += columnDraw(0.5, 0.75, uv, time - 2.);
	}
	if (time > 3.){
		column += columnDraw(0.75, 1., uv, time - 3.);
	}

	gl_FragColor = mix(texture2, texture1, column); 

	// gl_FragColor = column; 
}

