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



vec3 rgbShift1(sampler2D textureImage, vec2 vUv, vec2 circle, vec2 uvN, float progress, float amplitude) {
   vec3 rgb =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).rgb;
    rgb.b =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * 0.9 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).b;
    rgb.r =  texture2D( textureImage, vec2(vUv.x + progress + circle.x * 0.95 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).r; 
   return vec3(rgb);
}


vec3 rgbShift2(sampler2D textureImage, vec2 vUv, vec2 circle, vec2 uvN, float progress, float amplitude) {
   vec3 rgb = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).rgb;
    rgb.b = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * 0.9  * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).b;
    rgb.r = texture2D( textureImage, vec2(vUv.x - 1.0 + progress + circle.x * 0.95 * amplitude * uvN.x , vUv.y * 1./(1. + amplitude) + circle.y * amplitude / (1. + amplitude) ) ).r;
   return vec3(rgb);
}

void main() {
  vec2 uv = vUv;
	vec2 uvNew = vUv;

	float time = uProgress;
	float amplitude = uAmplitude / 10.;

  vec2 uvN = vec2(uv.x - 0.5 , uv.y) * -amplitude;
  vec2 circle = vec2 (length(vec2(uvNew.x - 0.5, uvNew.y)));


  vec3 color1 = rgbShift1(uTexture1, vUv, circle, uvN,  uProgress, amplitude);
	vec3 color2 = rgbShift2(uTexture2, vUv, circle,  uvN, uProgress, amplitude);

	float bonds1 = step(0.0, (uv.x + uProgress + circle.x * uvN.x * 0.6)) * step(0.0, 1. - (uv.x + uProgress + circle.x * uvN.x * 0.6));
	float bonds2 = step(1.0, (uv.x + uProgress + circle.x * uvN.x * 0.6));


  gl_FragColor = vec4(color1* bonds1 + color2* bonds2 , 1.0);
}
