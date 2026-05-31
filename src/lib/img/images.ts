// Enhanced (responsive, AVIF/WebP) image imports — processed at build time by
// @sveltejs/enhanced-img. Use with <enhanced:img src={...} />.
import australia from './Australia Awards Artificial Intelligence FB with Logo-121.jpg?enhanced';
import candid from './candid.jpg?enhanced';
import coding from './coding.jpeg?enhanced';
import graph from './computer-graph.jpg?enhanced';
import profile from './profile.png?enhanced';

export { australia, candid, coding, graph, profile };

/** Keyed lookup used by the homepage carousel slide data. */
export const imageMap = {
	'australia-awards': australia,
	candid,
	coding,
	'computer-graph': graph
};
