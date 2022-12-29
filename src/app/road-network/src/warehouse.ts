import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Warehouse {

  public name: any;
  public links: any;
  public position: { x: number; y: number; z: number };
  public radius: number;
  public object: THREE.Group;

  constructor(warehouse: any) {

    this.name = warehouse.name;
    this.links = warehouse.links;
    this.position = this.coordinatesToCartesian(warehouse);
    this.radius = 0.75 + this.links.length * 0.15;
    this.object = new THREE.Group();

    let geometry, material, mesh;

    // Create the main cylinder (blue) that represents the warehouse
    geometry = new THREE.CylinderGeometry(this.radius, this.radius, 0.1, 10);
    material = new THREE.MeshStandardMaterial({ color: 0x004961 });
    mesh = new THREE.Mesh(geometry, material);

    mesh.position.y += 0.1;

    mesh.receiveShadow = true;
    mesh.castShadow = true;

    this.object.add(mesh);

    // Create a slightly larger cylinder (black) to serve as a border
    geometry = new THREE.CylinderGeometry(this.radius * 1.2, this.radius * 1.2, 0.1, 10);
    material = new THREE.MeshStandardMaterial({ color: 0x000000 });
    mesh = new THREE.Mesh(geometry, material);

    mesh.receiveShadow = true;
    mesh.castShadow = true;

    this.object.add(mesh);

    // Create the label
    mesh = this.makeLabelBillboard(warehouse.name, 30);
    mesh.position.set(0, 2.5, 0);
    this.object.add(mesh);

    // Add the warehouse model
    this.createWarehouse();

    // Sets the position of the warehouse
    this.object.position.set(this.position.x, this.position.y, this.position.z);
  }

  // Converts latitude, longitude and altitude to cartesian coordinates
  coordinatesToCartesian(warehouse: any) {
    return {
      x: ((100 / (8.7613 - 8.2451)) * (warehouse.lon - 8.2451) - 50),
      y: ((50 / 800) * warehouse.alt) / 8,
      z: ((100 / (42.1115 - 40.8387)) * (warehouse.lat - 40.8387) - 50)
    };
  }

  // Creates the warehouse model
  createWarehouse() {

    const loader = new GLTFLoader();

    loader.load('/assets/models/warehouse1.gltf', (model) => {

      model.scene.traverse((node) => {
        // @ts-ignore
        if (node.isMesh) node.castShadow = true;
      });

      const mesh = model.scene;
      mesh.scale.set(this.radius / 16, this.radius / 16, this.radius / 16);
      this.object.add(mesh);
    });
  }

  // Creates a billboard with the name of the warehouse
  makeLabelBillboard(str: string, fontSize: number) {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // @ts-ignore
    context.font = fontSize + 'px Arial';
    // @ts-ignore
    context.textAlign = "center";
    // @ts-ignore
    context.textBaseline = 'middle';
    // @ts-ignore
    context.fillText(str, 150, 100);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({ map: texture });

    const sprite = new THREE.Sprite(material);
    sprite.scale.set(0.25 * fontSize, 0.125 * fontSize, 0);

    return sprite;
  }
}