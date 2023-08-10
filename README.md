# Jest-tutorials

Jest is an open-source testing framework built on JavaScript, designed majorly to work with React and React Native-based web applications.

1. Prerequisites -
    Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from the official Node.js website.
   
3. Create a project -
   If you don't already have a TypeScript project, create a new directory for your project and initialize it with npm:
   
     	npm init -y
   
5. Install Dependencies - 
   Install the necessary dependencies – TypeScript and Jest:
   
    	npm install typescript jest ts-jest @types/jest --save-dev
   
6. Configure Typescript
   Create a tsconfig.json file in the root of your project to configure TypeScript:

			{
				"compilerOptions": {
					"target": "ES6",
					"module": "CommonJS",
					"outDir": "./dist",
					"strict": true,
					"esModuleInterop": true
				},
				"include": ["src/**/*.ts"],
				"exclude": ["node_modules"]
			}
   
    Make sure to adjust the "outDir" and "include" paths according to your project structure.

7. Create source files -
   Create a directory called src in your project's root and add your TypeScript source files there.

8. Write test files -
   Create a directory called __tests__ (or any other name you prefer) in the root of your project to house your test files. Write your test files using Jest's testing
   syntax.

10. Configure Jest - 
		Create a jest.config.ts file in your project's root to configure Jest:

			import type {Config} from 'jest';

			const config: Config = {
			  preset: 'ts-jest',
			  testEnvironment: 'node',
			  roots: ['src/__tests__'],
			  transform: {
			    '^.+\\.tsx?$': 'ts-jest'
			  },
			  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
			};

			export default config

11. Install ts-node-dev -

		npm i ts-node-dev

12. Run Tests -
		Add a script to your package.json to run Jest:

			"scripts": {
			  "test": "jest"
			}

13. Write Tests - 
		Write your tests in the __tests__ directory. Test files can be named with the .test.ts or .spec.ts extension. For example, I have a file named functions.ts, so I created a test file named functions.test.ts in the __tests__ directory.

14. Run Tests - 
		Run your tests using the following npm command:

	 		npm test


