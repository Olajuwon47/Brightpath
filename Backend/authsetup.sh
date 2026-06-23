mkdir -p Auth && cd Auth

echo "Setting up Auth Service with Express + TypeScript..."

# Initialize Node.js project
npm init -y

echo "npm insialize completed and install dependency"

# Install dependencies
npm install express prisma @prisma/client bcryptjs cors dotenv jsonwebtoken redis
echo "dependency completed and installin dev depency"

# Install TypeScript and dev tools
npm install -D typescript ts-node-dev @types/node @types/express @types/bcryptjs @types/jsonwebtoken
echo "dev dependecy completed and setting up tsconfigfile.js"

# Initialize TypeScript config
tsconfig_file=$(cat <<EOF
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
EOF
)
echo "$tsconfig_file" > tsconfig.json

# Create base folders and files
echo "completed and creating floders structure"
mkdir -p src/{config,controllers,services,models,routes,utils,types,middlewares} && touch src/index.ts

echo "✅ Auth backend setup complete! Start coding inside src/index.ts"
