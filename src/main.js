import "/src/assets/style.scss";
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import MeshItem0 from '/src/meshItems/meshItem0';
import MeshItem1 from '/src/meshItems/meshItem1';
import MeshItem2 from '/src/meshItems/meshItem2';
import MeshItem3 from '/src/meshItems/meshItem3';
import MeshItem4 from '/src/meshItems/meshItem4';


const lerp = (start, end, t) => {
    return start * (1 - t) + end * t;
};

class Sketch {
    constructor() {
        this.body = document.querySelector('body');
        this.images = [...document.querySelectorAll('.webGl')];
        
        this.scrollable = document.querySelector(".smooth-scroll");
        this.current = 0;
        this.target = 0;
        this.ease = 0.065;

        this.meshItems = [];
        this.planeItems = [];

        this.mouseCoordinates = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
        this.selectMesh = null;
        this.onMouse();
        this.onTouchMove();

        this.createScene()
        this.createCamera();
        this.createMesh();
        this.initRenderer();
       
        this.render();        
        this.addGui()
    }



    addGui(){
        const gui = new GUI()
        console.log(this.scene)
        this.scene.children.forEach(child =>{
            const cubeFolder = gui.addFolder(child.uuid)
            cubeFolder.add(child.material.uniforms.uProgress, "value").min(0).max(1);
            if (child.material?.uniforms?.uAmplitude){
                cubeFolder.add(child.material.uniforms.uAmplitude, "value").min(0).max(10);
            }
        })
    }

    onTouchMove() {
        document.addEventListener("touchmove", (event) => {
            const x = (event?.touches[0].clientX / window.innerWidth) * 2 - 1;
            const y = -(event?.touches[0].clientY / window.innerHeight) * 2 + 1;
            this.mouseCoordinates = { x, y: window.innerWidth > 450 ? y : 0. };
        })
    }

    onMouse() {
        document.addEventListener("mousemove", (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.mouseCoordinates = { x, y }
        })
    }

    smoothScroll = () => {
        this.target = window.scrollY;
        this.current = lerp(this.current, this.target, this.ease);
        this.scrollable.style.transform = `translate3d(0,${-this.current}px, 0)`;
    };

    get viewport() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = width / height;
        return { width, height, aspectRatio };
    }

    createScene() {
        this.scene = new THREE.Scene();
    }

    createCamera() {
        const perspective = 1000;
        const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;
        this.camera = new THREE.PerspectiveCamera(fov, this.viewport.aspectRatio, 1, 1000)
        
        this.camera.position.set(0, 0, perspective);
    }

    createMesh() {
        // const imagesLoaded = this.images.map((image) => {
        //     const meshItem1 = new MeshItem0(image, this.scene);
        //     this.meshItems.push(meshItem1);
        // })

        const meshItem0 = new MeshItem0(this.images[0], this.scene);
        this.meshItems.push(meshItem0);

        const meshItem1 = new MeshItem1(this.images[1], this.scene);
        this.meshItems.push(meshItem1);

        const meshItem2 = new MeshItem2(this.images[2], this.scene);
        this.meshItems.push(meshItem2);

        const meshItem3 = new MeshItem3(this.images[3], this.scene);
        this.meshItems.push(meshItem3);

        const meshItem4 = new MeshItem4(this.images[4], this.scene);
        this.meshItems.push(meshItem4);


        this.scene.traverse((item) => {
            if (item.isMesh) {
                this.planeItems.push(item);
            }
        })
    }

    onWindowResize() {
        document.body.style.height = `${this.scrollable.getBoundingClientRect().height}px`;
        this.camera.aspect = this.viewport.aspectRatio;
        this.createCamera();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.viewport.width, this.viewport.height);
    }

    initRenderer() {
        window.addEventListener('resize', this.onWindowResize.bind(this), false);
        this.renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.viewport.width, this.viewport.height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.body.appendChild(this.renderer.domElement);
    }

    render() {
        this.smoothScroll();

        this.raycaster.setFromCamera(this.mouseCoordinates, this.camera);
        const intersects = this.raycaster.intersectObjects(this.planeItems, true);
        
        if (intersects.length > 0) {
            this.selectMesh = intersects[0].object;
        } else {
            if (this.selectMesh !== null) {
                this.selectMesh = null;
            }
        }

        const velocity = (this.target - this.current);

        for (let i = 0; i < this.meshItems.length; i++) {
            this.meshItems[i].render(velocity, this.mouseCoordinates, this.selectMesh);
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch()
