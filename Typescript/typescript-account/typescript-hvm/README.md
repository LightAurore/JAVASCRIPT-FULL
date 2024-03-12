# Initialisation d'un projet Typescript
## Installation de Typescript
```cmd
npm install --save-dev typescript
```
## Création du fichier tsconfig.json
```cmd
npx -t tsc --init
```

# Le ficher TsConfig.json
Ce fichier permet la configuration du compilateur de **Typescript** 

## Compilation
```cmd
tsc -p .
```

## Execution
```cmd
ts-node-dev --respawn --watch src ./src/index.ts
```
