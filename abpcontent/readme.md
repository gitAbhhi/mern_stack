npm init -y
npm install -D tailwindcss
npx tailwindcss init
content me ["*html"] ye daalo
make src/input.css file
change @tailwind base;
@tailwind components;
@tailwind utilities;
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch