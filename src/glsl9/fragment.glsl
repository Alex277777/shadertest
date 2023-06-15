uniform sampler2D uTexture1; 
uniform sampler2D uTexture2; 
uniform sampler2D uDisplacment; 
uniform float uAmplitude;


uniform float uTime;
uniform float uProgress;
uniform vec2 iResolution;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;


vec3 rgbShift1(sampler2D textureImage, vec2 uv, float offset, vec2 uvNew, float progress) {
   float noise = 0.3;
   vec3 rgb = texture2D(textureImage, vec2(uv.x + progress  - offset * uvNew.x, uv.y - offset * uvNew.y) ).rgb;
   rgb.b = texture2D(textureImage, vec2(uv.x + progress  - offset * 0.85 * uvNew.x, uv.y - offset * 0.85 * uvNew.y) ).b;
   rgb.r = texture2D(textureImage, vec2(uv.x + progress  - offset * 0.9 * uvNew.x, uv.y - offset * 0.9 * uvNew.y) ).r;
   return vec3(rgb);
}


vec3 rgbShift2(sampler2D textureImage, vec2 uv, float offset, vec2 uvNew, float progress) {
   float noise = 0.3;
   vec3 rgb = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * uvNew.x, uv.y - offset * uvNew.y) ).rgb;
   rgb.b = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * 0.85 * uvNew.x, uv.y - offset * 0.85 * uvNew.y) ).b;
   rgb.r = texture2D(textureImage, vec2(uv.x - 1.0 + progress - offset * 0.9 * uvNew.x, uv.y - offset * 0.9 * uvNew.y) ).r;
   return vec3(rgb);
}


void main() {
	vec2 uv = vUv ;
	vec2 uvNew = (vUv - 0.5);

	float time = uAmplitude * 0.1;

	vec4 circle =vec4( vec2( smoothstep(time, time + 0.5, (length (uvNew ))) ), 1., 1.) ;
	float zoom  = circle.r * time * 0.6;

	vec3 color1 = rgbShift1(uTexture1, vUv, zoom, uvNew, uProgress);
	vec3 color2 = rgbShift2(uTexture2, vUv, zoom, uvNew, uProgress);

	float bonds1 =  step(0.0,  1. - (uv.x + uProgress - zoom * uvNew.x));
	float bonds2 = step(1.0, (uv.x + uProgress - zoom *uvNew.x));

   gl_FragColor = vec4(color1* bonds1 + color2* bonds2 , 1.0);
}
