import * as THREE from 'three';


export class BasicOrbit{
    constructor(scene, radiusA, radiusB, positionX, positionY){
        this.path = new THREE.Path();
        this.path.arcLengthDivisions = 2000;
        this.path.ellipse(positionX, positionY, radiusA, radiusB, 0, Math.PI / 2, false);
        this.path.ellipse(0, -radiusB, radiusA, radiusB, Math.PI / 2, Math.PI, false);
        this.path.ellipse(radiusA, 0, radiusA, radiusB, Math.PI, 3 * Math.PI / 2, false);
        this.path.ellipse(0, radiusB, radiusA, radiusB, 3 * Math.PI / 2, 2 * Math.PI, false);
        this.points = this.path.getPoints(100);
        const geometry = new THREE.BufferGeometry().setFromPoints(this.points);
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const orbit = new THREE.Line(geometry, material);
        orbit.rotateX(Math.PI/2);
        orbit.renderOrder = 1000;
        scene.add(orbit);
    }

    getPoints() {
        return this.points
    }

    getPoint(t) {
        return this.path.getPoint(t);
    }
}