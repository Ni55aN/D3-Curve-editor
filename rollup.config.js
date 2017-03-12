import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  dest: 'build/curve-editor.js',
  plugins: [ 
	   babel({
	  "presets": [
		[
		  "es2015",
		  {
			"modules": false
		  }
		]
	  ],
	  plugins: ['external-helpers']
})
  ],
  format: 'iife',
  moduleName: "D3CE"
};