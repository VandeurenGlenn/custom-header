export default [
	// iife , for older browsers
  {
    input: 'src/custom-header.js',
    output: {
      file: 'custom-header.js',
      name: 'customHeader',
      format: 'iife',
      sourcemap: false
    },
    experimentalCodeSplitting: false,
    experimentalDynamicImport: false
  }
]
