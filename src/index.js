import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"
import {MeshSurfaceSampler} from "three/examples/jsm//math/MeshSurfaceSampler"
import vertex from './glsl/vertex.glsl'
import fragment from './glsl/fragment.glsl'
import triangle from './assets/img/Star 1.png'

class Model {
    constructor(obj) {
        this.name = obj.name
        this.file = obj.file
        this.scene = obj.scene
        this.color1 = obj.color1
        this.color2 = obj.color2
        this.loader = new GLTFLoader()
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath('./draco/')
        this.loader.setDRACOLoader(this.dracoLoader)

        this.init()
    }

    init() {
        this.loader.load(this.file, (response) => {
            this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
            this.mash = response.scene.children[0]
            this.mash.material = this.material
            this.geometry = this.mash.geometry


            this.particlesMaterial = new THREE.ShaderMaterial({
                uniforms:{
                    uColor1: {value: new THREE.Color(this.color1)},
                    uColor2: {value: new THREE.Color(this.color2)},
                    u_mouse: { type: "v3", value: new THREE.Vector3() },
                },
                
                vertexShader: vertex,
                fragmentShader: fragment,
                transparent: true
            })

            console.log(this.particlesMaterial)
            const colors = [];
            const color = new THREE.Color();


            const meshGeometry = new THREE.Mesh(this.mash.children[0].geometry);
            const sampler = new MeshSurfaceSampler(meshGeometry).build();
            const numParticles = 8000;

            const palette = [new THREE.Color("#FAAD80"), new THREE.Color("#FF6767"), new THREE.Color("#fff"), new THREE.Color("#A73489")];

            this.particlesGeometry = new THREE.BufferGeometry()

            const particlesPosition = new Float32Array(numParticles * 3)

            for (let i = 0; i < numParticles; i++){
                const newPosition = new THREE.Vector3()
                sampler.sample(newPosition)
                particlesPosition.set([
                    newPosition.x,
                    newPosition.y,
                    newPosition.z
                ], i * 3)

                const color = palette[Math.floor(Math.random() * palette.length)];

                colors.push( color.r, color.g, color.b );
            }

            this.particlesGeometry.setAttribute("position", new THREE.BufferAttribute(particlesPosition, 3))
            this.particlesGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );


            const imageTexture = new THREE.TextureLoader().load(triangle);
            imageTexture.minFilter = THREE.LinearFilter;
            const materialParticles = new THREE.PointsMaterial( { 
                size: 0.6,
                map: imageTexture,
                vertexColors: true,
                transparent: true,
                depthWrite: false
            } );





            this.particles = new THREE.Points(this.particlesGeometry, materialParticles)
            this.particles.position.set( 0, -12, 0 );

            this.scene.add(this.particles)
            // console.log(this.scene)
        })
    }
}

export default Model
