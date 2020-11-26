import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticleComponent extends Component {
	render(){
		return (
			<Particles style={{zIndex: "-100"}}
		params={{
			"particles": {
				"number": {
					"value": 260,
					"density": {
						"enable": false
					}
				},
				"size": {
					"value": 2.5,
					"random": true,
					"anim": {
						"speed": 10,
						"size_min": 0.3
					}
				},
				"line_linked": {
					"enable": false
				},
				"move": {
					"random": true,
					"speed": 1,
					"direction": "top",
					"out_mode": "out"
				}
			},
			"interactivity": {
				"events": {
					"onhover": {
						"enable": true,
						"mode": "bubble"
					},
					"onclick": {
						"enable": true,
						"mode": "repulse"
					}
				},
				"modes": {
					"bubble": {
						"distance": 100,
						"duration": 2,
						"size": 0,
						"opacity": 0
					},
					"repulse": {
						"distance": 200,
						"duration": 4
					}
				}
			}
		}}></Particles>
		)
	}
}

export default ParticleComponent;

// export default function ParticleComponent() {
//     return (
//         <Particles style={{zIndex: -100}}
//     params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 260,
// 	            "density": {
// 	                "enable": false
// 	            }
// 	        },
// 	        "size": {
// 	            "value": 2.5,
// 	            "random": true,
// 	            "anim": {
// 	                "speed": 10,
// 	                "size_min": 0.3
// 	            }
// 	        },
// 	        "line_linked": {
// 	            "enable": false
// 	        },
// 	        "move": {
// 	            "random": true,
// 	            "speed": 1,
// 	            "direction": "top",
// 	            "out_mode": "out"
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": true,
// 	                "mode": "bubble"
// 	            },
// 	            "onclick": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        },
// 	        "modes": {
// 	            "bubble": {
// 	                "distance": 100,
// 	                "duration": 2,
// 	                "size": 0,
// 	                "opacity": 0
// 	            },
// 	            "repulse": {
// 	                "distance": 200,
// 	                "duration": 4
// 	            }
// 	        }
// 	    }
// 	}}></Particles>
//     )
// }
