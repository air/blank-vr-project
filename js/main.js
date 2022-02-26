const three = new Threestrap.Bootstrap();

const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff3333 }));

three.scene.add(cube);

three.camera.position.set(1, 1, 2);
three.camera.lookAt(new THREE.Vector3(0, 0, 0));

three.on('update', function () {
  cube.rotateY(0.02);
  // var t = three.Time.now;
  // three.camera.position.set(Math.cos(t), 1.5, Math.sin(t));
  // three.camera.lookAt(new THREE.Vector3());
});
