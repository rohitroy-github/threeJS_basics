import React from 'react'; 
import * as THREE from 'three';

const scene = new THREE.Scene();



const App = () => {

//   const scene = new THREE.Scene();
// 			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 			const renderer = new THREE.WebGLRenderer();
// 			renderer.setSize( window.innerWidth, window.innerHeight );
// 			document.body.appendChild( renderer.domElement );

// 			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 			const cube = new THREE.Mesh( geometry, material );
// 			scene.add( cube );

// 			camera.position.z = 5;

// 			function animate()
//       {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.01;
// 				cube.rotation.y += 0.01;

// 				renderer.render( scene, camera );
// 			};

function main() {
	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({canvas});
  
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 2;
  
	const scene = new THREE.Scene();
  
	const edge = 1;
	const boxWidth = edge;
	const boxHeight = edge;
	const boxDepth = edge;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
	const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
  
	function render(time) {
	  time *= 0.001;  // convert time to seconds
  
	  cube.rotation.x = time;
	  cube.rotation.y = time;
  
	  renderer.render(scene, camera);
  
	  requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
  
  }

main()


  return (
	<canvas id='c'> 
	</canvas>
  )
}

export default App;