import * as THREE from 'three';
import vertex from '/src/glsl1/vertex.glsl';
import fragment from '/src/glsl1/fragment.glsl';
import image1 from '/src/assets/img/project_1.jpg';
import image2 from '/src/assets/img/project_2.jpg';
import image3 from '/src/assets/img/project_3.jpg';
import image4 from '/src/assets/img/project_4.jpg';
import image5 from '/src/assets/img/project_5.jpg';
import displacment from '/src/assets/img/noise8.jpg';
import { gsap } from "gsap";

const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
};

class MeshItem0 {
    constructor(element, scene) {
        this.element = element;
        this.scene = scene;
        this.offset = new THREE.Vector2(0, 0);
        this.sizes = new THREE.Vector2(0, 0);

        this.next = this.element.parentElement.querySelector('.next')
        this.prev =this.element.parentElement.querySelector('.prev')
        this.images = [image1, image2, image3, image4, image5]
        this.imgsLoaded = []
        this.currentSlide = 0;


        this.createMesh();
        this.clickToElement()
    }

    clickToElement(){

        this.next.addEventListener('click', ()=>{
                if (this.isRunning) return;
                this.isRunning = true;
                let len = this.imgsLoaded.length;
                let nextTexture = this.imgsLoaded[(this.currentSlide + 1) % len];
                this.uniforms.uTexture2.value = nextTexture;

                const tl = gsap.timeline();
                tl.to(this.uniforms.uProgress, {
                  value: 1,
                  onComplete: () => {
                    this.currentSlide = (this.currentSlide + 1) % len;
                    this.uniforms.uTexture1.value = nextTexture;
                    this.uniforms.uProgress.value = 0;
                    this.isRunning = false;
                  }
                })
                                      
        });
        
        this.prev.addEventListener('click', ()=>{
                if (this.isRunning) return;
                this.isRunning = true;
                let len = this.imgsLoaded.length;
                const prevIndex = this.currentSlide === 0 ? len - 1 : this.currentSlide - 1;
                let prevTexture = this.imgsLoaded[prevIndex];
                this.uniforms.uTexture2.value = prevTexture;

                const tl = gsap.timeline();
                tl.to(this.uniforms.uProgress, {
                  value: 1,
                  onComplete: () => {
                    this.currentSlide = prevIndex;
                    this.uniforms.uTexture1.value = prevTexture;
                    this.uniforms.uProgress.value = 0;
                    this.isRunning = false;
                  }
                })
            
        });
    }


    getDimensions() {
        const { width, height, top, left } = this.element.getBoundingClientRect();
        this.sizes.set(width, height);
        this.offset.set(left - window.innerWidth / 2 + width / 2, -top + window.innerHeight / 2 - height / 2);
    }

    createMesh() {
        const geometry = new THREE.PlaneGeometry(1, 1, 10, 10);

        this.images.forEach((item) => {
            const imageTexture = new THREE.TextureLoader().load(item);
            imageTexture.minFilter = THREE.LinearFilter;
            this.imgsLoaded.push(imageTexture)
        })
        

        this.displacmentImg = new THREE.TextureLoader().load(displacment);
        this.displacmentImg.minFilter = THREE.LinearFilter;


        this.uniforms = {
            uTexture1: { value: this.imgsLoaded[this.currentSlide]},
            uTexture2: { value: this.imgsLoaded[this.nextSlide] },
            uDisplacment: { value: this.displacmentImg },
            uOffset: { value: new THREE.Vector2(0.0, 0.0) },
            uAlpha: { value: 1.0 },
            u_mouse: { type: "v2", value: new THREE.Vector2() },
            uTime: { type: "f", value: 0.0 },
            uProgress: { value: 0. },
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
        this.mesh.position.set(this.offset.x, this.offset.y, 0);
        this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

        this.uniforms.uOffset.value.set(this.offset.x * 0.5, -(velocity) * 0.0003);


     

        if (this.mesh.uuid === selectMesh?.uuid) {
            this.uniforms.u_mouse.value.x = lerp(0.0, mouseCoordinates.x, 0.6);
            this.uniforms.u_mouse.value.y = lerp(0.0, mouseCoordinates.y, 0.6);
            this.uniforms.uTime.value += 0.05;
            return;
        }
        this.uniforms.u_mouse.value.x = lerp(this.uniforms.u_mouse.value.x, 0.0, 0.02);
        this.uniforms.u_mouse.value.y = lerp(this.uniforms.u_mouse.value.y, 0.0, 0.02);
        this.uniforms.uTime.value = lerp(this.uniforms.uTime.value, 0.0, 0.02);

    }
}

export default MeshItem0
