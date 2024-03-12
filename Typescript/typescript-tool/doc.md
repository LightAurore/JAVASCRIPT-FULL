# TYPESCRIPT
# Initialisation d'un projet Typescript
## Installation de Typescript
```cmd
→   npm install --save-dev typescript
→   npm install -D typescript
```
## Création du fichier tsconfig.json
```cmd
→   npx -t tsc --init
→   npx tsc --init 
```

# Le ficher TsConfig.json
Ce fichier permet la configuration du compilateur de **Typescript** 

## Compilation
```cmd
→   npx tsc -p .
→   npx tsc -p .\demo2.ts
→   npx tsc greeter.ts
→   ts-node demo2.ts
→   npx -p ts-node 
```

## Execution
```cmd
→   npx ts-node-dev --respawn --watch src ./src/index.ts
→   npx tsc ./src/demo.ts --outFile ./dist/demo.js
→   npx tsc ./src/index.ts --outFile ./dist/index.js
```













