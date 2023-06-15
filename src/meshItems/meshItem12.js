import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import vertex from '/src/glsl12/vertex.glsl';
import fragment from '/src/glsl12/fragment.glsl';
import image1 from '/src/assets/img/project_3.jpg';
import image2 from '/src/assets/img/project_4.jpg';
import image3 from '/src/assets/img/noise4.jpg';
import { gsap } from "gsap";

const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
};

class MeshItem0 {
    constructor(element, scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0, 0);
        this.sizes = new THREE.Vector2(13., 13.);
            
        this.createMesh();
        this.clickToElement()
    }
    

    clickToElement(){
        this.element.addEventListener('click', (event)=> {
            console.log('sdds', this.uniforms)

            const tl = gsap.timeline();
            tl
            .to(this.uniforms.uAmplitude, {
                value: 6, 
                duration: 1,
                ease: "power2.out"
            })
            .to(this.uniforms.uProgress, {
                value: 1., 
                duration: 2,
                ease: "power2.out"
            })
            .to(this.uniforms.uAmplitude, {
                value: 0, 
                duration: 1,
                ease: "power2.out"
            })
          })
    }


    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
    }

    createMesh() {
        const geometry = new THREE.SphereGeometry( 0.2, 320, 160 ); 
        
        this.imageTexture1 = new THREE.TextureLoader().load(image1);
        this.imageTexture1.minFilter = THREE.LinearFilter;

        this.imageTexture2 = new THREE.TextureLoader().load(image2);
        this.imageTexture2.minFilter = THREE.LinearFilter;

        this.imageTexture3 = new THREE.TextureLoader().load(image3);
        this.imageTexture3.minFilter = THREE.LinearFilter;


        this.uniforms = {
            uTexture1: { value: this.imageTexture1 },
            uTexture2: { value: this.imageTexture2 },
            uDisplacment: { value: this.imageTexture3 },
            uOffset: { value: new THREE.Vector2(0.0, 0.0) },
            uAlpha: { value: 1.0 },
            u_mouse: { type: "v2", value: new THREE.Vector2() },
            uTime: { type: "f", value: 0.0 },
            uProgress: { value: 0. },
            uAmplitude: { value: 0. },
            iResolution: { type: "v2", value: new THREE.Vector2(602, 480) }, 
        };

        this.material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: true,
            // wireframe: true,
            side: THREE.DoubleSide
        })

        this.mesh = new THREE.Mesh(geometry, this.material);
        this.scene.add(this.mesh);
    }

    render(velocity = 0, mouseCoordinates, selectMesh) {
        this.getDimensions();
        this.mesh.position.set(this.offset.x, this.offset.y, 200.);
        this.mesh.scale.set(this.sizes.x , this.sizes.y, 900.);

        this.mesh.rotation.y +=0.004; 
        this.mesh.rotation.z +=0.002;

        this.uniforms.uOffset.value.set(this.offset.x * 0.5, -(velocity) * 0.0003);

        this.uniforms.uTime.value +=0.01;

        this.uniforms.u_mouse.value.set( mouseCoordinates.x, mouseCoordinates.y);

    }
}

export default MeshItem0
