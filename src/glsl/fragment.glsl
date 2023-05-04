uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 


uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;





void main() {
	vec2 uv = vUv;
	// uv -= vec2(0.5);

	// uv[0] = 0.4;
	// uv[1] = 0.2;
	
	// vec2 ring = step(uProgress, vec2(length(uv)));
	// // gl_FragColor = vec4(ring, 0., 1);
	// vec4 masck2 = vec4(ring, 0., 1);
	//для слайдера
	//gl_FragColor = vec4(vec2(step(sin(uTime) + length(vUv.x), mod(vUv.x * 10., 1.))), 0., 1);

	

	//слайдер
	// float time = sin(uTime);
	// vec4 texture1 = texture2D( uTexture1, vec2(vUv.x, vUv.y));
	// vec4 texture2 = texture2D( uTexture2, vec2(vUv.x - vUv.x /6. - time/32., vUv.y));
	// vec4 masck = vec4( vec3(step((time  + length(vUv.x)) , mod(vUv.x * 6., 1.))), 1);
	// gl_FragColor = mix(texture1, texture2, masck);   


		//слайдер2

		// float p = fract(uProgress);
		// float p1 = p - 1.;
		// vec4 texture1 = texture2D( uTexture1, vec2(vUv.x + p, vUv.y) );
		// float bounds1 = step(0., 1. - (vUv.x + p)) * step(0., vUv.x/2. + p);
		// vec4 fcolor = texture1 * bounds1;
		// vec4 texture2 = texture2D( uTexture2, vec2(vUv.x + p1, vUv.y) );
		// float bounds2 = step(0., 1. - (vUv.x + p1)) * step(0., vUv.x + p1);
		// fcolor += texture2 * bounds2;
		// gl_FragColor = fcolor;   



	
		//слайдер 3
	// vec4 displacment = texture2D(uDisplacment, vec2(vUv.x, vUv.y));
	// vec4 texture1 = texture2D( uTexture1, vec2(vUv.x + displacment.x * uProgress, vUv.y + displacment.x * uProgress));
	// vec4 texture2 = texture2D( uTexture2, vec2(vUv.x + ( displacment.x * (1. - uProgress)) , vUv.y + ( displacment.x * (1. - uProgress)) ));
	// gl_FragColor = mix(texture1, texture2, uProgress); 





		//слайдер 4

	float time = sin(uTime);
	vec4 texture1 = texture2D( uTexture1, vec2(vUv.x., vUv.y));
	vec4 texture2 = texture2D( uTexture2, vec2(vUv.x - vUv.x /6. - time/32., vUv.y));
	// vec4 masck = vec4(vec3(step(0.4 , mod(vUv.x * 6., 1.))), 1);
	// vec2 uv = vPosition;

	vec3 col = vec3(0);
	vec2 p = abs(uv);

	if(p.x > 0.5) col.r += 0.8;


	// gl_FragColor = mix(texture1, texture2, masck);   
	gl_FragColor = vec4(col, 1.);   
	

}
